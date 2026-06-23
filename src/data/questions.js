// 40-question Manitoba-specific exam pool
// Style and content modeled on the official IBAS/IBAM Fundamentals of Insurance Practice Exam
// and the IBAM FOI course (Insurance Brokers Association of Manitoba).
// Manitoba content verified against:
//   • Insurance Act of Manitoba (Statutory Conditions 1-14)
//   • MPI 2026 Guide to Autopac (effective April 1, 2026)
//   • Insurance Council of Manitoba (ICM) licensing structure

export const questionPool = [
  // ─── Foundations / Risk ────────────────────────────────────────────────
  {
    id: 1,
    category: 'Foundations',
    question: 'Insurance plays an important role in managing financial risk. The main purpose of insurance is to:',
    options: [
      'Enable the consumer to obtain a loan or a mortgage.',
      'Provide employment and investment capital.',
      'Allow the spread of risk.',
      'Reduce losses through loss prevention and loss reduction.'
    ],
    answer: 2,
    explanation:
      'The fundamental purpose of insurance is the SPREAD OF RISK across many similar exposures, so the few who suffer loss are compensated by the premiums of the many. Loss reduction is a byproduct, not the main purpose.'
  },
  {
    id: 2,
    category: 'Foundations',
    question: 'Risk as the "chance of financial loss" can be classified as either speculative or pure. Pure risk BEST means:',
    options: [
      'There is no chance of financial loss.',
      'There is a chance of financial gain.',
      'Financial loss and financial gain are both present.',
      'There is only the chance of financial loss with no chance of profiting from it.'
    ],
    answer: 3,
    explanation:
      'Pure risk = loss OR no loss only. No profit possible. This is the only kind of risk that is insurable.'
  },
  {
    id: 3,
    category: 'Foundations',
    question: 'When dealing with financial risk, which option is BEST for most individual consumers?',
    options: [
      'Avoidance of risk.',
      'Retention of the risk.',
      'Controlling the risk.',
      'Transfer of the risk.'
    ],
    answer: 3,
    explanation:
      'Most individuals cannot afford to retain catastrophic losses and cannot fully avoid or control them. Transfer (insurance) is the practical solution.'
  },
  {
    id: 4,
    category: 'Foundations',
    question: 'When checking an applicant\'s prior claims history or financial condition, the underwriter is primarily looking for the existence of:',
    options: [
      'Other parties with an insurable interest.',
      'Abnormal physical hazards.',
      'A moral hazard.',
      'Smoking material on the premises.'
    ],
    answer: 2,
    explanation:
      'Claims history and credit checks reveal MORAL hazard (intentional dishonesty, fraud tendencies), not physical hazards which require an inspection.'
  },

  // ─── Contract Law / Insurance Act ─────────────────────────────────────
  {
    id: 5,
    category: 'Contract Law',
    question: 'A contract is legally enforceable only when all legal elements are present. Which element is found ONLY in an insurance contract?',
    options: ['Genuine intention', 'Legality of the object', 'Consideration', 'Indemnity'],
    answer: 3,
    explanation:
      'All contracts require offer/acceptance, consideration, capacity, legal purpose, and genuine intent. Only INSURANCE contracts require indemnity — payment limited to actual loss.'
  },
  {
    id: 6,
    category: 'Contract Law',
    question: '"Consideration" is required of all parties to a contract. Consideration means:',
    options: [
      'Thinking about purchasing insurance.',
      'An agreement by the insurer to treat the insured fairly.',
      'An exchange of something of value between the parties.',
      'A commitment by the broker to represent an insurance company.'
    ],
    answer: 2,
    explanation:
      'Consideration is the exchange of value: the insured pays premium and the insurer promises to pay covered losses.'
  },
  {
    id: 7,
    category: 'Contract Law',
    question: 'Insurance brokers are often asked to provide a binder. A binder is:',
    options: [
      'When the insurer has agreed to issue a policy.',
      'A cover for an insurance manual.',
      'When a broker has committed an insurer to a contract of insurance on a risk.',
      'Never legal when it was given orally.'
    ],
    answer: 2,
    explanation:
      'A binder is the temporary contract created the moment a broker commits the insurer to a risk — can be oral or written.'
  },
  {
    id: 8,
    category: 'Contract Law',
    question: 'Both insurance companies and brokers are considered fiduciaries. Under the Insurance Act, the fiduciary responsibility of a broker requires that:',
    options: [
      'The broker must regularly remit the collected premiums to the insurers.',
      'All policies not paid for within 60 days must be terminated.',
      'Unearned commissions are held in trust until the policy expires.',
      'The full amount of commission must be held in trust until the expiry of the policy.'
    ],
    answer: 0,
    explanation:
      'The core fiduciary duty under the Insurance Act is the regular remittance of collected premium money to the insurer.'
  },
  {
    id: 9,
    category: 'Contract Law',
    question: 'Under the Insurance Act of Manitoba, when does coverage commence under a new contract of insurance?',
    options: [
      '12:01 pm standard time at the address of the Named Insured.',
      '12:01 am standard time at the address of the location of the risk.',
      '12:01 am standard time at the address of the insurer.',
      '12:01 am standard time at the address of the Named Insured.'
    ],
    answer: 3,
    explanation:
      'Coverage starts at 12:01 a.m. standard time at the address of the NAMED INSURED — not the risk location and not the insurer.'
  },

  // ─── Manitoba Statutory Conditions ────────────────────────────────────
  {
    id: 10,
    category: 'Manitoba Statutory Conditions',
    question: 'Under Statutory Condition 1 — Misrepresentation, which statement is CORRECT?',
    options: [
      'Any description of the property that proves to be incorrect constitutes a misrepresentation.',
      'Withholding information about previous cancellations is not a misrepresentation.',
      'Statements that lead the insurer to believe the risk is better than it actually is are considered misrepresentation.',
      'A misrepresentation has no effect on coverage, even if the insurer can prove it.'
    ],
    answer: 2,
    explanation:
      'Misrepresentation requires the statement to be MATERIAL and to mislead the insurer about the risk — making the risk look better than it is is the textbook example.'
  },
  {
    id: 11,
    category: 'Manitoba Statutory Conditions',
    question: 'When the INSURER cancels an insurance policy mid-term in Manitoba, notice must be given by:',
    options: [
      '5 days written notice by registered mail.',
      '15 days written notice by registered mail OR 5 days personal delivery.',
      '30 days written notice by ordinary mail.',
      'No advance notice — cancellation is immediate.'
    ],
    answer: 1,
    explanation:
      'Statutory Condition 5 requires the insurer to give 15 days\' notice by registered mail OR 5 days personal delivery. The insured may cancel at any time on request.'
  },
  {
    id: 12,
    category: 'Manitoba Statutory Conditions',
    question: 'When the INSURED cancels mid-term, the premium refund is calculated on:',
    options: [
      'A pro-rata basis with no penalty.',
      'A short-rate basis with an administrative penalty.',
      'No refund — the full premium is forfeited.',
      'A flat 50% of unearned premium.'
    ],
    answer: 1,
    explanation:
      'Insured cancellation = SHORT-RATE refund (with administrative penalty). Insurer cancellation = PRO-RATA refund (no penalty).'
  },
  {
    id: 13,
    category: 'Manitoba Statutory Conditions',
    question: 'Under Statutory Condition 12, unless the contract specifies a shorter period, the loss is payable within:',
    options: [
      '30 days after notice of loss.',
      '45 days after the loss occurred.',
      '60 days after the proof of loss is completed and delivered.',
      '90 days after the loss occurred.'
    ],
    answer: 2,
    explanation:
      'SC 12: Loss payable within 60 days of completed and delivered proof of loss (unless the contract provides for a shorter period).'
  },
  {
    id: 14,
    category: 'Manitoba Statutory Conditions',
    question: 'Under Statutory Condition 13 — Repair or Replacement, the insurer must give written notice of its election to repair/rebuild/replace within ___ of receiving the proof of loss and must begin work within ___.',
    options: [
      '15 days / 30 days',
      '30 days / 45 days',
      '45 days / 60 days',
      '60 days / 90 days'
    ],
    answer: 1,
    explanation:
      'SC 13: Notice of election within 30 days of proof of loss; work must begin within 45 days.'
  },
  {
    id: 15,
    category: 'Manitoba Statutory Conditions',
    question: 'All of the following statements about Statutory Conditions are true EXCEPT:',
    options: [
      'When a loss is caused by an unreported material change, the insurer may deny the claim.',
      'An agent of the insured may file proof of loss if the insured is absent or unable.',
      'After loss, the insurer has the immediate right of entry to investigate.',
      'Even when an insured had a chance to protect property but did nothing, this usually does not affect the claim.'
    ],
    answer: 3,
    explanation:
      'SC 9 — Salvage — requires the insured to take reasonable steps to prevent further damage. Failure to do so CAN affect the settlement.'
  },
  {
    id: 16,
    category: 'Manitoba Statutory Conditions',
    question: 'The Manitoba Insurance Act states that a policy insuring the peril of FIRE must also include coverage for:',
    options: [
      'Windstorm and lightning.',
      'Lightning, including damage to electrical appliances and devices.',
      'Lightning and all types of explosion.',
      'Explosion of natural, coal, or manufactured gas, and lightning, EXCLUDING damage to electrical appliances and devices.'
    ],
    answer: 3,
    explanation:
      'Fire coverage in Manitoba automatically extends to lightning and to gas explosions (natural, coal, manufactured) — but specifically EXCLUDES damage to electrical appliances and devices.'
  },

  // ─── Indemnity Principles ─────────────────────────────────────────────
  {
    id: 17,
    category: 'Indemnity',
    question: 'When an insurer has indemnified the insured for a loss caused by a third party, the insurer\'s legal right of recovery from that party is called:',
    options: ['Arbitration', 'Restitution', 'Subrogation', 'Mediation'],
    answer: 2,
    explanation:
      'Subrogation — the insurer steps into the shoes of the insured to recover the paid amount from the at-fault third party.'
  },
  {
    id: 18,
    category: 'Indemnity',
    question: 'The Indemnity Agreement describes how the amount of a loss settlement is determined. Which of the following is NOT a factor?',
    options: [
      'Replacement cost of the lost or damaged property less depreciation.',
      'The financial interest of the insured in the property.',
      'The future investment value of the property.',
      'The amount of insurance purchased on the property.'
    ],
    answer: 2,
    explanation:
      'Indemnity considers ACV/RC, the insured\'s interest, and the policy limit. FUTURE investment value is never a factor.'
  },
  {
    id: 19,
    category: 'Indemnity',
    question: 'A fire totally destroys your client\'s building. ACV = $400,000. Mortgage owing = $200,000. The building is insured for $350,000. Based on the Indemnity Agreement, the settlement is:',
    options: ['$400,000', '$200,000', '$350,000', '$150,000'],
    answer: 2,
    explanation:
      'Settlement = LESSER of (Amount of insurance, ACV, Insured\'s interest). Insured\'s interest = full $400K (owner with mortgage). Lesser of $350K, $400K, $400K = $350,000.'
  },
  {
    id: 20,
    category: 'Indemnity',
    question: 'Actual Cash Value (ACV) means:',
    options: [
      'The value of property at the time it was purchased.',
      'The resale value of the property.',
      'Replacement cost less depreciation.',
      'Replacement cost less the insured\'s sentimental value.'
    ],
    answer: 2,
    explanation:
      'ACV = Replacement Cost − Depreciation. Sentimental value is never a factor in insurance settlements.'
  },
  {
    id: 21,
    category: 'Indemnity',
    question: 'Your client lost a matching gold necklace, pendant, and earrings during a burglary. She finds one earring under the bed but claims the full set value. How will the insurer settle?',
    options: [
      'Pay the full value of the set.',
      'Pay the value of the necklace and one earring plus 10%.',
      'Pay the value claimed LESS the value of the recovered earring.',
      'Pay nothing — the claim is fraudulent.'
    ],
    answer: 2,
    explanation:
      'The PAIR AND SET CLAUSE: settlement = total claimed value MINUS value of the recovered item. The claim is honest, just adjusted for what was found.'
  },

  // ─── Property — Homeowners & Forms ────────────────────────────────────
  {
    id: 22,
    category: 'Property',
    question: 'Under the Homeowners COMPREHENSIVE Form (IBC 1155), which loss IS covered?',
    options: [
      'Damage to the roof caused by raccoons trying to enter the attic.',
      'Crack in the foundation wall due to settling over time.',
      'Wear and tear of furniture upholstery from continuous use.',
      'Smoke damage to family room from the fireplace.'
    ],
    answer: 0,
    explanation:
      'Under the Comprehensive (all-risk) form, damage by WILD animals to the building IS covered. The other three (settling, wear & tear, fireplace smoke) are standard exclusions.'
  },
  {
    id: 23,
    category: 'Property',
    question: 'Under Coverage B — Detached Private Structures of a Homeowners policy, the limit of insurance is:',
    options: [
      '10% of Coverage A, INCLUDED in the Coverage A limit.',
      '10% of Coverage A, IN ADDITION to the Coverage A limit.',
      '5% of Coverage A, included in the Coverage A limit.',
      '20% of Coverage A, in addition to the Coverage A limit.'
    ],
    answer: 1,
    explanation:
      'Coverage B is 10% of Coverage A, and IS IN ADDITION to it — not part of it.'
  },
  {
    id: 24,
    category: 'Property',
    question: 'Coverage D — Additional Living Expense pays additional living costs after a covered loss. Which expense is NOT covered?',
    options: [
      'Cost of hotel accommodation.',
      'Loss of rental income from the tenant in the basement suite (occupancy on policy).',
      'Mortgage payments to the bank until the insured is able to return home.',
      'Cost to keep the insured\'s dog in a kennel because the hotel does not allow pets.'
    ],
    answer: 2,
    explanation:
      'Mortgage payments are CONTINUING expenses (paid whether or not the insured lives at home) — they are not "additional" living expenses.'
  },
  {
    id: 25,
    category: 'Property',
    question: 'Which of the following persons is NOT an "insured" under a standard Homeowners policy?',
    options: [
      'The insured\'s common-law spouse of five years.',
      'The insured\'s parents permanently living with the insured.',
      'The insured\'s daughter living in a university dorm in another province.',
      'The tenant who occupies the basement suite in the insured\'s dwelling.'
    ],
    answer: 3,
    explanation:
      'A tenant is a separate party — not an insured under the landlord\'s homeowner policy. Spouse, common-law partner, dependent relatives, and students away at school ARE insureds.'
  },
  {
    id: 26,
    category: 'Property',
    question: 'Of the following stolen items, which is subject to a SPECIAL LIMIT under most Homeowners policies?',
    options: [
      'A digital camera purchased two years ago.',
      'The insured\'s son\'s computer used for homework and gaming.',
      'The insured\'s home stereo and speakers.',
      'A laptop computer used by the insured for personal AND business purposes.'
    ],
    answer: 3,
    explanation:
      'BUSINESS property on the premises is subject to a special low limit. A laptop used for business is restricted; ordinary personal items are not.'
  },

  // ─── Commercial / Co-insurance ────────────────────────────────────────
  {
    id: 27,
    category: 'Commercial',
    question: 'A fire damages your client\'s building. Loss = $50,000. Building value = $500,000. Insurance carried = $300,000. Co-insurance requirement = 80%. How much of the loss does the INSURED ABSORB?',
    options: ['$37,500', '$50,000', '$12,500', '$25,000'],
    answer: 2,
    explanation:
      'Required = $500,000 × 80% = $400,000. Insurer pays (300,000 / 400,000) × 50,000 = $37,500. Insured absorbs $50,000 − $37,500 = $12,500.'
  },
  {
    id: 28,
    category: 'Commercial',
    question: 'The Commercial Property Broad Form (IBC 4037) covers many perils. Which of the following is NOT covered?',
    options: [
      'Smoke damage (other than from agricultural smudging or industrial operations).',
      'Vehicle impact damage to a building, even when driven by the insured or an employee.',
      'Theft of money from a cash register.',
      'Water damage from a ruptured or frozen pipe.'
    ],
    answer: 2,
    explanation:
      'Theft of MONEY/SECURITIES is excluded from property policies — it requires separate Crime / Burglary / Money & Securities coverage.'
  },
  {
    id: 29,
    category: 'Commercial',
    question: 'Business Interruption insurance is intended to indemnify the insured for loss of income after a covered property loss. Which of the following is NOT a characteristic?',
    options: [
      'It is designed to indemnify the insured for loss of income and profit.',
      'It is triggered by a loss covered under the insured\'s property policy.',
      'Payment is not restricted to the expiry of the policy.',
      'It pays the cost to order new equipment and supplies to restart the business.'
    ],
    answer: 3,
    explanation:
      'Replacement of damaged equipment is paid by the PROPERTY policy, not Business Interruption. BI pays for lost income and continuing expenses while operations are halted.'
  },
  {
    id: 30,
    category: 'Commercial',
    question: 'Your retail-tenant client is installing floor covering, wall paneling, light fixtures, and a wired security system in her leased shopping-mall unit. As her broker you advise that these tenant\'s improvements should be:',
    options: [
      'Insured under the landlord\'s building insurance — they are part of the building.',
      'Insured as BUILDING coverage within HER OWN property policy.',
      'Insured by including their value in her equipment coverage.',
      'Left uninsured — the landlord\'s policy will respond.'
    ],
    answer: 1,
    explanation:
      'Tenant\'s improvements and betterments are insured under the TENANT\'S own property policy, as BUILDING coverage.'
  },

  // ─── Liability / Torts ────────────────────────────────────────────────
  {
    id: 31,
    category: 'Liability',
    question: 'In a tort action, which of the following is NOT an element the plaintiff must prove?',
    options: [
      'The defendant owed a MORAL duty of care.',
      'The defendant owed a LEGAL duty of care.',
      'The defendant breached the legal duty of care.',
      'Damages were the proximate result of the defendant\'s action.'
    ],
    answer: 0,
    explanation:
      'Negligence requires a LEGAL duty of care, not merely a moral one. The other three elements are the breach, damages, and proximate cause.'
  },
  {
    id: 32,
    category: 'Liability',
    question: 'Liability policies are typically written on an OCCURRENCE basis. Which statement is INCORRECT?',
    options: [
      'The policy covers bodily injury or property damage resulting from an accident.',
      'The policy covers exposure to a harmful condition over a long period.',
      'The amount of insurance is available for EACH occurrence during the policy period.',
      'The amount of insurance is the maximum payable for ALL occurrences combined during the policy period.'
    ],
    answer: 3,
    explanation:
      'On an OCCURRENCE basis the limit applies PER occurrence, available for each occurrence in the period (subject to any annual aggregate). The choice that says one combined limit for all occurrences is incorrect.'
  },
  {
    id: 33,
    category: 'Liability',
    question: 'A customer breaks a tooth on a chicken bone in a pizza topping from your client\'s restaurant. Which CGL coverage responds?',
    options: [
      'Premises and Operations Liability',
      'Personal Injury Liability',
      'Products Liability',
      'Completed Operations Liability'
    ],
    answer: 2,
    explanation:
      'A defective product (the pizza) that caused bodily injury AFTER leaving the insured\'s control is paid under PRODUCTS Liability.'
  },
  {
    id: 34,
    category: 'Liability',
    question: 'Which of the following is NOT a "Personal Injury" claim in insurance terms?',
    options: [
      'A customer breaks her hip when a display chair collapses.',
      'A tenant sues the landlord for wrongful entry into the apartment.',
      'A customer is wrongfully detained on suspicion of shoplifting (false arrest).',
      'A competitor sues for slanderous remarks about his business practices.'
    ],
    answer: 0,
    explanation:
      'The broken hip is BODILY injury — not "Personal Injury" in CGL terms. Personal Injury covers libel, slander, false arrest, wrongful entry, invasion of privacy.'
  },
  {
    id: 35,
    category: 'Liability',
    question: 'Which professional needs MALPRACTICE insurance (not E&O)?',
    options: [
      'An insurance broker',
      'A medical doctor',
      'An accountant',
      'A real-estate agent'
    ],
    answer: 1,
    explanation:
      'Doctors and similar medical professionals carry MALPRACTICE coverage. E&O is the term used for brokers, agents, accountants, and other non-medical professionals.'
  },

  // ─── MPI / Autopac (Manitoba-specific) ────────────────────────────────
  {
    id: 36,
    category: 'MPI / Autopac',
    question: 'Basic Autopac (effective April 1, 2026) includes three coverages: Personal Injury Protection Plan (PIPP), All-Perils for the registered vehicle, and Third-Party Liability. The default third-party liability limit is:',
    options: ['$200,000', '$500,000', '$1,000,000', '$2,000,000'],
    answer: 1,
    explanation:
      'Basic Autopac includes $500,000 of third-party liability. Drivers can buy Extension coverage up to $10 million; higher amounts require Special Risk Extension.'
  },
  {
    id: 37,
    category: 'MPI / Autopac',
    question: 'Effective April 1, 2026, the default Basic Autopac all-perils deductible is:',
    options: ['$500', '$750', '$1,000', '$1,500'],
    answer: 2,
    explanation:
      'For policies effective April 1, 2026 and after, the basic deductible was raised from $750 to $1,000. Lower deductibles can be purchased through Extension.'
  },
  {
    id: 38,
    category: 'MPI / Autopac',
    question: 'Manitoba\'s Personal Injury Protection Plan (PIPP) is BEST described as:',
    options: [
      'A tort-based system requiring proof of fault.',
      'A no-fault scheme paying bodily-injury benefits regardless of who caused the accident.',
      'A voluntary coverage purchased only by commercial drivers.',
      'A coverage that applies only when the accident occurs outside Manitoba.'
    ],
    answer: 1,
    explanation:
      'PIPP is a NO-FAULT bodily injury benefits scheme covering Manitoba residents in Canada and the United States, regardless of who caused the accident. The right to sue for injuries is largely removed.'
  },
  {
    id: 39,
    category: 'MPI / Autopac',
    question: 'Under PIPP (2026), income replacement is calculated as:',
    options: [
      '70% of gross income, with no maximum.',
      '80% of gross income, up to $150,000.',
      '90% of NET income, up to a maximum insurable gross income of $123,000.',
      '100% of net income for the first 30 days only.'
    ],
    answer: 2,
    explanation:
      'PIPP pays income replacement of 90% of NET income, subject to a maximum insurable GROSS yearly income of $123,000 (2026) and a 7-day waiting period.'
  },
  {
    id: 40,
    category: 'MPI / Autopac',
    question: 'Under Manitoba\'s Driver Safety Rating (DSR) scale (effective April 1, 2026), an AT-FAULT vehicle claim moves a driver:',
    options: [
      '1 level down the scale.',
      '5 levels down the scale.',
      '10 levels down the scale.',
      '15 levels down the scale.'
    ],
    answer: 1,
    explanation:
      'Each at-fault claim drops the driver 5 DSR levels. Impaired driving = 10 levels down; impaired causing death = 15 levels down. The 2026 scale has 41 levels (−20 to +20).'
  }
]
