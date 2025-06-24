import { theme } from '../../constants/theme';
import type { Skill } from '../types/portfolio';


interface SkillCardProps {
  skill: Skill;
}
export default function SkillCard({ skill} : SkillCardProps) {
  return (
    <div style={{
      background: theme.colors.card,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.sm,
      borderRadius: 8,
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        width:40, height:40, borderRadius:20, background: theme.colors.primary+'15',
        display:'flex', alignItems:'center', justifyContent:'center', marginRight: theme.spacing.md
      }}>
        <span style={{ color: theme.colors.primary }}>{skill.name[0]}</span>
      </div>
      <div style={{ flex:1 }}>
        <strong style={{ color: theme.colors.text }}>{skill.name}</strong>
        <div style={{ fontSize:'0.9rem', color: theme.colors.textSecondary }}>{skill.category}</div>
        <div style={{ marginTop:4 }}>
          {'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}
        </div>
      </div>
    </div>
  );
}
