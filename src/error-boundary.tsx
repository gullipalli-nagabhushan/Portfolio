import React from "react";

interface Props {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const IFRAME_ID = "rork-web-preview";

const webTargetOrigins = [
  "http://localhost:3000",
  "https://rorkai.com",
  "https://rork.app",
];

function sendErrorToIframeParent(error: any, errorInfo?: any) {
  if (typeof window !== "undefined") {
    console.debug("Sending error to parent:", {
      error,
      errorInfo,
      referrer: document.referrer,
    });

    const errorMessage = {
      type: "ERROR",
      error: {
        message: error?.message || error?.toString() || "Unknown error",
        stack: error?.stack,
        componentStack: errorInfo?.componentStack,
        timestamp: new Date().toISOString(),
      },
      iframeId: IFRAME_ID,
    };

    try {
      window.parent.postMessage(
        errorMessage,
        webTargetOrigins.includes(document.referrer) ? document.referrer : "*"
      );
    } catch (postMessageError) {
      console.error("Failed to send error to parent:", postMessageError);
    }
  }
}

// Global error handlers
if (typeof window !== "undefined") {
  window.addEventListener(
    "error",
    (event) => {
      event.preventDefault();
      sendErrorToIframeParent(event.error ?? event);
    },
    true
  );

  window.addEventListener(
    "unhandledrejection",
    (event) => {
      event.preventDefault();
      sendErrorToIframeParent(event.reason);
    },
    true
  );

  const originalConsoleError = console.error;
  console.error = (...args) => {
    sendErrorToIframeParent(args.join(" "));
    originalConsoleError.apply(console, args);
  };
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    sendErrorToIframeParent(error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <div style={styles.content}>
            <h1 style={styles.title}>Something went wrong</h1>
            <p style={styles.subtitle}>{this.state.error?.message}</p>
            <p style={styles.description}>
              Please check browser console for more details.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
    maxWidth: "500px",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "0.875rem",
    color: "#777",
  },
};

export default ErrorBoundary;
