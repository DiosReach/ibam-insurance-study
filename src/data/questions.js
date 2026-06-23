// 65-question Manitoba-specific exam pool
// Style and content modeled on the official IBAS/IBAM Fundamentals of Insurance Practice Exam
// and the IBAM FOI course (Insurance Brokers Association of Manitoba).
// Manitoba content verified against:
//   • Insurance Act of Manitoba (Statutory Conditions 1-14)
//   • MPI 2026 Guide to Autopac (effective April 1, 2026)
//   • Insurance Council of Manitoba (ICM) licensing structure

export const categories = [
  'Foundations',
  'Contract Law',
  'Manitoba Statutory Conditions',
  'Indemnity',
  'Property',
  'Commercial',
  'Liability',
  'MPI / Autopac',
  'Industry & Ethics',
  'Specialty'
]

export const questionPool = [
  // ─── Foundations (4) ──────────────────────────────────────────────────
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
      'The fundamental purpose of insurance is the SPREAD OF RISK across many similar exposures, so the few who suffer loss are compensated by the premiums of the many.'
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
    options: ['Avoidance of risk', 'Retention of the risk', 'Controlling the risk', 'Transfer of the risk'],
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

  // ─── Contract Law (6) ─────────────────────────────────────────────────
  {
    id: 5,
    category: 'Contract Law',
    question: 'A contract is legally enforceable only when all legal elements are present. Which element is found ONLY in an insurance contract?',
    options: ['Genuine intention', 'Legality of the object', 'Consideration', 'Indemnity'],
    answer: 3,
    explanation:
      'All contracts require offer/acceptance, consideration, capacity, legal purpose, and genuine intent. Only INSURANCE contracts require indemnity.'
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
  {
    id: 10,
    category: 'Contract Law',
    question: 'Which document does the insurer issue when both insurer and insured have agreed to change the terms of an existing policy?',
    options: ['A rider', 'An endorsement', 'A binder', 'A floater'],
    answer: 1,
    explanation:
      'An endorsement (also called a rider) modifies an existing policy in writing after both parties agree to the change.'
  },

  // ─── Manitoba Statutory Conditions (10) ───────────────────────────────
  {
    id: 11,
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
    id: 12,
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
      'SC 5 requires the insurer to give 15 days\' notice by registered mail OR 5 days personal delivery. The insured may cancel at any time on request.'
  },
  {
    id: 13,
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
    id: 14,
    category: 'Manitoba Statutory Conditions',
    question: 'Under SC 12, unless the contract specifies a shorter period, the loss is payable within:',
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
    id: 15,
    category: 'Manitoba Statutory Conditions',
    question: 'Under SC 13 — Repair or Replacement, the insurer must give written notice of its election within ___ of receiving proof of loss and must begin work within ___.',
    options: ['15 days / 30 days', '30 days / 45 days', '45 days / 60 days', '60 days / 90 days'],
    answer: 1,
    explanation:
      'SC 13: Notice of election within 30 days of proof of loss; work must begin within 45 days.'
  },
  {
    id: 16,
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
      'SC 9 — Salvage — requires the insured to take reasonable steps to prevent further damage. Failure can affect the settlement.'
  },
  {
    id: 17,
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
  {
    id: 18,
    category: 'Manitoba Statutory Conditions',
    question: 'Under SC 10 — Entry, Control, Abandonment — which statement is CORRECT?',
    options: [
      'The insurer may take possession of insured property to investigate without consent.',
      'The insured may abandon damaged property to the insurer at any time.',
      'The insurer has an immediate right of entry to investigate, but cannot take control without the insured\'s consent.',
      'The insured loses all right to recover if the insurer enters the property.'
    ],
    answer: 2,
    explanation:
      'SC 10 grants the insurer an immediate right of entry to investigate, but control requires the insured\'s consent and abandonment requires the insurer\'s consent.'
  },
  {
    id: 19,
    category: 'Manitoba Statutory Conditions',
    question: 'Under SC 11 — Dispute Resolution, which is required before the dispute-resolution process becomes available?',
    options: [
      'The insurer must agree to participate in writing.',
      'A specific demand for it in writing AND delivery of the proof of loss.',
      'A court order initiating the proceeding.',
      'A signed waiver of the insured\'s right to sue.'
    ],
    answer: 1,
    explanation:
      'SC 11(2): no right to dispute resolution until (a) a specific written demand is made AND (b) the proof of loss has been delivered to the insurer.'
  },
  {
    id: 20,
    category: 'Manitoba Statutory Conditions',
    question: 'Under SC 14 — Notice, written notice TO the insurer may be delivered or sent by registered mail to:',
    options: [
      'Any branch office of the insurer.',
      'The chief agency or head office of the insurer in the province.',
      'The broker who placed the policy.',
      'The insurance regulator (ICM).'
    ],
    answer: 1,
    explanation:
      'SC 14(1): notice must go to the chief agency or head office of the insurer in the province. Notice to the broker is NOT notice to the insurer.'
  },

  // ─── Indemnity (5) ────────────────────────────────────────────────────
  {
    id: 21,
    category: 'Indemnity',
    question: 'When an insurer has indemnified the insured for a loss caused by a third party, the insurer\'s legal right of recovery from that party is called:',
    options: ['Arbitration', 'Restitution', 'Subrogation', 'Mediation'],
    answer: 2,
    explanation:
      'Subrogation — the insurer steps into the shoes of the insured to recover the paid amount from the at-fault third party.'
  },
  {
    id: 22,
    category: 'Indemnity',
    question: 'The Indemnity Agreement describes how the amount of a loss settlement is determined. Which is NOT a factor?',
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
    id: 23,
    category: 'Indemnity',
    question: 'A fire totally destroys your client\'s building. ACV = $400,000. Mortgage owing = $200,000. The building is insured for $350,000. Based on the Indemnity Agreement, the settlement is:',
    options: ['$400,000', '$200,000', '$350,000', '$150,000'],
    answer: 2,
    explanation:
      'Settlement = LESSER of (Amount of insurance, ACV, Insured\'s interest). Insured\'s interest = $400K (owner with mortgage). Lesser of $350K, $400K, $400K = $350,000.'
  },
  {
    id: 24,
    category: 'Indemnity',
    question: 'Actual Cash Value (ACV) means:',
    options: [
      'The value of property at the time it was purchased.',
      'The resale value of the property.',
      'Replacement cost less depreciation.',
      'Replacement cost less the insured\'s sentimental value.'
    ],
    answer: 2,
    explanation: 'ACV = Replacement Cost − Depreciation. Sentimental value is never a factor in insurance settlements.'
  },
  {
    id: 25,
    category: 'Indemnity',
    question: 'Your client lost a matching gold necklace, pendant, and earrings during a burglary. She finds one earring and claims the full set value. How will the insurer settle?',
    options: [
      'Pay the full value of the set.',
      'Pay the value of the necklace and one earring plus 10%.',
      'Pay the value claimed LESS the value of the recovered earring.',
      'Pay nothing — the claim is fraudulent.'
    ],
    answer: 2,
    explanation:
      'PAIR AND SET CLAUSE: settlement = total claimed value MINUS value of the recovered item.'
  },

  // ─── Property (7) ─────────────────────────────────────────────────────
  {
    id: 26,
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
      'Under the Comprehensive (all-risk) form, damage by WILD animals to the building IS covered. The other three are standard exclusions.'
  },
  {
    id: 27,
    category: 'Property',
    question: 'Under Coverage B — Detached Private Structures, the amount of insurance is:',
    options: [
      '10% of Coverage A, INCLUDED in the Coverage A limit.',
      '10% of Coverage A, IN ADDITION to the Coverage A limit.',
      '5% of Coverage A, included in the Coverage A limit.',
      '20% of Coverage A, in addition to the Coverage A limit.'
    ],
    answer: 1,
    explanation: 'Coverage B is 10% of Coverage A, IN ADDITION to it — not part of it.'
  },
  {
    id: 28,
    category: 'Property',
    question: 'Coverage D — Additional Living Expense — does NOT cover which expense?',
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
    id: 29,
    category: 'Property',
    question: 'Which person is NOT an "insured" under a standard Homeowners policy?',
    options: [
      'The insured\'s common-law spouse of five years.',
      'The insured\'s parents permanently living with the insured.',
      'The insured\'s daughter living in a university dorm in another province.',
      'The tenant who occupies the basement suite in the insured\'s dwelling.'
    ],
    answer: 3,
    explanation: 'A tenant is a separate party — not an insured under the landlord\'s homeowner policy.'
  },
  {
    id: 30,
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
      'BUSINESS property on the premises is subject to a special low limit. Personal-use items are not.'
  },
  {
    id: 31,
    category: 'Property',
    question: 'After a fire damages an insured apartment building, which part of the loss is NOT covered under a typical property policy?',
    options: [
      'Damage to the roof caused by firefighters\' axes.',
      'Water damage from extinguishing the fire.',
      'Heat damage to the siding of the undamaged part of the building.',
      'Loss of rental income from tenants who left because the building was unsafe.'
    ],
    answer: 3,
    explanation:
      'Property policies cover DIRECT damage. Loss of rental income is INDIRECT (consequential) damage — covered only with Business Interruption / Rental Income endorsement.'
  },
  {
    id: 32,
    category: 'Property',
    question: 'The Standard Mortgage Clause in property policies provides:',
    options: [
      'A guarantee that the mortgage will be paid off if the insured becomes sick or unemployed.',
      'A guarantee to the MORTGAGEE that its interests are protected even if the insured breaches a condition or warranty.',
      'A guarantee of a separate policy issued to the mortgagee if the insured cancels.',
      'A guarantee of payment to the insured if the mortgagee breaches a condition.'
    ],
    answer: 1,
    explanation:
      'The Standard Mortgage Clause protects the MORTGAGEE\'S interest even when the insured\'s acts would void coverage. The mortgagee retains the right to collect.'
  },

  // ─── Commercial (7) ───────────────────────────────────────────────────
  {
    id: 33,
    category: 'Commercial',
    question: 'A fire damages your client\'s building. Loss = $50,000. Building value = $500,000. Insurance carried = $300,000. Co-insurance requirement = 80%. How much of the loss does the INSURED ABSORB?',
    options: ['$37,500', '$50,000', '$12,500', '$25,000'],
    answer: 2,
    explanation:
      'Required = $500,000 × 80% = $400,000. Insurer pays (300,000/400,000) × 50,000 = $37,500. Insured absorbs $50,000 − $37,500 = $12,500.'
  },
  {
    id: 34,
    category: 'Commercial',
    question: 'The Commercial Property Broad Form (IBC 4037) covers many perils. Which is NOT covered?',
    options: [
      'Smoke damage (other than from agricultural smudging or industrial operations).',
      'Vehicle impact damage to a building, even when driven by the insured or employee.',
      'Theft of money from a cash register.',
      'Water damage from a ruptured or frozen pipe.'
    ],
    answer: 2,
    explanation:
      'Theft of MONEY/SECURITIES is excluded from property policies — it requires separate Crime / Burglary / Money & Securities coverage.'
  },
  {
    id: 35,
    category: 'Commercial',
    question: 'Business Interruption insurance is intended to indemnify the insured for loss of income. Which is NOT a characteristic?',
    options: [
      'It is designed to indemnify for loss of income and profit.',
      'It is triggered by a loss covered under the insured\'s property policy.',
      'Payment is not restricted to the expiry of the policy.',
      'It pays the cost to order new equipment and supplies to restart the business.'
    ],
    answer: 3,
    explanation:
      'Equipment replacement is paid by the PROPERTY policy, not Business Interruption. BI pays lost income and continuing expenses.'
  },
  {
    id: 36,
    category: 'Commercial',
    question: 'Your retail-tenant client is installing floor covering, paneling, light fixtures, and a wired security system in her leased shopping-mall unit. These tenant\'s improvements should be:',
    options: [
      'Insured under the landlord\'s building insurance.',
      'Insured as BUILDING coverage within HER OWN property policy.',
      'Insured by including their value in her equipment coverage.',
      'Left uninsured — the landlord\'s policy will respond.'
    ],
    answer: 1,
    explanation:
      'Tenant\'s improvements and betterments are insured under the TENANT\'S own property policy, as BUILDING coverage.'
  },
  {
    id: 37,
    category: 'Commercial',
    question: 'Under the Earnings Form of Business Interruption insurance, payment continues:',
    options: [
      'Until the property is reinstated, not exceeding 12 months.',
      'Until profits return to the pre-loss level.',
      'Until the policy expires.',
      'For exactly 12 months from the date of loss regardless of restoration.'
    ],
    answer: 0,
    explanation:
      'EARNINGS form: pays until property is restored, capped at 12 months. PROFITS form pays until profits recover to pre-loss level (can extend past restoration).'
  },
  {
    id: 38,
    category: 'Commercial',
    question: 'Extra Expense Insurance does NOT cover which of the following?',
    options: [
      'Rental costs for a temporary location until the insured\'s premises are restored.',
      'Bonus paid to a contractor to prepare the temporary location quickly.',
      'Mortgage payments on the insured\'s building while it is being rebuilt.',
      'Overtime salaries paid to employees for the extra help required to resume operations.'
    ],
    answer: 2,
    explanation:
      'Mortgage payments are CONTINUING expenses — they would be paid regardless of the loss. Extra Expense covers only the EXTRA costs incurred to keep operating.'
  },
  {
    id: 39,
    category: 'Commercial',
    question: 'Coverage under the Builder\'s Risk — Broad Form usually ends automatically:',
    options: [
      'Upon the expiry of the policy term.',
      'Thirty (30) days after construction is completed.',
      'When construction of the project is completed AND the building is occupied.',
      'Thirty (30) days after the building is occupied by the owner.'
    ],
    answer: 2,
    explanation:
      'Builder\'s Risk coverage automatically terminates when construction is complete AND the building is occupied — at that point the standard property policy takes over.'
  },

  // ─── Liability (7) ────────────────────────────────────────────────────
  {
    id: 40,
    category: 'Liability',
    question: 'In a tort action, which is NOT an element the plaintiff must prove?',
    options: [
      'The defendant owed a MORAL duty of care.',
      'The defendant owed a LEGAL duty of care.',
      'The defendant breached the legal duty of care.',
      'Damages were the proximate result of the defendant\'s action.'
    ],
    answer: 0,
    explanation:
      'Negligence requires a LEGAL duty of care, not merely a moral one. The other three are the breach, damages, and proximate cause.'
  },
  {
    id: 41,
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
      'On OCCURRENCE basis the limit applies PER occurrence, available for each occurrence in the period (subject to any annual aggregate).'
  },
  {
    id: 42,
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
      'A defective product that caused bodily injury AFTER leaving the insured\'s control is paid under PRODUCTS Liability.'
  },
  {
    id: 43,
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
    id: 44,
    category: 'Liability',
    question: 'Which professional needs MALPRACTICE insurance (not E&O)?',
    options: ['An insurance broker', 'A medical doctor', 'An accountant', 'A real-estate agent'],
    answer: 1,
    explanation:
      'Doctors and similar medical professionals carry MALPRACTICE coverage. E&O is the term used for brokers, agents, accountants, and other non-medical professionals.'
  },
  {
    id: 45,
    category: 'Liability',
    question: 'Regarding "Supplementary Payments" under a liability policy, which statement is FALSE?',
    options: [
      'All costs covered under this agreement are paid in ADDITION to the limit of insurance.',
      'The amount of damages awarded in EXCESS of the limit of insurance is covered.',
      'It covers legal costs incurred to establish a defense to a claim.',
      'It covers interest on damages from the judgment date until payment, for amounts within the limit.'
    ],
    answer: 1,
    explanation:
      'Supplementary Payments cover defense costs, court costs, and within-limits interest — but they do NOT pay damages awarded above the policy limit.'
  },
  {
    id: 46,
    category: 'Liability',
    question: 'Coverage G — Voluntary Payment for Damage to Property — would respond in which instance?',
    options: [
      'The insured smashed his employer\'s computer in a fit of rage.',
      'The insured\'s 10-year-old son deliberately threw a rock through the neighbour\'s window.',
      'The insured\'s 14-year-old son spray-painted the neighbour\'s garage door.',
      'The insured damaged his own riding lawn mower and was denied a property claim.'
    ],
    answer: 1,
    explanation:
      'Coverage G covers deliberate acts of MINOR children (typically under 13). The 10-year-old qualifies; a 14-year-old typically does not. Damage to the insured\'s own property is never covered under voluntary payments.'
  },

  // ─── MPI / Autopac (8) ────────────────────────────────────────────────
  {
    id: 47,
    category: 'MPI / Autopac',
    question: 'In Manitoba, basic auto insurance is provided by:',
    options: [
      'Any licensed private insurer.',
      'ICBC',
      'Manitoba Public Insurance (MPI)',
      'SGI'
    ],
    answer: 2,
    explanation:
      'MPI is the Crown corporation that provides compulsory basic Autopac coverage in Manitoba; rates are approved by the Public Utilities Board.'
  },
  {
    id: 48,
    category: 'MPI / Autopac',
    question: 'Basic Autopac (effective April 1, 2026) includes a default third-party liability limit of:',
    options: ['$200,000', '$500,000', '$1,000,000', '$2,000,000'],
    answer: 1,
    explanation:
      'Basic Autopac includes $500,000 of third-party liability. Drivers can buy Extension coverage up to $10 million.'
  },
  {
    id: 49,
    category: 'MPI / Autopac',
    question: 'Effective April 1, 2026, the default Basic Autopac all-perils deductible is:',
    options: ['$500', '$750', '$1,000', '$1,500'],
    answer: 2,
    explanation:
      'The basic deductible was raised from $750 to $1,000 for policies effective April 1, 2026. Lower options are available through Extension.'
  },
  {
    id: 50,
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
      'PIPP is a NO-FAULT bodily injury benefits scheme covering Manitoba residents in Canada and the United States. The right to sue for injuries is largely removed.'
  },
  {
    id: 51,
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
      'PIPP pays 90% of NET income, subject to a maximum insurable GROSS yearly income of $123,000 (2026), with a 7-day waiting period.'
  },
  {
    id: 52,
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
      'Each at-fault claim drops the driver 5 DSR levels. Impaired driving = 10 levels; impaired causing death = 15 levels. The 2026 scale has 41 levels (−20 to +20).'
  },
  {
    id: 53,
    category: 'MPI / Autopac',
    question: 'Under Manitoba\'s DSR scale, using a hand-held electronic device while driving moves a driver:',
    options: [
      '1 level down the scale.',
      '2 levels down the scale.',
      '5 levels down the scale.',
      '10 levels down the scale.'
    ],
    answer: 2,
    explanation:
      'A hand-held electronic device conviction = 5 levels down — same severity as an at-fault claim. Distracted driving is treated as a serious DSR offence.'
  },
  {
    id: 54,
    category: 'MPI / Autopac',
    question: 'When a Manitoba driver causes an at-fault accident while driving in the United States, which statement is CORRECT?',
    options: [
      'PIPP does not apply outside Manitoba.',
      'PIPP benefits apply, but tort law still governs property damage and excess bodily injury.',
      'The driver cannot be sued because of PIPP.',
      'The driver must rely solely on basic $500,000 liability.'
    ],
    answer: 1,
    explanation:
      'PIPP follows Manitoba residents into Canada and the U.S. for bodily injury benefits, but TORT still applies to property damage and to injury beyond PIPP limits — high Extension liability is wise for U.S. travel.'
  },

  // ─── Industry & Ethics (7) ────────────────────────────────────────────
  {
    id: 55,
    category: 'Industry & Ethics',
    question: 'A key difference between a broker and an agent is:',
    options: [
      'A broker represents one insurer; an agent represents many.',
      'A broker represents the CLIENT; an agent represents the INSURER.',
      'A broker cannot bind coverage.',
      'An agent must hold E&O insurance; a broker is exempt.'
    ],
    answer: 1,
    explanation:
      'Brokers are independent intermediaries owing duty to the CLIENT. Agents represent ONE insurer.'
  },
  {
    id: 56,
    category: 'Industry & Ethics',
    question: 'In Canada, the General Insurance Industry is regulated by federal AND provincial statutes. Which of the following is NOT a provincial-government function?',
    options: [
      'Supervising the terms and conditions of insurance contracts.',
      'Establishing premium levels for private insurance contracts.',
      'Licensing insurance companies to transact business in the province.',
      'Monitoring the financial stability of non-federally-licensed insurers.'
    ],
    answer: 1,
    explanation:
      'Provincial governments do NOT set premium rates for private insurers — insurers determine their own rates (only Crown insurers like MPI are rate-regulated by the PUB).'
  },
  {
    id: 57,
    category: 'Industry & Ethics',
    question: 'Solvency, in the context of an insurer, refers to:',
    options: [
      'Selling shares to shareholders.',
      'The ability of the insurer to pay all insured losses.',
      'The payment of commissions to brokers.',
      'Survival of the fittest in a competitive market.'
    ],
    answer: 1,
    explanation:
      'Solvency = the financial ability of the insurer to pay claims. OSFI federally and the provincial Superintendent monitor solvency.'
  },
  {
    id: 58,
    category: 'Industry & Ethics',
    question: 'An UNDERWRITER\'S primary function is to:',
    options: [
      'Select those risks most likely to be PROFITABLE to the insurer.',
      'Bind coverage on every risk the insurer accepts.',
      'Set premium rates, mostly for commercial risks.',
      'Process cancellation certificates and refund cheques.'
    ],
    answer: 0,
    explanation:
      'The underwriter\'s core role is RISK SELECTION — accepting, declining, or modifying risks to keep the insurer profitable.'
  },
  {
    id: 59,
    category: 'Industry & Ethics',
    question: 'The MAIN cause of Errors & Omissions (E&O) claims against brokers is:',
    options: [
      'Providing the client with coverage he doesn\'t need.',
      'Failing to properly identify the client\'s loss exposures and offering the required coverages.',
      'Failing to cancel the policy when requested.',
      'Violating the agency agreement with the insurer.'
    ],
    answer: 1,
    explanation:
      'The #1 source of E&O claims is failing to identify and recommend the right coverages — the broker\'s core advisory job.'
  },
  {
    id: 60,
    category: 'Industry & Ethics',
    question: 'A broker\'s licence in Manitoba may be terminated in all of the following cases EXCEPT:',
    options: [
      'The broker is found guilty of misrepresentation, fraud, or dishonesty.',
      'The broker offered a client a golf-club membership conditional on bringing all insurance business to the broker.',
      'The broker offered a client a premium discount AUTHORIZED by the insurer.',
      'The broker failed to remit collected premiums as required.'
    ],
    answer: 2,
    explanation:
      'A premium discount AUTHORIZED by the insurer is legitimate. Unauthorized rebates, gifts, or inducements are licence-terminating offences.'
  },
  {
    id: 61,
    category: 'Industry & Ethics',
    question: 'In Manitoba, the body responsible for licensing and disciplining insurance brokers and agents is:',
    options: [
      'IBAM — Insurance Brokers Association of Manitoba',
      'ICM — Insurance Council of Manitoba',
      'OSFI — Office of the Superintendent of Financial Institutions',
      'MPI — Manitoba Public Insurance'
    ],
    answer: 1,
    explanation:
      'ICM is the regulator. IBAM is the broker ASSOCIATION (industry group), which administers the FOI course but does not licence or discipline brokers.'
  },

  // ─── Specialty (4) ────────────────────────────────────────────────────
  {
    id: 62,
    category: 'Specialty',
    question: 'Travel insurance — which factor is NOT used to determine the premium for a single trip?',
    options: [
      'The length of the trip.',
      'The destination of the trip.',
      'The method of transportation.',
      'The age and health condition of the applicant.'
    ],
    answer: 2,
    explanation:
      'Trip length, destination, and applicant age/health are premium factors. The mode of transport (car, plane, train) is not.'
  },
  {
    id: 63,
    category: 'Specialty',
    question: 'Travel insurance generally provides coverage for which of the following?',
    options: [
      'Pregnancy or childbirth within eight weeks of the expected delivery date.',
      'Injury sustained while skydiving.',
      'Hospitalization due to a drug overdose.',
      'Emergency medical treatment for food poisoning.'
    ],
    answer: 3,
    explanation:
      'Sudden, unexpected emergencies like food poisoning are covered. Late-term pregnancy, hazardous sports, and intoxication-related events are common exclusions.'
  },
  {
    id: 64,
    category: 'Specialty',
    question: 'Loss Assessment coverage in the Condominium Unit Owners Form (IBC 1132) does NOT respond in which case?',
    options: [
      'When the condo corporation\'s policy has a large deductible.',
      'When the unit owner\'s OWN policy has a large deductible.',
      'When the corp\'s policy pays only a portion of a partial loss because of a co-insurance penalty.',
      'When the corp\'s policy fails to respond because the corporation breached a condition.'
    ],
    answer: 1,
    explanation:
      'Loss Assessment covers a unit owner\'s share of an assessment levied because the condo CORP\'S policy didn\'t fully pay. It does NOT cover the owner\'s own policy deductible.'
  },
  {
    id: 65,
    category: 'Specialty',
    question: 'Manitoba\'s three-level licensing system requires that a Level 1 agent:',
    options: [
      'May sell anywhere, including outside the office.',
      'May sell only inside the office of a general insurance agency, under the supervision of a Level 2 or higher.',
      'May independently manage their own insurance brokerage.',
      'Holds an unrestricted licence to sell all classes of insurance, including life.'
    ],
    answer: 1,
    explanation:
      'A Level 1 agent works INSIDE the office only and must be supervised by a Level 2+. Level 2 = sell anywhere + manage. Level 3 = own an agency (requires 2+ years at Level 2).'
  }
]
