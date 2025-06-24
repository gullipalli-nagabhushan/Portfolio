import Header from "./components/Header";
import CertificateCard from "./components/CertificateCard";
import { certificates } from "./data/portfolio"; // mocked or imported data

export default function Certificates() {
  return (
    <div className="certificates-container">
      <Header title="Certificates" showBackButton />

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="certificate-wrapper">
            <CertificateCard certificate={certificate} />
          </div>
        ))}
      </div>
    </div>
  );
}
