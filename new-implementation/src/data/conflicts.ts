import { Conflict } from '../types';

export const conflicts: Conflict[] = [
  {
    id: 1,
    title: "Intern Finances & Communication",
    keyDates: ["2024-09-12", "2024-12-06", "2024-12-16", "2025-02-05"],
    summary: `
      <h3>Intern Finances (Fortune) & Communication Styles (Sept '24 - Dec '24)</h3>
      <p><strong>Description:</strong> Disagreement over whether intern Fortune had sufficient funds due to stipend payout method, escalating into accusations about financial responsibility and communication styles.</p>
      <p><strong>Domasan PL's View:</strong> Believed intern faced hardship (€50 left after expenses), felt Stephan lacked human consideration/communication, later emphasized intern's shyness and difficult circumstances (broken phone).</p>
      <p><strong>Stephan rakke's View:</strong> Followed procedure based on intern's non-response, felt unfairly accused of wrongdoing (embezzlement), emphasized financial accuracy and procedure, provided evidence of payout amount (€350), stated intern spending is outside LC responsibility.</p>
      <p><strong>Dawg's Insights:</strong> Acknowledged hardship concern, tried de-escalation, noted communication breakdown, stressed need for clear policy vs. personal bias.</p>
    `,
    color: "conflict-1" // Orange
  },
  {
    id: 2,
    title: "Intern Deposit Advance",
    keyDates: ["2024-09-18", "2024-09-19", "2024-09-20", "2024-09-21", "2024-09-25", "2024-11-10", "2025-01-27", "2025-01-30", "2025-03-30", "2025-03-31", "2025-04-01"],
    summary: `
      <h3>Intern Deposit Handling (Siham/Lucia, Geysa, Mohamed) & Trust (Sept '24 - Apr '25)</h3>
      <p><strong>Description:</strong> Recurring conflicts over handling intern security deposits, involving timing (advance payout vs. waiting for landlord return), risk, trust, communication, and differing views on standard procedure.</p>
      <p><strong>Domasan PL's View:</strong> Emphasized interns' immediate needs (travel money, banking issues), felt pressured, sometimes advanced funds (claiming consultation/necessity), felt blamed for issues, highlighted lack of clear/timely communication from Stephan on procedure.</p>
      <p><strong>Stephan rakke's View:</strong> Stressed LC can't return funds not yet received, procedure (contract/inspection) is key, early payout is risky, stated standard procedure involves landlord/intern direct handling where possible, communicated this but felt ignored or communication was unclear.</p>
      <p><strong>Dawg's Insights:</strong> Acknowledged validity of both sides, suggested inspection (Protokoll) to mitigate risk, expressed frustration at recurring issue.</p>
    `,
    color: "conflict-2" // Crimson
  },
  {
    id: 3,
    title: "Expense Refund Dispute",
    keyDates: ["2024-10-23", "2024-10-24", "2024-10-25", "2024-11-01", "2024-11-05", "2024-11-10", "2024-11-15"],
    summary: `
      <h3>Expense Refund Dispute (Oct '24 - Nov '24)</h3>
      <p><strong>Description:</strong> Stephan delayed/denied refunding Domasan PL for small expenses (conference gift, intern fish sandwiches, JYSK supplies, sponges), citing lack of prior approval, unresolved personal conflict, and questioning LC benefit.</p>
      <p><strong>Domasan PL's View:</strong> Felt expenses were reasonable/necessary, believed refusal was personal, cited precedent of similar expenses being approved, felt unfairly treated, emphasized small amounts involved.</p>
      <p><strong>Stephan rakke's View:</strong> Emphasized need for prior approval, questioned benefit to LC, cited personal conflict as reason for caution, stressed financial responsibility, noted some expenses were eventually approved after clarification.</p>
      <p><strong>Dawg's Insights:</strong> Noted both procedural and personal elements, suggested clearer expense policy, observed pattern of communication breakdown.</p>
    `,
    color: "conflict-3" // LightSeaGreen
  },
  {
    id: 4,
    title: "Cabinet Access Dispute",
    keyDates: ["2024-11-20", "2024-11-21", "2024-11-22", "2024-11-25", "2024-12-01"],
    summary: `
      <h3>Cabinet Access Dispute (Nov '24 - Dec '24)</h3>
      <p><strong>Description:</strong> Domasan PL demanded access to shared IAESTE cabinet controlled by Stephan, who restricted access citing personal items stored within and unresolved conflict.</p>
      <p><strong>Domasan PL's View:</strong> Believed cabinet should be accessible to all board members, felt exclusion was personal/power-related, emphasized need for access to LC materials, questioned right to restrict shared resources.</p>
      <p><strong>Stephan rakke's View:</strong> Cited personal items in cabinet requiring protection, offered supervised access or removal of specific items when needed, felt uncomfortable with unrestricted access during unresolved conflict.</p>
      <p><strong>Dawg's Insights:</strong> Noted issue symbolized deeper trust breakdown, suggested inventory and separation of personal/LC items, recommended neutral third-party involvement.</p>
    `,
    color: "conflict-4" // MediumPurple
  }
];