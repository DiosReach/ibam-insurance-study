// Manitoba Statutory Conditions — full set of 14 from the Insurance Act of Manitoba
// (C.C.S.M. c.I40 Part V; deemed part of every fire/property contract in the province)
// Wording paraphrased from the canonical Wawanesa SH3 05 2017 Manitoba form.

export const statutoryConditions = [
  {
    number: 1,
    title: 'Misrepresentation',
    rule:
      'If a person applying for insurance falsely describes the property to the prejudice of the insurer, or misrepresents/fraudulently omits a material circumstance, the contract is VOID as to any property in relation to which the misrepresentation or omission is material.',
    key: 'Material false statement / omission → contract VOID as to affected property.',
    trap: 'Tested wording: "statements that lead the insurer to believe the risk is BETTER than it actually is".',
    timing: null
  },
  {
    number: 2,
    title: 'Property of Others',
    rule:
      'The insurer is NOT liable for loss to property OWNED BY SOMEONE OTHER THAN THE INSURED, unless (a) specifically stated in the contract, or (b) the insured\'s interest in that property is stated.',
    key: 'Default: insurer pays only for the insured\'s own property.',
    trap: 'Bailees, landlords with tenant goods, dry cleaners — all need a specific clause or scheduled interest.',
    timing: null
  },
  {
    number: 3,
    title: 'Change of Interest',
    rule:
      'The insurer remains liable for loss occurring after an authorized assignment under the Bankruptcy and Insolvency Act, or a change of title by SUCCESSION, by OPERATION OF LAW, or by DEATH.',
    key: 'Coverage continues across bankruptcy, inheritance, and death — no need to re-apply.',
    trap: 'This is NOT a voluntary sale of the property — those still require notice.',
    timing: null
  },
  {
    number: 4,
    title: 'Material Change in Risk',
    rule:
      'The insured MUST give PROMPT WRITTEN notice of any change that is material to the risk and within the insured\'s control. If not, the contract is VOID as to the part affected. If notified, the insurer may terminate, OR demand additional premium within 15 days.',
    key: 'No notice = void affected portion. Notice = insurer may terminate or charge extra.',
    trap: 'Insurer DOES typically demand additional premium — the answer that says "insurer rarely charges extra" is FALSE.',
    timing: '15 days for the insured to pay any demanded extra premium.'
  },
  {
    number: 5,
    title: 'Termination of Insurance',
    rule:
      'The contract may be terminated (a) by the INSURER giving 15 days\' notice by registered mail OR 5 days\' personal delivery, or (b) by the INSURED at any time on request. Insurer cancellation → PRO-RATA refund. Insured cancellation → SHORT-RATE refund.',
    key: '15 / 5 / pro-rata / short-rate — memorize this set.',
    trap: '"Insured not entitled to a refund" is FALSE — short-rate refund applies.',
    timing: '15 days registered mail OR 5 days personal delivery (insurer-initiated).'
  },
  {
    number: 6,
    title: 'Requirements After Loss',
    rule:
      'Insured must immediately give WRITTEN NOTICE, then deliver a PROOF OF LOSS as soon as practicable: inventory, when/how loss occurred, statement that loss was not wilful, other insurances, the insured\'s interest, changes in title/use/location, and where the property was at the time of loss.',
    key: 'Notice = immediate. Proof of Loss = as soon as practicable, sworn by statutory declaration.',
    trap: 'Failure to file may invalidate the claim, even if the loss itself is covered.',
    timing: 'Notice: forthwith. Proof of loss: as soon as practicable (historically 90 days).'
  },
  {
    number: 7,
    title: 'Fraud',
    rule:
      'Any fraud or wilfully false statement in a statutory declaration relating to the particulars required under SC 6 INVALIDATES the entire claim of the person who made the declaration.',
    key: 'Inflate one item → lose the whole claim.',
    trap: 'Even an item you ACTUALLY OWN but exaggerate in value can void the claim.',
    timing: null
  },
  {
    number: 8,
    title: 'Who May Give Notice and Proof',
    rule:
      'Notice and proof of loss may be given by the INSURED\'S AGENT if the insured is absent or unable (with that absence/inability satisfactorily explained), OR by a person to whom any part of the insurance money is payable if the insured refuses.',
    key: 'Agents and payees may file when the insured cannot or will not.',
    trap: 'This applies only when the insured is genuinely absent/unable — not just busy.',
    timing: null
  },
  {
    number: 9,
    title: 'Salvage',
    rule:
      'The insured must take ALL REASONABLE STEPS to prevent further loss and protect insured property. The insurer must contribute PRO-RATA to those reasonable expenses.',
    key: 'Mitigation is a duty. Insurer pays its share of mitigation costs.',
    trap: '"Failure to protect property doesn\'t affect settlement" is FALSE — it can.',
    timing: null
  },
  {
    number: 10,
    title: 'Entry, Control, Abandonment',
    rule:
      'After loss, the insurer has IMMEDIATE right of access to investigate. After the insured secures the property, further inspections are allowed. The insurer cannot take CONTROL without the insured\'s consent, and the insured cannot ABANDON property to the insurer without the insurer\'s consent.',
    key: 'Insurer can ENTER, but cannot take CONTROL or accept ABANDONMENT without consent.',
    trap: 'Both sides need consent for control or abandonment.',
    timing: null
  },
  {
    number: 11,
    title: 'In Case of Disagreement',
    rule:
      'Disagreements over value, repair adequacy, or amount of loss are resolved using the dispute-resolution process in the Insurance Act — independently of all other issues. The right to dispute resolution exists only after (a) a specific written demand AND (b) delivery of proof of loss.',
    key: 'Both — written demand AND proof of loss must be on file first.',
    trap: 'The dispute resolution proceeds INDEPENDENTLY of whether the insurer denies coverage.',
    timing: null
  },
  {
    number: 12,
    title: 'When Loss Payable',
    rule:
      'Unless the contract specifies a shorter period, the loss is payable within 60 DAYS after the proof of loss is completed and delivered to the insurer.',
    key: '60 days from completed proof of loss.',
    trap: 'The countdown begins from the COMPLETED proof of loss — not from notice of loss.',
    timing: '60 days after completed proof of loss.'
  },
  {
    number: 13,
    title: 'Repair or Replacement',
    rule:
      'Unless dispute resolution has been initiated, the insurer may elect to REPAIR, REBUILD, or REPLACE the lost/damaged property by giving WRITTEN NOTICE within 30 DAYS of receiving proof of loss; the insurer must then BEGIN the work within 45 DAYS and complete it with due diligence.',
    key: 'Insurer notice: 30 days. Begin work: 45 days. Both from proof of loss.',
    trap: 'Election notice must be in WRITING.',
    timing: 'Notice 30 days / Start work 45 days, both from proof of loss.'
  },
  {
    number: 14,
    title: 'Notice',
    rule:
      'Written notice TO the insurer goes to its CHIEF AGENCY or HEAD OFFICE in the province (delivered or by registered mail). Written notice TO the insured goes to the last known address provided to the insurer.',
    key: 'Insurer: chief/head office in the province. Insured: last known address.',
    trap: 'Notice to the BROKER is NOT notice to the insurer.',
    timing: null
  }
]
