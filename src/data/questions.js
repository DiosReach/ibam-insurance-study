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
  },

  // ═══════════════════════════════════════════════════════════════════════
  // EXPANSION SET — 88 new questions (IDs 66-153)
  // Distribution: MPI/Autopac 30% • Statutory Conditions/Ethics 25% •
  //               Property/Liability 25% • Commercial/Travel 20%
  // ═══════════════════════════════════════════════════════════════════════

  // ─── MPI / Autopac scenarios (26 questions, IDs 66-91) ────────────────
  {
    id: 66,
    category: 'MPI / Autopac',
    question: 'Your client moved to Manitoba from Ontario two weeks ago and continues driving on her Ontario plates and Ontario private auto insurance. Under Manitoba law, she must:',
    options: [
      'Continue using her Ontario insurance for up to one year.',
      'Register her vehicle with MPI and obtain Autopac within the new-resident grace period (typically 3 months).',
      'Purchase only Extension coverage — Basic is optional for new residents.',
      'Wait until her Ontario policy expires before switching to Autopac.'
    ],
    answer: 1,
    explanation:
      'New Manitoba residents have a short grace period (about 3 months) to register their vehicles with MPI. After that, continued use of an out-of-province plate and out-of-province insurance is illegal. PIPP and Basic Autopac are compulsory once she becomes a resident.'
  },
  {
    id: 67,
    category: 'MPI / Autopac',
    question: 'A driver is the victim of a hit-and-run in Winnipeg. The other driver flees and cannot be identified. The victim suffers serious bodily injuries. Which Autopac coverage responds to her medical and income-replacement needs?',
    options: [
      'Only the optional Uninsured Motorist Extension applies.',
      'PIPP responds — it pays bodily-injury benefits regardless of fault OR whether the at-fault driver is identified.',
      'No coverage — hit-and-run is excluded.',
      'Only third-party liability applies, paid by MPI as a public service.'
    ],
    answer: 1,
    explanation:
      'PIPP is a no-fault scheme; benefits are paid to the injured Manitoba resident regardless of who caused the crash or whether the at-fault driver is found. Liability coverage only matters when the insured is the at-fault party; PIPP covers the victim\'s injury directly.'
  },
  {
    id: 68,
    category: 'MPI / Autopac',
    question: 'Your client strikes a deer on Highway 1 at night, causing $8,000 damage to her vehicle. She has only Basic Autopac (2026). The loss is:',
    options: [
      'Not covered — collisions with animals are excluded.',
      'Covered under all-perils, subject to the $1,000 Basic deductible.',
      'Covered only if she purchased the Comprehensive endorsement.',
      'Paid in full with no deductible because the animal was wild.'
    ],
    answer: 1,
    explanation:
      'Basic Autopac all-perils includes collision and impact with animals — a very common Manitoba claim. The standard $1,000 deductible applies (raised from $750 effective April 1, 2026). Lower deductibles are available through Extension.'
  },
  {
    id: 69,
    category: 'MPI / Autopac',
    question: 'A 2024 SUV with an ACV of $75,000 is registered with Basic Autopac only. The vehicle is totalled. Without Extension, the maximum MPI will pay for the physical damage is:',
    options: [
      'The full $75,000 ACV.',
      '$50,000 — the Basic all-perils cap.',
      '$35,000.',
      '$25,000.'
    ],
    answer: 1,
    explanation:
      'Basic Autopac all-perils covers up to $50,000 for physical damage to the registered vehicle. Vehicles worth more than $50,000 require Extension Excess Value coverage to bridge the gap. Without it, the owner absorbs the difference.'
  },
  {
    id: 70,
    category: 'MPI / Autopac',
    question: 'After a covered accident, the insured needs a rental vehicle while her car is being repaired. Which coverage pays for the rental?',
    options: [
      'PIPP — automatic.',
      'Basic Autopac all-perils — automatic.',
      'Loss of Use (Autopac Extension) — must be purchased separately.',
      'Third-party liability — automatic.'
    ],
    answer: 2,
    explanation:
      'Loss of Use is an Extension coverage; Basic Autopac does NOT include it. Without Loss of Use, the insured pays for any rental out of pocket. It\'s one of the most common Extension upgrades.'
  },
  {
    id: 71,
    category: 'MPI / Autopac',
    question: 'A Manitoba driver causes a serious crash in Florida resulting in $1,000,000 in third-party bodily injury damages. The driver has only Basic Autopac ($500K liability). What happens?',
    options: [
      'PIPP covers the full $1,000,000 — third-party damages are no-fault.',
      'MPI pays $500,000 under Basic liability; the driver is PERSONALLY responsible for the remaining $500,000.',
      'There is no Canadian liability coverage outside Canada.',
      'U.S. courts must apply Manitoba\'s $500K cap to the judgment.'
    ],
    answer: 1,
    explanation:
      'Basic Autopac\'s $500K liability is far below typical U.S. medical and litigation costs. The driver is exposed personally for any excess. This is why Extension liability up to $10M (and SRE beyond) is strongly recommended for cross-border travel.'
  },
  {
    id: 72,
    category: 'MPI / Autopac',
    question: 'A Saskatchewan university student attends school in Winnipeg and keeps her SK-registered car here for the school year. She is not yet a Manitoba resident. The CORRECT statement is:',
    options: [
      'She must immediately register with MPI.',
      'As a non-resident temporary visitor (student), her Saskatchewan registration and insurance are recognized in Manitoba.',
      'MPI policies must be purchased even for temporary visitors.',
      'Her SGI insurance would also be valid in the U.S. but not Manitoba.'
    ],
    answer: 1,
    explanation:
      'Non-residents (including out-of-province students) generally retain their home-province registration and insurance during temporary stays. Once she establishes Manitoba residency (e.g., applies for a Manitoba driver\'s licence), the new-resident clock starts.'
  },
  {
    id: 73,
    category: 'MPI / Autopac',
    question: 'Under PIPP, income replacement begins after a waiting period of:',
    options: ['24 hours', '3 days', '7 days', '14 days'],
    answer: 2,
    explanation:
      'PIPP imposes a 7-day waiting period before income replacement begins. Income replacement is 90% of net income, subject to the maximum insurable gross of $123,000 (2026). Medical and rehabilitation benefits start immediately.'
  },
  {
    id: 74,
    category: 'MPI / Autopac',
    question: 'A Manitoba driver is convicted of using a hand-held cell phone while driving. Under the 2026 DSR scale, the driver moves:',
    options: [
      '1 level down the scale.',
      '2 levels down the scale.',
      '5 levels down the scale.',
      '10 levels down the scale.'
    ],
    answer: 2,
    explanation:
      'A hand-held electronic device conviction is treated as a SERIOUS distracted-driving offence — 5 levels down, the same severity as a single at-fault claim. MPI applies this demerit per conviction.'
  },
  {
    id: 75,
    category: 'MPI / Autopac',
    question: 'A driver is convicted of impaired driving AND found at fault for the resulting collision. Under DSR rules, the driver\'s level drops by:',
    options: [
      '5 levels (the at-fault claim only).',
      '10 levels (the impaired conviction only).',
      '15 levels (10 for impaired + 5 for at-fault claim — both apply).',
      'No reduction — criminal convictions are outside DSR.'
    ],
    answer: 2,
    explanation:
      'Both demerits apply: −10 levels for the impaired-driving conviction and −5 levels for the at-fault claim. DSR adjustments stack. Impaired causing DEATH = −15 levels for a single demerit.'
  },
  {
    id: 76,
    category: 'MPI / Autopac',
    question: 'A driver causes an accident and leaves the scene without exchanging information. Under DSR, leaving the scene of an accident is:',
    options: [
      '5 levels down.',
      '10 levels down.',
      '15 levels down.',
      '20 levels down.'
    ],
    answer: 1,
    explanation:
      '−10 levels — the same severity as impaired driving. Combined with the underlying at-fault claim (−5), a fleeing driver often drops 15 levels in a single incident.'
  },
  {
    id: 77,
    category: 'MPI / Autopac',
    question: 'On the Manitoba DSR scale effective April 1, 2026, the TOP level (best driver discount) is:',
    options: ['+15', '+16', '+18', '+20'],
    answer: 3,
    explanation:
      'MPI added a new top level of +20 in 2026, expanding the scale to 41 levels (−20 to +20). Top-of-scale drivers receive up to 53% off vehicle premiums and up to $30 off driver\'s licence premiums.'
  },
  {
    id: 78,
    category: 'MPI / Autopac',
    question: 'A Manitoba resident is fatally injured in an at-fault automobile accident. Under PIPP, death benefits are:',
    options: [
      'Not paid because the deceased was at fault.',
      'Paid REGARDLESS of fault to the estate and/or eligible dependants.',
      'Paid only if an optional Death Benefit endorsement was purchased.',
      'Limited to $25,000 for funeral expenses only.'
    ],
    answer: 1,
    explanation:
      'PIPP is no-fault. Death benefits — including a lump-sum payment to surviving spouse/dependants, dependant benefits, and a funeral expense allowance — are paid regardless of who caused the crash.'
  },
  {
    id: 79,
    category: 'MPI / Autopac',
    question: 'Your client owns a Lamborghini Aventador worth $450,000. Under MPI rules, this vehicle must be insured through:',
    options: [
      'Basic Autopac only — MPI cannot refuse.',
      'Basic Autopac plus Extension Excess Value, no other product needed.',
      'Special Risk Extension (SRE) — required for high-value or unusual vehicles.',
      'A private insurer; MPI does not insure vehicles over $100,000.'
    ],
    answer: 2,
    explanation:
      'SRE is MPI\'s division for high-value, exotic, or atypical vehicles that the standard Autopac/Extension product cannot accommodate. SRE provides custom underwriting and agreed-value coverage suited to the actual risk.'
  },
  {
    id: 80,
    category: 'MPI / Autopac',
    question: 'A 1972 Ford Mustang restored to mint condition is rarely driven (collector use only). The BEST coverage is:',
    options: [
      'Basic Autopac at standard rates — collectors are not special-rated.',
      'Special Risk Extension (SRE) with antique/collector classification on an AGREED VALUE basis.',
      'Comprehensive only — collision is unnecessary for a stored vehicle.',
      'The vehicle cannot be insured because it is over 30 years old.'
    ],
    answer: 1,
    explanation:
      'SRE handles antiques and collector vehicles. Agreed-value coverage avoids depreciation disputes — vital because mint collectors appreciate, not depreciate. Standard Autopac uses ACV which would dramatically undervalue a restored classic.'
  },
  {
    id: 81,
    category: 'MPI / Autopac',
    question: 'Your client\'s vehicle is stolen from a Winnipeg parking lot and recovered three days later, vandalized inside and out. Under Basic Autopac:',
    options: [
      'The theft is covered but the resulting vandalism is excluded.',
      'Both theft AND the resulting vandalism are covered under all-perils as ONE claim, subject to a single $1,000 deductible.',
      'The insured pays two separate deductibles, one for theft and one for vandalism.',
      'No coverage — theft requires Extension.'
    ],
    answer: 1,
    explanation:
      'Theft and damage flowing from the theft are treated as a single loss event under all-perils. One deductible applies. Multiple deductibles would only arise from separate, unrelated incidents.'
  },
  {
    id: 82,
    category: 'MPI / Autopac',
    question: 'The maximum third-party liability available through Autopac EXTENSION is:',
    options: ['$1,000,000', '$2,000,000', '$5,000,000', '$10,000,000'],
    answer: 3,
    explanation:
      '$10 million is the Extension ceiling. Higher liability requirements (commercial fleets, very high-net-worth clients) require Special Risk Extension (SRE) underwriting.'
  },
  {
    id: 83,
    category: 'MPI / Autopac',
    question: 'A client uses her personal vehicle to deliver pizzas three nights a week. She has not told MPI. After an accident during a delivery:',
    options: [
      'The claim is paid as normal — personal-use coverage extends to deliveries.',
      'The undeclared commercial use is a MATERIAL CHANGE; failing to disclose it may result in claim denial or rating adjustment under SC 4 principles.',
      'Only PIPP is affected; property damage is still covered.',
      'The policy is automatically void from inception.'
    ],
    answer: 1,
    explanation:
      'Commercial delivery is a material change to the risk and must be disclosed. MPI may decline the claim, surcharge the driver, or require a commercial classification. The same principle as Statutory Condition 4 applies to Autopac policies.'
  },
  {
    id: 84,
    category: 'MPI / Autopac',
    question: 'A Manitoba driver rents a vehicle for a one-week vacation in Florida. Which is CORRECT about Autopac coverage for that rental?',
    options: [
      'Basic Autopac fully extends to U.S. rentals automatically.',
      'PIPP follows the Manitoba resident in the U.S.; physical damage to the rental and third-party liability beyond Basic require separate arrangements (rental-company coverage or Extension).',
      'No Autopac coverage applies in the U.S.',
      'Only credit-card rental insurance applies.'
    ],
    answer: 1,
    explanation:
      'PIPP travels with the Manitoba resident anywhere in Canada or the U.S. The rental vehicle itself is not insured under the renter\'s Autopac for physical damage; that requires the rental company\'s damage waiver or specific endorsement. Liability over $500K requires Extension.'
  },
  {
    id: 85,
    category: 'MPI / Autopac',
    question: 'A stay-at-home parent (no paid employment) is seriously injured in an auto accident. Under PIPP, they receive:',
    options: [
      'No benefits — only earners qualify.',
      'Non-Earner benefits and Personal Care benefits (if disabled), plus medical/rehab.',
      'Only medical expenses, no income replacement of any kind.',
      'The same Income Replacement as a full-time worker at the average wage.'
    ],
    answer: 1,
    explanation:
      'PIPP includes specific NON-EARNER and PERSONAL-CARE benefits for those not employed at the time of accident — including students and homemakers. PIPP\'s scope extends well beyond simple income replacement.'
  },
  {
    id: 86,
    category: 'MPI / Autopac',
    question: 'A new driver in Manitoba with no driving history enters the DSR scale at:',
    options: ['−20 (worst)', '0 (base)', '+5', '+10'],
    answer: 1,
    explanation:
      'New drivers begin at Level 0 (the base) and earn one level upward each clean year. They have not yet accumulated either merits or demerits, so they pay base premium with no discount and no surcharge.'
  },
  {
    id: 87,
    category: 'MPI / Autopac',
    question: 'You strike a parked car in Winnipeg. Damage to the other vehicle: $15,000. Damage to your own car: $10,000. You are at fault. Under Basic Autopac:',
    options: [
      'Liability pays the $15,000 to the other vehicle; your $10,000 damage is paid under all-perils subject to the $1,000 deductible.',
      'You pay both losses personally — Autopac excludes at-fault accidents.',
      'Only PIPP responds, regardless of property damage.',
      'A single $1,000 deductible applies to BOTH your vehicle damage AND the third-party claim.'
    ],
    answer: 0,
    explanation:
      'Two separate coverages respond: third-party liability pays the other party\'s damage in full (within the $500K limit); your own vehicle is paid under all-perils minus your deductible. Liability does not have a deductible; all-perils does.'
  },
  {
    id: 88,
    category: 'MPI / Autopac',
    question: 'MPI declares a vehicle a TOTAL LOSS (write-off) when:',
    options: [
      'Repair cost exceeds 50% of ACV.',
      'Repair cost exceeds 70% of ACV.',
      'Repair cost exceeds the ACV (or MPI\'s repairability threshold).',
      'Any damage exceeding $5,000 has occurred.'
    ],
    answer: 2,
    explanation:
      'A write-off occurs when repair cost exceeds ACV (or MPI\'s technical repair-cost threshold considering salvage, branding, and structural integrity). The insurer pays ACV minus deductible and salvage; the vehicle is branded accordingly.'
  },
  {
    id: 89,
    category: 'MPI / Autopac',
    question: 'Your client lends his car to a friend, who is at fault in an accident. Under Basic Autopac:',
    options: [
      'Only the friend\'s personal Autopac responds; your client is unaffected.',
      'Your client\'s Autopac (the registered vehicle\'s policy) responds; the FRIEND\'S DSR is reduced by the at-fault claim.',
      'No coverage applies because the friend is not the registered owner.',
      'Both the owner AND the friend lose 10 DSR levels each.'
    ],
    answer: 1,
    explanation:
      'Autopac follows the vehicle. The owner\'s policy responds, but the at-fault DRIVER\'S DSR (the friend\'s) takes the hit. This protects the owner\'s DSR while still ensuring third-party victims are paid.'
  },
  {
    id: 90,
    category: 'MPI / Autopac',
    question: 'Vehicle Replacement Cost coverage (an MPI Extension) on a new vehicle generally provides:',
    options: [
      'Replacement with a new vehicle of like kind and quality if totalled within a stipulated period (typically the first 2-3 model years).',
      'Cash equal to the original purchase price for the life of the vehicle.',
      'Coverage only for collision losses.',
      'ACV less depreciation — same as standard all-perils.'
    ],
    answer: 0,
    explanation:
      'Replacement Cost (vehicle) waives depreciation in the early years — so a totalled new car is replaced with a comparable new car rather than paying you ACV. Without this Extension, depreciation begins eating into the settlement immediately.'
  },
  {
    id: 91,
    category: 'MPI / Autopac',
    question: 'The Basic Autopac all-perils deductible is applied:',
    options: [
      'Per each damaged component of the vehicle.',
      'Once per claim event, regardless of the number of damaged components.',
      'Both to the property damage AND to the liability portion of the claim.',
      'Nothing — Basic coverage has no deductible.'
    ],
    answer: 1,
    explanation:
      'One deductible per claim, applied to the vehicle physical damage settlement. Liability claims (paid to third parties) do not have a deductible. Multiple deductibles only arise from separate, unrelated incidents.'
  },

  // ─── Manitoba Statutory Conditions & Ethics (22 questions, IDs 92-113) ─
  {
    id: 92,
    category: 'Manitoba Statutory Conditions',
    question: 'Your client honestly forgot to mention on her application a kitchen fire that occurred two years earlier. The insurer discovers it. Under SC 1 — Misrepresentation:',
    options: [
      'The contract remains in force — honest mistakes are excused.',
      'The contract is VOID as to the property in relation to which the omission is material, even though the omission was unintentional.',
      'Only future claims are affected; existing coverage stays in force.',
      'The insured can correct the omission within 30 days without penalty.'
    ],
    answer: 1,
    explanation:
      'SC 1 is harsh: it applies to misrepresentation OR omission of material facts, regardless of intent. A prior fire is highly material to underwriting and rating, so its omission voids coverage as to the affected property even when innocent.'
  },
  {
    id: 93,
    category: 'Manitoba Statutory Conditions',
    question: 'A dry-cleaner has a fire that destroys customer clothing. Under SC 2 — Property of Others, the dry-cleaner\'s standard property policy:',
    options: [
      'Automatically covers all customer property in the cleaner\'s care.',
      'Does NOT cover customer property unless specifically stated in the contract or the bailee\'s interest in that property is stated.',
      'Pays only 50% of the customer property values.',
      'Pays customer claims directly without the dry-cleaner\'s involvement.'
    ],
    answer: 1,
    explanation:
      'SC 2: the insurer is not liable for property owned by someone other than the insured unless that is specifically arranged. Bailees (dry cleaners, repair shops, valets) need a "Property of Others" or Bailee Liability extension to protect against this exposure.'
  },
  {
    id: 94,
    category: 'Manitoba Statutory Conditions',
    question: 'An insured dies and the home is inherited by his spouse. Under SC 3 — Change of Interest:',
    options: [
      'Coverage automatically terminates and must be re-applied for.',
      'Coverage CONTINUES — change of title by SUCCESSION or DEATH is specifically permitted.',
      'Coverage continues only if notice is given within 30 days.',
      'The insurer can deny renewal but cannot cancel mid-term.'
    ],
    answer: 1,
    explanation:
      'SC 3 explicitly preserves coverage through bankruptcy assignment, operation of law, succession, or death. The bereaved spouse does not lose coverage at the worst possible moment. A voluntary sale, however, is a different matter and may trigger SC 4.'
  },
  {
    id: 95,
    category: 'Manitoba Statutory Conditions',
    question: 'Your client converts her owner-occupied home into a rental property without notifying the insurer. Six months later, a tenant\'s stove fire damages the kitchen. Under SC 4 — Material Change in Risk:',
    options: [
      'The claim is paid in full; tenant fires are covered.',
      'The insurer may DENY the claim because conversion to tenant occupancy is a material change requiring prompt written notice.',
      'The insurer must pay but can cancel going forward.',
      'Only contents are affected; the building remains covered.'
    ],
    answer: 1,
    explanation:
      'Owner-occupied to rental occupancy materially changes the risk (different moral hazard, vacancy exposure, liability). SC 4 says the contract is void as to the part affected by an unreported material change. The insurer can deny the related claim.'
  },
  {
    id: 96,
    category: 'Manitoba Statutory Conditions',
    question: 'A homeowner begins selling handmade jewelry online from her basement and stocks $30,000 of inventory there. She doesn\'t inform her insurer. After a flood damages the inventory, the insurer is likely to:',
    options: [
      'Pay for the inventory as ordinary personal property.',
      'Treat the home-based business as a MATERIAL CHANGE and potentially deny the inventory loss; standard HO contents have very low business-property limits.',
      'Pay $5,000 — the special limit for business property.',
      'Void the entire policy from inception.'
    ],
    answer: 1,
    explanation:
      'Home-based business changes both occupancy and exposure. SC 4 obliges the insured to notify the insurer. Even where claims aren\'t denied outright, standard HO policies cap on-premises business property at $2,500-$5,000 — a Home Business endorsement is essential.'
  },
  {
    id: 97,
    category: 'Manitoba Statutory Conditions',
    question: 'When the insurer mails a termination notice by registered mail under SC 5, the 15-day notice period begins on:',
    options: [
      'The date the notice is mailed.',
      'The date the registered letter (or notification of it) is DELIVERED to the insured\'s postal address.',
      'The date the insured opens the envelope.',
      'The next renewal date of the policy.'
    ],
    answer: 1,
    explanation:
      'SC 5(4) is explicit: the period starts on the day the registered letter or notification of it is delivered to the insured\'s postal address. Mailing alone does not start the clock; the insured must have an opportunity to receive it.'
  },
  {
    id: 98,
    category: 'Manitoba Statutory Conditions',
    question: 'An insurance contract takes effect at:',
    options: [
      '12:01 a.m. local time at the insurer\'s head office.',
      '12:01 a.m. standard time at the address of the NAMED INSURED.',
      'The moment the premium is paid in full.',
      'The moment the broker signs the application.'
    ],
    answer: 1,
    explanation:
      'The Insurance Act sets coverage commencement at 12:01 a.m. standard time at the named insured\'s address. Not the broker\'s address, not the insurer\'s, not the risk location — the named insured\'s address.'
  },
  {
    id: 99,
    category: 'Manitoba Statutory Conditions',
    question: 'A Proof of Loss under SC 6 must be:',
    options: [
      'Signed by the insured alone.',
      'Verified by STATUTORY DECLARATION (sworn before a commissioner of oaths or notary).',
      'Accompanied by a police report.',
      'Sworn by the broker as the insured\'s representative.'
    ],
    answer: 1,
    explanation:
      'Statutory declaration is a sworn statement carrying the same penalty for false swearing as evidence in court. This sworn requirement is why SC 7 (Fraud) bites so hard — lying in a sworn document invalidates the entire claim.'
  },
  {
    id: 100,
    category: 'Manitoba Statutory Conditions',
    question: 'SC 6 requires the Proof of Loss to include all of the following EXCEPT:',
    options: [
      'A complete inventory of damaged property.',
      'A statement that the loss was not caused by the insured\'s wilful act.',
      'The amount of other insurance covering the same loss.',
      'The insured\'s estimate of the property\'s future market value.'
    ],
    answer: 3,
    explanation:
      'SC 6(1)(b) lists specific particulars — inventory, when and how, denial of wilful cause, other insurances, the insured\'s interest, changes in title/use, and location at time of loss. Future market value is not part of the proof of loss.'
  },
  {
    id: 101,
    category: 'Manitoba Statutory Conditions',
    question: 'An insured inflates the value of stolen jewellery in her Proof of Loss by $5,000. The insurer proves the inflation. Under SC 7 — Fraud:',
    options: [
      'The insurer pays for the legitimate items and withholds the $5,000 fraudulent portion.',
      'The ENTIRE claim of the person who made the false declaration is INVALIDATED.',
      'The insurer pays in full but cancels future renewals.',
      'Only criminal fraud charges apply; the civil claim still stands.'
    ],
    answer: 1,
    explanation:
      'SC 7 is severe and deliberate: any fraud or wilfully false statement in a statutory declaration invalidates the WHOLE claim — not just the inflated portion. The policy intends to deter exaggeration entirely.'
  },
  {
    id: 102,
    category: 'Manitoba Statutory Conditions',
    question: 'An insured is hospitalized after a serious car accident and cannot file Proof of Loss for her home fire. Under SC 8 — Who May Give Notice and Proof:',
    options: [
      'The claim is automatically denied for non-filing.',
      'Her AGENT or a person to whom insurance money is payable may file when the insured\'s absence or inability is satisfactorily accounted for.',
      'The insurer must wait six months for the insured to recover.',
      'The insured forfeits her claim entirely.'
    ],
    answer: 1,
    explanation:
      'SC 8 protects insureds in genuine incapacity. The insured\'s agent (broker, family member with authority) or a payee under the policy may step in, provided the absence or inability is satisfactorily explained to the insurer.'
  },
  {
    id: 103,
    category: 'Manitoba Statutory Conditions',
    question: 'A pipe bursts and floods an insured\'s basement. The insured does nothing to stop the water before the adjuster arrives 6 hours later. Under SC 9 — Salvage:',
    options: [
      'Coverage applies in full regardless of the insured\'s actions.',
      'Failure to take reasonable mitigation steps may REDUCE the recoverable amount.',
      'The insured must hire a professional immediately or lose all coverage.',
      'SC 9 only applies after the loss has stopped on its own.'
    ],
    answer: 1,
    explanation:
      'SC 9 imposes an affirmative duty to take reasonable steps to prevent further damage. The insurer must contribute pro-rata to those reasonable expenses, but failure to mitigate when reasonably able may correspondingly reduce the claim.'
  },
  {
    id: 104,
    category: 'Manitoba Statutory Conditions',
    question: 'After a major fire, the insured attempts to abandon the damaged home to the insurer in exchange for the full policy limit. Under SC 10:',
    options: [
      'The insured may abandon insured property to the insurer at any time.',
      'Abandonment to the insurer requires the INSURER\'S CONSENT — it cannot be forced on the insurer.',
      'Abandonment is automatic when damage exceeds 75% of value.',
      'The insurer is required to take possession of all damaged property.'
    ],
    answer: 1,
    explanation:
      'SC 10 protects both sides: the insurer can\'t seize property without consent, and the insured can\'t dump property on the insurer without consent. The two-sided requirement preserves negotiating room for an orderly settlement.'
  },
  {
    id: 105,
    category: 'Manitoba Statutory Conditions',
    question: 'An insurer and insured disagree about the value of the loss. Under SC 11, the right to invoke the dispute-resolution process is available only after:',
    options: [
      'A court order has been obtained.',
      'BOTH a specific written demand for it AND delivery of the proof of loss to the insurer.',
      'The insurer agrees in writing.',
      '60 days have passed since notice of loss.'
    ],
    answer: 1,
    explanation:
      'SC 11(2) sets two preconditions: a written demand AND a delivered proof of loss. The proof of loss is what crystallizes what the insured is actually claiming; without it, the parties have nothing concrete to dispute.'
  },
  {
    id: 106,
    category: 'Manitoba Statutory Conditions',
    question: 'A fire loss occurs on January 15. The Proof of Loss is completed and delivered to the insurer on February 28. Under SC 12 (and absent a shorter period in the contract), the LATEST date for payment is:',
    options: [
      'March 30 (60 days from loss).',
      'April 29 (60 days from delivery of completed proof of loss).',
      'May 15 (90 days from loss).',
      'February 28 (same day as proof delivery).'
    ],
    answer: 1,
    explanation:
      'SC 12 ties the 60-day clock to completion and delivery of the proof of loss, not the date of loss itself. So the deadline runs from February 28: 60 days later is approximately April 29.'
  },
  {
    id: 107,
    category: 'Manitoba Statutory Conditions',
    question: 'The insurer elects to REPAIR rather than cash-pay the damaged property. Under SC 13, the insurer\'s written notice of election must be given:',
    options: [
      'Within 15 days of the loss.',
      'Within 30 days after receipt of the proof of loss.',
      'Within 45 days after the proof of loss.',
      'Within 60 days after the loss.'
    ],
    answer: 1,
    explanation:
      'SC 13: the election must be in writing within 30 days of receiving the proof of loss, and work must commence within 45 days. Memorize 30/45.'
  },
  {
    id: 108,
    category: 'Manitoba Statutory Conditions',
    question: 'Your client phones her broker after a loss; the broker forgets to relay the call. Two months later, the insurer learns of the loss and denies the claim for late notice. Under SC 14:',
    options: [
      'Notice to the broker counts as notice to the insurer automatically.',
      'Written notice to the insurer must go to the CHIEF AGENCY or HEAD OFFICE — broker notice alone does not satisfy SC 14.',
      'Verbal notice is always sufficient.',
      'The insurer cannot deny a claim for late notice under any circumstances.'
    ],
    answer: 1,
    explanation:
      'SC 14 prescribes WHERE notice must go. The broker\'s knowledge does not bind the insurer for SC 14 purposes. (However, the broker likely faces an E&O claim from the insured for failing to act on the notice given to them.)'
  },
  {
    id: 109,
    category: 'Industry & Ethics',
    question: 'A broker offers a prospect a free $800 Apple iPad if she places all of her insurance through his brokerage. This is:',
    options: [
      'Permitted because it builds client loyalty.',
      'Prohibited as an UNAUTHORIZED INDUCEMENT (rebating) and may result in licence suspension or termination.',
      'Permitted if the gift is worth less than $500.',
      'Permitted only if the offer is in writing.'
    ],
    answer: 1,
    explanation:
      'Inducements and rebates outside what the insurer has authorized are prohibited under the Insurance Council of Manitoba\'s rules. Authorized discounts approved by the insurer are fine; unauthorized gifts/cash/rewards are not, regardless of value.'
  },
  {
    id: 110,
    category: 'Industry & Ethics',
    question: 'A broker emails a client\'s claim history to a different insurer without the client\'s consent in order to obtain a quote. This violates:',
    options: [
      'SC 1 — Misrepresentation.',
      'PIPEDA and the broker\'s fiduciary duty to maintain client confidentiality.',
      'SC 14 — Notice.',
      'No rule — brokers may share client information freely.'
    ],
    answer: 1,
    explanation:
      'PIPEDA (federal privacy law) and the broker\'s fiduciary obligations require informed consent before disclosing personal information. Even shopping for a "better quote" must be done with the client\'s consent.'
  },
  {
    id: 111,
    category: 'Industry & Ethics',
    question: 'A brokerage charges a $50 service fee in addition to the insurance premium. The fee covers policy administration. This is:',
    options: [
      'Permitted IF it is properly DISCLOSED to the client in advance and not used to evade commission/rebating rules.',
      'Always prohibited as an inducement.',
      'Permitted only on commercial policies.',
      'Permitted only with the insurer\'s written approval.'
    ],
    answer: 0,
    explanation:
      'Unbundled service or administration fees are allowed as long as the client is informed in advance and the arrangement doesn\'t mask rebating. Lack of disclosure or commingling with insurer-paid commissions can convert a legitimate fee into a violation.'
  },
  {
    id: 112,
    category: 'Industry & Ethics',
    question: 'A broker collects $2,000 in premium cash from a client. The broker should:',
    options: [
      'Deposit the funds in his personal account until forwarded.',
      'Hold the premium in a TRUST ACCOUNT separate from operating funds and remit it to the insurer as required by the Insurance Act.',
      'Use the funds to pay business expenses until the insurer demands payment.',
      'Send the cash physically to the insurer the same day.'
    ],
    answer: 1,
    explanation:
      'Premium funds are not the broker\'s money — they are TRUST FUNDS held on behalf of the insurer/insured. A separate trust account is required. Mingling with operating funds is a textbook violation that has cost many brokers their licence.'
  },
  {
    id: 113,
    category: 'Industry & Ethics',
    question: 'A bank approves a mortgage only on condition that the borrower purchases home insurance from the bank\'s preferred insurer. This is:',
    options: [
      'Permitted bundling.',
      'Prohibited TIED SELLING under federal banking regulations.',
      'Permitted if the rates are competitive.',
      'Permitted only on commercial mortgages.'
    ],
    answer: 1,
    explanation:
      'Tied selling — forcing the purchase of one product as a condition of another — is prohibited under the federal Bank Act. A bank may PREFER its affiliate but cannot REQUIRE its use. Brokers should be ready to explain this protection to mortgaging clients.'
  },

  // ─── Property & Liability Core Concepts (22 questions, IDs 114-135) ───
  {
    id: 114,
    category: 'Commercial',
    question: 'A warehouse valued at $1,000,000 (80% co-insurance) is insured for $600,000. A $200,000 fire loss occurs. The insurer PAYS:',
    options: ['$200,000', '$150,000', '$160,000', '$120,000'],
    answer: 1,
    explanation:
      'Required = $1,000,000 × 80% = $800,000. Carried = $600,000. Insurer pays (Carried / Required) × Loss = (600,000 / 800,000) × 200,000 = $150,000. The insured absorbs the remaining $50,000.'
  },
  {
    id: 115,
    category: 'Commercial',
    question: 'A building valued at $500,000 (80% co-insurance) is insured for $300,000. The building is TOTALLY DESTROYED by fire. The insurer pays:',
    options: [
      '$300,000 (policy limit).',
      '$375,000 (proportional formula).',
      '$400,000 (80% × ACV).',
      '$200,000.'
    ],
    answer: 0,
    explanation:
      'Co-insurance penalty applies only to PARTIAL losses. On a total loss the insurer pays the policy limit (capped by ACV/RC). The penalty doesn\'t kick in when the loss exhausts the entire policy. So $300K is paid.'
  },
  {
    id: 116,
    category: 'Property',
    question: 'A home has been VACANT for 45 days when fire breaks out. A standard homeowners policy:',
    options: [
      'Pays the full claim — vacancy is not a factor.',
      'May VOID or SUSPEND coverage because vacancy beyond the permitted period (typically 30 days) is a policy condition breach.',
      'Reduces payment by 50%.',
      'Pays subject only to a higher deductible.'
    ],
    answer: 1,
    explanation:
      'Most HO policies suspend coverage when the home is vacant beyond a stated period (usually 30 days). Vacant homes have heightened moral hazard, fire risk, vandalism risk and water-damage risk. A Vacancy Permit endorsement is required for longer absences.'
  },
  {
    id: 117,
    category: 'Indemnity',
    question: 'A homeowner has REPLACEMENT COST coverage on her dwelling. After a fire she decides NOT to rebuild and instead takes a cash settlement. Most RC policies pay:',
    options: [
      'Full replacement cost regardless of rebuild.',
      'ACTUAL CASH VALUE (RC minus depreciation), because rebuilding is required to trigger the depreciation waiver.',
      'Nothing — RC requires rebuilding within the policy period.',
      '75% of replacement cost.'
    ],
    answer: 1,
    explanation:
      'Replacement Cost is a CONDITIONAL upgrade — depreciation is waived ONLY if the insured actually rebuilds or replaces (often within a stipulated timeframe). Without rebuilding, the settlement reverts to ACV. This is one of the most common claim surprises.'
  },
  {
    id: 118,
    category: 'Indemnity',
    question: 'A rare painting is insured under a VALUED POLICY for $50,000 (agreed value). The painting is destroyed. The insurer pays:',
    options: [
      '$50,000 regardless of current market value.',
      'Current market value, even if less than $50,000.',
      'The lesser of $50,000 or current market value.',
      'ACV minus depreciation.'
    ],
    answer: 0,
    explanation:
      'Valued/agreed-value policies pay the stated amount on total loss. They exist for property where market valuation at the time of loss would be impractical or unfair (fine art, antiques). This is one of the few exceptions to strict indemnity.'
  },
  {
    id: 119,
    category: 'Indemnity',
    question: 'Your client owns a cabin built on land she LEASES from the province. The cabin burns down. Her insurable interest is:',
    options: [
      'Zero — she doesn\'t own the land.',
      'Present in the STRUCTURE she owns, even though the land is leased.',
      'Limited to 50% of value.',
      'Present only if the lease exceeds 25 years.'
    ],
    answer: 1,
    explanation:
      'Insurable interest exists wherever the insured stands to suffer financial loss. Ownership of the structure creates that interest even when the underlying land is leased. The amount of insurance should reflect the cabin\'s value, not the land\'s.'
  },
  {
    id: 120,
    category: 'Indemnity',
    question: 'A pair of matched antique chairs valued together at $12,000 is insured. One chair is destroyed in a fire; the other survives. The surviving chair is now worth only $3,000 (versus $6,000 when paired). The PAIR & SET CLAUSE pays:',
    options: [
      '$12,000 — full pair value.',
      '$6,000 — value of one chair.',
      '$9,000 — claimed pair value MINUS the value of the surviving chair ($12K − $3K).',
      '$0 — partial loss only.'
    ],
    answer: 2,
    explanation:
      'Pair & Set Clause settles as: (claimed pair value) − (value of survivor). The clause acknowledges that destroying half a set diminishes the whole, but the insurer is not paying for property that still exists.'
  },
  {
    id: 121,
    category: 'Property',
    question: 'A home insured for $400,000 is destroyed by fire. The insured had misrepresented prior claims on the application; the insurer claims the policy is void under SC 1. The home has a $250,000 mortgage. Under the STANDARD MORTGAGE CLAUSE:',
    options: [
      'The insurer denies the entire claim, including the mortgagee\'s interest.',
      'The MORTGAGEE\'S interest ($250,000) is still protected; the insurer pays the mortgagee even though the insured\'s acts would void coverage.',
      'The mortgagee receives 50% only.',
      'The mortgagee must sue the insured directly.'
    ],
    answer: 1,
    explanation:
      'The Standard Mortgage Clause creates an independent contract between insurer and mortgagee. The insured\'s misrepresentation does not strip the mortgagee of protection — the mortgagee\'s lien is paid up to the loan balance, then the insurer can subrogate against the insured.'
  },
  {
    id: 122,
    category: 'Indemnity',
    question: 'A landlord and tenant agree to mutually waive their rights of subrogation in the lease. After a tenant\'s negligent fire damages the landlord\'s building, the landlord\'s insurer:',
    options: [
      'May still subrogate against the tenant.',
      'Cannot subrogate against the tenant because of the contractual waiver — the waiver binds the insurer through the insured.',
      'Must double-pay both parties.',
      'Is automatically released from the claim.'
    ],
    answer: 1,
    explanation:
      'A subrogation waiver in the underlying contract eliminates the insurer\'s post-claim right of recovery against the named party. Brokers must check leases for such clauses; an insurer may insist on a waiver endorsement (often available at no charge).'
  },
  {
    id: 123,
    category: 'Property',
    question: 'A policy is bound by the broker on March 15 at 2 p.m. The declarations show an effective date of March 16. Coverage actually begins:',
    options: [
      'March 15 at 2 p.m. (binder moment).',
      'March 16 at 12:01 a.m. standard time at the address of the named insured.',
      'March 16 when the policy is mailed.',
      'The next renewal date.'
    ],
    answer: 1,
    explanation:
      'A binder bridges the gap between the broker\'s commitment and the policy effective date. While the binder ensures coverage if a loss occurs before the policy is issued, the formal contract still starts at 12:01 a.m. on the effective date at the named insured\'s address.'
  },
  {
    id: 124,
    category: 'Liability',
    question: 'A pedestrian slips on an icy sidewalk that the city had failed to salt. She breaks her wrist AND her phone (in her pocket). What is the PROXIMATE CAUSE of both losses?',
    options: [
      'Her own clumsiness.',
      'The icy sidewalk caused by the city\'s failure to maintain it.',
      'The phone manufacturer.',
      'The cold weather alone.'
    ],
    answer: 1,
    explanation:
      'Proximate cause is the dominant, direct cause in an unbroken chain of events leading to the loss. The failure to salt was a single act that caused both the bodily injury and the property damage. The cold weather is too remote; her clumsiness is not the dominant cause.'
  },
  {
    id: 125,
    category: 'Liability',
    question: 'A driver hits a jaywalking pedestrian at night. The court finds the driver 70% at fault and the pedestrian 30% at fault. The pedestrian\'s total damages are $100,000. Under CONTRIBUTORY NEGLIGENCE rules in Manitoba:',
    options: [
      'The pedestrian receives the full $100,000 (joint and several).',
      'The pedestrian receives $70,000 ($100,000 reduced by her 30% contribution).',
      'The pedestrian recovers nothing — any contributory negligence bars recovery.',
      'Damages are split equally regardless of percentage fault.'
    ],
    answer: 1,
    explanation:
      'Manitoba uses contributory-negligence apportionment: damages are reduced by the plaintiff\'s percentage of fault. The pedestrian recovers $70,000. (Some U.S. states still use pure contributory negligence that bars recovery entirely — that is not the Canadian rule.)'
  },
  {
    id: 126,
    category: 'Liability',
    question: 'Under Manitoba\'s Limitations Act, the general limitation period for suing an insurer on a fire/property policy is now:',
    options: ['1 year', '2 years', '5 years', '6 years'],
    answer: 1,
    explanation:
      'Manitoba\'s historical 1-year fire-policy limitation was harmonized to 2 years under the modern Limitations Act. Brokers should still encourage insureds to act promptly — proof-of-loss timelines (SC 6) and statutory cancellation periods are shorter than the lawsuit limitation.'
  },
  {
    id: 127,
    category: 'Liability',
    question: 'A homeowner hires an independent landscaping contractor who negligently damages a neighbour\'s fence. The homeowner\'s liability:',
    options: [
      'Is automatic via vicarious liability for the contractor.',
      'Is generally NOT triggered — vicarious liability extends to employees, not independent contractors (with narrow exceptions like inherently dangerous work).',
      'Arises only if the homeowner was watching the work.',
      'Is excluded under Section II of the homeowner policy.'
    ],
    answer: 1,
    explanation:
      'Independent contractors are responsible for their own torts. Hirers generally avoid vicarious liability if they exercised reasonable care selecting the contractor — but inherently dangerous work (blasting, tree felling near power lines) can still attract liability.'
  },
  {
    id: 128,
    category: 'Liability',
    question: 'A blasting contractor uses dynamite for foundation excavation. Debris damages a neighbouring shop. Liability is:',
    options: [
      'Only if negligence is proven.',
      'STRICT — blasting is an inherently dangerous activity under the Rylands v. Fletcher principle; liability arises without proof of fault.',
      'Limited to $10,000.',
      'None — accepted construction risk.'
    ],
    answer: 1,
    explanation:
      'Inherently dangerous activities attract strict liability: the defendant is liable even without proof of negligence. CGL policies usually exclude blasting unless specifically endorsed; specialty contractor policies handle this exposure.'
  },
  {
    id: 129,
    category: 'Liability',
    question: 'A jury awards a plaintiff $100,000 in COMPENSATORY damages and $50,000 in PUNITIVE damages. Under a typical CGL policy:',
    options: [
      'Both amounts are covered.',
      'The $100,000 compensatory is covered; the $50,000 punitive is GENERALLY NOT covered as a matter of public policy.',
      'Only the punitive amount is covered.',
      'Neither is covered.'
    ],
    answer: 1,
    explanation:
      'Public policy prevents insurance from defeating the purpose of punishment. Compensatory damages are designed to make the plaintiff whole and are routinely insured; punitive damages punish the wrongdoer and are generally not insurable.'
  },
  {
    id: 130,
    category: 'Liability',
    question: 'A trespasser climbs a fence and falls into a marked construction pit on the property. Under occupier\'s liability principles, the owner owes the trespasser:',
    options: [
      'The same duty of care as an invitee.',
      'A LIMITED duty — generally not to wilfully or recklessly cause harm, and to warn of hidden dangers known to the occupier.',
      'No duty whatsoever.',
      'The highest duty of care.'
    ],
    answer: 1,
    explanation:
      'Occupier\'s duty varies by entrant type: highest duty to invitees (paying customers), intermediate to licensees (social guests), and lowest to trespassers. To trespassers the occupier must avoid wilful or reckless injury and warn of HIDDEN known hazards.'
  },
  {
    id: 131,
    category: 'Liability',
    question: 'A homeowner\'s dog bites a guest at a barbecue. Under Section II Personal Liability of the homeowner policy:',
    options: [
      'Dog bites are completely excluded.',
      'Coverage typically responds (subject to specific BREED exclusions and prior-bite exclusions in some policies).',
      'Coverage applies only at the insured location.',
      'Section I property responds instead.'
    ],
    answer: 1,
    explanation:
      'Section II covers liability arising from personal activities — including the insured\'s pet — anywhere in the world. Some insurers exclude specific breeds (Pit Bull, Rottweiler, etc.) or dogs with a known bite history. Brokers should ask.'
  },
  {
    id: 132,
    category: 'Liability',
    question: 'A roofing contractor completes a job in 2023. In 2025 the roof leaks, causing damage to the homeowner\'s contents. The contractor\'s CGL coverage that responds is:',
    options: [
      'Premises & Operations.',
      'Personal Injury.',
      'Completed Operations.',
      'Hired & Non-Owned Auto.'
    ],
    answer: 2,
    explanation:
      'Property damage flowing from completed work falls under Completed Operations. Premises & Operations covers harm during the actual work and at the contractor\'s premises. Without Completed Operations, contractors are exposed for years after every job.'
  },
  {
    id: 133,
    category: 'Liability',
    question: 'Under a typical CGL policy, DEFENSE COSTS are:',
    options: [
      'Included WITHIN the policy limit and reduce the amount available for damages.',
      'Paid in ADDITION to the policy limit (Supplementary Payments).',
      'Only paid if the insured ultimately wins the claim.',
      'Borne entirely by the insured.'
    ],
    answer: 1,
    explanation:
      'Most CGL policies pay defense costs as Supplementary Payments — in addition to the limit. This is hugely valuable because long defenses can dwarf the underlying damages. Watch for policies that have "defense within limits" wording, however, where defense erodes the limit.'
  },
  {
    id: 134,
    category: 'Liability',
    question: 'A professional liability policy written on a CLAIMS-MADE basis covers:',
    options: [
      'Acts during the policy period regardless of when the claim is filed.',
      'Claims FIRST MADE during the policy period, regardless of when the underlying act occurred (subject to any retroactive date).',
      'All acts ever performed by the insured.',
      'Only acts that resulted in payment during the policy period.'
    ],
    answer: 1,
    explanation:
      'Claims-made coverage triggers based on WHEN THE CLAIM IS REPORTED, subject to a retroactive date. This is common for E&O, D&O, and malpractice. Continuous coverage matters — a gap can leave past acts uncovered. Tail (extended reporting) coverage closes the gap.'
  },
  {
    id: 135,
    category: 'Liability',
    question: 'A husband and wife are both named insureds on a homeowner policy. The wife trips the husband during housework, injuring him. The CROSS-LIABILITY EXCLUSION (insured-vs-insured) typically:',
    options: [
      'Allows the husband to sue the wife and recover under the policy.',
      'EXCLUDES claims between insureds on the same policy.',
      'Applies only when damages exceed $5,000.',
      'Applies only to commercial policies.'
    ],
    answer: 1,
    explanation:
      'Cross-liability/insured-vs-insured exclusions prevent insureds on the same policy from suing each other to access the policy. This avoids collusion. (Workers Compensation, similarly, prevents employees from suing employers covered by WCB.)'
  },

  // ─── Commercial & Travel Insurance (18 questions, IDs 136-153) ────────
  {
    id: 136,
    category: 'Commercial',
    question: 'A customer slips in a coffee shop and is injured during normal business hours. Which CGL coverage responds?',
    options: [
      'Premises and Operations Liability',
      'Products Liability',
      'Completed Operations',
      'Personal Injury'
    ],
    answer: 0,
    explanation:
      'A slip-and-fall on the insured\'s premises during ongoing business is the textbook Premises and Operations claim. Products would apply if the harm came from a defective product; Personal Injury covers libel/slander/false arrest, not bodily injuries.'
  },
  {
    id: 137,
    category: 'Commercial',
    question: 'An office manager has been embezzling funds from the employer for two years. Which coverage responds?',
    options: [
      'CGL — third-party liability.',
      'Crime / Employee Dishonesty (Fidelity) bond.',
      'Commercial Property.',
      'Errors & Omissions.'
    ],
    answer: 1,
    explanation:
      'Employee theft is specifically covered by a Fidelity (Employee Dishonesty) bond or Crime policy. CGL excludes intentional acts and claims by insureds; property policies exclude theft of money. E&O is for negligent professional services, not employee theft.'
  },
  {
    id: 138,
    category: 'Commercial',
    question: 'A delivery van used 100% for the insured\'s business should be insured under:',
    options: [
      'Personal Autopac with a Business Use endorsement.',
      'Commercial Auto / Business Auto Policy (typically a Commercial Autopac classification through MPI).',
      'Basic Autopac only.',
      'Homeowner Section II.'
    ],
    answer: 1,
    explanation:
      'Vehicles used full-time for business require a commercial use classification. Coverage exists through MPI for commercial use; failure to declare commercial use is a material misrepresentation that can void claims.'
  },
  {
    id: 139,
    category: 'Commercial',
    question: 'A factory boiler explodes during routine operation, damaging the building and stock. Standard property policies generally EXCLUDE this; the proper coverage is:',
    options: [
      'CGL liability.',
      'Equipment Breakdown (formerly Boiler & Machinery) coverage.',
      'Crime coverage.',
      'Cyber insurance.'
    ],
    answer: 1,
    explanation:
      'Equipment Breakdown covers sudden, accidental mechanical or electrical breakdown — including boilers, pressure vessels, motors, transformers. Property policies typically exclude this internal cause; the coverage gap is filled by Equipment Breakdown.'
  },
  {
    id: 140,
    category: 'Commercial',
    question: 'A contractor must guarantee completion of a $2 million construction project. The contractor obtains a:',
    options: [
      'Fidelity bond.',
      'Performance Surety Bond.',
      'CGL liability policy.',
      'Builder\'s Risk policy.'
    ],
    answer: 1,
    explanation:
      'A Performance (Surety) Bond guarantees the obligee (project owner) that the contractor (principal) will complete the project. If the contractor defaults, the surety steps in. Builder\'s Risk covers physical damage to the project; CGL covers third-party injury/damage.'
  },
  {
    id: 141,
    category: 'Commercial',
    question: 'An auto repair shop has customer vehicles damaged in a shop fire. The shop needs:',
    options: [
      'Standard property policy on the shop building only.',
      'A Garage Policy / Bailee coverage that protects customer property in the shop\'s care, custody, or control.',
      'Each customer\'s personal Autopac to respond.',
      'CGL premises coverage.'
    ],
    answer: 1,
    explanation:
      'Customer vehicles are property of others in the shop\'s care, custody, or control (CCC). Standard property and CGL exclude CCC exposures. A Garage Policy or specialty Bailee coverage is the right answer.'
  },
  {
    id: 142,
    category: 'Specialty',
    question: 'A jeweller carries diamond rings to trade shows around Canada. The best coverage is:',
    options: [
      'Standard property policy at the office location only.',
      'A Jeweller\'s Block Floater / Inland Marine policy covering goods in transit and at off-premises locations.',
      'CGL — premises only.',
      'Builder\'s Risk.'
    ],
    answer: 1,
    explanation:
      'Inland marine "floaters" cover specific property that moves — jewellery, fine art, contractor\'s equipment, scheduled valuables. The Jeweller\'s Block is the industry-standard form for this exposure.'
  },
  {
    id: 143,
    category: 'Commercial',
    question: 'A retail store carries $500,000 of stock. The policy requires 80% co-insurance. The owner buys $300,000 of insurance. A $40,000 theft loss occurs (assume covered peril). The insurer pays:',
    options: ['$40,000', '$30,000', '$24,000', '$20,000'],
    answer: 1,
    explanation:
      'Required = $500,000 × 80% = $400,000. Carried = $300,000. Insurer pays (300,000 / 400,000) × 40,000 = $30,000. The insured absorbs the remaining $10,000 due to underinsurance.'
  },
  {
    id: 144,
    category: 'Commercial',
    question: 'A retail tenant installs $30,000 of custom store fixtures in a leased shopping mall space. These fixtures should be insured as:',
    options: [
      'The landlord\'s responsibility under the lease.',
      'Tenant\'s Improvements & Betterments under the tenant\'s OWN property policy (as building coverage).',
      'Equipment coverage in the tenant\'s policy.',
      'Uninsurable because they\'re attached to the landlord\'s building.'
    ],
    answer: 1,
    explanation:
      'Tenant\'s improvements/betterments belong to the lease (and the landlord at lease end), but the TENANT has the insurable interest during the lease term and must insure them as building coverage on her own commercial policy.'
  },
  {
    id: 145,
    category: 'Specialty',
    question: 'The main difference between Trip CANCELLATION and Trip INTERRUPTION insurance is:',
    options: [
      'Cancellation pays BEFORE departure; Interruption pays AFTER departure has begun.',
      'Cancellation is for medical reasons; Interruption is for weather only.',
      'Cancellation has higher limits than Interruption.',
      'They are identical.'
    ],
    answer: 0,
    explanation:
      'Cancellation reimburses prepaid costs lost when a covered reason forces cancellation BEFORE departure. Interruption reimburses unused trip costs + extra return costs when a covered event occurs DURING the trip. Most travel packages bundle both.'
  },
  {
    id: 146,
    category: 'Specialty',
    question: 'A traveller with diabetes wants emergency medical coverage abroad. Under most travel policies, the PRE-EXISTING CONDITION clause means:',
    options: [
      'Diabetes is always excluded.',
      'Coverage applies only if the condition has been MEDICALLY STABLE for a defined period (e.g., 90 or 180 days) prior to departure.',
      'An extra premium is automatic regardless of stability.',
      'The policy is void.'
    ],
    answer: 1,
    explanation:
      'Travel policies typically cover pre-existing conditions if they\'ve been "stable" — no new symptoms, no medication or dosage changes, no doctor visits about the condition — for the stipulated period (often 90 to 180 days). Stability is the key concept.'
  },
  {
    id: 147,
    category: 'Specialty',
    question: 'A traveller had a medication DOSAGE CHANGE two weeks before departure. On day 3 of the trip, she has a heart attack. The STABILITY clause typically considers this:',
    options: [
      'Stable — the change was small.',
      'UNSTABLE — a medication change within the stability period (e.g., 90 days) destabilizes the condition; coverage may be denied.',
      'Stable as long as the heart attack was unexpected.',
      'Stable because it was a dosage change, not a new medication.'
    ],
    answer: 1,
    explanation:
      'Dosage changes are commonly treated as destabilization, even for the same medication. Brokers should warn travellers that medical changes shortly before departure can void pre-existing-condition coverage; pre-trip stability is the critical review point.'
  },
  {
    id: 148,
    category: 'Specialty',
    question: 'Emergency medical evacuation under a travel policy covers:',
    options: [
      'A first-class flight home for any reason the traveller chooses.',
      'Medically necessary transport from the location of illness/injury to the nearest appropriate facility, or repatriation to Canada when medically required.',
      'Family travel costs only.',
      'Lost-luggage transport.'
    ],
    answer: 1,
    explanation:
      'Evacuation/repatriation is paid when medically necessary as determined by the insurer\'s medical team. It is not a discretionary perk. International evacuations can easily exceed $100,000; this is one of the most valuable parts of a travel policy.'
  },
  {
    id: 149,
    category: 'Specialty',
    question: 'A pregnant Manitoban plans to travel to Europe at 32 weeks gestation. Most travel medical policies:',
    options: [
      'Cover any pregnancy-related event regardless of timing.',
      'EXCLUDE pregnancy, childbirth, or related complications within a stipulated period (typically 4-9 weeks) of the expected delivery date.',
      'Cover only if it\'s the first pregnancy.',
      'Refuse to cover any pregnant traveller for any reason.'
    ],
    answer: 1,
    explanation:
      'Late-term pregnancy exclusions are standard because the insurer doesn\'t want to be the financial backstop for a planned overseas delivery. Earlier pregnancy is normally covered subject to the stability clause and underlying medical condition.'
  },
  {
    id: 150,
    category: 'Specialty',
    question: 'A traveller is injured while SKYDIVING on vacation. The travel medical policy likely:',
    options: [
      'Pays the full medical expense.',
      'EXCLUDES the claim — high-risk / adventure sports are typically excluded unless specifically endorsed.',
      'Pays after deducting an additional 25%.',
      'Pays only for hospital, not surgery.'
    ],
    answer: 1,
    explanation:
      'Hazardous-activity exclusions cover skydiving, paragliding, scuba below certain depths, mountaineering, racing, etc. Travellers planning these activities need an Adventure Sports rider or a specialty policy.'
  },
  {
    id: 151,
    category: 'Specialty',
    question: 'A traveller becomes ill from a virus during a pandemic. Whether the illness is covered:',
    options: [
      'Always — universal medical coverage applies.',
      'Depends on the policy wording — many policies post-2020 added specific pandemic provisions (some covering, some excluding); the policy must be reviewed carefully.',
      'Depends on the traveller\'s citizenship.',
      'Never — pandemics are always excluded.'
    ],
    answer: 1,
    explanation:
      'The travel-insurance market revised pandemic language extensively after COVID. Some policies now expressly cover pandemic illness; others exclude it once a government advisory is issued. Travellers and brokers must read the current wording before relying on assumed coverage.'
  },
  {
    id: 152,
    category: 'Specialty',
    question: 'A Manitoba resident suffers a heart attack while travelling in the U.S. Hospital bills are US$200,000. Manitoba Health (provincial coverage) typically pays:',
    options: [
      'The full US$200,000.',
      'A small fraction at the Manitoba provincial rate — leaving most of the bill uncovered (the gap is the reason travel insurance exists).',
      '80% of the bill.',
      'Nothing if the traveller also had travel insurance.'
    ],
    answer: 1,
    explanation:
      'Provincial health programs reimburse out-of-country medical at Manitoba rates, which are vastly below typical U.S. hospital charges. A short ICU stay can leave a family financially ruined without travel medical insurance — one of the strongest sales points in the line.'
  },
  {
    id: 153,
    category: 'Liability',
    question: 'A homeowner begins operating a HOME DAYCARE for paying clients. Standard Section II Personal Liability of her homeowner policy:',
    options: [
      'Automatically covers all daycare-related liability.',
      'Generally EXCLUDES business activities; she needs either a Home Day Care endorsement or a separate Commercial General Liability policy.',
      'Covers up to $25,000 of daycare claims only.',
      'Covers only injuries to neighbours, not paying clients.'
    ],
    answer: 1,
    explanation:
      'Section II excludes business pursuits. A paid home daycare introduces caregiving liability, children\'s injuries, and abuse/molestation exposure — none of which are within ordinary HO scope. A specific endorsement or separate commercial liability policy is essential, and many insurers refuse the risk altogether.'
  }
]
