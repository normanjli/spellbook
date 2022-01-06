import { gql } from "apollo-server-micro";
const dnd = gql`
  type Query {
    abilityScore(
      # Filter by fields
      filter: FilterFindOneAbilityScoreInput
      skip: Int
      sort: SortFindOneAbilityScoreInput
    ): AbilityScore
    abilityScores(
      # Filter by fields
      filter: FilterFindManyAbilityScoreInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyAbilityScoreInput
    ): [AbilityScore!]!
    alignment(
      # Filter by fields
      filter: FilterFindOneAlignmentInput
      skip: Int
      sort: SortFindOneAlignmentInput
    ): Alignment
    alignments(
      # Filter by fields
      filter: FilterFindManyAlignmentInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyAlignmentInput
    ): [Alignment!]!
    background(
      # Filter by fields
      filter: FilterFindOneBackgroundInput
      skip: Int
      sort: SortFindOneBackgroundInput
    ): Background
    backgrounds(
      # Filter by fields
      filter: FilterFindManyBackgroundInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyBackgroundInput
    ): [Background!]!
    condition(
      # Filter by fields
      filter: FilterFindOneConditionInput
      skip: Int
      sort: SortFindOneConditionInput
    ): Condition
    conditions(
      # Filter by fields
      filter: FilterFindManyConditionInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyConditionInput
    ): [Condition!]!
    class(
      # Filter by fields
      filter: FilterFindOneClassInput
      skip: Int
      sort: SortFindOneClassInput
    ): Class
    classes(
      # Filter by fields
      filter: FilterFindManyClassInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyClassInput
    ): [Class!]!
    damageType(
      # Filter by fields
      filter: FilterFindOneDamageTypeInput
      skip: Int
      sort: SortFindOneDamageTypeInput
    ): DamageType
    damageTypes(
      # Filter by fields
      filter: FilterFindManyDamageTypeInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyDamageTypeInput
    ): [DamageType!]!
    equipment(
      # Filter by fields
      filter: FilterFindOneEquipmentInput
      skip: Int
      sort: SortFindOneEquipmentInput
    ): Equipment
    equipments(
      # Filter by fields
      filter: FilterFindManyEquipmentInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyEquipmentInput
    ): [Equipment!]!
    equipmentCategory(
      # Filter by fields
      filter: FilterFindOneEquipmentCategoryInput
      skip: Int
      sort: SortFindOneEquipmentCategoryInput
    ): EquipmentCategory
    equipmentCategories(
      # Filter by fields
      filter: FilterFindManyEquipmentCategoryInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyEquipmentCategoryInput
    ): [EquipmentCategory!]!
    feat(
      # Filter by fields
      filter: FilterFindOneFeatInput
      skip: Int
      sort: SortFindOneFeatInput
    ): Feat
    feats(
      # Filter by fields
      filter: FilterFindManyFeatInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyFeatInput
    ): [Feat!]!
    feature(
      # Filter by fields
      filter: FilterFindOneFeatureInput
      skip: Int
      sort: SortFindOneFeatureInput
    ): Feature
    features(
      # Filter by fields
      filter: FilterFindManyFeatureInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyFeatureInput
    ): [Feature!]!
    language(
      # Filter by fields
      filter: FilterFindOneLanguageInput
      skip: Int
      sort: SortFindOneLanguageInput
    ): Language
    languages(
      # Filter by fields
      filter: FilterFindManyLanguageInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyLanguageInput
    ): [Language!]!
    level(
      # Filter by fields
      filter: FilterFindOneLevelInput
      skip: Int
      sort: SortFindOneLevelInput
    ): Level
    levels(
      # Filter by fields
      filter: FilterFindManyLevelInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyLevelInput
    ): [Level!]!
    magicItem(
      # Filter by fields
      filter: FilterFindOneMagicItemInput
      skip: Int
      sort: SortFindOneMagicItemInput
    ): MagicItem
    magicItems(
      # Filter by fields
      filter: FilterFindManyMagicItemInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyMagicItemInput
    ): [MagicItem!]!
    magicSchool(
      # Filter by fields
      filter: FilterFindOneMagicSchoolInput
      skip: Int
      sort: SortFindOneMagicSchoolInput
    ): MagicSchool
    magicSchools(
      # Filter by fields
      filter: FilterFindManyMagicSchoolInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyMagicSchoolInput
    ): [MagicSchool!]!
    monster(
      # Filter by fields
      filter: FilterFindOneMonsterInput
      skip: Int
      sort: SortFindOneMonsterInput
    ): Monster
    monsters(
      # Filter by fields
      filter: FilterFindManyMonsterInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyMonsterInput
    ): [Monster!]!
    proficiency(
      # Filter by fields
      filter: FilterFindOneProficiencyInput
      skip: Int
      sort: SortFindOneProficiencyInput
    ): Proficiency
    proficiencies(
      # Filter by fields
      filter: FilterFindManyProficiencyInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyProficiencyInput
    ): [Proficiency!]!
    race(
      # Filter by fields
      filter: FilterFindOneRaceInput
      skip: Int
      sort: SortFindOneRaceInput
    ): Race
    races(
      # Filter by fields
      filter: FilterFindManyRaceInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyRaceInput
    ): [Race!]!
    rule(
      # Filter by fields
      filter: FilterFindOneRuleInput
      skip: Int
      sort: SortFindOneRuleInput
    ): Rule
    rules(
      # Filter by fields
      filter: FilterFindManyRuleInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyRuleInput
    ): [Rule!]!
    ruleSection(
      # Filter by fields
      filter: FilterFindOneRuleSectionInput
      skip: Int
      sort: SortFindOneRuleSectionInput
    ): RuleSection
    ruleSections(
      # Filter by fields
      filter: FilterFindManyRuleSectionInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyRuleSectionInput
    ): [RuleSection!]!
    skill(
      # Filter by fields
      filter: FilterFindOneSkillInput
      skip: Int
      sort: SortFindOneSkillInput
    ): Skill
    skills(
      # Filter by fields
      filter: FilterFindManySkillInput
      skip: Int
      limit: Int = 100
      sort: SortFindManySkillInput
    ): [Skill!]!
    spell(
      # Filter by fields
      filter: FilterFindOneSpellInput
      skip: Int
      sort: SortFindOneSpellInput
    ): Spell
    spells(
      # Filter by fields
      filter: FilterFindManySpellInput
      skip: Int
      limit: Int = 100
      sort: SortFindManySpellInput
    ): [Spell!]!
    subclass(
      # Filter by fields
      filter: FilterFindOneSubclassInput
      skip: Int
      sort: SortFindOneSubclassInput
    ): Subclass
    subclasses(
      # Filter by fields
      filter: FilterFindManySubclassInput
      skip: Int
      limit: Int = 100
      sort: SortFindManySubclassInput
    ): [Subclass!]!
    subrace(
      # Filter by fields
      filter: FilterFindOneSubraceInput
      skip: Int
      sort: SortFindOneSubraceInput
    ): Subrace
    subraces(
      # Filter by fields
      filter: FilterFindManySubraceInput
      skip: Int
      limit: Int = 100
      sort: SortFindManySubraceInput
    ): [Subrace!]!
    trait(
      # Filter by fields
      filter: FilterFindOneTraitInput
      skip: Int
      sort: SortFindOneTraitInput
    ): Trait
    traits(
      # Filter by fields
      filter: FilterFindManyTraitInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyTraitInput
    ): [Trait!]!
    weaponProperty(
      # Filter by fields
      filter: FilterFindOneWeaponPropertyInput
      skip: Int
      sort: SortFindOneWeaponPropertyInput
    ): WeaponProperty
    weaponProperties(
      # Filter by fields
      filter: FilterFindManyWeaponPropertyInput
      skip: Int
      limit: Int = 100
      sort: SortFindManyWeaponPropertyInput
    ): [WeaponProperty!]!
  }

  type AbilityScore {
    _id: String!
    desc: [String]
    full_name: String
    index: String
    name: String
    skills(skip: Int, limit: Int = 100, sort: SortFindManySkillInput): [Skill!]!
    url: String
  }

  type Skill {
    _id: String!
    ability_score: SkillAbility_score
    desc: [String]
    index: String
    name: String
    url: String
  }

  type SkillAbility_score {
    index: String
    name: String
    url: String
  }

  enum SortFindManySkillInput {
    _ID_ASC
    _ID_DESC
    ABILITY_SCORE__INDEX_ASC
    ABILITY_SCORE__INDEX_DESC
    ABILITY_SCORE__NAME_ASC
    ABILITY_SCORE__NAME_DESC
    ABILITY_SCORE__URL_ASC
    ABILITY_SCORE__URL_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindOneAbilityScoreInput {
    _id: String
    desc: [String]
    full_name: String
    index: String
    name: String
    skills: [FilterFindOneAbilityScoreSkillsInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneAbilityScoreOperatorsInput
    OR: [FilterFindOneAbilityScoreInput!]
    AND: [FilterFindOneAbilityScoreInput!]
  }

  #
  input FilterFindOneAbilityScoreSkillsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  input FilterFindOneAbilityScoreOperatorsInput {
    _id: FilterFindOneAbilityScore_idOperatorsInput
    desc: FilterFindOneAbilityScoreDescOperatorsInput
    full_name: FilterFindOneAbilityScoreFull_nameOperatorsInput
    index: FilterFindOneAbilityScoreIndexOperatorsInput
    name: FilterFindOneAbilityScoreNameOperatorsInput
    url: FilterFindOneAbilityScoreUrlOperatorsInput
  }

  input FilterFindOneAbilityScore_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  scalar RegExpAsString

  input FilterFindOneAbilityScoreDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneAbilityScoreFull_nameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneAbilityScoreIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneAbilityScoreNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneAbilityScoreUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneAbilityScoreInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    FULL_NAME_ASC
    FULL_NAME_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyAbilityScoreInput {
    _id: String
    desc: [String]
    full_name: String
    index: String
    name: String
    skills: [FilterFindManyAbilityScoreSkillsInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyAbilityScoreOperatorsInput
    OR: [FilterFindManyAbilityScoreInput!]
    AND: [FilterFindManyAbilityScoreInput!]
  }

  #
  input FilterFindManyAbilityScoreSkillsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyAbilityScoreOperatorsInput {
    _id: FilterFindManyAbilityScore_idOperatorsInput
    desc: FilterFindManyAbilityScoreDescOperatorsInput
    full_name: FilterFindManyAbilityScoreFull_nameOperatorsInput
    index: FilterFindManyAbilityScoreIndexOperatorsInput
    name: FilterFindManyAbilityScoreNameOperatorsInput
    url: FilterFindManyAbilityScoreUrlOperatorsInput
  }

  input FilterFindManyAbilityScore_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAbilityScoreDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAbilityScoreFull_nameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAbilityScoreIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAbilityScoreNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAbilityScoreUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyAbilityScoreInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    FULL_NAME_ASC
    FULL_NAME_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  type Alignment {
    _id: String!
    desc: String
    abbreviation: String
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneAlignmentInput {
    _id: String
    desc: String
    abbreviation: String
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneAlignmentOperatorsInput
    OR: [FilterFindOneAlignmentInput!]
    AND: [FilterFindOneAlignmentInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneAlignmentOperatorsInput {
    _id: FilterFindOneAlignment_idOperatorsInput
    desc: FilterFindOneAlignmentDescOperatorsInput
    abbreviation: FilterFindOneAlignmentAbbreviationOperatorsInput
    index: FilterFindOneAlignmentIndexOperatorsInput
    name: FilterFindOneAlignmentNameOperatorsInput
    url: FilterFindOneAlignmentUrlOperatorsInput
  }

  input FilterFindOneAlignment_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneAlignmentDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneAlignmentAbbreviationOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneAlignmentIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneAlignmentNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneAlignmentUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneAlignmentInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    ABBREVIATION_ASC
    ABBREVIATION_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyAlignmentInput {
    _id: String
    desc: String
    abbreviation: String
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyAlignmentOperatorsInput
    OR: [FilterFindManyAlignmentInput!]
    AND: [FilterFindManyAlignmentInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyAlignmentOperatorsInput {
    _id: FilterFindManyAlignment_idOperatorsInput
    desc: FilterFindManyAlignmentDescOperatorsInput
    abbreviation: FilterFindManyAlignmentAbbreviationOperatorsInput
    index: FilterFindManyAlignmentIndexOperatorsInput
    name: FilterFindManyAlignmentNameOperatorsInput
    url: FilterFindManyAlignmentUrlOperatorsInput
  }

  input FilterFindManyAlignment_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAlignmentDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAlignmentAbbreviationOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAlignmentIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAlignmentNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyAlignmentUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyAlignmentInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    ABBREVIATION_ASC
    ABBREVIATION_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  type Background {
    _id: String!
    index: String
    name: String
    starting_proficiencies(
      skip: Int
      limit: Int = 100
      sort: SortFindManyProficiencyInput
    ): [Proficiency!]!
    language_options: BackgroundLanguage_options
    url: String
    starting_equipment: [BackgroundStarting_equipment]
    starting_equipment_options: [BackgroundStarting_equipment_options]
    feature: BackgroundFeature
    personality_traits: BackgroundPersonality_traits
    ideals: BackgroundIdeals
    bonds: BackgroundBonds
    flaws: BackgroundFlaws
  }

  type Proficiency {
    _id: String!
    classes: [ProficiencyClasses]
    index: String
    name: String
    races: [ProficiencyRaces]
    references: [ProficiencyReferences]
    type: String
    url: String
  }

  type ProficiencyClasses {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type ProficiencyRaces {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type ProficiencyReferences {
    index: String
    name: String
    type: String
    url: String
    _id: MongoID
  }

  enum SortFindManyProficiencyInput {
    _ID_ASC
    _ID_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    TYPE_ASC
    TYPE_DESC
    URL_ASC
    URL_DESC
  }

  type BackgroundLanguage_options {
    choose: Float
    from: [BackgroundLanguage_optionsFrom]
    type: String
  }

  type BackgroundLanguage_optionsFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type BackgroundStarting_equipment {
    equipment: BackgroundStarting_equipmentEquipment
    quantity: Float
  }

  type BackgroundStarting_equipmentEquipment {
    index: String
    name: String
    url: String
  }

  type BackgroundStarting_equipment_options {
    choose: Float
    from: [BackgroundStarting_equipment_optionsFrom]
    type: String
  }

  type BackgroundStarting_equipment_optionsFrom {
    equipment: BackgroundStarting_equipment_optionsFromEquipment
    quantity: Float
  }

  type BackgroundStarting_equipment_optionsFromEquipment {
    index: String
    name: String
    url: String
  }

  type BackgroundFeature {
    name: String
    desc: [String]
  }

  type BackgroundPersonality_traits {
    choose: Float
    from: [String]
    type: String
  }

  type BackgroundIdeals {
    choose: Float
    from: [BackgroundIdealsFrom]
    type: String
  }

  type BackgroundIdealsFrom {
    desc: String
    alignments: [BackgroundIdealsFromAlignments]
    _id: MongoID
  }

  type BackgroundIdealsFromAlignments {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type BackgroundBonds {
    choose: Float
    from: [String]
    type: String
  }

  type BackgroundFlaws {
    choose: Float
    from: [String]
    type: String
  }

  #
  input FilterFindOneBackgroundInput {
    _id: String
    index: String
    name: String
    starting_proficiencies: [FilterFindOneBackgroundStarting_proficienciesInput]
    language_options: FilterFindOneBackgroundLanguage_optionsInput
    url: String
    starting_equipment: [FilterFindOneBackgroundStarting_equipmentInput]
    starting_equipment_options: [FilterFindOneBackgroundStarting_equipment_optionsInput]
    feature: FilterFindOneBackgroundFeatureInput
    personality_traits: FilterFindOneBackgroundPersonality_traitsInput
    ideals: FilterFindOneBackgroundIdealsInput
    bonds: FilterFindOneBackgroundBondsInput
    flaws: FilterFindOneBackgroundFlawsInput

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneBackgroundOperatorsInput
    OR: [FilterFindOneBackgroundInput!]
    AND: [FilterFindOneBackgroundInput!]
  }

  #
  input FilterFindOneBackgroundStarting_proficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneBackgroundLanguage_optionsInput {
    choose: Float
    from: [FilterFindOneBackgroundLanguage_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneBackgroundLanguage_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneBackgroundStarting_equipmentInput {
    equipment: FilterFindOneBackgroundStarting_equipmentEquipmentInput
    quantity: Float
  }

  #
  input FilterFindOneBackgroundStarting_equipmentEquipmentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneBackgroundStarting_equipment_optionsInput {
    choose: Float
    from: [FilterFindOneBackgroundStarting_equipment_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneBackgroundStarting_equipment_optionsFromInput {
    equipment: FilterFindOneBackgroundStarting_equipment_optionsFromEquipmentInput
    quantity: Float
  }

  #
  input FilterFindOneBackgroundStarting_equipment_optionsFromEquipmentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneBackgroundFeatureInput {
    name: String
    desc: [String]
  }

  #
  input FilterFindOneBackgroundPersonality_traitsInput {
    choose: Float
    from: [String]
    type: String
  }

  #
  input FilterFindOneBackgroundIdealsInput {
    choose: Float
    from: [FilterFindOneBackgroundIdealsFromInput]
    type: String
  }

  #
  input FilterFindOneBackgroundIdealsFromInput {
    desc: String
    alignments: [FilterFindOneBackgroundIdealsFromAlignmentsInput]
    _id: MongoID
  }

  #
  input FilterFindOneBackgroundIdealsFromAlignmentsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneBackgroundBondsInput {
    choose: Float
    from: [String]
    type: String
  }

  #
  input FilterFindOneBackgroundFlawsInput {
    choose: Float
    from: [String]
    type: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneBackgroundOperatorsInput {
    _id: FilterFindOneBackground_idOperatorsInput
    index: FilterFindOneBackgroundIndexOperatorsInput
    name: FilterFindOneBackgroundNameOperatorsInput
    language_options: FilterFindOneBackgroundLanguage_optionsOperatorsInput
    url: FilterFindOneBackgroundUrlOperatorsInput
    feature: FilterFindOneBackgroundFeatureOperatorsInput
    personality_traits: FilterFindOneBackgroundPersonality_traitsOperatorsInput
    ideals: FilterFindOneBackgroundIdealsOperatorsInput
    bonds: FilterFindOneBackgroundBondsOperatorsInput
    flaws: FilterFindOneBackgroundFlawsOperatorsInput
  }

  input FilterFindOneBackground_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundLanguage_optionsOperatorsInput {
    choose: FilterFindOneBackgroundLanguage_optionsChooseOperatorsInput
    type: FilterFindOneBackgroundLanguage_optionsTypeOperatorsInput
  }

  input FilterFindOneBackgroundLanguage_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneBackgroundLanguage_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundFeatureOperatorsInput {
    name: FilterFindOneBackgroundFeatureNameOperatorsInput
    desc: FilterFindOneBackgroundFeatureDescOperatorsInput
  }

  input FilterFindOneBackgroundFeatureNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundFeatureDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundPersonality_traitsOperatorsInput {
    choose: FilterFindOneBackgroundPersonality_traitsChooseOperatorsInput
    from: FilterFindOneBackgroundPersonality_traitsFromOperatorsInput
    type: FilterFindOneBackgroundPersonality_traitsTypeOperatorsInput
  }

  input FilterFindOneBackgroundPersonality_traitsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneBackgroundPersonality_traitsFromOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundPersonality_traitsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundIdealsOperatorsInput {
    choose: FilterFindOneBackgroundIdealsChooseOperatorsInput
    type: FilterFindOneBackgroundIdealsTypeOperatorsInput
  }

  input FilterFindOneBackgroundIdealsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneBackgroundIdealsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundBondsOperatorsInput {
    choose: FilterFindOneBackgroundBondsChooseOperatorsInput
    from: FilterFindOneBackgroundBondsFromOperatorsInput
    type: FilterFindOneBackgroundBondsTypeOperatorsInput
  }

  input FilterFindOneBackgroundBondsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneBackgroundBondsFromOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundBondsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundFlawsOperatorsInput {
    choose: FilterFindOneBackgroundFlawsChooseOperatorsInput
    from: FilterFindOneBackgroundFlawsFromOperatorsInput
    type: FilterFindOneBackgroundFlawsTypeOperatorsInput
  }

  input FilterFindOneBackgroundFlawsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneBackgroundFlawsFromOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneBackgroundFlawsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneBackgroundInput {
    _ID_ASC
    _ID_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    LANGUAGE_OPTIONS__CHOOSE_ASC
    LANGUAGE_OPTIONS__CHOOSE_DESC
    LANGUAGE_OPTIONS__TYPE_ASC
    LANGUAGE_OPTIONS__TYPE_DESC
    URL_ASC
    URL_DESC
    FEATURE__NAME_ASC
    FEATURE__NAME_DESC
    FEATURE__DESC_ASC
    FEATURE__DESC_DESC
    PERSONALITY_TRAITS__CHOOSE_ASC
    PERSONALITY_TRAITS__CHOOSE_DESC
    PERSONALITY_TRAITS__FROM_ASC
    PERSONALITY_TRAITS__FROM_DESC
    PERSONALITY_TRAITS__TYPE_ASC
    PERSONALITY_TRAITS__TYPE_DESC
    IDEALS__CHOOSE_ASC
    IDEALS__CHOOSE_DESC
    IDEALS__TYPE_ASC
    IDEALS__TYPE_DESC
    BONDS__CHOOSE_ASC
    BONDS__CHOOSE_DESC
    BONDS__FROM_ASC
    BONDS__FROM_DESC
    BONDS__TYPE_ASC
    BONDS__TYPE_DESC
    FLAWS__CHOOSE_ASC
    FLAWS__CHOOSE_DESC
    FLAWS__FROM_ASC
    FLAWS__FROM_DESC
    FLAWS__TYPE_ASC
    FLAWS__TYPE_DESC
  }

  #
  input FilterFindManyBackgroundInput {
    _id: String
    index: String
    name: String
    starting_proficiencies: [FilterFindManyBackgroundStarting_proficienciesInput]
    language_options: FilterFindManyBackgroundLanguage_optionsInput
    url: String
    starting_equipment: [FilterFindManyBackgroundStarting_equipmentInput]
    starting_equipment_options: [FilterFindManyBackgroundStarting_equipment_optionsInput]
    feature: FilterFindManyBackgroundFeatureInput
    personality_traits: FilterFindManyBackgroundPersonality_traitsInput
    ideals: FilterFindManyBackgroundIdealsInput
    bonds: FilterFindManyBackgroundBondsInput
    flaws: FilterFindManyBackgroundFlawsInput

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyBackgroundOperatorsInput
    OR: [FilterFindManyBackgroundInput!]
    AND: [FilterFindManyBackgroundInput!]
  }

  #
  input FilterFindManyBackgroundStarting_proficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyBackgroundLanguage_optionsInput {
    choose: Float
    from: [FilterFindManyBackgroundLanguage_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyBackgroundLanguage_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyBackgroundStarting_equipmentInput {
    equipment: FilterFindManyBackgroundStarting_equipmentEquipmentInput
    quantity: Float
  }

  #
  input FilterFindManyBackgroundStarting_equipmentEquipmentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyBackgroundStarting_equipment_optionsInput {
    choose: Float
    from: [FilterFindManyBackgroundStarting_equipment_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyBackgroundStarting_equipment_optionsFromInput {
    equipment: FilterFindManyBackgroundStarting_equipment_optionsFromEquipmentInput
    quantity: Float
  }

  #
  input FilterFindManyBackgroundStarting_equipment_optionsFromEquipmentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyBackgroundFeatureInput {
    name: String
    desc: [String]
  }

  #
  input FilterFindManyBackgroundPersonality_traitsInput {
    choose: Float
    from: [String]
    type: String
  }

  #
  input FilterFindManyBackgroundIdealsInput {
    choose: Float
    from: [FilterFindManyBackgroundIdealsFromInput]
    type: String
  }

  #
  input FilterFindManyBackgroundIdealsFromInput {
    desc: String
    alignments: [FilterFindManyBackgroundIdealsFromAlignmentsInput]
    _id: MongoID
  }

  #
  input FilterFindManyBackgroundIdealsFromAlignmentsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyBackgroundBondsInput {
    choose: Float
    from: [String]
    type: String
  }

  #
  input FilterFindManyBackgroundFlawsInput {
    choose: Float
    from: [String]
    type: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyBackgroundOperatorsInput {
    _id: FilterFindManyBackground_idOperatorsInput
    index: FilterFindManyBackgroundIndexOperatorsInput
    name: FilterFindManyBackgroundNameOperatorsInput
    language_options: FilterFindManyBackgroundLanguage_optionsOperatorsInput
    url: FilterFindManyBackgroundUrlOperatorsInput
    feature: FilterFindManyBackgroundFeatureOperatorsInput
    personality_traits: FilterFindManyBackgroundPersonality_traitsOperatorsInput
    ideals: FilterFindManyBackgroundIdealsOperatorsInput
    bonds: FilterFindManyBackgroundBondsOperatorsInput
    flaws: FilterFindManyBackgroundFlawsOperatorsInput
  }

  input FilterFindManyBackground_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundLanguage_optionsOperatorsInput {
    choose: FilterFindManyBackgroundLanguage_optionsChooseOperatorsInput
    type: FilterFindManyBackgroundLanguage_optionsTypeOperatorsInput
  }

  input FilterFindManyBackgroundLanguage_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyBackgroundLanguage_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundFeatureOperatorsInput {
    name: FilterFindManyBackgroundFeatureNameOperatorsInput
    desc: FilterFindManyBackgroundFeatureDescOperatorsInput
  }

  input FilterFindManyBackgroundFeatureNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundFeatureDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundPersonality_traitsOperatorsInput {
    choose: FilterFindManyBackgroundPersonality_traitsChooseOperatorsInput
    from: FilterFindManyBackgroundPersonality_traitsFromOperatorsInput
    type: FilterFindManyBackgroundPersonality_traitsTypeOperatorsInput
  }

  input FilterFindManyBackgroundPersonality_traitsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyBackgroundPersonality_traitsFromOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundPersonality_traitsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundIdealsOperatorsInput {
    choose: FilterFindManyBackgroundIdealsChooseOperatorsInput
    type: FilterFindManyBackgroundIdealsTypeOperatorsInput
  }

  input FilterFindManyBackgroundIdealsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyBackgroundIdealsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundBondsOperatorsInput {
    choose: FilterFindManyBackgroundBondsChooseOperatorsInput
    from: FilterFindManyBackgroundBondsFromOperatorsInput
    type: FilterFindManyBackgroundBondsTypeOperatorsInput
  }

  input FilterFindManyBackgroundBondsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyBackgroundBondsFromOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundBondsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundFlawsOperatorsInput {
    choose: FilterFindManyBackgroundFlawsChooseOperatorsInput
    from: FilterFindManyBackgroundFlawsFromOperatorsInput
    type: FilterFindManyBackgroundFlawsTypeOperatorsInput
  }

  input FilterFindManyBackgroundFlawsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyBackgroundFlawsFromOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyBackgroundFlawsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyBackgroundInput {
    _ID_ASC
    _ID_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    LANGUAGE_OPTIONS__CHOOSE_ASC
    LANGUAGE_OPTIONS__CHOOSE_DESC
    LANGUAGE_OPTIONS__TYPE_ASC
    LANGUAGE_OPTIONS__TYPE_DESC
    URL_ASC
    URL_DESC
    FEATURE__NAME_ASC
    FEATURE__NAME_DESC
    FEATURE__DESC_ASC
    FEATURE__DESC_DESC
    PERSONALITY_TRAITS__CHOOSE_ASC
    PERSONALITY_TRAITS__CHOOSE_DESC
    PERSONALITY_TRAITS__FROM_ASC
    PERSONALITY_TRAITS__FROM_DESC
    PERSONALITY_TRAITS__TYPE_ASC
    PERSONALITY_TRAITS__TYPE_DESC
    IDEALS__CHOOSE_ASC
    IDEALS__CHOOSE_DESC
    IDEALS__TYPE_ASC
    IDEALS__TYPE_DESC
    BONDS__CHOOSE_ASC
    BONDS__CHOOSE_DESC
    BONDS__FROM_ASC
    BONDS__FROM_DESC
    BONDS__TYPE_ASC
    BONDS__TYPE_DESC
    FLAWS__CHOOSE_ASC
    FLAWS__CHOOSE_DESC
    FLAWS__FROM_ASC
    FLAWS__FROM_DESC
    FLAWS__TYPE_ASC
    FLAWS__TYPE_DESC
  }

  type Condition {
    _id: String!
    desc: [String]
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneConditionInput {
    _id: String
    desc: [String]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneConditionOperatorsInput
    OR: [FilterFindOneConditionInput!]
    AND: [FilterFindOneConditionInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneConditionOperatorsInput {
    _id: FilterFindOneCondition_idOperatorsInput
    desc: FilterFindOneConditionDescOperatorsInput
    index: FilterFindOneConditionIndexOperatorsInput
    name: FilterFindOneConditionNameOperatorsInput
    url: FilterFindOneConditionUrlOperatorsInput
  }

  input FilterFindOneCondition_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneConditionDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneConditionIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneConditionNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneConditionUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneConditionInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyConditionInput {
    _id: String
    desc: [String]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyConditionOperatorsInput
    OR: [FilterFindManyConditionInput!]
    AND: [FilterFindManyConditionInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyConditionOperatorsInput {
    _id: FilterFindManyCondition_idOperatorsInput
    desc: FilterFindManyConditionDescOperatorsInput
    index: FilterFindManyConditionIndexOperatorsInput
    name: FilterFindManyConditionNameOperatorsInput
    url: FilterFindManyConditionUrlOperatorsInput
  }

  input FilterFindManyCondition_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyConditionDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyConditionIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyConditionNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyConditionUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyConditionInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  type Class {
    _id: String!
    class_levels(
      skip: Int
      limit: Int = 100
      sort: SortFindManyLevelInput
    ): [Level!]!
    multi_classing: ClassMulti_classing
    hit_die: Float
    index: String
    name: String
    proficiencies(
      skip: Int
      limit: Int = 100
      sort: SortFindManyProficiencyInput
    ): [Proficiency!]!
    proficiency_choices: [ClassProficiency_choices]
    saving_throws: [ClassSaving_throws]
    spellcasting: ClassSpellcasting
    spells(skip: Int, limit: Int = 100, sort: SortFindManySpellInput): [Spell!]!
    starting_equipment: [ClassStarting_equipment]
    starting_equipment_options: [ClassStarting_equipment_options]
    subclasses: [ClassSubclasses]
    url: String
  }

  type Level {
    _id: String!
    ability_score_bonuses: Float
    class: LevelClass
    class_specific: LevelClass_specific
    features(
      skip: Int
      limit: Int = 100
      sort: SortFindManyFeatureInput
    ): [Feature!]!
    index: String
    level: Float
    prof_bonus: Float
    spellcasting: LevelSpellcasting
    subclass: LevelSubclass
    subclass_specific: LevelSubclass_specific
    url: String
  }

  type LevelClass {
    index: String
    name: String
    url: String
  }

  type LevelClass_specific {
    action_surges: Float
    arcane_recovery_levels: Float
    aura_range: Float
    bardic_inspiration_die: Float
    brutal_critical_dice: Float
    channel_divinity_charges: Float
    creating_spell_slots: [LevelClass_specificCreating_spell_slots]
    destroy_undead_cr: Float
    extra_attacks: Float
    favored_enemies: Float
    favored_terrain: Float
    indomitable_uses: Float
    invocations_known: Float
    ki_points: Float
    magical_secrets_max_5: Float
    magical_secrets_max_7: Float
    magical_secrets_max_9: Float
    martial_arts: LevelClass_specificMartial_arts
    metamagic_known: Float
    mystic_arcanum_level_6: Float
    mystic_arcanum_level_7: Float
    mystic_arcanum_level_8: Float
    mystic_arcanum_level_9: Float
    rage_count: Float
    rage_damage_bonus: Float
    sneak_attack: LevelClass_specificSneak_attack
    song_of_rest_die: Float
    sorcery_points: Float
    unarmored_movement: Float
    wild_shape_fly: Boolean
    wild_shape_max_cr: Float
    wild_shape_swim: Boolean
  }

  type LevelClass_specificCreating_spell_slots {
    sorcery_point_cost: Float
    spell_slot_level: Float
    _id: MongoID
  }

  type LevelClass_specificMartial_arts {
    dice_count: Float
    dice_value: Float
  }

  type LevelClass_specificSneak_attack {
    dice_count: Float
    dice_value: Float
  }

  type Feature {
    _id: String!
    choice: FeatureChoice
    class(skip: Int, sort: SortFindOneClassInput): Class
    desc: [String]
    parent: FeatureParent
    index: String
    level: Float
    name: String
    prerequisites: [FeaturePrerequisites]
    reference: String
    subclass(skip: Int, sort: SortFindOneSubclassInput): Subclass
    feature_specific: FeatureFeature_specific
    url: String
  }

  type FeatureChoice {
    choose: Float
    from: [FeatureChoiceFrom]
    type: String
  }

  type FeatureChoiceFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  enum SortFindOneClassInput {
    _ID_ASC
    _ID_DESC
    CLASS_LEVELS_ASC
    CLASS_LEVELS_DESC
    MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_ASC
    MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_DESC
    MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_ASC
    MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_DESC
    HIT_DIE_ASC
    HIT_DIE_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    SPELLCASTING__LEVEL_ASC
    SPELLCASTING__LEVEL_DESC
    SPELLCASTING__SPELLCASTING_ABILITY__INDEX_ASC
    SPELLCASTING__SPELLCASTING_ABILITY__INDEX_DESC
    SPELLCASTING__SPELLCASTING_ABILITY__NAME_ASC
    SPELLCASTING__SPELLCASTING_ABILITY__NAME_DESC
    SPELLCASTING__SPELLCASTING_ABILITY__URL_ASC
    SPELLCASTING__SPELLCASTING_ABILITY__URL_DESC
    SPELLS_ASC
    SPELLS_DESC
    URL_ASC
    URL_DESC
  }

  type FeatureParent {
    index: String
    name: String
    url: String
  }

  type FeaturePrerequisites {
    level: Float
    type: String
    _id: MongoID
  }

  type Subclass {
    _id: String!
    class: SubclassClass
    desc: [String]
    index: String
    name: String
    spells: [SubclassSpells]
    subclass_flavor: String
    subclass_levels(
      skip: Int
      limit: Int = 100
      sort: SortFindManyLevelInput
    ): [Level!]!
    url: String
  }

  type SubclassClass {
    index: String
    name: String
    url: String
  }

  type SubclassSpells {
    prerequisites: [SubclassSpellsPrerequisites]
    spell: SubclassSpellsSpell
    _id: MongoID
  }

  type SubclassSpellsPrerequisites {
    index: String
    name: String
    type: String
    url: String
    _id: MongoID
  }

  type SubclassSpellsSpell {
    index: String
    name: String
    url: String
  }

  enum SortFindManyLevelInput {
    _ID_ASC
    _ID_DESC
    ABILITY_SCORE_BONUSES_ASC
    ABILITY_SCORE_BONUSES_DESC
    CLASS__INDEX_ASC
    CLASS__INDEX_DESC
    CLASS__NAME_ASC
    CLASS__NAME_DESC
    CLASS__URL_ASC
    CLASS__URL_DESC
    CLASS_SPECIFIC__ACTION_SURGES_ASC
    CLASS_SPECIFIC__ACTION_SURGES_DESC
    CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_ASC
    CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_DESC
    CLASS_SPECIFIC__AURA_RANGE_ASC
    CLASS_SPECIFIC__AURA_RANGE_DESC
    CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_ASC
    CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_DESC
    CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_ASC
    CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_DESC
    CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_ASC
    CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_DESC
    CLASS_SPECIFIC__DESTROY_UNDEAD_CR_ASC
    CLASS_SPECIFIC__DESTROY_UNDEAD_CR_DESC
    CLASS_SPECIFIC__EXTRA_ATTACKS_ASC
    CLASS_SPECIFIC__EXTRA_ATTACKS_DESC
    CLASS_SPECIFIC__FAVORED_ENEMIES_ASC
    CLASS_SPECIFIC__FAVORED_ENEMIES_DESC
    CLASS_SPECIFIC__FAVORED_TERRAIN_ASC
    CLASS_SPECIFIC__FAVORED_TERRAIN_DESC
    CLASS_SPECIFIC__INDOMITABLE_USES_ASC
    CLASS_SPECIFIC__INDOMITABLE_USES_DESC
    CLASS_SPECIFIC__INVOCATIONS_KNOWN_ASC
    CLASS_SPECIFIC__INVOCATIONS_KNOWN_DESC
    CLASS_SPECIFIC__KI_POINTS_ASC
    CLASS_SPECIFIC__KI_POINTS_DESC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_ASC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_DESC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_ASC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_DESC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_ASC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_DESC
    CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_ASC
    CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_DESC
    CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_ASC
    CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_DESC
    CLASS_SPECIFIC__METAMAGIC_KNOWN_ASC
    CLASS_SPECIFIC__METAMAGIC_KNOWN_DESC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_ASC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_DESC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_ASC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_DESC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_ASC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_DESC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_ASC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_DESC
    CLASS_SPECIFIC__RAGE_COUNT_ASC
    CLASS_SPECIFIC__RAGE_COUNT_DESC
    CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_ASC
    CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_DESC
    CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_ASC
    CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_DESC
    CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_ASC
    CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_DESC
    CLASS_SPECIFIC__SONG_OF_REST_DIE_ASC
    CLASS_SPECIFIC__SONG_OF_REST_DIE_DESC
    CLASS_SPECIFIC__SORCERY_POINTS_ASC
    CLASS_SPECIFIC__SORCERY_POINTS_DESC
    CLASS_SPECIFIC__UNARMORED_MOVEMENT_ASC
    CLASS_SPECIFIC__UNARMORED_MOVEMENT_DESC
    CLASS_SPECIFIC__WILD_SHAPE_FLY_ASC
    CLASS_SPECIFIC__WILD_SHAPE_FLY_DESC
    CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_ASC
    CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_DESC
    CLASS_SPECIFIC__WILD_SHAPE_SWIM_ASC
    CLASS_SPECIFIC__WILD_SHAPE_SWIM_DESC
    INDEX_ASC
    INDEX_DESC
    LEVEL_ASC
    LEVEL_DESC
    PROF_BONUS_ASC
    PROF_BONUS_DESC
    SPELLCASTING__CANTRIPS_KNOWN_ASC
    SPELLCASTING__CANTRIPS_KNOWN_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_1_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_1_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_2_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_2_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_3_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_3_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_4_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_4_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_5_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_5_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_6_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_6_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_7_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_7_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_8_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_8_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_9_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_9_DESC
    SPELLCASTING__SPELLS_KNOWN_ASC
    SPELLCASTING__SPELLS_KNOWN_DESC
    SUBCLASS__INDEX_ASC
    SUBCLASS__INDEX_DESC
    SUBCLASS__NAME_ASC
    SUBCLASS__NAME_DESC
    SUBCLASS__URL_ASC
    SUBCLASS__URL_DESC
    SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_ASC
    SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_DESC
    SUBCLASS_SPECIFIC__AURA_RANGE_ASC
    SUBCLASS_SPECIFIC__AURA_RANGE_DESC
    URL_ASC
    URL_DESC
  }

  enum SortFindOneSubclassInput {
    _ID_ASC
    _ID_DESC
    CLASS__INDEX_ASC
    CLASS__INDEX_DESC
    CLASS__NAME_ASC
    CLASS__NAME_DESC
    CLASS__URL_ASC
    CLASS__URL_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    SUBCLASS_FLAVOR_ASC
    SUBCLASS_FLAVOR_DESC
    SUBCLASS_LEVELS_ASC
    SUBCLASS_LEVELS_DESC
    URL_ASC
    URL_DESC
  }

  type FeatureFeature_specific {
    subfeature_options: FeatureFeature_specificSubfeature_options
    expertise_options: FeatureFeature_specificExpertise_options
  }

  type FeatureFeature_specificSubfeature_options {
    choose: Float
    from: [FeatureFeature_specificSubfeature_optionsFrom]
    type: String
  }

  type FeatureFeature_specificSubfeature_optionsFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type FeatureFeature_specificExpertise_options {
    choose: Float
    from: [FeatureFeature_specificExpertise_optionsFrom]
    type: String
  }

  type FeatureFeature_specificExpertise_optionsFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  enum SortFindManyFeatureInput {
    _ID_ASC
    _ID_DESC
    CHOICE__CHOOSE_ASC
    CHOICE__CHOOSE_DESC
    CHOICE__TYPE_ASC
    CHOICE__TYPE_DESC
    CLASS__INDEX_ASC
    CLASS__INDEX_DESC
    CLASS__NAME_ASC
    CLASS__NAME_DESC
    CLASS__URL_ASC
    CLASS__URL_DESC
    DESC_ASC
    DESC_DESC
    PARENT__INDEX_ASC
    PARENT__INDEX_DESC
    PARENT__NAME_ASC
    PARENT__NAME_DESC
    PARENT__URL_ASC
    PARENT__URL_DESC
    INDEX_ASC
    INDEX_DESC
    LEVEL_ASC
    LEVEL_DESC
    NAME_ASC
    NAME_DESC
    REFERENCE_ASC
    REFERENCE_DESC
    SUBCLASS__INDEX_ASC
    SUBCLASS__INDEX_DESC
    SUBCLASS__NAME_ASC
    SUBCLASS__NAME_DESC
    SUBCLASS__URL_ASC
    SUBCLASS__URL_DESC
    FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_ASC
    FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_DESC
    FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_ASC
    FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_DESC
    FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_ASC
    FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_DESC
    FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_ASC
    FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_DESC
    URL_ASC
    URL_DESC
  }

  type LevelSpellcasting {
    cantrips_known: Float
    spell_slots_level_1: Float
    spell_slots_level_2: Float
    spell_slots_level_3: Float
    spell_slots_level_4: Float
    spell_slots_level_5: Float
    spell_slots_level_6: Float
    spell_slots_level_7: Float
    spell_slots_level_8: Float
    spell_slots_level_9: Float
    spells_known: Float
  }

  type LevelSubclass {
    index: String
    name: String
    url: String
  }

  type LevelSubclass_specific {
    additional_magical_secrets_max_lvl: Float
    aura_range: Float
  }

  type ClassMulti_classing {
    prerequisites: [ClassMulti_classingPrerequisites]
    prerequisite_options: ClassMulti_classingPrerequisite_options
    proficiencies: [ClassMulti_classingProficiencies]
    proficiency_choices: [ClassMulti_classingProficiency_choices]
  }

  type ClassMulti_classingPrerequisites {
    ability_score: ClassMulti_classingPrerequisitesAbility_score
    minimum_score: Float
    _id: MongoID
  }

  type ClassMulti_classingPrerequisitesAbility_score {
    index: String
    name: String
    url: String
  }

  type ClassMulti_classingPrerequisite_options {
    choose: Float
    from: [ClassMulti_classingPrerequisite_optionsFrom]
    type: String
  }

  type ClassMulti_classingPrerequisite_optionsFrom {
    ability_score: ClassMulti_classingPrerequisite_optionsFromAbility_score
    minimum_score: Float
    _id: MongoID
  }

  type ClassMulti_classingPrerequisite_optionsFromAbility_score {
    index: String
    name: String
    url: String
  }

  type ClassMulti_classingProficiencies {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type ClassMulti_classingProficiency_choices {
    choose: Float
    from: [ClassMulti_classingProficiency_choicesFrom]
    type: String
    _id: MongoID
  }

  type ClassMulti_classingProficiency_choicesFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type ClassProficiency_choices {
    choose: Float
    from: [ClassProficiency_choicesFrom]
    type: String
    _id: MongoID
  }

  type ClassProficiency_choicesFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type ClassSaving_throws {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type ClassSpellcasting {
    info: [ClassSpellcastingInfo]
    level: Float
    spellcasting_ability: ClassSpellcastingSpellcasting_ability
  }

  type ClassSpellcastingInfo {
    desc: [String]
    name: String
    _id: MongoID
  }

  type ClassSpellcastingSpellcasting_ability {
    index: String
    name: String
    url: String
  }

  type Spell {
    _id: String!
    area_of_effect: SpellArea_of_effect
    attack_type: String
    casting_time: String
    classes: [SpellClasses]
    components: [String]
    concentration: Boolean
    damage: SpellDamage
    dc: SpellDc
    desc: [String]
    duration: String
    heal_at_slot_level: JSON
    higher_level: [String]
    index: String
    level: Float
    material: String
    name: String
    range: String
    ritual: Boolean
    school(skip: Int, sort: SortFindOneMagicSchoolInput): MagicSchool
    subclasses: [SpellSubclasses]
    url: String
  }

  type SpellArea_of_effect {
    size: Float
    type: String
  }

  type SpellClasses {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type SpellDamage {
    damage_at_slot_level: JSON
    damage_at_character_level: JSON
    damage_type: SpellDamageDamage_type
  }

  scalar JSON

  type SpellDamageDamage_type {
    index: String
    name: String
    url: String
  }

  type SpellDc {
    dc_success: String
    dc_type: SpellDcDc_type
    desc: String
  }

  type SpellDcDc_type {
    index: String
    name: String
    url: String
  }

  type MagicSchool {
    _id: String!
    desc: String
    index: String
    name: String
    url: String
  }

  enum SortFindOneMagicSchoolInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  type SpellSubclasses {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  enum SortFindManySpellInput {
    _ID_ASC
    _ID_DESC
    SCHOOL__INDEX_ASC
    SCHOOL__INDEX_DESC
    SCHOOL__NAME_ASC
    SCHOOL__NAME_DESC
    SCHOOL__URL_ASC
    SCHOOL__URL_DESC
  }

  type ClassStarting_equipment {
    equipment: ClassStarting_equipmentEquipment
    quantity: Float
    _id: MongoID
  }

  type ClassStarting_equipmentEquipment {
    index: String
    name: String
    url: String
  }

  type ClassStarting_equipment_options {
    choose: Float
    from: [ClassStarting_equipment_optionsFrom]
    type: String
    _id: MongoID
  }

  type ClassStarting_equipment_optionsFrom {
    equipment: ClassStarting_equipment_optionsFromEquipment
    quantity: Float
    _id: MongoID
  }

  type ClassStarting_equipment_optionsFromEquipment {
    index: String
    name: String
    url: String
  }

  type ClassSubclasses {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneClassInput {
    _id: String
    class_levels: String
    multi_classing: FilterFindOneClassMulti_classingInput
    hit_die: Float
    index: String
    name: String
    proficiencies: [FilterFindOneClassProficienciesInput]
    proficiency_choices: [FilterFindOneClassProficiency_choicesInput]
    saving_throws: [FilterFindOneClassSaving_throwsInput]
    spellcasting: FilterFindOneClassSpellcastingInput
    spells: String
    starting_equipment: [FilterFindOneClassStarting_equipmentInput]
    starting_equipment_options: [FilterFindOneClassStarting_equipment_optionsInput]
    subclasses: [FilterFindOneClassSubclassesInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneClassOperatorsInput
    OR: [FilterFindOneClassInput!]
    AND: [FilterFindOneClassInput!]
  }

  #
  input FilterFindOneClassMulti_classingInput {
    prerequisites: [FilterFindOneClassMulti_classingPrerequisitesInput]
    prerequisite_options: FilterFindOneClassMulti_classingPrerequisite_optionsInput
    proficiencies: [FilterFindOneClassMulti_classingProficienciesInput]
    proficiency_choices: [FilterFindOneClassMulti_classingProficiency_choicesInput]
  }

  #
  input FilterFindOneClassMulti_classingPrerequisitesInput {
    ability_score: FilterFindOneClassMulti_classingPrerequisitesAbility_scoreInput
    minimum_score: Float
    _id: MongoID
  }

  #
  input FilterFindOneClassMulti_classingPrerequisitesAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneClassMulti_classingPrerequisite_optionsInput {
    choose: Float
    from: [FilterFindOneClassMulti_classingPrerequisite_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneClassMulti_classingPrerequisite_optionsFromInput {
    ability_score: FilterFindOneClassMulti_classingPrerequisite_optionsFromAbility_scoreInput
    minimum_score: Float
    _id: MongoID
  }

  #
  input FilterFindOneClassMulti_classingPrerequisite_optionsFromAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneClassMulti_classingProficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneClassMulti_classingProficiency_choicesInput {
    choose: Float
    from: [FilterFindOneClassMulti_classingProficiency_choicesFromInput]
    type: String
    _id: MongoID
  }

  #
  input FilterFindOneClassMulti_classingProficiency_choicesFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneClassProficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneClassProficiency_choicesInput {
    choose: Float
    from: [FilterFindOneClassProficiency_choicesFromInput]
    type: String
    _id: MongoID
  }

  #
  input FilterFindOneClassProficiency_choicesFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneClassSaving_throwsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneClassSpellcastingInput {
    info: [FilterFindOneClassSpellcastingInfoInput]
    level: Float
    spellcasting_ability: FilterFindOneClassSpellcastingSpellcasting_abilityInput
  }

  #
  input FilterFindOneClassSpellcastingInfoInput {
    desc: [String]
    name: String
    _id: MongoID
  }

  #
  input FilterFindOneClassSpellcastingSpellcasting_abilityInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneClassStarting_equipmentInput {
    equipment: FilterFindOneClassStarting_equipmentEquipmentInput
    quantity: Float
    _id: MongoID
  }

  #
  input FilterFindOneClassStarting_equipmentEquipmentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneClassStarting_equipment_optionsInput {
    choose: Float
    from: [FilterFindOneClassStarting_equipment_optionsFromInput]
    type: String
    _id: MongoID
  }

  #
  input FilterFindOneClassStarting_equipment_optionsFromInput {
    equipment: FilterFindOneClassStarting_equipment_optionsFromEquipmentInput
    quantity: Float
    _id: MongoID
  }

  #
  input FilterFindOneClassStarting_equipment_optionsFromEquipmentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneClassSubclassesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneClassOperatorsInput {
    _id: FilterFindOneClass_idOperatorsInput
    class_levels: FilterFindOneClassClass_levelsOperatorsInput
    multi_classing: FilterFindOneClassMulti_classingOperatorsInput
    hit_die: FilterFindOneClassHit_dieOperatorsInput
    index: FilterFindOneClassIndexOperatorsInput
    name: FilterFindOneClassNameOperatorsInput
    spellcasting: FilterFindOneClassSpellcastingOperatorsInput
    spells: FilterFindOneClassSpellsOperatorsInput
    url: FilterFindOneClassUrlOperatorsInput
  }

  input FilterFindOneClass_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneClassClass_levelsOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneClassMulti_classingOperatorsInput {
    prerequisite_options: FilterFindOneClassMulti_classingPrerequisite_optionsOperatorsInput
  }

  input FilterFindOneClassMulti_classingPrerequisite_optionsOperatorsInput {
    choose: FilterFindOneClassMulti_classingPrerequisite_optionsChooseOperatorsInput
    type: FilterFindOneClassMulti_classingPrerequisite_optionsTypeOperatorsInput
  }

  input FilterFindOneClassMulti_classingPrerequisite_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneClassMulti_classingPrerequisite_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneClassHit_dieOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneClassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneClassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneClassSpellcastingOperatorsInput {
    level: FilterFindOneClassSpellcastingLevelOperatorsInput
    spellcasting_ability: FilterFindOneClassSpellcastingSpellcasting_abilityOperatorsInput
  }

  input FilterFindOneClassSpellcastingLevelOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneClassSpellcastingSpellcasting_abilityOperatorsInput {
    index: FilterFindOneClassSpellcastingSpellcasting_abilityIndexOperatorsInput
    name: FilterFindOneClassSpellcastingSpellcasting_abilityNameOperatorsInput
    url: FilterFindOneClassSpellcastingSpellcasting_abilityUrlOperatorsInput
  }

  input FilterFindOneClassSpellcastingSpellcasting_abilityIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneClassSpellcastingSpellcasting_abilityNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneClassSpellcastingSpellcasting_abilityUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneClassSpellsOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneClassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  #
  input FilterFindManyClassInput {
    _id: String
    class_levels: String
    multi_classing: FilterFindManyClassMulti_classingInput
    hit_die: Float
    index: String
    name: String
    proficiencies: [FilterFindManyClassProficienciesInput]
    proficiency_choices: [FilterFindManyClassProficiency_choicesInput]
    saving_throws: [FilterFindManyClassSaving_throwsInput]
    spellcasting: FilterFindManyClassSpellcastingInput
    spells: String
    starting_equipment: [FilterFindManyClassStarting_equipmentInput]
    starting_equipment_options: [FilterFindManyClassStarting_equipment_optionsInput]
    subclasses: [FilterFindManyClassSubclassesInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyClassOperatorsInput
    OR: [FilterFindManyClassInput!]
    AND: [FilterFindManyClassInput!]
  }

  #
  input FilterFindManyClassMulti_classingInput {
    prerequisites: [FilterFindManyClassMulti_classingPrerequisitesInput]
    prerequisite_options: FilterFindManyClassMulti_classingPrerequisite_optionsInput
    proficiencies: [FilterFindManyClassMulti_classingProficienciesInput]
    proficiency_choices: [FilterFindManyClassMulti_classingProficiency_choicesInput]
  }

  #
  input FilterFindManyClassMulti_classingPrerequisitesInput {
    ability_score: FilterFindManyClassMulti_classingPrerequisitesAbility_scoreInput
    minimum_score: Float
    _id: MongoID
  }

  #
  input FilterFindManyClassMulti_classingPrerequisitesAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyClassMulti_classingPrerequisite_optionsInput {
    choose: Float
    from: [FilterFindManyClassMulti_classingPrerequisite_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyClassMulti_classingPrerequisite_optionsFromInput {
    ability_score: FilterFindManyClassMulti_classingPrerequisite_optionsFromAbility_scoreInput
    minimum_score: Float
    _id: MongoID
  }

  #
  input FilterFindManyClassMulti_classingPrerequisite_optionsFromAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyClassMulti_classingProficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyClassMulti_classingProficiency_choicesInput {
    choose: Float
    from: [FilterFindManyClassMulti_classingProficiency_choicesFromInput]
    type: String
    _id: MongoID
  }

  #
  input FilterFindManyClassMulti_classingProficiency_choicesFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyClassProficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyClassProficiency_choicesInput {
    choose: Float
    from: [FilterFindManyClassProficiency_choicesFromInput]
    type: String
    _id: MongoID
  }

  #
  input FilterFindManyClassProficiency_choicesFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyClassSaving_throwsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyClassSpellcastingInput {
    info: [FilterFindManyClassSpellcastingInfoInput]
    level: Float
    spellcasting_ability: FilterFindManyClassSpellcastingSpellcasting_abilityInput
  }

  #
  input FilterFindManyClassSpellcastingInfoInput {
    desc: [String]
    name: String
    _id: MongoID
  }

  #
  input FilterFindManyClassSpellcastingSpellcasting_abilityInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyClassStarting_equipmentInput {
    equipment: FilterFindManyClassStarting_equipmentEquipmentInput
    quantity: Float
    _id: MongoID
  }

  #
  input FilterFindManyClassStarting_equipmentEquipmentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyClassStarting_equipment_optionsInput {
    choose: Float
    from: [FilterFindManyClassStarting_equipment_optionsFromInput]
    type: String
    _id: MongoID
  }

  #
  input FilterFindManyClassStarting_equipment_optionsFromInput {
    equipment: FilterFindManyClassStarting_equipment_optionsFromEquipmentInput
    quantity: Float
    _id: MongoID
  }

  #
  input FilterFindManyClassStarting_equipment_optionsFromEquipmentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyClassSubclassesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyClassOperatorsInput {
    _id: FilterFindManyClass_idOperatorsInput
    class_levels: FilterFindManyClassClass_levelsOperatorsInput
    multi_classing: FilterFindManyClassMulti_classingOperatorsInput
    hit_die: FilterFindManyClassHit_dieOperatorsInput
    index: FilterFindManyClassIndexOperatorsInput
    name: FilterFindManyClassNameOperatorsInput
    spellcasting: FilterFindManyClassSpellcastingOperatorsInput
    spells: FilterFindManyClassSpellsOperatorsInput
    url: FilterFindManyClassUrlOperatorsInput
  }

  input FilterFindManyClass_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyClassClass_levelsOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyClassMulti_classingOperatorsInput {
    prerequisite_options: FilterFindManyClassMulti_classingPrerequisite_optionsOperatorsInput
  }

  input FilterFindManyClassMulti_classingPrerequisite_optionsOperatorsInput {
    choose: FilterFindManyClassMulti_classingPrerequisite_optionsChooseOperatorsInput
    type: FilterFindManyClassMulti_classingPrerequisite_optionsTypeOperatorsInput
  }

  input FilterFindManyClassMulti_classingPrerequisite_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyClassMulti_classingPrerequisite_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyClassHit_dieOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyClassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyClassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyClassSpellcastingOperatorsInput {
    level: FilterFindManyClassSpellcastingLevelOperatorsInput
    spellcasting_ability: FilterFindManyClassSpellcastingSpellcasting_abilityOperatorsInput
  }

  input FilterFindManyClassSpellcastingLevelOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyClassSpellcastingSpellcasting_abilityOperatorsInput {
    index: FilterFindManyClassSpellcastingSpellcasting_abilityIndexOperatorsInput
    name: FilterFindManyClassSpellcastingSpellcasting_abilityNameOperatorsInput
    url: FilterFindManyClassSpellcastingSpellcasting_abilityUrlOperatorsInput
  }

  input FilterFindManyClassSpellcastingSpellcasting_abilityIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyClassSpellcastingSpellcasting_abilityNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyClassSpellcastingSpellcasting_abilityUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyClassSpellsOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyClassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyClassInput {
    _ID_ASC
    _ID_DESC
    CLASS_LEVELS_ASC
    CLASS_LEVELS_DESC
    MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_ASC
    MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_DESC
    MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_ASC
    MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_DESC
    HIT_DIE_ASC
    HIT_DIE_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    SPELLCASTING__LEVEL_ASC
    SPELLCASTING__LEVEL_DESC
    SPELLCASTING__SPELLCASTING_ABILITY__INDEX_ASC
    SPELLCASTING__SPELLCASTING_ABILITY__INDEX_DESC
    SPELLCASTING__SPELLCASTING_ABILITY__NAME_ASC
    SPELLCASTING__SPELLCASTING_ABILITY__NAME_DESC
    SPELLCASTING__SPELLCASTING_ABILITY__URL_ASC
    SPELLCASTING__SPELLCASTING_ABILITY__URL_DESC
    SPELLS_ASC
    SPELLS_DESC
    URL_ASC
    URL_DESC
  }

  type DamageType {
    _id: String!
    desc: [String]
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneDamageTypeInput {
    _id: String
    desc: [String]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneDamageTypeOperatorsInput
    OR: [FilterFindOneDamageTypeInput!]
    AND: [FilterFindOneDamageTypeInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneDamageTypeOperatorsInput {
    _id: FilterFindOneDamageType_idOperatorsInput
    desc: FilterFindOneDamageTypeDescOperatorsInput
    index: FilterFindOneDamageTypeIndexOperatorsInput
    name: FilterFindOneDamageTypeNameOperatorsInput
    url: FilterFindOneDamageTypeUrlOperatorsInput
  }

  input FilterFindOneDamageType_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneDamageTypeDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneDamageTypeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneDamageTypeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneDamageTypeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneDamageTypeInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyDamageTypeInput {
    _id: String
    desc: [String]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyDamageTypeOperatorsInput
    OR: [FilterFindManyDamageTypeInput!]
    AND: [FilterFindManyDamageTypeInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyDamageTypeOperatorsInput {
    _id: FilterFindManyDamageType_idOperatorsInput
    desc: FilterFindManyDamageTypeDescOperatorsInput
    index: FilterFindManyDamageTypeIndexOperatorsInput
    name: FilterFindManyDamageTypeNameOperatorsInput
    url: FilterFindManyDamageTypeUrlOperatorsInput
  }

  input FilterFindManyDamageType_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyDamageTypeDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyDamageTypeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyDamageTypeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyDamageTypeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyDamageTypeInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  type Equipment {
    _id: String!
    armor_category: String
    armor_class: EquipmentArmor_class
    capacity: String
    category_range: String
    contents: [EquipmentContents]
    cost: EquipmentCost
    damage: EquipmentDamage
    desc: [String]
    equipment_category: EquipmentEquipment_category
    gear_category: EquipmentGear_category
    index: String
    name: String
    properties(
      skip: Int
      limit: Int = 100
      sort: SortFindManyWeaponPropertyInput
    ): [WeaponProperty!]!
    quantity: Float
    range: EquipmentRange
    special: [String]
    speed: EquipmentSpeed
    stealth_disadvantage: Boolean
    str_minimum: Float
    throw_range: EquipmentThrow_range
    tool_category: String
    two_handed_damage: EquipmentTwo_handed_damage
    url: String
    vehicle_category: String
    weapon_category: String
    weapon_range: String
    weight: Float
  }

  type EquipmentArmor_class {
    base: Float
    dex_bonus: Boolean
    max_bonus: Float
  }

  type EquipmentContents {
    item: EquipmentContentsItem
    quantity: Float
    _id: MongoID
  }

  type EquipmentContentsItem {
    index: String
    name: String
    url: String
  }

  type EquipmentCost {
    quantity: Float
    unit: String
  }

  type EquipmentDamage {
    damage_dice: String
    damage_type: EquipmentDamageDamage_type
  }

  type EquipmentDamageDamage_type {
    index: String
    name: String
    url: String
  }

  type EquipmentEquipment_category {
    index: String
    name: String
    url: String
  }

  type EquipmentGear_category {
    index: String
    name: String
    url: String
  }

  type WeaponProperty {
    _id: String!
    desc: [String]
    index: String
    name: String
    url: String
  }

  enum SortFindManyWeaponPropertyInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  type EquipmentRange {
    long: Float
    normal: Float
  }

  type EquipmentSpeed {
    quantity: Float
    unit: String
  }

  type EquipmentThrow_range {
    long: Float
    normal: Float
  }

  type EquipmentTwo_handed_damage {
    damage_dice: String
    damage_type: EquipmentTwo_handed_damageDamage_type
  }

  type EquipmentTwo_handed_damageDamage_type {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneEquipmentInput {
    _id: String
    armor_category: String
    armor_class: FilterFindOneEquipmentArmor_classInput
    capacity: String
    category_range: String
    contents: [FilterFindOneEquipmentContentsInput]
    cost: FilterFindOneEquipmentCostInput
    damage: FilterFindOneEquipmentDamageInput
    desc: [String]
    equipment_category: FilterFindOneEquipmentEquipment_categoryInput
    gear_category: FilterFindOneEquipmentGear_categoryInput
    index: String
    name: String
    properties: [FilterFindOneEquipmentPropertiesInput]
    quantity: Float
    range: FilterFindOneEquipmentRangeInput
    special: [String]
    speed: FilterFindOneEquipmentSpeedInput
    stealth_disadvantage: Boolean
    str_minimum: Float
    throw_range: FilterFindOneEquipmentThrow_rangeInput
    tool_category: String
    two_handed_damage: FilterFindOneEquipmentTwo_handed_damageInput
    url: String
    vehicle_category: String
    weapon_category: String
    weapon_range: String
    weight: Float

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneEquipmentOperatorsInput
    OR: [FilterFindOneEquipmentInput!]
    AND: [FilterFindOneEquipmentInput!]
  }

  #
  input FilterFindOneEquipmentArmor_classInput {
    base: Float
    dex_bonus: Boolean
    max_bonus: Float
  }

  #
  input FilterFindOneEquipmentContentsInput {
    item: FilterFindOneEquipmentContentsItemInput
    quantity: Float
    _id: MongoID
  }

  #
  input FilterFindOneEquipmentContentsItemInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneEquipmentCostInput {
    quantity: Float
    unit: String
  }

  #
  input FilterFindOneEquipmentDamageInput {
    damage_dice: String
    damage_type: FilterFindOneEquipmentDamageDamage_typeInput
  }

  #
  input FilterFindOneEquipmentDamageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneEquipmentEquipment_categoryInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneEquipmentGear_categoryInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneEquipmentPropertiesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneEquipmentRangeInput {
    long: Float
    normal: Float
  }

  #
  input FilterFindOneEquipmentSpeedInput {
    quantity: Float
    unit: String
  }

  #
  input FilterFindOneEquipmentThrow_rangeInput {
    long: Float
    normal: Float
  }

  #
  input FilterFindOneEquipmentTwo_handed_damageInput {
    damage_dice: String
    damage_type: FilterFindOneEquipmentTwo_handed_damageDamage_typeInput
  }

  #
  input FilterFindOneEquipmentTwo_handed_damageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneEquipmentOperatorsInput {
    _id: FilterFindOneEquipment_idOperatorsInput
    armor_category: FilterFindOneEquipmentArmor_categoryOperatorsInput
    armor_class: FilterFindOneEquipmentArmor_classOperatorsInput
    capacity: FilterFindOneEquipmentCapacityOperatorsInput
    category_range: FilterFindOneEquipmentCategory_rangeOperatorsInput
    cost: FilterFindOneEquipmentCostOperatorsInput
    damage: FilterFindOneEquipmentDamageOperatorsInput
    desc: FilterFindOneEquipmentDescOperatorsInput
    equipment_category: FilterFindOneEquipmentEquipment_categoryOperatorsInput
    gear_category: FilterFindOneEquipmentGear_categoryOperatorsInput
    index: FilterFindOneEquipmentIndexOperatorsInput
    name: FilterFindOneEquipmentNameOperatorsInput
    quantity: FilterFindOneEquipmentQuantityOperatorsInput
    range: FilterFindOneEquipmentRangeOperatorsInput
    special: FilterFindOneEquipmentSpecialOperatorsInput
    speed: FilterFindOneEquipmentSpeedOperatorsInput
    stealth_disadvantage: FilterFindOneEquipmentStealth_disadvantageOperatorsInput
    str_minimum: FilterFindOneEquipmentStr_minimumOperatorsInput
    throw_range: FilterFindOneEquipmentThrow_rangeOperatorsInput
    tool_category: FilterFindOneEquipmentTool_categoryOperatorsInput
    two_handed_damage: FilterFindOneEquipmentTwo_handed_damageOperatorsInput
    url: FilterFindOneEquipmentUrlOperatorsInput
    vehicle_category: FilterFindOneEquipmentVehicle_categoryOperatorsInput
    weapon_category: FilterFindOneEquipmentWeapon_categoryOperatorsInput
    weapon_range: FilterFindOneEquipmentWeapon_rangeOperatorsInput
    weight: FilterFindOneEquipmentWeightOperatorsInput
  }

  input FilterFindOneEquipment_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentArmor_categoryOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentArmor_classOperatorsInput {
    base: FilterFindOneEquipmentArmor_classBaseOperatorsInput
    dex_bonus: FilterFindOneEquipmentArmor_classDex_bonusOperatorsInput
    max_bonus: FilterFindOneEquipmentArmor_classMax_bonusOperatorsInput
  }

  input FilterFindOneEquipmentArmor_classBaseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentArmor_classDex_bonusOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindOneEquipmentArmor_classMax_bonusOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentCapacityOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentCategory_rangeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentCostOperatorsInput {
    quantity: FilterFindOneEquipmentCostQuantityOperatorsInput
    unit: FilterFindOneEquipmentCostUnitOperatorsInput
  }

  input FilterFindOneEquipmentCostQuantityOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentCostUnitOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentDamageOperatorsInput {
    damage_dice: FilterFindOneEquipmentDamageDamage_diceOperatorsInput
    damage_type: FilterFindOneEquipmentDamageDamage_typeOperatorsInput
  }

  input FilterFindOneEquipmentDamageDamage_diceOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentDamageDamage_typeOperatorsInput {
    index: FilterFindOneEquipmentDamageDamage_typeIndexOperatorsInput
    name: FilterFindOneEquipmentDamageDamage_typeNameOperatorsInput
    url: FilterFindOneEquipmentDamageDamage_typeUrlOperatorsInput
  }

  input FilterFindOneEquipmentDamageDamage_typeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentDamageDamage_typeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentDamageDamage_typeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentEquipment_categoryOperatorsInput {
    index: FilterFindOneEquipmentEquipment_categoryIndexOperatorsInput
    name: FilterFindOneEquipmentEquipment_categoryNameOperatorsInput
    url: FilterFindOneEquipmentEquipment_categoryUrlOperatorsInput
  }

  input FilterFindOneEquipmentEquipment_categoryIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentEquipment_categoryNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentEquipment_categoryUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentGear_categoryOperatorsInput {
    index: FilterFindOneEquipmentGear_categoryIndexOperatorsInput
    name: FilterFindOneEquipmentGear_categoryNameOperatorsInput
    url: FilterFindOneEquipmentGear_categoryUrlOperatorsInput
  }

  input FilterFindOneEquipmentGear_categoryIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentGear_categoryNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentGear_categoryUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentQuantityOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentRangeOperatorsInput {
    long: FilterFindOneEquipmentRangeLongOperatorsInput
    normal: FilterFindOneEquipmentRangeNormalOperatorsInput
  }

  input FilterFindOneEquipmentRangeLongOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentRangeNormalOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentSpecialOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentSpeedOperatorsInput {
    quantity: FilterFindOneEquipmentSpeedQuantityOperatorsInput
    unit: FilterFindOneEquipmentSpeedUnitOperatorsInput
  }

  input FilterFindOneEquipmentSpeedQuantityOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentSpeedUnitOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentStealth_disadvantageOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindOneEquipmentStr_minimumOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentThrow_rangeOperatorsInput {
    long: FilterFindOneEquipmentThrow_rangeLongOperatorsInput
    normal: FilterFindOneEquipmentThrow_rangeNormalOperatorsInput
  }

  input FilterFindOneEquipmentThrow_rangeLongOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentThrow_rangeNormalOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneEquipmentTool_categoryOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentTwo_handed_damageOperatorsInput {
    damage_dice: FilterFindOneEquipmentTwo_handed_damageDamage_diceOperatorsInput
    damage_type: FilterFindOneEquipmentTwo_handed_damageDamage_typeOperatorsInput
  }

  input FilterFindOneEquipmentTwo_handed_damageDamage_diceOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentTwo_handed_damageDamage_typeOperatorsInput {
    index: FilterFindOneEquipmentTwo_handed_damageDamage_typeIndexOperatorsInput
    name: FilterFindOneEquipmentTwo_handed_damageDamage_typeNameOperatorsInput
    url: FilterFindOneEquipmentTwo_handed_damageDamage_typeUrlOperatorsInput
  }

  input FilterFindOneEquipmentTwo_handed_damageDamage_typeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentTwo_handed_damageDamage_typeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentTwo_handed_damageDamage_typeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentVehicle_categoryOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentWeapon_categoryOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentWeapon_rangeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentWeightOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  enum SortFindOneEquipmentInput {
    _ID_ASC
    _ID_DESC
    ARMOR_CATEGORY_ASC
    ARMOR_CATEGORY_DESC
    ARMOR_CLASS__BASE_ASC
    ARMOR_CLASS__BASE_DESC
    ARMOR_CLASS__DEX_BONUS_ASC
    ARMOR_CLASS__DEX_BONUS_DESC
    ARMOR_CLASS__MAX_BONUS_ASC
    ARMOR_CLASS__MAX_BONUS_DESC
    CAPACITY_ASC
    CAPACITY_DESC
    CATEGORY_RANGE_ASC
    CATEGORY_RANGE_DESC
    COST__QUANTITY_ASC
    COST__QUANTITY_DESC
    COST__UNIT_ASC
    COST__UNIT_DESC
    DAMAGE__DAMAGE_DICE_ASC
    DAMAGE__DAMAGE_DICE_DESC
    DAMAGE__DAMAGE_TYPE__INDEX_ASC
    DAMAGE__DAMAGE_TYPE__INDEX_DESC
    DAMAGE__DAMAGE_TYPE__NAME_ASC
    DAMAGE__DAMAGE_TYPE__NAME_DESC
    DAMAGE__DAMAGE_TYPE__URL_ASC
    DAMAGE__DAMAGE_TYPE__URL_DESC
    DESC_ASC
    DESC_DESC
    EQUIPMENT_CATEGORY__INDEX_ASC
    EQUIPMENT_CATEGORY__INDEX_DESC
    EQUIPMENT_CATEGORY__NAME_ASC
    EQUIPMENT_CATEGORY__NAME_DESC
    EQUIPMENT_CATEGORY__URL_ASC
    EQUIPMENT_CATEGORY__URL_DESC
    GEAR_CATEGORY__INDEX_ASC
    GEAR_CATEGORY__INDEX_DESC
    GEAR_CATEGORY__NAME_ASC
    GEAR_CATEGORY__NAME_DESC
    GEAR_CATEGORY__URL_ASC
    GEAR_CATEGORY__URL_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    QUANTITY_ASC
    QUANTITY_DESC
    RANGE__LONG_ASC
    RANGE__LONG_DESC
    RANGE__NORMAL_ASC
    RANGE__NORMAL_DESC
    SPECIAL_ASC
    SPECIAL_DESC
    SPEED__QUANTITY_ASC
    SPEED__QUANTITY_DESC
    SPEED__UNIT_ASC
    SPEED__UNIT_DESC
    STEALTH_DISADVANTAGE_ASC
    STEALTH_DISADVANTAGE_DESC
    STR_MINIMUM_ASC
    STR_MINIMUM_DESC
    THROW_RANGE__LONG_ASC
    THROW_RANGE__LONG_DESC
    THROW_RANGE__NORMAL_ASC
    THROW_RANGE__NORMAL_DESC
    TOOL_CATEGORY_ASC
    TOOL_CATEGORY_DESC
    TWO_HANDED_DAMAGE__DAMAGE_DICE_ASC
    TWO_HANDED_DAMAGE__DAMAGE_DICE_DESC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_ASC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_DESC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_ASC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_DESC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_ASC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_DESC
    URL_ASC
    URL_DESC
    VEHICLE_CATEGORY_ASC
    VEHICLE_CATEGORY_DESC
    WEAPON_CATEGORY_ASC
    WEAPON_CATEGORY_DESC
    WEAPON_RANGE_ASC
    WEAPON_RANGE_DESC
    WEIGHT_ASC
    WEIGHT_DESC
  }

  #
  input FilterFindManyEquipmentInput {
    _id: String
    armor_category: String
    armor_class: FilterFindManyEquipmentArmor_classInput
    capacity: String
    category_range: String
    contents: [FilterFindManyEquipmentContentsInput]
    cost: FilterFindManyEquipmentCostInput
    damage: FilterFindManyEquipmentDamageInput
    desc: [String]
    equipment_category: FilterFindManyEquipmentEquipment_categoryInput
    gear_category: FilterFindManyEquipmentGear_categoryInput
    index: String
    name: String
    properties: [FilterFindManyEquipmentPropertiesInput]
    quantity: Float
    range: FilterFindManyEquipmentRangeInput
    special: [String]
    speed: FilterFindManyEquipmentSpeedInput
    stealth_disadvantage: Boolean
    str_minimum: Float
    throw_range: FilterFindManyEquipmentThrow_rangeInput
    tool_category: String
    two_handed_damage: FilterFindManyEquipmentTwo_handed_damageInput
    url: String
    vehicle_category: String
    weapon_category: String
    weapon_range: String
    weight: Float

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyEquipmentOperatorsInput
    OR: [FilterFindManyEquipmentInput!]
    AND: [FilterFindManyEquipmentInput!]
  }

  #
  input FilterFindManyEquipmentArmor_classInput {
    base: Float
    dex_bonus: Boolean
    max_bonus: Float
  }

  #
  input FilterFindManyEquipmentContentsInput {
    item: FilterFindManyEquipmentContentsItemInput
    quantity: Float
    _id: MongoID
  }

  #
  input FilterFindManyEquipmentContentsItemInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyEquipmentCostInput {
    quantity: Float
    unit: String
  }

  #
  input FilterFindManyEquipmentDamageInput {
    damage_dice: String
    damage_type: FilterFindManyEquipmentDamageDamage_typeInput
  }

  #
  input FilterFindManyEquipmentDamageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyEquipmentEquipment_categoryInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyEquipmentGear_categoryInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyEquipmentPropertiesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyEquipmentRangeInput {
    long: Float
    normal: Float
  }

  #
  input FilterFindManyEquipmentSpeedInput {
    quantity: Float
    unit: String
  }

  #
  input FilterFindManyEquipmentThrow_rangeInput {
    long: Float
    normal: Float
  }

  #
  input FilterFindManyEquipmentTwo_handed_damageInput {
    damage_dice: String
    damage_type: FilterFindManyEquipmentTwo_handed_damageDamage_typeInput
  }

  #
  input FilterFindManyEquipmentTwo_handed_damageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyEquipmentOperatorsInput {
    _id: FilterFindManyEquipment_idOperatorsInput
    armor_category: FilterFindManyEquipmentArmor_categoryOperatorsInput
    armor_class: FilterFindManyEquipmentArmor_classOperatorsInput
    capacity: FilterFindManyEquipmentCapacityOperatorsInput
    category_range: FilterFindManyEquipmentCategory_rangeOperatorsInput
    cost: FilterFindManyEquipmentCostOperatorsInput
    damage: FilterFindManyEquipmentDamageOperatorsInput
    desc: FilterFindManyEquipmentDescOperatorsInput
    equipment_category: FilterFindManyEquipmentEquipment_categoryOperatorsInput
    gear_category: FilterFindManyEquipmentGear_categoryOperatorsInput
    index: FilterFindManyEquipmentIndexOperatorsInput
    name: FilterFindManyEquipmentNameOperatorsInput
    quantity: FilterFindManyEquipmentQuantityOperatorsInput
    range: FilterFindManyEquipmentRangeOperatorsInput
    special: FilterFindManyEquipmentSpecialOperatorsInput
    speed: FilterFindManyEquipmentSpeedOperatorsInput
    stealth_disadvantage: FilterFindManyEquipmentStealth_disadvantageOperatorsInput
    str_minimum: FilterFindManyEquipmentStr_minimumOperatorsInput
    throw_range: FilterFindManyEquipmentThrow_rangeOperatorsInput
    tool_category: FilterFindManyEquipmentTool_categoryOperatorsInput
    two_handed_damage: FilterFindManyEquipmentTwo_handed_damageOperatorsInput
    url: FilterFindManyEquipmentUrlOperatorsInput
    vehicle_category: FilterFindManyEquipmentVehicle_categoryOperatorsInput
    weapon_category: FilterFindManyEquipmentWeapon_categoryOperatorsInput
    weapon_range: FilterFindManyEquipmentWeapon_rangeOperatorsInput
    weight: FilterFindManyEquipmentWeightOperatorsInput
  }

  input FilterFindManyEquipment_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentArmor_categoryOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentArmor_classOperatorsInput {
    base: FilterFindManyEquipmentArmor_classBaseOperatorsInput
    dex_bonus: FilterFindManyEquipmentArmor_classDex_bonusOperatorsInput
    max_bonus: FilterFindManyEquipmentArmor_classMax_bonusOperatorsInput
  }

  input FilterFindManyEquipmentArmor_classBaseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentArmor_classDex_bonusOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindManyEquipmentArmor_classMax_bonusOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentCapacityOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentCategory_rangeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentCostOperatorsInput {
    quantity: FilterFindManyEquipmentCostQuantityOperatorsInput
    unit: FilterFindManyEquipmentCostUnitOperatorsInput
  }

  input FilterFindManyEquipmentCostQuantityOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentCostUnitOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentDamageOperatorsInput {
    damage_dice: FilterFindManyEquipmentDamageDamage_diceOperatorsInput
    damage_type: FilterFindManyEquipmentDamageDamage_typeOperatorsInput
  }

  input FilterFindManyEquipmentDamageDamage_diceOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentDamageDamage_typeOperatorsInput {
    index: FilterFindManyEquipmentDamageDamage_typeIndexOperatorsInput
    name: FilterFindManyEquipmentDamageDamage_typeNameOperatorsInput
    url: FilterFindManyEquipmentDamageDamage_typeUrlOperatorsInput
  }

  input FilterFindManyEquipmentDamageDamage_typeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentDamageDamage_typeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentDamageDamage_typeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentEquipment_categoryOperatorsInput {
    index: FilterFindManyEquipmentEquipment_categoryIndexOperatorsInput
    name: FilterFindManyEquipmentEquipment_categoryNameOperatorsInput
    url: FilterFindManyEquipmentEquipment_categoryUrlOperatorsInput
  }

  input FilterFindManyEquipmentEquipment_categoryIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentEquipment_categoryNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentEquipment_categoryUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentGear_categoryOperatorsInput {
    index: FilterFindManyEquipmentGear_categoryIndexOperatorsInput
    name: FilterFindManyEquipmentGear_categoryNameOperatorsInput
    url: FilterFindManyEquipmentGear_categoryUrlOperatorsInput
  }

  input FilterFindManyEquipmentGear_categoryIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentGear_categoryNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentGear_categoryUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentQuantityOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentRangeOperatorsInput {
    long: FilterFindManyEquipmentRangeLongOperatorsInput
    normal: FilterFindManyEquipmentRangeNormalOperatorsInput
  }

  input FilterFindManyEquipmentRangeLongOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentRangeNormalOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentSpecialOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentSpeedOperatorsInput {
    quantity: FilterFindManyEquipmentSpeedQuantityOperatorsInput
    unit: FilterFindManyEquipmentSpeedUnitOperatorsInput
  }

  input FilterFindManyEquipmentSpeedQuantityOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentSpeedUnitOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentStealth_disadvantageOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindManyEquipmentStr_minimumOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentThrow_rangeOperatorsInput {
    long: FilterFindManyEquipmentThrow_rangeLongOperatorsInput
    normal: FilterFindManyEquipmentThrow_rangeNormalOperatorsInput
  }

  input FilterFindManyEquipmentThrow_rangeLongOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentThrow_rangeNormalOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyEquipmentTool_categoryOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentTwo_handed_damageOperatorsInput {
    damage_dice: FilterFindManyEquipmentTwo_handed_damageDamage_diceOperatorsInput
    damage_type: FilterFindManyEquipmentTwo_handed_damageDamage_typeOperatorsInput
  }

  input FilterFindManyEquipmentTwo_handed_damageDamage_diceOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentTwo_handed_damageDamage_typeOperatorsInput {
    index: FilterFindManyEquipmentTwo_handed_damageDamage_typeIndexOperatorsInput
    name: FilterFindManyEquipmentTwo_handed_damageDamage_typeNameOperatorsInput
    url: FilterFindManyEquipmentTwo_handed_damageDamage_typeUrlOperatorsInput
  }

  input FilterFindManyEquipmentTwo_handed_damageDamage_typeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentTwo_handed_damageDamage_typeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentTwo_handed_damageDamage_typeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentVehicle_categoryOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentWeapon_categoryOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentWeapon_rangeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentWeightOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  enum SortFindManyEquipmentInput {
    _ID_ASC
    _ID_DESC
    ARMOR_CATEGORY_ASC
    ARMOR_CATEGORY_DESC
    ARMOR_CLASS__BASE_ASC
    ARMOR_CLASS__BASE_DESC
    ARMOR_CLASS__DEX_BONUS_ASC
    ARMOR_CLASS__DEX_BONUS_DESC
    ARMOR_CLASS__MAX_BONUS_ASC
    ARMOR_CLASS__MAX_BONUS_DESC
    CAPACITY_ASC
    CAPACITY_DESC
    CATEGORY_RANGE_ASC
    CATEGORY_RANGE_DESC
    COST__QUANTITY_ASC
    COST__QUANTITY_DESC
    COST__UNIT_ASC
    COST__UNIT_DESC
    DAMAGE__DAMAGE_DICE_ASC
    DAMAGE__DAMAGE_DICE_DESC
    DAMAGE__DAMAGE_TYPE__INDEX_ASC
    DAMAGE__DAMAGE_TYPE__INDEX_DESC
    DAMAGE__DAMAGE_TYPE__NAME_ASC
    DAMAGE__DAMAGE_TYPE__NAME_DESC
    DAMAGE__DAMAGE_TYPE__URL_ASC
    DAMAGE__DAMAGE_TYPE__URL_DESC
    DESC_ASC
    DESC_DESC
    EQUIPMENT_CATEGORY__INDEX_ASC
    EQUIPMENT_CATEGORY__INDEX_DESC
    EQUIPMENT_CATEGORY__NAME_ASC
    EQUIPMENT_CATEGORY__NAME_DESC
    EQUIPMENT_CATEGORY__URL_ASC
    EQUIPMENT_CATEGORY__URL_DESC
    GEAR_CATEGORY__INDEX_ASC
    GEAR_CATEGORY__INDEX_DESC
    GEAR_CATEGORY__NAME_ASC
    GEAR_CATEGORY__NAME_DESC
    GEAR_CATEGORY__URL_ASC
    GEAR_CATEGORY__URL_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    QUANTITY_ASC
    QUANTITY_DESC
    RANGE__LONG_ASC
    RANGE__LONG_DESC
    RANGE__NORMAL_ASC
    RANGE__NORMAL_DESC
    SPECIAL_ASC
    SPECIAL_DESC
    SPEED__QUANTITY_ASC
    SPEED__QUANTITY_DESC
    SPEED__UNIT_ASC
    SPEED__UNIT_DESC
    STEALTH_DISADVANTAGE_ASC
    STEALTH_DISADVANTAGE_DESC
    STR_MINIMUM_ASC
    STR_MINIMUM_DESC
    THROW_RANGE__LONG_ASC
    THROW_RANGE__LONG_DESC
    THROW_RANGE__NORMAL_ASC
    THROW_RANGE__NORMAL_DESC
    TOOL_CATEGORY_ASC
    TOOL_CATEGORY_DESC
    TWO_HANDED_DAMAGE__DAMAGE_DICE_ASC
    TWO_HANDED_DAMAGE__DAMAGE_DICE_DESC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_ASC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_DESC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_ASC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_DESC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_ASC
    TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_DESC
    URL_ASC
    URL_DESC
    VEHICLE_CATEGORY_ASC
    VEHICLE_CATEGORY_DESC
    WEAPON_CATEGORY_ASC
    WEAPON_CATEGORY_DESC
    WEAPON_RANGE_ASC
    WEAPON_RANGE_DESC
    WEIGHT_ASC
    WEIGHT_DESC
  }

  type EquipmentCategory {
    _id: String!
    equipment(
      skip: Int
      limit: Int = 100
      sort: SortFindManyEquipmentInput
    ): [Equipment!]!
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneEquipmentCategoryInput {
    _id: String
    equipment: [FilterFindOneEquipmentCategoryEquipmentInput]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneEquipmentCategoryOperatorsInput
    OR: [FilterFindOneEquipmentCategoryInput!]
    AND: [FilterFindOneEquipmentCategoryInput!]
  }

  #
  input FilterFindOneEquipmentCategoryEquipmentInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneEquipmentCategoryOperatorsInput {
    _id: FilterFindOneEquipmentCategory_idOperatorsInput
    index: FilterFindOneEquipmentCategoryIndexOperatorsInput
    name: FilterFindOneEquipmentCategoryNameOperatorsInput
    url: FilterFindOneEquipmentCategoryUrlOperatorsInput
  }

  input FilterFindOneEquipmentCategory_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentCategoryIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentCategoryNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneEquipmentCategoryUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneEquipmentCategoryInput {
    _ID_ASC
    _ID_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyEquipmentCategoryInput {
    _id: String
    equipment: [FilterFindManyEquipmentCategoryEquipmentInput]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyEquipmentCategoryOperatorsInput
    OR: [FilterFindManyEquipmentCategoryInput!]
    AND: [FilterFindManyEquipmentCategoryInput!]
  }

  #
  input FilterFindManyEquipmentCategoryEquipmentInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyEquipmentCategoryOperatorsInput {
    _id: FilterFindManyEquipmentCategory_idOperatorsInput
    index: FilterFindManyEquipmentCategoryIndexOperatorsInput
    name: FilterFindManyEquipmentCategoryNameOperatorsInput
    url: FilterFindManyEquipmentCategoryUrlOperatorsInput
  }

  input FilterFindManyEquipmentCategory_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentCategoryIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentCategoryNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyEquipmentCategoryUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyEquipmentCategoryInput {
    _ID_ASC
    _ID_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  type Feat {
    _id: String!
    index: String
    name: String
    prerequisites: [FeatPrerequisites]
    desc: [String]
    url: String
  }

  type FeatPrerequisites {
    ability_score: FeatPrerequisitesAbility_score
    minimum_score: Float
    _id: MongoID
  }

  type FeatPrerequisitesAbility_score {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneFeatInput {
    _id: String
    index: String
    name: String
    prerequisites: [FilterFindOneFeatPrerequisitesInput]
    desc: [String]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneFeatOperatorsInput
    OR: [FilterFindOneFeatInput!]
    AND: [FilterFindOneFeatInput!]
  }

  #
  input FilterFindOneFeatPrerequisitesInput {
    ability_score: FilterFindOneFeatPrerequisitesAbility_scoreInput
    minimum_score: Float
    _id: MongoID
  }

  #
  input FilterFindOneFeatPrerequisitesAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneFeatOperatorsInput {
    _id: FilterFindOneFeat_idOperatorsInput
    index: FilterFindOneFeatIndexOperatorsInput
    name: FilterFindOneFeatNameOperatorsInput
    desc: FilterFindOneFeatDescOperatorsInput
    url: FilterFindOneFeatUrlOperatorsInput
  }

  input FilterFindOneFeat_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneFeatInput {
    _ID_ASC
    _ID_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    DESC_ASC
    DESC_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyFeatInput {
    _id: String
    index: String
    name: String
    prerequisites: [FilterFindManyFeatPrerequisitesInput]
    desc: [String]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyFeatOperatorsInput
    OR: [FilterFindManyFeatInput!]
    AND: [FilterFindManyFeatInput!]
  }

  #
  input FilterFindManyFeatPrerequisitesInput {
    ability_score: FilterFindManyFeatPrerequisitesAbility_scoreInput
    minimum_score: Float
    _id: MongoID
  }

  #
  input FilterFindManyFeatPrerequisitesAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyFeatOperatorsInput {
    _id: FilterFindManyFeat_idOperatorsInput
    index: FilterFindManyFeatIndexOperatorsInput
    name: FilterFindManyFeatNameOperatorsInput
    desc: FilterFindManyFeatDescOperatorsInput
    url: FilterFindManyFeatUrlOperatorsInput
  }

  input FilterFindManyFeat_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyFeatInput {
    _ID_ASC
    _ID_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    DESC_ASC
    DESC_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindOneFeatureInput {
    _id: String
    choice: FilterFindOneFeatureChoiceInput
    class: FilterFindOneFeatureClassInput
    desc: [String]
    parent: FilterFindOneFeatureParentInput
    index: String
    level: Float
    name: String
    prerequisites: [FilterFindOneFeaturePrerequisitesInput]
    reference: String
    subclass: FilterFindOneFeatureSubclassInput
    feature_specific: FilterFindOneFeatureFeature_specificInput
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneFeatureOperatorsInput
    OR: [FilterFindOneFeatureInput!]
    AND: [FilterFindOneFeatureInput!]
  }

  #
  input FilterFindOneFeatureChoiceInput {
    choose: Float
    from: [FilterFindOneFeatureChoiceFromInput]
    type: String
  }

  #
  input FilterFindOneFeatureChoiceFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneFeatureClassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneFeatureParentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneFeaturePrerequisitesInput {
    level: Float
    type: String
    _id: MongoID
  }

  #
  input FilterFindOneFeatureSubclassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneFeatureFeature_specificInput {
    subfeature_options: FilterFindOneFeatureFeature_specificSubfeature_optionsInput
    expertise_options: FilterFindOneFeatureFeature_specificExpertise_optionsInput
  }

  #
  input FilterFindOneFeatureFeature_specificSubfeature_optionsInput {
    choose: Float
    from: [FilterFindOneFeatureFeature_specificSubfeature_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneFeatureFeature_specificSubfeature_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneFeatureFeature_specificExpertise_optionsInput {
    choose: Float
    from: [FilterFindOneFeatureFeature_specificExpertise_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneFeatureFeature_specificExpertise_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneFeatureOperatorsInput {
    _id: FilterFindOneFeature_idOperatorsInput
    choice: FilterFindOneFeatureChoiceOperatorsInput
    class: FilterFindOneFeatureClassOperatorsInput
    desc: FilterFindOneFeatureDescOperatorsInput
    parent: FilterFindOneFeatureParentOperatorsInput
    index: FilterFindOneFeatureIndexOperatorsInput
    level: FilterFindOneFeatureLevelOperatorsInput
    name: FilterFindOneFeatureNameOperatorsInput
    reference: FilterFindOneFeatureReferenceOperatorsInput
    subclass: FilterFindOneFeatureSubclassOperatorsInput
    feature_specific: FilterFindOneFeatureFeature_specificOperatorsInput
    url: FilterFindOneFeatureUrlOperatorsInput
  }

  input FilterFindOneFeature_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureChoiceOperatorsInput {
    choose: FilterFindOneFeatureChoiceChooseOperatorsInput
    type: FilterFindOneFeatureChoiceTypeOperatorsInput
  }

  input FilterFindOneFeatureChoiceChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneFeatureChoiceTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureClassOperatorsInput {
    index: FilterFindOneFeatureClassIndexOperatorsInput
    name: FilterFindOneFeatureClassNameOperatorsInput
    url: FilterFindOneFeatureClassUrlOperatorsInput
  }

  input FilterFindOneFeatureClassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureClassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureClassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureParentOperatorsInput {
    index: FilterFindOneFeatureParentIndexOperatorsInput
    name: FilterFindOneFeatureParentNameOperatorsInput
    url: FilterFindOneFeatureParentUrlOperatorsInput
  }

  input FilterFindOneFeatureParentIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureParentNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureParentUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureLevelOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneFeatureNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureReferenceOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureSubclassOperatorsInput {
    index: FilterFindOneFeatureSubclassIndexOperatorsInput
    name: FilterFindOneFeatureSubclassNameOperatorsInput
    url: FilterFindOneFeatureSubclassUrlOperatorsInput
  }

  input FilterFindOneFeatureSubclassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureSubclassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureSubclassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureFeature_specificOperatorsInput {
    subfeature_options: FilterFindOneFeatureFeature_specificSubfeature_optionsOperatorsInput
    expertise_options: FilterFindOneFeatureFeature_specificExpertise_optionsOperatorsInput
  }

  input FilterFindOneFeatureFeature_specificSubfeature_optionsOperatorsInput {
    choose: FilterFindOneFeatureFeature_specificSubfeature_optionsChooseOperatorsInput
    type: FilterFindOneFeatureFeature_specificSubfeature_optionsTypeOperatorsInput
  }

  input FilterFindOneFeatureFeature_specificSubfeature_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneFeatureFeature_specificSubfeature_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureFeature_specificExpertise_optionsOperatorsInput {
    choose: FilterFindOneFeatureFeature_specificExpertise_optionsChooseOperatorsInput
    type: FilterFindOneFeatureFeature_specificExpertise_optionsTypeOperatorsInput
  }

  input FilterFindOneFeatureFeature_specificExpertise_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneFeatureFeature_specificExpertise_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneFeatureUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneFeatureInput {
    _ID_ASC
    _ID_DESC
    CHOICE__CHOOSE_ASC
    CHOICE__CHOOSE_DESC
    CHOICE__TYPE_ASC
    CHOICE__TYPE_DESC
    CLASS__INDEX_ASC
    CLASS__INDEX_DESC
    CLASS__NAME_ASC
    CLASS__NAME_DESC
    CLASS__URL_ASC
    CLASS__URL_DESC
    DESC_ASC
    DESC_DESC
    PARENT__INDEX_ASC
    PARENT__INDEX_DESC
    PARENT__NAME_ASC
    PARENT__NAME_DESC
    PARENT__URL_ASC
    PARENT__URL_DESC
    INDEX_ASC
    INDEX_DESC
    LEVEL_ASC
    LEVEL_DESC
    NAME_ASC
    NAME_DESC
    REFERENCE_ASC
    REFERENCE_DESC
    SUBCLASS__INDEX_ASC
    SUBCLASS__INDEX_DESC
    SUBCLASS__NAME_ASC
    SUBCLASS__NAME_DESC
    SUBCLASS__URL_ASC
    SUBCLASS__URL_DESC
    FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_ASC
    FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_DESC
    FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_ASC
    FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_DESC
    FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_ASC
    FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_DESC
    FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_ASC
    FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyFeatureInput {
    _id: String
    choice: FilterFindManyFeatureChoiceInput
    class: FilterFindManyFeatureClassInput
    desc: [String]
    parent: FilterFindManyFeatureParentInput
    index: String
    level: Float
    name: String
    prerequisites: [FilterFindManyFeaturePrerequisitesInput]
    reference: String
    subclass: FilterFindManyFeatureSubclassInput
    feature_specific: FilterFindManyFeatureFeature_specificInput
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyFeatureOperatorsInput
    OR: [FilterFindManyFeatureInput!]
    AND: [FilterFindManyFeatureInput!]
  }

  #
  input FilterFindManyFeatureChoiceInput {
    choose: Float
    from: [FilterFindManyFeatureChoiceFromInput]
    type: String
  }

  #
  input FilterFindManyFeatureChoiceFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyFeatureClassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyFeatureParentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyFeaturePrerequisitesInput {
    level: Float
    type: String
    _id: MongoID
  }

  #
  input FilterFindManyFeatureSubclassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyFeatureFeature_specificInput {
    subfeature_options: FilterFindManyFeatureFeature_specificSubfeature_optionsInput
    expertise_options: FilterFindManyFeatureFeature_specificExpertise_optionsInput
  }

  #
  input FilterFindManyFeatureFeature_specificSubfeature_optionsInput {
    choose: Float
    from: [FilterFindManyFeatureFeature_specificSubfeature_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyFeatureFeature_specificSubfeature_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyFeatureFeature_specificExpertise_optionsInput {
    choose: Float
    from: [FilterFindManyFeatureFeature_specificExpertise_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyFeatureFeature_specificExpertise_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyFeatureOperatorsInput {
    _id: FilterFindManyFeature_idOperatorsInput
    choice: FilterFindManyFeatureChoiceOperatorsInput
    class: FilterFindManyFeatureClassOperatorsInput
    desc: FilterFindManyFeatureDescOperatorsInput
    parent: FilterFindManyFeatureParentOperatorsInput
    index: FilterFindManyFeatureIndexOperatorsInput
    level: FilterFindManyFeatureLevelOperatorsInput
    name: FilterFindManyFeatureNameOperatorsInput
    reference: FilterFindManyFeatureReferenceOperatorsInput
    subclass: FilterFindManyFeatureSubclassOperatorsInput
    feature_specific: FilterFindManyFeatureFeature_specificOperatorsInput
    url: FilterFindManyFeatureUrlOperatorsInput
  }

  input FilterFindManyFeature_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureChoiceOperatorsInput {
    choose: FilterFindManyFeatureChoiceChooseOperatorsInput
    type: FilterFindManyFeatureChoiceTypeOperatorsInput
  }

  input FilterFindManyFeatureChoiceChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyFeatureChoiceTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureClassOperatorsInput {
    index: FilterFindManyFeatureClassIndexOperatorsInput
    name: FilterFindManyFeatureClassNameOperatorsInput
    url: FilterFindManyFeatureClassUrlOperatorsInput
  }

  input FilterFindManyFeatureClassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureClassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureClassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureParentOperatorsInput {
    index: FilterFindManyFeatureParentIndexOperatorsInput
    name: FilterFindManyFeatureParentNameOperatorsInput
    url: FilterFindManyFeatureParentUrlOperatorsInput
  }

  input FilterFindManyFeatureParentIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureParentNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureParentUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureLevelOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyFeatureNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureReferenceOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureSubclassOperatorsInput {
    index: FilterFindManyFeatureSubclassIndexOperatorsInput
    name: FilterFindManyFeatureSubclassNameOperatorsInput
    url: FilterFindManyFeatureSubclassUrlOperatorsInput
  }

  input FilterFindManyFeatureSubclassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureSubclassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureSubclassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureFeature_specificOperatorsInput {
    subfeature_options: FilterFindManyFeatureFeature_specificSubfeature_optionsOperatorsInput
    expertise_options: FilterFindManyFeatureFeature_specificExpertise_optionsOperatorsInput
  }

  input FilterFindManyFeatureFeature_specificSubfeature_optionsOperatorsInput {
    choose: FilterFindManyFeatureFeature_specificSubfeature_optionsChooseOperatorsInput
    type: FilterFindManyFeatureFeature_specificSubfeature_optionsTypeOperatorsInput
  }

  input FilterFindManyFeatureFeature_specificSubfeature_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyFeatureFeature_specificSubfeature_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureFeature_specificExpertise_optionsOperatorsInput {
    choose: FilterFindManyFeatureFeature_specificExpertise_optionsChooseOperatorsInput
    type: FilterFindManyFeatureFeature_specificExpertise_optionsTypeOperatorsInput
  }

  input FilterFindManyFeatureFeature_specificExpertise_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyFeatureFeature_specificExpertise_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyFeatureUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  type Language {
    _id: String!
    desc: String
    index: String
    name: String
    script: String
    type: String
    typical_speakers: [String]
    url: String
  }

  #
  input FilterFindOneLanguageInput {
    _id: String
    desc: String
    index: String
    name: String
    script: String
    type: String
    typical_speakers: [String]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneLanguageOperatorsInput
    OR: [FilterFindOneLanguageInput!]
    AND: [FilterFindOneLanguageInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneLanguageOperatorsInput {
    _id: FilterFindOneLanguage_idOperatorsInput
    desc: FilterFindOneLanguageDescOperatorsInput
    index: FilterFindOneLanguageIndexOperatorsInput
    name: FilterFindOneLanguageNameOperatorsInput
    script: FilterFindOneLanguageScriptOperatorsInput
    type: FilterFindOneLanguageTypeOperatorsInput
    typical_speakers: FilterFindOneLanguageTypical_speakersOperatorsInput
    url: FilterFindOneLanguageUrlOperatorsInput
  }

  input FilterFindOneLanguage_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLanguageDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLanguageIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLanguageNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLanguageScriptOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLanguageTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLanguageTypical_speakersOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLanguageUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneLanguageInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    SCRIPT_ASC
    SCRIPT_DESC
    TYPE_ASC
    TYPE_DESC
    TYPICAL_SPEAKERS_ASC
    TYPICAL_SPEAKERS_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyLanguageInput {
    _id: String
    desc: String
    index: String
    name: String
    script: String
    type: String
    typical_speakers: [String]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyLanguageOperatorsInput
    OR: [FilterFindManyLanguageInput!]
    AND: [FilterFindManyLanguageInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyLanguageOperatorsInput {
    _id: FilterFindManyLanguage_idOperatorsInput
    desc: FilterFindManyLanguageDescOperatorsInput
    index: FilterFindManyLanguageIndexOperatorsInput
    name: FilterFindManyLanguageNameOperatorsInput
    script: FilterFindManyLanguageScriptOperatorsInput
    type: FilterFindManyLanguageTypeOperatorsInput
    typical_speakers: FilterFindManyLanguageTypical_speakersOperatorsInput
    url: FilterFindManyLanguageUrlOperatorsInput
  }

  input FilterFindManyLanguage_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLanguageDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLanguageIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLanguageNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLanguageScriptOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLanguageTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLanguageTypical_speakersOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLanguageUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyLanguageInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    SCRIPT_ASC
    SCRIPT_DESC
    TYPE_ASC
    TYPE_DESC
    TYPICAL_SPEAKERS_ASC
    TYPICAL_SPEAKERS_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindOneLevelInput {
    _id: String
    ability_score_bonuses: Float
    class: FilterFindOneLevelClassInput
    class_specific: FilterFindOneLevelClass_specificInput
    features: [FilterFindOneLevelFeaturesInput]
    index: String
    level: Float
    prof_bonus: Float
    spellcasting: FilterFindOneLevelSpellcastingInput
    subclass: FilterFindOneLevelSubclassInput
    subclass_specific: FilterFindOneLevelSubclass_specificInput
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneLevelOperatorsInput
    OR: [FilterFindOneLevelInput!]
    AND: [FilterFindOneLevelInput!]
  }

  #
  input FilterFindOneLevelClassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneLevelClass_specificInput {
    action_surges: Float
    arcane_recovery_levels: Float
    aura_range: Float
    bardic_inspiration_die: Float
    brutal_critical_dice: Float
    channel_divinity_charges: Float
    creating_spell_slots: [FilterFindOneLevelClass_specificCreating_spell_slotsInput]
    destroy_undead_cr: Float
    extra_attacks: Float
    favored_enemies: Float
    favored_terrain: Float
    indomitable_uses: Float
    invocations_known: Float
    ki_points: Float
    magical_secrets_max_5: Float
    magical_secrets_max_7: Float
    magical_secrets_max_9: Float
    martial_arts: FilterFindOneLevelClass_specificMartial_artsInput
    metamagic_known: Float
    mystic_arcanum_level_6: Float
    mystic_arcanum_level_7: Float
    mystic_arcanum_level_8: Float
    mystic_arcanum_level_9: Float
    rage_count: Float
    rage_damage_bonus: Float
    sneak_attack: FilterFindOneLevelClass_specificSneak_attackInput
    song_of_rest_die: Float
    sorcery_points: Float
    unarmored_movement: Float
    wild_shape_fly: Boolean
    wild_shape_max_cr: Float
    wild_shape_swim: Boolean
  }

  #
  input FilterFindOneLevelClass_specificCreating_spell_slotsInput {
    sorcery_point_cost: Float
    spell_slot_level: Float
    _id: MongoID
  }

  #
  input FilterFindOneLevelClass_specificMartial_artsInput {
    dice_count: Float
    dice_value: Float
  }

  #
  input FilterFindOneLevelClass_specificSneak_attackInput {
    dice_count: Float
    dice_value: Float
  }

  #
  input FilterFindOneLevelFeaturesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneLevelSpellcastingInput {
    cantrips_known: Float
    spell_slots_level_1: Float
    spell_slots_level_2: Float
    spell_slots_level_3: Float
    spell_slots_level_4: Float
    spell_slots_level_5: Float
    spell_slots_level_6: Float
    spell_slots_level_7: Float
    spell_slots_level_8: Float
    spell_slots_level_9: Float
    spells_known: Float
  }

  #
  input FilterFindOneLevelSubclassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneLevelSubclass_specificInput {
    additional_magical_secrets_max_lvl: Float
    aura_range: Float
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneLevelOperatorsInput {
    _id: FilterFindOneLevel_idOperatorsInput
    ability_score_bonuses: FilterFindOneLevelAbility_score_bonusesOperatorsInput
    class: FilterFindOneLevelClassOperatorsInput
    class_specific: FilterFindOneLevelClass_specificOperatorsInput
    index: FilterFindOneLevelIndexOperatorsInput
    level: FilterFindOneLevelLevelOperatorsInput
    prof_bonus: FilterFindOneLevelProf_bonusOperatorsInput
    spellcasting: FilterFindOneLevelSpellcastingOperatorsInput
    subclass: FilterFindOneLevelSubclassOperatorsInput
    subclass_specific: FilterFindOneLevelSubclass_specificOperatorsInput
    url: FilterFindOneLevelUrlOperatorsInput
  }

  input FilterFindOneLevel_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLevelAbility_score_bonusesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClassOperatorsInput {
    index: FilterFindOneLevelClassIndexOperatorsInput
    name: FilterFindOneLevelClassNameOperatorsInput
    url: FilterFindOneLevelClassUrlOperatorsInput
  }

  input FilterFindOneLevelClassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLevelClassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLevelClassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificOperatorsInput {
    action_surges: FilterFindOneLevelClass_specificAction_surgesOperatorsInput
    arcane_recovery_levels: FilterFindOneLevelClass_specificArcane_recovery_levelsOperatorsInput
    aura_range: FilterFindOneLevelClass_specificAura_rangeOperatorsInput
    bardic_inspiration_die: FilterFindOneLevelClass_specificBardic_inspiration_dieOperatorsInput
    brutal_critical_dice: FilterFindOneLevelClass_specificBrutal_critical_diceOperatorsInput
    channel_divinity_charges: FilterFindOneLevelClass_specificChannel_divinity_chargesOperatorsInput
    destroy_undead_cr: FilterFindOneLevelClass_specificDestroy_undead_crOperatorsInput
    extra_attacks: FilterFindOneLevelClass_specificExtra_attacksOperatorsInput
    favored_enemies: FilterFindOneLevelClass_specificFavored_enemiesOperatorsInput
    favored_terrain: FilterFindOneLevelClass_specificFavored_terrainOperatorsInput
    indomitable_uses: FilterFindOneLevelClass_specificIndomitable_usesOperatorsInput
    invocations_known: FilterFindOneLevelClass_specificInvocations_knownOperatorsInput
    ki_points: FilterFindOneLevelClass_specificKi_pointsOperatorsInput
    magical_secrets_max_5: FilterFindOneLevelClass_specificMagical_secrets_max_5OperatorsInput
    magical_secrets_max_7: FilterFindOneLevelClass_specificMagical_secrets_max_7OperatorsInput
    magical_secrets_max_9: FilterFindOneLevelClass_specificMagical_secrets_max_9OperatorsInput
    martial_arts: FilterFindOneLevelClass_specificMartial_artsOperatorsInput
    metamagic_known: FilterFindOneLevelClass_specificMetamagic_knownOperatorsInput
    mystic_arcanum_level_6: FilterFindOneLevelClass_specificMystic_arcanum_level_6OperatorsInput
    mystic_arcanum_level_7: FilterFindOneLevelClass_specificMystic_arcanum_level_7OperatorsInput
    mystic_arcanum_level_8: FilterFindOneLevelClass_specificMystic_arcanum_level_8OperatorsInput
    mystic_arcanum_level_9: FilterFindOneLevelClass_specificMystic_arcanum_level_9OperatorsInput
    rage_count: FilterFindOneLevelClass_specificRage_countOperatorsInput
    rage_damage_bonus: FilterFindOneLevelClass_specificRage_damage_bonusOperatorsInput
    sneak_attack: FilterFindOneLevelClass_specificSneak_attackOperatorsInput
    song_of_rest_die: FilterFindOneLevelClass_specificSong_of_rest_dieOperatorsInput
    sorcery_points: FilterFindOneLevelClass_specificSorcery_pointsOperatorsInput
    unarmored_movement: FilterFindOneLevelClass_specificUnarmored_movementOperatorsInput
    wild_shape_fly: FilterFindOneLevelClass_specificWild_shape_flyOperatorsInput
    wild_shape_max_cr: FilterFindOneLevelClass_specificWild_shape_max_crOperatorsInput
    wild_shape_swim: FilterFindOneLevelClass_specificWild_shape_swimOperatorsInput
  }

  input FilterFindOneLevelClass_specificAction_surgesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificArcane_recovery_levelsOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificAura_rangeOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificBardic_inspiration_dieOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificBrutal_critical_diceOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificChannel_divinity_chargesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificDestroy_undead_crOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificExtra_attacksOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificFavored_enemiesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificFavored_terrainOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificIndomitable_usesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificInvocations_knownOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificKi_pointsOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMagical_secrets_max_5OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMagical_secrets_max_7OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMagical_secrets_max_9OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMartial_artsOperatorsInput {
    dice_count: FilterFindOneLevelClass_specificMartial_artsDice_countOperatorsInput
    dice_value: FilterFindOneLevelClass_specificMartial_artsDice_valueOperatorsInput
  }

  input FilterFindOneLevelClass_specificMartial_artsDice_countOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMartial_artsDice_valueOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMetamagic_knownOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMystic_arcanum_level_6OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMystic_arcanum_level_7OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMystic_arcanum_level_8OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificMystic_arcanum_level_9OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificRage_countOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificRage_damage_bonusOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificSneak_attackOperatorsInput {
    dice_count: FilterFindOneLevelClass_specificSneak_attackDice_countOperatorsInput
    dice_value: FilterFindOneLevelClass_specificSneak_attackDice_valueOperatorsInput
  }

  input FilterFindOneLevelClass_specificSneak_attackDice_countOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificSneak_attackDice_valueOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificSong_of_rest_dieOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificSorcery_pointsOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificUnarmored_movementOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificWild_shape_flyOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificWild_shape_max_crOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelClass_specificWild_shape_swimOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindOneLevelIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLevelLevelOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelProf_bonusOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingOperatorsInput {
    cantrips_known: FilterFindOneLevelSpellcastingCantrips_knownOperatorsInput
    spell_slots_level_1: FilterFindOneLevelSpellcastingSpell_slots_level_1OperatorsInput
    spell_slots_level_2: FilterFindOneLevelSpellcastingSpell_slots_level_2OperatorsInput
    spell_slots_level_3: FilterFindOneLevelSpellcastingSpell_slots_level_3OperatorsInput
    spell_slots_level_4: FilterFindOneLevelSpellcastingSpell_slots_level_4OperatorsInput
    spell_slots_level_5: FilterFindOneLevelSpellcastingSpell_slots_level_5OperatorsInput
    spell_slots_level_6: FilterFindOneLevelSpellcastingSpell_slots_level_6OperatorsInput
    spell_slots_level_7: FilterFindOneLevelSpellcastingSpell_slots_level_7OperatorsInput
    spell_slots_level_8: FilterFindOneLevelSpellcastingSpell_slots_level_8OperatorsInput
    spell_slots_level_9: FilterFindOneLevelSpellcastingSpell_slots_level_9OperatorsInput
    spells_known: FilterFindOneLevelSpellcastingSpells_knownOperatorsInput
  }

  input FilterFindOneLevelSpellcastingCantrips_knownOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpell_slots_level_1OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpell_slots_level_2OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpell_slots_level_3OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpell_slots_level_4OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpell_slots_level_5OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpell_slots_level_6OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpell_slots_level_7OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpell_slots_level_8OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpell_slots_level_9OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSpellcastingSpells_knownOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSubclassOperatorsInput {
    index: FilterFindOneLevelSubclassIndexOperatorsInput
    name: FilterFindOneLevelSubclassNameOperatorsInput
    url: FilterFindOneLevelSubclassUrlOperatorsInput
  }

  input FilterFindOneLevelSubclassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLevelSubclassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLevelSubclassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneLevelSubclass_specificOperatorsInput {
    additional_magical_secrets_max_lvl: FilterFindOneLevelSubclass_specificAdditional_magical_secrets_max_lvlOperatorsInput
    aura_range: FilterFindOneLevelSubclass_specificAura_rangeOperatorsInput
  }

  input FilterFindOneLevelSubclass_specificAdditional_magical_secrets_max_lvlOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelSubclass_specificAura_rangeOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneLevelUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneLevelInput {
    _ID_ASC
    _ID_DESC
    ABILITY_SCORE_BONUSES_ASC
    ABILITY_SCORE_BONUSES_DESC
    CLASS__INDEX_ASC
    CLASS__INDEX_DESC
    CLASS__NAME_ASC
    CLASS__NAME_DESC
    CLASS__URL_ASC
    CLASS__URL_DESC
    CLASS_SPECIFIC__ACTION_SURGES_ASC
    CLASS_SPECIFIC__ACTION_SURGES_DESC
    CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_ASC
    CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_DESC
    CLASS_SPECIFIC__AURA_RANGE_ASC
    CLASS_SPECIFIC__AURA_RANGE_DESC
    CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_ASC
    CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_DESC
    CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_ASC
    CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_DESC
    CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_ASC
    CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_DESC
    CLASS_SPECIFIC__DESTROY_UNDEAD_CR_ASC
    CLASS_SPECIFIC__DESTROY_UNDEAD_CR_DESC
    CLASS_SPECIFIC__EXTRA_ATTACKS_ASC
    CLASS_SPECIFIC__EXTRA_ATTACKS_DESC
    CLASS_SPECIFIC__FAVORED_ENEMIES_ASC
    CLASS_SPECIFIC__FAVORED_ENEMIES_DESC
    CLASS_SPECIFIC__FAVORED_TERRAIN_ASC
    CLASS_SPECIFIC__FAVORED_TERRAIN_DESC
    CLASS_SPECIFIC__INDOMITABLE_USES_ASC
    CLASS_SPECIFIC__INDOMITABLE_USES_DESC
    CLASS_SPECIFIC__INVOCATIONS_KNOWN_ASC
    CLASS_SPECIFIC__INVOCATIONS_KNOWN_DESC
    CLASS_SPECIFIC__KI_POINTS_ASC
    CLASS_SPECIFIC__KI_POINTS_DESC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_ASC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_DESC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_ASC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_DESC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_ASC
    CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_DESC
    CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_ASC
    CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_DESC
    CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_ASC
    CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_DESC
    CLASS_SPECIFIC__METAMAGIC_KNOWN_ASC
    CLASS_SPECIFIC__METAMAGIC_KNOWN_DESC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_ASC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_DESC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_ASC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_DESC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_ASC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_DESC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_ASC
    CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_DESC
    CLASS_SPECIFIC__RAGE_COUNT_ASC
    CLASS_SPECIFIC__RAGE_COUNT_DESC
    CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_ASC
    CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_DESC
    CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_ASC
    CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_DESC
    CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_ASC
    CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_DESC
    CLASS_SPECIFIC__SONG_OF_REST_DIE_ASC
    CLASS_SPECIFIC__SONG_OF_REST_DIE_DESC
    CLASS_SPECIFIC__SORCERY_POINTS_ASC
    CLASS_SPECIFIC__SORCERY_POINTS_DESC
    CLASS_SPECIFIC__UNARMORED_MOVEMENT_ASC
    CLASS_SPECIFIC__UNARMORED_MOVEMENT_DESC
    CLASS_SPECIFIC__WILD_SHAPE_FLY_ASC
    CLASS_SPECIFIC__WILD_SHAPE_FLY_DESC
    CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_ASC
    CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_DESC
    CLASS_SPECIFIC__WILD_SHAPE_SWIM_ASC
    CLASS_SPECIFIC__WILD_SHAPE_SWIM_DESC
    INDEX_ASC
    INDEX_DESC
    LEVEL_ASC
    LEVEL_DESC
    PROF_BONUS_ASC
    PROF_BONUS_DESC
    SPELLCASTING__CANTRIPS_KNOWN_ASC
    SPELLCASTING__CANTRIPS_KNOWN_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_1_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_1_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_2_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_2_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_3_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_3_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_4_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_4_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_5_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_5_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_6_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_6_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_7_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_7_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_8_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_8_DESC
    SPELLCASTING__SPELL_SLOTS_LEVEL_9_ASC
    SPELLCASTING__SPELL_SLOTS_LEVEL_9_DESC
    SPELLCASTING__SPELLS_KNOWN_ASC
    SPELLCASTING__SPELLS_KNOWN_DESC
    SUBCLASS__INDEX_ASC
    SUBCLASS__INDEX_DESC
    SUBCLASS__NAME_ASC
    SUBCLASS__NAME_DESC
    SUBCLASS__URL_ASC
    SUBCLASS__URL_DESC
    SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_ASC
    SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_DESC
    SUBCLASS_SPECIFIC__AURA_RANGE_ASC
    SUBCLASS_SPECIFIC__AURA_RANGE_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyLevelInput {
    _id: String
    ability_score_bonuses: Float
    class: FilterFindManyLevelClassInput
    class_specific: FilterFindManyLevelClass_specificInput
    features: [FilterFindManyLevelFeaturesInput]
    index: String
    level: Float
    prof_bonus: Float
    spellcasting: FilterFindManyLevelSpellcastingInput
    subclass: FilterFindManyLevelSubclassInput
    subclass_specific: FilterFindManyLevelSubclass_specificInput
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyLevelOperatorsInput
    OR: [FilterFindManyLevelInput!]
    AND: [FilterFindManyLevelInput!]
  }

  #
  input FilterFindManyLevelClassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyLevelClass_specificInput {
    action_surges: Float
    arcane_recovery_levels: Float
    aura_range: Float
    bardic_inspiration_die: Float
    brutal_critical_dice: Float
    channel_divinity_charges: Float
    creating_spell_slots: [FilterFindManyLevelClass_specificCreating_spell_slotsInput]
    destroy_undead_cr: Float
    extra_attacks: Float
    favored_enemies: Float
    favored_terrain: Float
    indomitable_uses: Float
    invocations_known: Float
    ki_points: Float
    magical_secrets_max_5: Float
    magical_secrets_max_7: Float
    magical_secrets_max_9: Float
    martial_arts: FilterFindManyLevelClass_specificMartial_artsInput
    metamagic_known: Float
    mystic_arcanum_level_6: Float
    mystic_arcanum_level_7: Float
    mystic_arcanum_level_8: Float
    mystic_arcanum_level_9: Float
    rage_count: Float
    rage_damage_bonus: Float
    sneak_attack: FilterFindManyLevelClass_specificSneak_attackInput
    song_of_rest_die: Float
    sorcery_points: Float
    unarmored_movement: Float
    wild_shape_fly: Boolean
    wild_shape_max_cr: Float
    wild_shape_swim: Boolean
  }

  #
  input FilterFindManyLevelClass_specificCreating_spell_slotsInput {
    sorcery_point_cost: Float
    spell_slot_level: Float
    _id: MongoID
  }

  #
  input FilterFindManyLevelClass_specificMartial_artsInput {
    dice_count: Float
    dice_value: Float
  }

  #
  input FilterFindManyLevelClass_specificSneak_attackInput {
    dice_count: Float
    dice_value: Float
  }

  #
  input FilterFindManyLevelFeaturesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyLevelSpellcastingInput {
    cantrips_known: Float
    spell_slots_level_1: Float
    spell_slots_level_2: Float
    spell_slots_level_3: Float
    spell_slots_level_4: Float
    spell_slots_level_5: Float
    spell_slots_level_6: Float
    spell_slots_level_7: Float
    spell_slots_level_8: Float
    spell_slots_level_9: Float
    spells_known: Float
  }

  #
  input FilterFindManyLevelSubclassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyLevelSubclass_specificInput {
    additional_magical_secrets_max_lvl: Float
    aura_range: Float
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyLevelOperatorsInput {
    _id: FilterFindManyLevel_idOperatorsInput
    ability_score_bonuses: FilterFindManyLevelAbility_score_bonusesOperatorsInput
    class: FilterFindManyLevelClassOperatorsInput
    class_specific: FilterFindManyLevelClass_specificOperatorsInput
    index: FilterFindManyLevelIndexOperatorsInput
    level: FilterFindManyLevelLevelOperatorsInput
    prof_bonus: FilterFindManyLevelProf_bonusOperatorsInput
    spellcasting: FilterFindManyLevelSpellcastingOperatorsInput
    subclass: FilterFindManyLevelSubclassOperatorsInput
    subclass_specific: FilterFindManyLevelSubclass_specificOperatorsInput
    url: FilterFindManyLevelUrlOperatorsInput
  }

  input FilterFindManyLevel_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLevelAbility_score_bonusesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClassOperatorsInput {
    index: FilterFindManyLevelClassIndexOperatorsInput
    name: FilterFindManyLevelClassNameOperatorsInput
    url: FilterFindManyLevelClassUrlOperatorsInput
  }

  input FilterFindManyLevelClassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLevelClassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLevelClassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificOperatorsInput {
    action_surges: FilterFindManyLevelClass_specificAction_surgesOperatorsInput
    arcane_recovery_levels: FilterFindManyLevelClass_specificArcane_recovery_levelsOperatorsInput
    aura_range: FilterFindManyLevelClass_specificAura_rangeOperatorsInput
    bardic_inspiration_die: FilterFindManyLevelClass_specificBardic_inspiration_dieOperatorsInput
    brutal_critical_dice: FilterFindManyLevelClass_specificBrutal_critical_diceOperatorsInput
    channel_divinity_charges: FilterFindManyLevelClass_specificChannel_divinity_chargesOperatorsInput
    destroy_undead_cr: FilterFindManyLevelClass_specificDestroy_undead_crOperatorsInput
    extra_attacks: FilterFindManyLevelClass_specificExtra_attacksOperatorsInput
    favored_enemies: FilterFindManyLevelClass_specificFavored_enemiesOperatorsInput
    favored_terrain: FilterFindManyLevelClass_specificFavored_terrainOperatorsInput
    indomitable_uses: FilterFindManyLevelClass_specificIndomitable_usesOperatorsInput
    invocations_known: FilterFindManyLevelClass_specificInvocations_knownOperatorsInput
    ki_points: FilterFindManyLevelClass_specificKi_pointsOperatorsInput
    magical_secrets_max_5: FilterFindManyLevelClass_specificMagical_secrets_max_5OperatorsInput
    magical_secrets_max_7: FilterFindManyLevelClass_specificMagical_secrets_max_7OperatorsInput
    magical_secrets_max_9: FilterFindManyLevelClass_specificMagical_secrets_max_9OperatorsInput
    martial_arts: FilterFindManyLevelClass_specificMartial_artsOperatorsInput
    metamagic_known: FilterFindManyLevelClass_specificMetamagic_knownOperatorsInput
    mystic_arcanum_level_6: FilterFindManyLevelClass_specificMystic_arcanum_level_6OperatorsInput
    mystic_arcanum_level_7: FilterFindManyLevelClass_specificMystic_arcanum_level_7OperatorsInput
    mystic_arcanum_level_8: FilterFindManyLevelClass_specificMystic_arcanum_level_8OperatorsInput
    mystic_arcanum_level_9: FilterFindManyLevelClass_specificMystic_arcanum_level_9OperatorsInput
    rage_count: FilterFindManyLevelClass_specificRage_countOperatorsInput
    rage_damage_bonus: FilterFindManyLevelClass_specificRage_damage_bonusOperatorsInput
    sneak_attack: FilterFindManyLevelClass_specificSneak_attackOperatorsInput
    song_of_rest_die: FilterFindManyLevelClass_specificSong_of_rest_dieOperatorsInput
    sorcery_points: FilterFindManyLevelClass_specificSorcery_pointsOperatorsInput
    unarmored_movement: FilterFindManyLevelClass_specificUnarmored_movementOperatorsInput
    wild_shape_fly: FilterFindManyLevelClass_specificWild_shape_flyOperatorsInput
    wild_shape_max_cr: FilterFindManyLevelClass_specificWild_shape_max_crOperatorsInput
    wild_shape_swim: FilterFindManyLevelClass_specificWild_shape_swimOperatorsInput
  }

  input FilterFindManyLevelClass_specificAction_surgesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificArcane_recovery_levelsOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificAura_rangeOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificBardic_inspiration_dieOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificBrutal_critical_diceOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificChannel_divinity_chargesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificDestroy_undead_crOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificExtra_attacksOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificFavored_enemiesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificFavored_terrainOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificIndomitable_usesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificInvocations_knownOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificKi_pointsOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMagical_secrets_max_5OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMagical_secrets_max_7OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMagical_secrets_max_9OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMartial_artsOperatorsInput {
    dice_count: FilterFindManyLevelClass_specificMartial_artsDice_countOperatorsInput
    dice_value: FilterFindManyLevelClass_specificMartial_artsDice_valueOperatorsInput
  }

  input FilterFindManyLevelClass_specificMartial_artsDice_countOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMartial_artsDice_valueOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMetamagic_knownOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMystic_arcanum_level_6OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMystic_arcanum_level_7OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMystic_arcanum_level_8OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificMystic_arcanum_level_9OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificRage_countOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificRage_damage_bonusOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificSneak_attackOperatorsInput {
    dice_count: FilterFindManyLevelClass_specificSneak_attackDice_countOperatorsInput
    dice_value: FilterFindManyLevelClass_specificSneak_attackDice_valueOperatorsInput
  }

  input FilterFindManyLevelClass_specificSneak_attackDice_countOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificSneak_attackDice_valueOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificSong_of_rest_dieOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificSorcery_pointsOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificUnarmored_movementOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificWild_shape_flyOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificWild_shape_max_crOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelClass_specificWild_shape_swimOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindManyLevelIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLevelLevelOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelProf_bonusOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingOperatorsInput {
    cantrips_known: FilterFindManyLevelSpellcastingCantrips_knownOperatorsInput
    spell_slots_level_1: FilterFindManyLevelSpellcastingSpell_slots_level_1OperatorsInput
    spell_slots_level_2: FilterFindManyLevelSpellcastingSpell_slots_level_2OperatorsInput
    spell_slots_level_3: FilterFindManyLevelSpellcastingSpell_slots_level_3OperatorsInput
    spell_slots_level_4: FilterFindManyLevelSpellcastingSpell_slots_level_4OperatorsInput
    spell_slots_level_5: FilterFindManyLevelSpellcastingSpell_slots_level_5OperatorsInput
    spell_slots_level_6: FilterFindManyLevelSpellcastingSpell_slots_level_6OperatorsInput
    spell_slots_level_7: FilterFindManyLevelSpellcastingSpell_slots_level_7OperatorsInput
    spell_slots_level_8: FilterFindManyLevelSpellcastingSpell_slots_level_8OperatorsInput
    spell_slots_level_9: FilterFindManyLevelSpellcastingSpell_slots_level_9OperatorsInput
    spells_known: FilterFindManyLevelSpellcastingSpells_knownOperatorsInput
  }

  input FilterFindManyLevelSpellcastingCantrips_knownOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpell_slots_level_1OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpell_slots_level_2OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpell_slots_level_3OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpell_slots_level_4OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpell_slots_level_5OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpell_slots_level_6OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpell_slots_level_7OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpell_slots_level_8OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpell_slots_level_9OperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSpellcastingSpells_knownOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSubclassOperatorsInput {
    index: FilterFindManyLevelSubclassIndexOperatorsInput
    name: FilterFindManyLevelSubclassNameOperatorsInput
    url: FilterFindManyLevelSubclassUrlOperatorsInput
  }

  input FilterFindManyLevelSubclassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLevelSubclassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLevelSubclassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyLevelSubclass_specificOperatorsInput {
    additional_magical_secrets_max_lvl: FilterFindManyLevelSubclass_specificAdditional_magical_secrets_max_lvlOperatorsInput
    aura_range: FilterFindManyLevelSubclass_specificAura_rangeOperatorsInput
  }

  input FilterFindManyLevelSubclass_specificAdditional_magical_secrets_max_lvlOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelSubclass_specificAura_rangeOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyLevelUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  type MagicItem {
    _id: String!
    desc: [String]
    equipment_category: MagicItemEquipment_category
    index: String
    name: String
    url: String
  }

  type MagicItemEquipment_category {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneMagicItemInput {
    _id: String
    desc: [String]
    equipment_category: FilterFindOneMagicItemEquipment_categoryInput
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneMagicItemOperatorsInput
    OR: [FilterFindOneMagicItemInput!]
    AND: [FilterFindOneMagicItemInput!]
  }

  #
  input FilterFindOneMagicItemEquipment_categoryInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneMagicItemOperatorsInput {
    _id: FilterFindOneMagicItem_idOperatorsInput
    desc: FilterFindOneMagicItemDescOperatorsInput
    equipment_category: FilterFindOneMagicItemEquipment_categoryOperatorsInput
    index: FilterFindOneMagicItemIndexOperatorsInput
    name: FilterFindOneMagicItemNameOperatorsInput
    url: FilterFindOneMagicItemUrlOperatorsInput
  }

  input FilterFindOneMagicItem_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicItemDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicItemEquipment_categoryOperatorsInput {
    index: FilterFindOneMagicItemEquipment_categoryIndexOperatorsInput
    name: FilterFindOneMagicItemEquipment_categoryNameOperatorsInput
    url: FilterFindOneMagicItemEquipment_categoryUrlOperatorsInput
  }

  input FilterFindOneMagicItemEquipment_categoryIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicItemEquipment_categoryNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicItemEquipment_categoryUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicItemIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicItemNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicItemUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneMagicItemInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    EQUIPMENT_CATEGORY__INDEX_ASC
    EQUIPMENT_CATEGORY__INDEX_DESC
    EQUIPMENT_CATEGORY__NAME_ASC
    EQUIPMENT_CATEGORY__NAME_DESC
    EQUIPMENT_CATEGORY__URL_ASC
    EQUIPMENT_CATEGORY__URL_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyMagicItemInput {
    _id: String
    desc: [String]
    equipment_category: FilterFindManyMagicItemEquipment_categoryInput
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyMagicItemOperatorsInput
    OR: [FilterFindManyMagicItemInput!]
    AND: [FilterFindManyMagicItemInput!]
  }

  #
  input FilterFindManyMagicItemEquipment_categoryInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyMagicItemOperatorsInput {
    _id: FilterFindManyMagicItem_idOperatorsInput
    desc: FilterFindManyMagicItemDescOperatorsInput
    equipment_category: FilterFindManyMagicItemEquipment_categoryOperatorsInput
    index: FilterFindManyMagicItemIndexOperatorsInput
    name: FilterFindManyMagicItemNameOperatorsInput
    url: FilterFindManyMagicItemUrlOperatorsInput
  }

  input FilterFindManyMagicItem_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicItemDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicItemEquipment_categoryOperatorsInput {
    index: FilterFindManyMagicItemEquipment_categoryIndexOperatorsInput
    name: FilterFindManyMagicItemEquipment_categoryNameOperatorsInput
    url: FilterFindManyMagicItemEquipment_categoryUrlOperatorsInput
  }

  input FilterFindManyMagicItemEquipment_categoryIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicItemEquipment_categoryNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicItemEquipment_categoryUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicItemIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicItemNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicItemUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyMagicItemInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    EQUIPMENT_CATEGORY__INDEX_ASC
    EQUIPMENT_CATEGORY__INDEX_DESC
    EQUIPMENT_CATEGORY__NAME_ASC
    EQUIPMENT_CATEGORY__NAME_DESC
    EQUIPMENT_CATEGORY__URL_ASC
    EQUIPMENT_CATEGORY__URL_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindOneMagicSchoolInput {
    _id: String
    desc: String
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneMagicSchoolOperatorsInput
    OR: [FilterFindOneMagicSchoolInput!]
    AND: [FilterFindOneMagicSchoolInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneMagicSchoolOperatorsInput {
    _id: FilterFindOneMagicSchool_idOperatorsInput
    desc: FilterFindOneMagicSchoolDescOperatorsInput
    index: FilterFindOneMagicSchoolIndexOperatorsInput
    name: FilterFindOneMagicSchoolNameOperatorsInput
    url: FilterFindOneMagicSchoolUrlOperatorsInput
  }

  input FilterFindOneMagicSchool_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicSchoolDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicSchoolIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicSchoolNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMagicSchoolUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  #
  input FilterFindManyMagicSchoolInput {
    _id: String
    desc: String
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyMagicSchoolOperatorsInput
    OR: [FilterFindManyMagicSchoolInput!]
    AND: [FilterFindManyMagicSchoolInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyMagicSchoolOperatorsInput {
    _id: FilterFindManyMagicSchool_idOperatorsInput
    desc: FilterFindManyMagicSchoolDescOperatorsInput
    index: FilterFindManyMagicSchoolIndexOperatorsInput
    name: FilterFindManyMagicSchoolNameOperatorsInput
    url: FilterFindManyMagicSchoolUrlOperatorsInput
  }

  input FilterFindManyMagicSchool_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicSchoolDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicSchoolIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicSchoolNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMagicSchoolUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyMagicSchoolInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  type Monster {
    _id: String!
    actions: [MonsterActions]
    alignment: String
    armor_class: Float
    challenge_rating: Float
    charisma: Float
    condition_immunities: [MonsterCondition_immunities]
    constitution: Float
    damage_immunities: [String]
    damage_resistances: [String]
    damage_vulnerabilities: [String]
    dexterity: Float
    forms: [MonsterForms]
    hit_dice: String
    hit_points: Float
    index: String
    intelligence: Float
    languages: String
    legendary_actions: [MonsterLegendary_actions]
    name: String
    proficiencies: [MonsterProficiencies]
    reactions: [MonsterReactions]
    senses: MonsterSenses
    size: String
    special_abilities: [MonsterSpecial_abilities]
    speed: MonsterSpeed
    strength: Float
    subtype: String
    type: String
    url: String
    wisdom: Float
    xp: Float
  }

  type MonsterActions {
    attack_bonus: Float
    damage: [MonsterActionsDamage]
    desc: String
    name: String
    _id: MongoID
  }

  type MonsterActionsDamage {
    damage_dice: String
    damage_type: MonsterActionsDamageDamage_type
    _id: MongoID
  }

  type MonsterActionsDamageDamage_type {
    index: String
    name: String
    url: String
  }

  type MonsterCondition_immunities {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type MonsterForms {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type MonsterLegendary_actions {
    attack_bonus: Float
    desc: String
    name: String
    _id: MongoID
  }

  type MonsterProficiencies {
    proficiency: MonsterProficienciesProficiency
    value: Float
    _id: MongoID
  }

  type MonsterProficienciesProficiency {
    index: String
    name: String
    url: String
  }

  type MonsterReactions {
    desc: String
    name: String
    _id: MongoID
  }

  type MonsterSenses {
    blindsight: String
    darkvision: String
    passive_perception: Float
    tremorsense: String
    truesight: String
  }

  type MonsterSpecial_abilities {
    desc: String
    name: String
    _id: MongoID
  }

  type MonsterSpeed {
    burrow: String
    climb: String
    fly: String
    hover: Boolean
    swim: String
    walk: String
  }

  #
  input FilterFindOneMonsterInput {
    _id: String
    actions: [FilterFindOneMonsterActionsInput]
    alignment: String
    armor_class: Float
    challenge_rating: Float
    charisma: Float
    condition_immunities: [FilterFindOneMonsterCondition_immunitiesInput]
    constitution: Float
    damage_immunities: [String]
    damage_resistances: [String]
    damage_vulnerabilities: [String]
    dexterity: Float
    forms: [FilterFindOneMonsterFormsInput]
    hit_dice: String
    hit_points: Float
    index: String
    intelligence: Float
    languages: String
    legendary_actions: [FilterFindOneMonsterLegendary_actionsInput]
    name: String
    proficiencies: [FilterFindOneMonsterProficienciesInput]
    reactions: [FilterFindOneMonsterReactionsInput]
    senses: FilterFindOneMonsterSensesInput
    size: String
    special_abilities: [FilterFindOneMonsterSpecial_abilitiesInput]
    speed: FilterFindOneMonsterSpeedInput
    strength: Float
    subtype: String
    type: String
    url: String
    wisdom: Float
    xp: Float

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneMonsterOperatorsInput
    OR: [FilterFindOneMonsterInput!]
    AND: [FilterFindOneMonsterInput!]
  }

  #
  input FilterFindOneMonsterActionsInput {
    attack_bonus: Float
    damage: [FilterFindOneMonsterActionsDamageInput]
    desc: String
    name: String
    _id: MongoID
  }

  #
  input FilterFindOneMonsterActionsDamageInput {
    damage_dice: String
    damage_type: FilterFindOneMonsterActionsDamageDamage_typeInput
    _id: MongoID
  }

  #
  input FilterFindOneMonsterActionsDamageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneMonsterCondition_immunitiesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneMonsterFormsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneMonsterLegendary_actionsInput {
    attack_bonus: Float
    desc: String
    name: String
    _id: MongoID
  }

  #
  input FilterFindOneMonsterProficienciesInput {
    proficiency: FilterFindOneMonsterProficienciesProficiencyInput
    value: Float
    _id: MongoID
  }

  #
  input FilterFindOneMonsterProficienciesProficiencyInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneMonsterReactionsInput {
    desc: String
    name: String
    _id: MongoID
  }

  #
  input FilterFindOneMonsterSensesInput {
    blindsight: String
    darkvision: String
    passive_perception: Float
    tremorsense: String
    truesight: String
  }

  #
  input FilterFindOneMonsterSpecial_abilitiesInput {
    desc: String
    name: String
    _id: MongoID
  }

  #
  input FilterFindOneMonsterSpeedInput {
    burrow: String
    climb: String
    fly: String
    hover: Boolean
    swim: String
    walk: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneMonsterOperatorsInput {
    _id: FilterFindOneMonster_idOperatorsInput
    alignment: FilterFindOneMonsterAlignmentOperatorsInput
    armor_class: FilterFindOneMonsterArmor_classOperatorsInput
    challenge_rating: FilterFindOneMonsterChallenge_ratingOperatorsInput
    charisma: FilterFindOneMonsterCharismaOperatorsInput
    constitution: FilterFindOneMonsterConstitutionOperatorsInput
    dexterity: FilterFindOneMonsterDexterityOperatorsInput
    hit_dice: FilterFindOneMonsterHit_diceOperatorsInput
    hit_points: FilterFindOneMonsterHit_pointsOperatorsInput
    index: FilterFindOneMonsterIndexOperatorsInput
    intelligence: FilterFindOneMonsterIntelligenceOperatorsInput
    languages: FilterFindOneMonsterLanguagesOperatorsInput
    name: FilterFindOneMonsterNameOperatorsInput
    senses: FilterFindOneMonsterSensesOperatorsInput
    size: FilterFindOneMonsterSizeOperatorsInput
    speed: FilterFindOneMonsterSpeedOperatorsInput
    strength: FilterFindOneMonsterStrengthOperatorsInput
    subtype: FilterFindOneMonsterSubtypeOperatorsInput
    type: FilterFindOneMonsterTypeOperatorsInput
    url: FilterFindOneMonsterUrlOperatorsInput
    wisdom: FilterFindOneMonsterWisdomOperatorsInput
    xp: FilterFindOneMonsterXpOperatorsInput
  }

  input FilterFindOneMonster_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterAlignmentOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterArmor_classOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterChallenge_ratingOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterCharismaOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterConstitutionOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterDexterityOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterHit_diceOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterHit_pointsOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterIntelligenceOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterLanguagesOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSensesOperatorsInput {
    blindsight: FilterFindOneMonsterSensesBlindsightOperatorsInput
    darkvision: FilterFindOneMonsterSensesDarkvisionOperatorsInput
    passive_perception: FilterFindOneMonsterSensesPassive_perceptionOperatorsInput
    tremorsense: FilterFindOneMonsterSensesTremorsenseOperatorsInput
    truesight: FilterFindOneMonsterSensesTruesightOperatorsInput
  }

  input FilterFindOneMonsterSensesBlindsightOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSensesDarkvisionOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSensesPassive_perceptionOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterSensesTremorsenseOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSensesTruesightOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSizeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSpeedOperatorsInput {
    burrow: FilterFindOneMonsterSpeedBurrowOperatorsInput
    climb: FilterFindOneMonsterSpeedClimbOperatorsInput
    fly: FilterFindOneMonsterSpeedFlyOperatorsInput
    hover: FilterFindOneMonsterSpeedHoverOperatorsInput
    swim: FilterFindOneMonsterSpeedSwimOperatorsInput
    walk: FilterFindOneMonsterSpeedWalkOperatorsInput
  }

  input FilterFindOneMonsterSpeedBurrowOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSpeedClimbOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSpeedFlyOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSpeedHoverOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindOneMonsterSpeedSwimOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterSpeedWalkOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterStrengthOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterSubtypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneMonsterWisdomOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneMonsterXpOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  enum SortFindOneMonsterInput {
    _ID_ASC
    _ID_DESC
    ALIGNMENT_ASC
    ALIGNMENT_DESC
    ARMOR_CLASS_ASC
    ARMOR_CLASS_DESC
    CHALLENGE_RATING_ASC
    CHALLENGE_RATING_DESC
    CHARISMA_ASC
    CHARISMA_DESC
    CONSTITUTION_ASC
    CONSTITUTION_DESC
    DEXTERITY_ASC
    DEXTERITY_DESC
    HIT_DICE_ASC
    HIT_DICE_DESC
    HIT_POINTS_ASC
    HIT_POINTS_DESC
    INDEX_ASC
    INDEX_DESC
    INTELLIGENCE_ASC
    INTELLIGENCE_DESC
    LANGUAGES_ASC
    LANGUAGES_DESC
    NAME_ASC
    NAME_DESC
    SENSES__BLINDSIGHT_ASC
    SENSES__BLINDSIGHT_DESC
    SENSES__DARKVISION_ASC
    SENSES__DARKVISION_DESC
    SENSES__PASSIVE_PERCEPTION_ASC
    SENSES__PASSIVE_PERCEPTION_DESC
    SENSES__TREMORSENSE_ASC
    SENSES__TREMORSENSE_DESC
    SENSES__TRUESIGHT_ASC
    SENSES__TRUESIGHT_DESC
    SIZE_ASC
    SIZE_DESC
    SPEED__BURROW_ASC
    SPEED__BURROW_DESC
    SPEED__CLIMB_ASC
    SPEED__CLIMB_DESC
    SPEED__FLY_ASC
    SPEED__FLY_DESC
    SPEED__HOVER_ASC
    SPEED__HOVER_DESC
    SPEED__SWIM_ASC
    SPEED__SWIM_DESC
    SPEED__WALK_ASC
    SPEED__WALK_DESC
    STRENGTH_ASC
    STRENGTH_DESC
    SUBTYPE_ASC
    SUBTYPE_DESC
    TYPE_ASC
    TYPE_DESC
    URL_ASC
    URL_DESC
    WISDOM_ASC
    WISDOM_DESC
    XP_ASC
    XP_DESC
  }

  #
  input FilterFindManyMonsterInput {
    _id: String
    actions: [FilterFindManyMonsterActionsInput]
    alignment: String
    armor_class: Float
    challenge_rating: Float
    charisma: Float
    condition_immunities: [FilterFindManyMonsterCondition_immunitiesInput]
    constitution: Float
    damage_immunities: [String]
    damage_resistances: [String]
    damage_vulnerabilities: [String]
    dexterity: Float
    forms: [FilterFindManyMonsterFormsInput]
    hit_dice: String
    hit_points: Float
    index: String
    intelligence: Float
    languages: String
    legendary_actions: [FilterFindManyMonsterLegendary_actionsInput]
    name: String
    proficiencies: [FilterFindManyMonsterProficienciesInput]
    reactions: [FilterFindManyMonsterReactionsInput]
    senses: FilterFindManyMonsterSensesInput
    size: String
    special_abilities: [FilterFindManyMonsterSpecial_abilitiesInput]
    speed: FilterFindManyMonsterSpeedInput
    strength: Float
    subtype: String
    type: String
    url: String
    wisdom: Float
    xp: Float

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyMonsterOperatorsInput
    OR: [FilterFindManyMonsterInput!]
    AND: [FilterFindManyMonsterInput!]
  }

  #
  input FilterFindManyMonsterActionsInput {
    attack_bonus: Float
    damage: [FilterFindManyMonsterActionsDamageInput]
    desc: String
    name: String
    _id: MongoID
  }

  #
  input FilterFindManyMonsterActionsDamageInput {
    damage_dice: String
    damage_type: FilterFindManyMonsterActionsDamageDamage_typeInput
    _id: MongoID
  }

  #
  input FilterFindManyMonsterActionsDamageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyMonsterCondition_immunitiesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyMonsterFormsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyMonsterLegendary_actionsInput {
    attack_bonus: Float
    desc: String
    name: String
    _id: MongoID
  }

  #
  input FilterFindManyMonsterProficienciesInput {
    proficiency: FilterFindManyMonsterProficienciesProficiencyInput
    value: Float
    _id: MongoID
  }

  #
  input FilterFindManyMonsterProficienciesProficiencyInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyMonsterReactionsInput {
    desc: String
    name: String
    _id: MongoID
  }

  #
  input FilterFindManyMonsterSensesInput {
    blindsight: String
    darkvision: String
    passive_perception: Float
    tremorsense: String
    truesight: String
  }

  #
  input FilterFindManyMonsterSpecial_abilitiesInput {
    desc: String
    name: String
    _id: MongoID
  }

  #
  input FilterFindManyMonsterSpeedInput {
    burrow: String
    climb: String
    fly: String
    hover: Boolean
    swim: String
    walk: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyMonsterOperatorsInput {
    _id: FilterFindManyMonster_idOperatorsInput
    alignment: FilterFindManyMonsterAlignmentOperatorsInput
    armor_class: FilterFindManyMonsterArmor_classOperatorsInput
    challenge_rating: FilterFindManyMonsterChallenge_ratingOperatorsInput
    charisma: FilterFindManyMonsterCharismaOperatorsInput
    constitution: FilterFindManyMonsterConstitutionOperatorsInput
    dexterity: FilterFindManyMonsterDexterityOperatorsInput
    hit_dice: FilterFindManyMonsterHit_diceOperatorsInput
    hit_points: FilterFindManyMonsterHit_pointsOperatorsInput
    index: FilterFindManyMonsterIndexOperatorsInput
    intelligence: FilterFindManyMonsterIntelligenceOperatorsInput
    languages: FilterFindManyMonsterLanguagesOperatorsInput
    name: FilterFindManyMonsterNameOperatorsInput
    senses: FilterFindManyMonsterSensesOperatorsInput
    size: FilterFindManyMonsterSizeOperatorsInput
    speed: FilterFindManyMonsterSpeedOperatorsInput
    strength: FilterFindManyMonsterStrengthOperatorsInput
    subtype: FilterFindManyMonsterSubtypeOperatorsInput
    type: FilterFindManyMonsterTypeOperatorsInput
    url: FilterFindManyMonsterUrlOperatorsInput
    wisdom: FilterFindManyMonsterWisdomOperatorsInput
    xp: FilterFindManyMonsterXpOperatorsInput
  }

  input FilterFindManyMonster_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterAlignmentOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterArmor_classOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterChallenge_ratingOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterCharismaOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterConstitutionOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterDexterityOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterHit_diceOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterHit_pointsOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterIntelligenceOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterLanguagesOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSensesOperatorsInput {
    blindsight: FilterFindManyMonsterSensesBlindsightOperatorsInput
    darkvision: FilterFindManyMonsterSensesDarkvisionOperatorsInput
    passive_perception: FilterFindManyMonsterSensesPassive_perceptionOperatorsInput
    tremorsense: FilterFindManyMonsterSensesTremorsenseOperatorsInput
    truesight: FilterFindManyMonsterSensesTruesightOperatorsInput
  }

  input FilterFindManyMonsterSensesBlindsightOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSensesDarkvisionOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSensesPassive_perceptionOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterSensesTremorsenseOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSensesTruesightOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSizeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSpeedOperatorsInput {
    burrow: FilterFindManyMonsterSpeedBurrowOperatorsInput
    climb: FilterFindManyMonsterSpeedClimbOperatorsInput
    fly: FilterFindManyMonsterSpeedFlyOperatorsInput
    hover: FilterFindManyMonsterSpeedHoverOperatorsInput
    swim: FilterFindManyMonsterSpeedSwimOperatorsInput
    walk: FilterFindManyMonsterSpeedWalkOperatorsInput
  }

  input FilterFindManyMonsterSpeedBurrowOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSpeedClimbOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSpeedFlyOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSpeedHoverOperatorsInput {
    gt: Boolean
    gte: Boolean
    lt: Boolean
    lte: Boolean
    ne: Boolean
    in: [Boolean]
    nin: [Boolean]
    exists: Boolean
  }

  input FilterFindManyMonsterSpeedSwimOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterSpeedWalkOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterStrengthOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterSubtypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyMonsterWisdomOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyMonsterXpOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  enum SortFindManyMonsterInput {
    _ID_ASC
    _ID_DESC
    ALIGNMENT_ASC
    ALIGNMENT_DESC
    ARMOR_CLASS_ASC
    ARMOR_CLASS_DESC
    CHALLENGE_RATING_ASC
    CHALLENGE_RATING_DESC
    CHARISMA_ASC
    CHARISMA_DESC
    CONSTITUTION_ASC
    CONSTITUTION_DESC
    DEXTERITY_ASC
    DEXTERITY_DESC
    HIT_DICE_ASC
    HIT_DICE_DESC
    HIT_POINTS_ASC
    HIT_POINTS_DESC
    INDEX_ASC
    INDEX_DESC
    INTELLIGENCE_ASC
    INTELLIGENCE_DESC
    LANGUAGES_ASC
    LANGUAGES_DESC
    NAME_ASC
    NAME_DESC
    SENSES__BLINDSIGHT_ASC
    SENSES__BLINDSIGHT_DESC
    SENSES__DARKVISION_ASC
    SENSES__DARKVISION_DESC
    SENSES__PASSIVE_PERCEPTION_ASC
    SENSES__PASSIVE_PERCEPTION_DESC
    SENSES__TREMORSENSE_ASC
    SENSES__TREMORSENSE_DESC
    SENSES__TRUESIGHT_ASC
    SENSES__TRUESIGHT_DESC
    SIZE_ASC
    SIZE_DESC
    SPEED__BURROW_ASC
    SPEED__BURROW_DESC
    SPEED__CLIMB_ASC
    SPEED__CLIMB_DESC
    SPEED__FLY_ASC
    SPEED__FLY_DESC
    SPEED__HOVER_ASC
    SPEED__HOVER_DESC
    SPEED__SWIM_ASC
    SPEED__SWIM_DESC
    SPEED__WALK_ASC
    SPEED__WALK_DESC
    STRENGTH_ASC
    STRENGTH_DESC
    SUBTYPE_ASC
    SUBTYPE_DESC
    TYPE_ASC
    TYPE_DESC
    URL_ASC
    URL_DESC
    WISDOM_ASC
    WISDOM_DESC
    XP_ASC
    XP_DESC
  }

  #
  input FilterFindOneProficiencyInput {
    _id: String
    classes: [FilterFindOneProficiencyClassesInput]
    index: String
    name: String
    races: [FilterFindOneProficiencyRacesInput]
    references: [FilterFindOneProficiencyReferencesInput]
    type: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneProficiencyOperatorsInput
    OR: [FilterFindOneProficiencyInput!]
    AND: [FilterFindOneProficiencyInput!]
  }

  #
  input FilterFindOneProficiencyClassesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneProficiencyRacesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneProficiencyReferencesInput {
    index: String
    name: String
    type: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneProficiencyOperatorsInput {
    _id: FilterFindOneProficiency_idOperatorsInput
    index: FilterFindOneProficiencyIndexOperatorsInput
    name: FilterFindOneProficiencyNameOperatorsInput
    type: FilterFindOneProficiencyTypeOperatorsInput
    url: FilterFindOneProficiencyUrlOperatorsInput
  }

  input FilterFindOneProficiency_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneProficiencyIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneProficiencyNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneProficiencyTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneProficiencyUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneProficiencyInput {
    _ID_ASC
    _ID_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    TYPE_ASC
    TYPE_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyProficiencyInput {
    _id: String
    classes: [FilterFindManyProficiencyClassesInput]
    index: String
    name: String
    races: [FilterFindManyProficiencyRacesInput]
    references: [FilterFindManyProficiencyReferencesInput]
    type: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyProficiencyOperatorsInput
    OR: [FilterFindManyProficiencyInput!]
    AND: [FilterFindManyProficiencyInput!]
  }

  #
  input FilterFindManyProficiencyClassesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyProficiencyRacesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyProficiencyReferencesInput {
    index: String
    name: String
    type: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyProficiencyOperatorsInput {
    _id: FilterFindManyProficiency_idOperatorsInput
    index: FilterFindManyProficiencyIndexOperatorsInput
    name: FilterFindManyProficiencyNameOperatorsInput
    type: FilterFindManyProficiencyTypeOperatorsInput
    url: FilterFindManyProficiencyUrlOperatorsInput
  }

  input FilterFindManyProficiency_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyProficiencyIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyProficiencyNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyProficiencyTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyProficiencyUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  type Race {
    _id: String!
    ability_bonus_options: RaceAbility_bonus_options
    ability_bonuses: [RaceAbility_bonuses]
    age: String
    alignment: String
    index: String
    language_desc: String
    language_options: RaceLanguage_options
    languages: [RaceLanguages]
    name: String
    size: String
    size_description: String
    speed: Float
    starting_proficiencies: [RaceStarting_proficiencies]
    starting_proficiency_options: RaceStarting_proficiency_options
    subraces: [RaceSubraces]
    traits(skip: Int, limit: Int = 100, sort: SortFindManyTraitInput): [Trait!]!
    url: String
  }

  type RaceAbility_bonus_options {
    choose: Float
    from: [RaceAbility_bonus_optionsFrom]
    type: String
  }

  type RaceAbility_bonus_optionsFrom {
    ability_score: RaceAbility_bonus_optionsFromAbility_score
    bonus: Float
    _id: MongoID
  }

  type RaceAbility_bonus_optionsFromAbility_score {
    index: String
    name: String
    url: String
  }

  type RaceAbility_bonuses {
    ability_score: RaceAbility_bonusesAbility_score
    bonus: Float
    _id: MongoID
  }

  type RaceAbility_bonusesAbility_score {
    index: String
    name: String
    url: String
  }

  type RaceLanguage_options {
    choose: Float
    from: [RaceLanguage_optionsFrom]
    type: String
  }

  type RaceLanguage_optionsFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type RaceLanguages {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type RaceStarting_proficiencies {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type RaceStarting_proficiency_options {
    choose: Float
    from: [RaceStarting_proficiency_optionsFrom]
    type: String
  }

  type RaceStarting_proficiency_optionsFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type RaceSubraces {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type Trait {
    _id: String!
    desc: [String]
    index: String
    name: String
    proficiencies(
      skip: Int
      limit: Int = 100
      sort: SortFindManyProficiencyInput
    ): [Proficiency!]!
    proficiency_choices: TraitProficiency_choices
    races: [TraitRaces]
    subraces: [TraitSubraces]
    parent: TraitParent
    trait_specific: TraitTrait_specific
    url: String
  }

  type TraitProficiency_choices {
    choose: Float
    from: [TraitProficiency_choicesFrom]
    type: String
  }

  type TraitProficiency_choicesFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type TraitRaces {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type TraitSubraces {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type TraitParent {
    index: String
    name: String
    url: String
  }

  type TraitTrait_specific {
    subtrait_options: TraitTrait_specificSubtrait_options
    spell_options: TraitTrait_specificSpell_options
    damage_type: TraitTrait_specificDamage_type
    breath_weapon: TraitTrait_specificBreath_weapon
  }

  type TraitTrait_specificSubtrait_options {
    choose: Float
    from: [TraitTrait_specificSubtrait_optionsFrom]
    type: String
  }

  type TraitTrait_specificSubtrait_optionsFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type TraitTrait_specificSpell_options {
    choose: Float
    from: [TraitTrait_specificSpell_optionsFrom]
    type: String
  }

  type TraitTrait_specificSpell_optionsFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type TraitTrait_specificDamage_type {
    index: String
    name: String
    url: String
  }

  type TraitTrait_specificBreath_weapon {
    name: String
    desc: String
    usage: TraitTrait_specificBreath_weaponUsage
    dc: TraitTrait_specificBreath_weaponDc
    damage: [TraitTrait_specificBreath_weaponDamage]
  }

  type TraitTrait_specificBreath_weaponUsage {
    type: String
    times: Float
  }

  type TraitTrait_specificBreath_weaponDc {
    dc_type: TraitTrait_specificBreath_weaponDcDc_type
    success_type: String
  }

  type TraitTrait_specificBreath_weaponDcDc_type {
    index: String
    name: String
    url: String
  }

  type TraitTrait_specificBreath_weaponDamage {
    damage_type: TraitTrait_specificBreath_weaponDamageDamage_type
    damage_at_character_level: JSON
    _id: MongoID
  }

  type TraitTrait_specificBreath_weaponDamageDamage_type {
    index: String
    name: String
    url: String
  }

  enum SortFindManyTraitInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    PROFICIENCY_CHOICES__CHOOSE_ASC
    PROFICIENCY_CHOICES__CHOOSE_DESC
    PROFICIENCY_CHOICES__TYPE_ASC
    PROFICIENCY_CHOICES__TYPE_DESC
    PARENT__INDEX_ASC
    PARENT__INDEX_DESC
    PARENT__NAME_ASC
    PARENT__NAME_DESC
    PARENT__URL_ASC
    PARENT__URL_DESC
    TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_ASC
    TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_DESC
    TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_ASC
    TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_DESC
    TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_ASC
    TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_DESC
    TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_ASC
    TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_DESC
    TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_ASC
    TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_DESC
    TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_ASC
    TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_DESC
    TRAIT_SPECIFIC__DAMAGE_TYPE__URL_ASC
    TRAIT_SPECIFIC__DAMAGE_TYPE__URL_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__NAME_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__NAME_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DESC_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DESC_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindOneRaceInput {
    _id: String
    ability_bonus_options: FilterFindOneRaceAbility_bonus_optionsInput
    ability_bonuses: [FilterFindOneRaceAbility_bonusesInput]
    age: String
    alignment: String
    index: String
    language_desc: String
    language_options: FilterFindOneRaceLanguage_optionsInput
    languages: [FilterFindOneRaceLanguagesInput]
    name: String
    size: String
    size_description: String
    speed: Float
    starting_proficiencies: [FilterFindOneRaceStarting_proficienciesInput]
    starting_proficiency_options: FilterFindOneRaceStarting_proficiency_optionsInput
    subraces: [FilterFindOneRaceSubracesInput]
    traits: [FilterFindOneRaceTraitsInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneRaceOperatorsInput
    OR: [FilterFindOneRaceInput!]
    AND: [FilterFindOneRaceInput!]
  }

  #
  input FilterFindOneRaceAbility_bonus_optionsInput {
    choose: Float
    from: [FilterFindOneRaceAbility_bonus_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneRaceAbility_bonus_optionsFromInput {
    ability_score: FilterFindOneRaceAbility_bonus_optionsFromAbility_scoreInput
    bonus: Float
    _id: MongoID
  }

  #
  input FilterFindOneRaceAbility_bonus_optionsFromAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneRaceAbility_bonusesInput {
    ability_score: FilterFindOneRaceAbility_bonusesAbility_scoreInput
    bonus: Float
    _id: MongoID
  }

  #
  input FilterFindOneRaceAbility_bonusesAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneRaceLanguage_optionsInput {
    choose: Float
    from: [FilterFindOneRaceLanguage_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneRaceLanguage_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneRaceLanguagesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneRaceStarting_proficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneRaceStarting_proficiency_optionsInput {
    choose: Float
    from: [FilterFindOneRaceStarting_proficiency_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneRaceStarting_proficiency_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneRaceSubracesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneRaceTraitsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneRaceOperatorsInput {
    _id: FilterFindOneRace_idOperatorsInput
    ability_bonus_options: FilterFindOneRaceAbility_bonus_optionsOperatorsInput
    age: FilterFindOneRaceAgeOperatorsInput
    alignment: FilterFindOneRaceAlignmentOperatorsInput
    index: FilterFindOneRaceIndexOperatorsInput
    language_desc: FilterFindOneRaceLanguage_descOperatorsInput
    language_options: FilterFindOneRaceLanguage_optionsOperatorsInput
    name: FilterFindOneRaceNameOperatorsInput
    size: FilterFindOneRaceSizeOperatorsInput
    size_description: FilterFindOneRaceSize_descriptionOperatorsInput
    speed: FilterFindOneRaceSpeedOperatorsInput
    starting_proficiency_options: FilterFindOneRaceStarting_proficiency_optionsOperatorsInput
    url: FilterFindOneRaceUrlOperatorsInput
  }

  input FilterFindOneRace_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceAbility_bonus_optionsOperatorsInput {
    choose: FilterFindOneRaceAbility_bonus_optionsChooseOperatorsInput
    type: FilterFindOneRaceAbility_bonus_optionsTypeOperatorsInput
  }

  input FilterFindOneRaceAbility_bonus_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneRaceAbility_bonus_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceAgeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceAlignmentOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceLanguage_descOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceLanguage_optionsOperatorsInput {
    choose: FilterFindOneRaceLanguage_optionsChooseOperatorsInput
    type: FilterFindOneRaceLanguage_optionsTypeOperatorsInput
  }

  input FilterFindOneRaceLanguage_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneRaceLanguage_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceSizeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceSize_descriptionOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceSpeedOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneRaceStarting_proficiency_optionsOperatorsInput {
    choose: FilterFindOneRaceStarting_proficiency_optionsChooseOperatorsInput
    type: FilterFindOneRaceStarting_proficiency_optionsTypeOperatorsInput
  }

  input FilterFindOneRaceStarting_proficiency_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneRaceStarting_proficiency_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRaceUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneRaceInput {
    _ID_ASC
    _ID_DESC
    ABILITY_BONUS_OPTIONS__CHOOSE_ASC
    ABILITY_BONUS_OPTIONS__CHOOSE_DESC
    ABILITY_BONUS_OPTIONS__TYPE_ASC
    ABILITY_BONUS_OPTIONS__TYPE_DESC
    AGE_ASC
    AGE_DESC
    ALIGNMENT_ASC
    ALIGNMENT_DESC
    INDEX_ASC
    INDEX_DESC
    LANGUAGE_DESC_ASC
    LANGUAGE_DESC_DESC
    LANGUAGE_OPTIONS__CHOOSE_ASC
    LANGUAGE_OPTIONS__CHOOSE_DESC
    LANGUAGE_OPTIONS__TYPE_ASC
    LANGUAGE_OPTIONS__TYPE_DESC
    NAME_ASC
    NAME_DESC
    SIZE_ASC
    SIZE_DESC
    SIZE_DESCRIPTION_ASC
    SIZE_DESCRIPTION_DESC
    SPEED_ASC
    SPEED_DESC
    STARTING_PROFICIENCY_OPTIONS__CHOOSE_ASC
    STARTING_PROFICIENCY_OPTIONS__CHOOSE_DESC
    STARTING_PROFICIENCY_OPTIONS__TYPE_ASC
    STARTING_PROFICIENCY_OPTIONS__TYPE_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyRaceInput {
    _id: String
    ability_bonus_options: FilterFindManyRaceAbility_bonus_optionsInput
    ability_bonuses: [FilterFindManyRaceAbility_bonusesInput]
    age: String
    alignment: String
    index: String
    language_desc: String
    language_options: FilterFindManyRaceLanguage_optionsInput
    languages: [FilterFindManyRaceLanguagesInput]
    name: String
    size: String
    size_description: String
    speed: Float
    starting_proficiencies: [FilterFindManyRaceStarting_proficienciesInput]
    starting_proficiency_options: FilterFindManyRaceStarting_proficiency_optionsInput
    subraces: [FilterFindManyRaceSubracesInput]
    traits: [FilterFindManyRaceTraitsInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyRaceOperatorsInput
    OR: [FilterFindManyRaceInput!]
    AND: [FilterFindManyRaceInput!]
  }

  #
  input FilterFindManyRaceAbility_bonus_optionsInput {
    choose: Float
    from: [FilterFindManyRaceAbility_bonus_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyRaceAbility_bonus_optionsFromInput {
    ability_score: FilterFindManyRaceAbility_bonus_optionsFromAbility_scoreInput
    bonus: Float
    _id: MongoID
  }

  #
  input FilterFindManyRaceAbility_bonus_optionsFromAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyRaceAbility_bonusesInput {
    ability_score: FilterFindManyRaceAbility_bonusesAbility_scoreInput
    bonus: Float
    _id: MongoID
  }

  #
  input FilterFindManyRaceAbility_bonusesAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyRaceLanguage_optionsInput {
    choose: Float
    from: [FilterFindManyRaceLanguage_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyRaceLanguage_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyRaceLanguagesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyRaceStarting_proficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyRaceStarting_proficiency_optionsInput {
    choose: Float
    from: [FilterFindManyRaceStarting_proficiency_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyRaceStarting_proficiency_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyRaceSubracesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyRaceTraitsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyRaceOperatorsInput {
    _id: FilterFindManyRace_idOperatorsInput
    ability_bonus_options: FilterFindManyRaceAbility_bonus_optionsOperatorsInput
    age: FilterFindManyRaceAgeOperatorsInput
    alignment: FilterFindManyRaceAlignmentOperatorsInput
    index: FilterFindManyRaceIndexOperatorsInput
    language_desc: FilterFindManyRaceLanguage_descOperatorsInput
    language_options: FilterFindManyRaceLanguage_optionsOperatorsInput
    name: FilterFindManyRaceNameOperatorsInput
    size: FilterFindManyRaceSizeOperatorsInput
    size_description: FilterFindManyRaceSize_descriptionOperatorsInput
    speed: FilterFindManyRaceSpeedOperatorsInput
    starting_proficiency_options: FilterFindManyRaceStarting_proficiency_optionsOperatorsInput
    url: FilterFindManyRaceUrlOperatorsInput
  }

  input FilterFindManyRace_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceAbility_bonus_optionsOperatorsInput {
    choose: FilterFindManyRaceAbility_bonus_optionsChooseOperatorsInput
    type: FilterFindManyRaceAbility_bonus_optionsTypeOperatorsInput
  }

  input FilterFindManyRaceAbility_bonus_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyRaceAbility_bonus_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceAgeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceAlignmentOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceLanguage_descOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceLanguage_optionsOperatorsInput {
    choose: FilterFindManyRaceLanguage_optionsChooseOperatorsInput
    type: FilterFindManyRaceLanguage_optionsTypeOperatorsInput
  }

  input FilterFindManyRaceLanguage_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyRaceLanguage_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceSizeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceSize_descriptionOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceSpeedOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyRaceStarting_proficiency_optionsOperatorsInput {
    choose: FilterFindManyRaceStarting_proficiency_optionsChooseOperatorsInput
    type: FilterFindManyRaceStarting_proficiency_optionsTypeOperatorsInput
  }

  input FilterFindManyRaceStarting_proficiency_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyRaceStarting_proficiency_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRaceUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyRaceInput {
    _ID_ASC
    _ID_DESC
    ABILITY_BONUS_OPTIONS__CHOOSE_ASC
    ABILITY_BONUS_OPTIONS__CHOOSE_DESC
    ABILITY_BONUS_OPTIONS__TYPE_ASC
    ABILITY_BONUS_OPTIONS__TYPE_DESC
    AGE_ASC
    AGE_DESC
    ALIGNMENT_ASC
    ALIGNMENT_DESC
    INDEX_ASC
    INDEX_DESC
    LANGUAGE_DESC_ASC
    LANGUAGE_DESC_DESC
    LANGUAGE_OPTIONS__CHOOSE_ASC
    LANGUAGE_OPTIONS__CHOOSE_DESC
    LANGUAGE_OPTIONS__TYPE_ASC
    LANGUAGE_OPTIONS__TYPE_DESC
    NAME_ASC
    NAME_DESC
    SIZE_ASC
    SIZE_DESC
    SIZE_DESCRIPTION_ASC
    SIZE_DESCRIPTION_DESC
    SPEED_ASC
    SPEED_DESC
    STARTING_PROFICIENCY_OPTIONS__CHOOSE_ASC
    STARTING_PROFICIENCY_OPTIONS__CHOOSE_DESC
    STARTING_PROFICIENCY_OPTIONS__TYPE_ASC
    STARTING_PROFICIENCY_OPTIONS__TYPE_DESC
    URL_ASC
    URL_DESC
  }

  type Rule {
    _id: String!
    desc: String
    index: String
    name: String
    subsections(
      skip: Int
      limit: Int = 100
      sort: SortFindManyRuleSectionInput
    ): [RuleSection!]!
    url: String
  }

  type RuleSection {
    _id: String!
    desc: String
    index: String
    name: String
    url: String
  }

  enum SortFindManyRuleSectionInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindOneRuleInput {
    _id: String
    desc: String
    index: String
    name: String
    subsections: [FilterFindOneRuleSubsectionsInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneRuleOperatorsInput
    OR: [FilterFindOneRuleInput!]
    AND: [FilterFindOneRuleInput!]
  }

  #
  input FilterFindOneRuleSubsectionsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneRuleOperatorsInput {
    _id: FilterFindOneRule_idOperatorsInput
    desc: FilterFindOneRuleDescOperatorsInput
    index: FilterFindOneRuleIndexOperatorsInput
    name: FilterFindOneRuleNameOperatorsInput
    url: FilterFindOneRuleUrlOperatorsInput
  }

  input FilterFindOneRule_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRuleDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRuleIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRuleNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRuleUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneRuleInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyRuleInput {
    _id: String
    desc: String
    index: String
    name: String
    subsections: [FilterFindManyRuleSubsectionsInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyRuleOperatorsInput
    OR: [FilterFindManyRuleInput!]
    AND: [FilterFindManyRuleInput!]
  }

  #
  input FilterFindManyRuleSubsectionsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyRuleOperatorsInput {
    _id: FilterFindManyRule_idOperatorsInput
    desc: FilterFindManyRuleDescOperatorsInput
    index: FilterFindManyRuleIndexOperatorsInput
    name: FilterFindManyRuleNameOperatorsInput
    url: FilterFindManyRuleUrlOperatorsInput
  }

  input FilterFindManyRule_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRuleDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRuleIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRuleNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRuleUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManyRuleInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindOneRuleSectionInput {
    _id: String
    desc: String
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneRuleSectionOperatorsInput
    OR: [FilterFindOneRuleSectionInput!]
    AND: [FilterFindOneRuleSectionInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneRuleSectionOperatorsInput {
    _id: FilterFindOneRuleSection_idOperatorsInput
    desc: FilterFindOneRuleSectionDescOperatorsInput
    index: FilterFindOneRuleSectionIndexOperatorsInput
    name: FilterFindOneRuleSectionNameOperatorsInput
    url: FilterFindOneRuleSectionUrlOperatorsInput
  }

  input FilterFindOneRuleSection_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRuleSectionDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRuleSectionIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRuleSectionNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneRuleSectionUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneRuleSectionInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyRuleSectionInput {
    _id: String
    desc: String
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyRuleSectionOperatorsInput
    OR: [FilterFindManyRuleSectionInput!]
    AND: [FilterFindManyRuleSectionInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyRuleSectionOperatorsInput {
    _id: FilterFindManyRuleSection_idOperatorsInput
    desc: FilterFindManyRuleSectionDescOperatorsInput
    index: FilterFindManyRuleSectionIndexOperatorsInput
    name: FilterFindManyRuleSectionNameOperatorsInput
    url: FilterFindManyRuleSectionUrlOperatorsInput
  }

  input FilterFindManyRuleSection_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRuleSectionDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRuleSectionIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRuleSectionNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyRuleSectionUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  #
  input FilterFindOneSkillInput {
    _id: String
    ability_score: FilterFindOneSkillAbility_scoreInput
    desc: [String]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneSkillOperatorsInput
    OR: [FilterFindOneSkillInput!]
    AND: [FilterFindOneSkillInput!]
  }

  #
  input FilterFindOneSkillAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneSkillOperatorsInput {
    _id: FilterFindOneSkill_idOperatorsInput
    ability_score: FilterFindOneSkillAbility_scoreOperatorsInput
    desc: FilterFindOneSkillDescOperatorsInput
    index: FilterFindOneSkillIndexOperatorsInput
    name: FilterFindOneSkillNameOperatorsInput
    url: FilterFindOneSkillUrlOperatorsInput
  }

  input FilterFindOneSkill_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSkillAbility_scoreOperatorsInput {
    index: FilterFindOneSkillAbility_scoreIndexOperatorsInput
    name: FilterFindOneSkillAbility_scoreNameOperatorsInput
    url: FilterFindOneSkillAbility_scoreUrlOperatorsInput
  }

  input FilterFindOneSkillAbility_scoreIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSkillAbility_scoreNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSkillAbility_scoreUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSkillDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSkillIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSkillNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSkillUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneSkillInput {
    _ID_ASC
    _ID_DESC
    ABILITY_SCORE__INDEX_ASC
    ABILITY_SCORE__INDEX_DESC
    ABILITY_SCORE__NAME_ASC
    ABILITY_SCORE__NAME_DESC
    ABILITY_SCORE__URL_ASC
    ABILITY_SCORE__URL_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManySkillInput {
    _id: String
    ability_score: FilterFindManySkillAbility_scoreInput
    desc: [String]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManySkillOperatorsInput
    OR: [FilterFindManySkillInput!]
    AND: [FilterFindManySkillInput!]
  }

  #
  input FilterFindManySkillAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManySkillOperatorsInput {
    _id: FilterFindManySkill_idOperatorsInput
    ability_score: FilterFindManySkillAbility_scoreOperatorsInput
    desc: FilterFindManySkillDescOperatorsInput
    index: FilterFindManySkillIndexOperatorsInput
    name: FilterFindManySkillNameOperatorsInput
    url: FilterFindManySkillUrlOperatorsInput
  }

  input FilterFindManySkill_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySkillAbility_scoreOperatorsInput {
    index: FilterFindManySkillAbility_scoreIndexOperatorsInput
    name: FilterFindManySkillAbility_scoreNameOperatorsInput
    url: FilterFindManySkillAbility_scoreUrlOperatorsInput
  }

  input FilterFindManySkillAbility_scoreIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySkillAbility_scoreNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySkillAbility_scoreUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySkillDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySkillIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySkillNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySkillUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  #
  input FilterFindOneSpellInput {
    _id: String
    area_of_effect: FilterFindOneSpellArea_of_effectInput
    attack_type: String
    casting_time: String
    classes: [FilterFindOneSpellClassesInput]
    components: [String]
    concentration: Boolean
    damage: FilterFindOneSpellDamageInput
    dc: FilterFindOneSpellDcInput
    desc: [String]
    duration: String
    heal_at_slot_level: JSON
    higher_level: [String]
    index: String
    level: Float
    material: String
    name: String
    range: String
    ritual: Boolean
    school: FilterFindOneSpellSchoolInput
    subclasses: [FilterFindOneSpellSubclassesInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneSpellOperatorsInput
    OR: [FilterFindOneSpellInput!]
    AND: [FilterFindOneSpellInput!]
  }

  #
  input FilterFindOneSpellArea_of_effectInput {
    size: Float
    type: String
  }

  #
  input FilterFindOneSpellClassesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneSpellDamageInput {
    damage_at_slot_level: JSON
    damage_at_character_level: JSON
    damage_type: FilterFindOneSpellDamageDamage_typeInput
  }

  #
  input FilterFindOneSpellDamageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneSpellDcInput {
    dc_success: String
    dc_type: FilterFindOneSpellDcDc_typeInput
    desc: String
  }

  #
  input FilterFindOneSpellDcDc_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneSpellSchoolInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneSpellSubclassesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneSpellOperatorsInput {
    _id: FilterFindOneSpell_idOperatorsInput
    school: FilterFindOneSpellSchoolOperatorsInput
  }

  input FilterFindOneSpell_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSpellSchoolOperatorsInput {
    index: FilterFindOneSpellSchoolIndexOperatorsInput
    name: FilterFindOneSpellSchoolNameOperatorsInput
    url: FilterFindOneSpellSchoolUrlOperatorsInput
  }

  input FilterFindOneSpellSchoolIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSpellSchoolNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSpellSchoolUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneSpellInput {
    _ID_ASC
    _ID_DESC
    SCHOOL__INDEX_ASC
    SCHOOL__INDEX_DESC
    SCHOOL__NAME_ASC
    SCHOOL__NAME_DESC
    SCHOOL__URL_ASC
    SCHOOL__URL_DESC
  }

  #
  input FilterFindManySpellInput {
    _id: String
    area_of_effect: FilterFindManySpellArea_of_effectInput
    attack_type: String
    casting_time: String
    classes: [FilterFindManySpellClassesInput]
    components: [String]
    concentration: Boolean
    damage: FilterFindManySpellDamageInput
    dc: FilterFindManySpellDcInput
    desc: [String]
    duration: String
    heal_at_slot_level: JSON
    higher_level: [String]
    index: String
    level: Float
    material: String
    name: String
    range: String
    ritual: Boolean
    school: FilterFindManySpellSchoolInput
    subclasses: [FilterFindManySpellSubclassesInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManySpellOperatorsInput
    OR: [FilterFindManySpellInput!]
    AND: [FilterFindManySpellInput!]
  }

  #
  input FilterFindManySpellArea_of_effectInput {
    size: Float
    type: String
  }

  #
  input FilterFindManySpellClassesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManySpellDamageInput {
    damage_at_slot_level: JSON
    damage_at_character_level: JSON
    damage_type: FilterFindManySpellDamageDamage_typeInput
  }

  #
  input FilterFindManySpellDamageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManySpellDcInput {
    dc_success: String
    dc_type: FilterFindManySpellDcDc_typeInput
    desc: String
  }

  #
  input FilterFindManySpellDcDc_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManySpellSchoolInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManySpellSubclassesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManySpellOperatorsInput {
    _id: FilterFindManySpell_idOperatorsInput
    school: FilterFindManySpellSchoolOperatorsInput
  }

  input FilterFindManySpell_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySpellSchoolOperatorsInput {
    index: FilterFindManySpellSchoolIndexOperatorsInput
    name: FilterFindManySpellSchoolNameOperatorsInput
    url: FilterFindManySpellSchoolUrlOperatorsInput
  }

  input FilterFindManySpellSchoolIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySpellSchoolNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySpellSchoolUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  #
  input FilterFindOneSubclassInput {
    _id: String
    class: FilterFindOneSubclassClassInput
    desc: [String]
    index: String
    name: String
    spells: [FilterFindOneSubclassSpellsInput]
    subclass_flavor: String
    subclass_levels: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneSubclassOperatorsInput
    OR: [FilterFindOneSubclassInput!]
    AND: [FilterFindOneSubclassInput!]
  }

  #
  input FilterFindOneSubclassClassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneSubclassSpellsInput {
    prerequisites: [FilterFindOneSubclassSpellsPrerequisitesInput]
    spell: FilterFindOneSubclassSpellsSpellInput
    _id: MongoID
  }

  #
  input FilterFindOneSubclassSpellsPrerequisitesInput {
    index: String
    name: String
    type: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneSubclassSpellsSpellInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneSubclassOperatorsInput {
    _id: FilterFindOneSubclass_idOperatorsInput
    class: FilterFindOneSubclassClassOperatorsInput
    desc: FilterFindOneSubclassDescOperatorsInput
    index: FilterFindOneSubclassIndexOperatorsInput
    name: FilterFindOneSubclassNameOperatorsInput
    subclass_flavor: FilterFindOneSubclassSubclass_flavorOperatorsInput
    subclass_levels: FilterFindOneSubclassSubclass_levelsOperatorsInput
    url: FilterFindOneSubclassUrlOperatorsInput
  }

  input FilterFindOneSubclass_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubclassClassOperatorsInput {
    index: FilterFindOneSubclassClassIndexOperatorsInput
    name: FilterFindOneSubclassClassNameOperatorsInput
    url: FilterFindOneSubclassClassUrlOperatorsInput
  }

  input FilterFindOneSubclassClassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubclassClassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubclassClassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubclassDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubclassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubclassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubclassSubclass_flavorOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubclassSubclass_levelsOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubclassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  #
  input FilterFindManySubclassInput {
    _id: String
    class: FilterFindManySubclassClassInput
    desc: [String]
    index: String
    name: String
    spells: [FilterFindManySubclassSpellsInput]
    subclass_flavor: String
    subclass_levels: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManySubclassOperatorsInput
    OR: [FilterFindManySubclassInput!]
    AND: [FilterFindManySubclassInput!]
  }

  #
  input FilterFindManySubclassClassInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManySubclassSpellsInput {
    prerequisites: [FilterFindManySubclassSpellsPrerequisitesInput]
    spell: FilterFindManySubclassSpellsSpellInput
    _id: MongoID
  }

  #
  input FilterFindManySubclassSpellsPrerequisitesInput {
    index: String
    name: String
    type: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManySubclassSpellsSpellInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManySubclassOperatorsInput {
    _id: FilterFindManySubclass_idOperatorsInput
    class: FilterFindManySubclassClassOperatorsInput
    desc: FilterFindManySubclassDescOperatorsInput
    index: FilterFindManySubclassIndexOperatorsInput
    name: FilterFindManySubclassNameOperatorsInput
    subclass_flavor: FilterFindManySubclassSubclass_flavorOperatorsInput
    subclass_levels: FilterFindManySubclassSubclass_levelsOperatorsInput
    url: FilterFindManySubclassUrlOperatorsInput
  }

  input FilterFindManySubclass_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubclassClassOperatorsInput {
    index: FilterFindManySubclassClassIndexOperatorsInput
    name: FilterFindManySubclassClassNameOperatorsInput
    url: FilterFindManySubclassClassUrlOperatorsInput
  }

  input FilterFindManySubclassClassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubclassClassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubclassClassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubclassDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubclassIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubclassNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubclassSubclass_flavorOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubclassSubclass_levelsOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubclassUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManySubclassInput {
    _ID_ASC
    _ID_DESC
    CLASS__INDEX_ASC
    CLASS__INDEX_DESC
    CLASS__NAME_ASC
    CLASS__NAME_DESC
    CLASS__URL_ASC
    CLASS__URL_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    SUBCLASS_FLAVOR_ASC
    SUBCLASS_FLAVOR_DESC
    SUBCLASS_LEVELS_ASC
    SUBCLASS_LEVELS_DESC
    URL_ASC
    URL_DESC
  }

  type Subrace {
    _id: String!
    ability_bonuses: [SubraceAbility_bonuses]
    desc: String
    index: String
    language_options: SubraceLanguage_options
    name: String
    race: SubraceRace
    racial_traits(
      skip: Int
      limit: Int = 100
      sort: SortFindManyTraitInput
    ): [Trait!]!
    starting_proficiencies: [SubraceStarting_proficiencies]
    url: String
  }

  type SubraceAbility_bonuses {
    ability_score: SubraceAbility_bonusesAbility_score
    bonus: Float
    _id: MongoID
  }

  type SubraceAbility_bonusesAbility_score {
    index: String
    name: String
    url: String
  }

  type SubraceLanguage_options {
    choose: Float
    from: [SubraceLanguage_optionsFrom]
    type: String
  }

  type SubraceLanguage_optionsFrom {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  type SubraceRace {
    index: String
    name: String
    url: String
  }

  type SubraceStarting_proficiencies {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneSubraceInput {
    _id: String
    ability_bonuses: [FilterFindOneSubraceAbility_bonusesInput]
    desc: String
    index: String
    language_options: FilterFindOneSubraceLanguage_optionsInput
    name: String
    race: FilterFindOneSubraceRaceInput
    racial_traits: [FilterFindOneSubraceRacial_traitsInput]
    starting_proficiencies: [FilterFindOneSubraceStarting_proficienciesInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneSubraceOperatorsInput
    OR: [FilterFindOneSubraceInput!]
    AND: [FilterFindOneSubraceInput!]
  }

  #
  input FilterFindOneSubraceAbility_bonusesInput {
    ability_score: FilterFindOneSubraceAbility_bonusesAbility_scoreInput
    bonus: Float
    _id: MongoID
  }

  #
  input FilterFindOneSubraceAbility_bonusesAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneSubraceLanguage_optionsInput {
    choose: Float
    from: [FilterFindOneSubraceLanguage_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneSubraceLanguage_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneSubraceRaceInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneSubraceRacial_traitsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneSubraceStarting_proficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneSubraceOperatorsInput {
    _id: FilterFindOneSubrace_idOperatorsInput
    desc: FilterFindOneSubraceDescOperatorsInput
    index: FilterFindOneSubraceIndexOperatorsInput
    language_options: FilterFindOneSubraceLanguage_optionsOperatorsInput
    name: FilterFindOneSubraceNameOperatorsInput
    race: FilterFindOneSubraceRaceOperatorsInput
    url: FilterFindOneSubraceUrlOperatorsInput
  }

  input FilterFindOneSubrace_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubraceDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubraceIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubraceLanguage_optionsOperatorsInput {
    choose: FilterFindOneSubraceLanguage_optionsChooseOperatorsInput
    type: FilterFindOneSubraceLanguage_optionsTypeOperatorsInput
  }

  input FilterFindOneSubraceLanguage_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneSubraceLanguage_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubraceNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubraceRaceOperatorsInput {
    index: FilterFindOneSubraceRaceIndexOperatorsInput
    name: FilterFindOneSubraceRaceNameOperatorsInput
    url: FilterFindOneSubraceRaceUrlOperatorsInput
  }

  input FilterFindOneSubraceRaceIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubraceRaceNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubraceRaceUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneSubraceUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneSubraceInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    LANGUAGE_OPTIONS__CHOOSE_ASC
    LANGUAGE_OPTIONS__CHOOSE_DESC
    LANGUAGE_OPTIONS__TYPE_ASC
    LANGUAGE_OPTIONS__TYPE_DESC
    NAME_ASC
    NAME_DESC
    RACE__INDEX_ASC
    RACE__INDEX_DESC
    RACE__NAME_ASC
    RACE__NAME_DESC
    RACE__URL_ASC
    RACE__URL_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManySubraceInput {
    _id: String
    ability_bonuses: [FilterFindManySubraceAbility_bonusesInput]
    desc: String
    index: String
    language_options: FilterFindManySubraceLanguage_optionsInput
    name: String
    race: FilterFindManySubraceRaceInput
    racial_traits: [FilterFindManySubraceRacial_traitsInput]
    starting_proficiencies: [FilterFindManySubraceStarting_proficienciesInput]
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManySubraceOperatorsInput
    OR: [FilterFindManySubraceInput!]
    AND: [FilterFindManySubraceInput!]
  }

  #
  input FilterFindManySubraceAbility_bonusesInput {
    ability_score: FilterFindManySubraceAbility_bonusesAbility_scoreInput
    bonus: Float
    _id: MongoID
  }

  #
  input FilterFindManySubraceAbility_bonusesAbility_scoreInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManySubraceLanguage_optionsInput {
    choose: Float
    from: [FilterFindManySubraceLanguage_optionsFromInput]
    type: String
  }

  #
  input FilterFindManySubraceLanguage_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManySubraceRaceInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManySubraceRacial_traitsInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManySubraceStarting_proficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManySubraceOperatorsInput {
    _id: FilterFindManySubrace_idOperatorsInput
    desc: FilterFindManySubraceDescOperatorsInput
    index: FilterFindManySubraceIndexOperatorsInput
    language_options: FilterFindManySubraceLanguage_optionsOperatorsInput
    name: FilterFindManySubraceNameOperatorsInput
    race: FilterFindManySubraceRaceOperatorsInput
    url: FilterFindManySubraceUrlOperatorsInput
  }

  input FilterFindManySubrace_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubraceDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubraceIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubraceLanguage_optionsOperatorsInput {
    choose: FilterFindManySubraceLanguage_optionsChooseOperatorsInput
    type: FilterFindManySubraceLanguage_optionsTypeOperatorsInput
  }

  input FilterFindManySubraceLanguage_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManySubraceLanguage_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubraceNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubraceRaceOperatorsInput {
    index: FilterFindManySubraceRaceIndexOperatorsInput
    name: FilterFindManySubraceRaceNameOperatorsInput
    url: FilterFindManySubraceRaceUrlOperatorsInput
  }

  input FilterFindManySubraceRaceIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubraceRaceNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubraceRaceUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManySubraceUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindManySubraceInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    LANGUAGE_OPTIONS__CHOOSE_ASC
    LANGUAGE_OPTIONS__CHOOSE_DESC
    LANGUAGE_OPTIONS__TYPE_ASC
    LANGUAGE_OPTIONS__TYPE_DESC
    NAME_ASC
    NAME_DESC
    RACE__INDEX_ASC
    RACE__INDEX_DESC
    RACE__NAME_ASC
    RACE__NAME_DESC
    RACE__URL_ASC
    RACE__URL_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindOneTraitInput {
    _id: String
    desc: [String]
    index: String
    name: String
    proficiencies: [FilterFindOneTraitProficienciesInput]
    proficiency_choices: FilterFindOneTraitProficiency_choicesInput
    races: [FilterFindOneTraitRacesInput]
    subraces: [FilterFindOneTraitSubracesInput]
    parent: FilterFindOneTraitParentInput
    trait_specific: FilterFindOneTraitTrait_specificInput
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneTraitOperatorsInput
    OR: [FilterFindOneTraitInput!]
    AND: [FilterFindOneTraitInput!]
  }

  #
  input FilterFindOneTraitProficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneTraitProficiency_choicesInput {
    choose: Float
    from: [FilterFindOneTraitProficiency_choicesFromInput]
    type: String
  }

  #
  input FilterFindOneTraitProficiency_choicesFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneTraitRacesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneTraitSubracesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneTraitParentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneTraitTrait_specificInput {
    subtrait_options: FilterFindOneTraitTrait_specificSubtrait_optionsInput
    spell_options: FilterFindOneTraitTrait_specificSpell_optionsInput
    damage_type: FilterFindOneTraitTrait_specificDamage_typeInput
    breath_weapon: FilterFindOneTraitTrait_specificBreath_weaponInput
  }

  #
  input FilterFindOneTraitTrait_specificSubtrait_optionsInput {
    choose: Float
    from: [FilterFindOneTraitTrait_specificSubtrait_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneTraitTrait_specificSubtrait_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneTraitTrait_specificSpell_optionsInput {
    choose: Float
    from: [FilterFindOneTraitTrait_specificSpell_optionsFromInput]
    type: String
  }

  #
  input FilterFindOneTraitTrait_specificSpell_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindOneTraitTrait_specificDamage_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneTraitTrait_specificBreath_weaponInput {
    name: String
    desc: String
    usage: FilterFindOneTraitTrait_specificBreath_weaponUsageInput
    dc: FilterFindOneTraitTrait_specificBreath_weaponDcInput
    damage: [FilterFindOneTraitTrait_specificBreath_weaponDamageInput]
  }

  #
  input FilterFindOneTraitTrait_specificBreath_weaponUsageInput {
    type: String
    times: Float
  }

  #
  input FilterFindOneTraitTrait_specificBreath_weaponDcInput {
    dc_type: FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeInput
    success_type: String
  }

  #
  input FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindOneTraitTrait_specificBreath_weaponDamageInput {
    damage_type: FilterFindOneTraitTrait_specificBreath_weaponDamageDamage_typeInput
    damage_at_character_level: JSON
    _id: MongoID
  }

  #
  input FilterFindOneTraitTrait_specificBreath_weaponDamageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneTraitOperatorsInput {
    _id: FilterFindOneTrait_idOperatorsInput
    desc: FilterFindOneTraitDescOperatorsInput
    index: FilterFindOneTraitIndexOperatorsInput
    name: FilterFindOneTraitNameOperatorsInput
    proficiency_choices: FilterFindOneTraitProficiency_choicesOperatorsInput
    parent: FilterFindOneTraitParentOperatorsInput
    trait_specific: FilterFindOneTraitTrait_specificOperatorsInput
    url: FilterFindOneTraitUrlOperatorsInput
  }

  input FilterFindOneTrait_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitProficiency_choicesOperatorsInput {
    choose: FilterFindOneTraitProficiency_choicesChooseOperatorsInput
    type: FilterFindOneTraitProficiency_choicesTypeOperatorsInput
  }

  input FilterFindOneTraitProficiency_choicesChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneTraitProficiency_choicesTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitParentOperatorsInput {
    index: FilterFindOneTraitParentIndexOperatorsInput
    name: FilterFindOneTraitParentNameOperatorsInput
    url: FilterFindOneTraitParentUrlOperatorsInput
  }

  input FilterFindOneTraitParentIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitParentNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitParentUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificOperatorsInput {
    subtrait_options: FilterFindOneTraitTrait_specificSubtrait_optionsOperatorsInput
    spell_options: FilterFindOneTraitTrait_specificSpell_optionsOperatorsInput
    damage_type: FilterFindOneTraitTrait_specificDamage_typeOperatorsInput
    breath_weapon: FilterFindOneTraitTrait_specificBreath_weaponOperatorsInput
  }

  input FilterFindOneTraitTrait_specificSubtrait_optionsOperatorsInput {
    choose: FilterFindOneTraitTrait_specificSubtrait_optionsChooseOperatorsInput
    type: FilterFindOneTraitTrait_specificSubtrait_optionsTypeOperatorsInput
  }

  input FilterFindOneTraitTrait_specificSubtrait_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificSubtrait_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificSpell_optionsOperatorsInput {
    choose: FilterFindOneTraitTrait_specificSpell_optionsChooseOperatorsInput
    type: FilterFindOneTraitTrait_specificSpell_optionsTypeOperatorsInput
  }

  input FilterFindOneTraitTrait_specificSpell_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificSpell_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificDamage_typeOperatorsInput {
    index: FilterFindOneTraitTrait_specificDamage_typeIndexOperatorsInput
    name: FilterFindOneTraitTrait_specificDamage_typeNameOperatorsInput
    url: FilterFindOneTraitTrait_specificDamage_typeUrlOperatorsInput
  }

  input FilterFindOneTraitTrait_specificDamage_typeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificDamage_typeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificDamage_typeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificBreath_weaponOperatorsInput {
    name: FilterFindOneTraitTrait_specificBreath_weaponNameOperatorsInput
    desc: FilterFindOneTraitTrait_specificBreath_weaponDescOperatorsInput
    usage: FilterFindOneTraitTrait_specificBreath_weaponUsageOperatorsInput
    dc: FilterFindOneTraitTrait_specificBreath_weaponDcOperatorsInput
  }

  input FilterFindOneTraitTrait_specificBreath_weaponNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificBreath_weaponDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificBreath_weaponUsageOperatorsInput {
    type: FilterFindOneTraitTrait_specificBreath_weaponUsageTypeOperatorsInput
    times: FilterFindOneTraitTrait_specificBreath_weaponUsageTimesOperatorsInput
  }

  input FilterFindOneTraitTrait_specificBreath_weaponUsageTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificBreath_weaponUsageTimesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificBreath_weaponDcOperatorsInput {
    dc_type: FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeOperatorsInput
    success_type: FilterFindOneTraitTrait_specificBreath_weaponDcSuccess_typeOperatorsInput
  }

  input FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeOperatorsInput {
    index: FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeIndexOperatorsInput
    name: FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeNameOperatorsInput
    url: FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeUrlOperatorsInput
  }

  input FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificBreath_weaponDcDc_typeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitTrait_specificBreath_weaponDcSuccess_typeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneTraitUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneTraitInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    PROFICIENCY_CHOICES__CHOOSE_ASC
    PROFICIENCY_CHOICES__CHOOSE_DESC
    PROFICIENCY_CHOICES__TYPE_ASC
    PROFICIENCY_CHOICES__TYPE_DESC
    PARENT__INDEX_ASC
    PARENT__INDEX_DESC
    PARENT__NAME_ASC
    PARENT__NAME_DESC
    PARENT__URL_ASC
    PARENT__URL_DESC
    TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_ASC
    TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_DESC
    TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_ASC
    TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_DESC
    TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_ASC
    TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_DESC
    TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_ASC
    TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_DESC
    TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_ASC
    TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_DESC
    TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_ASC
    TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_DESC
    TRAIT_SPECIFIC__DAMAGE_TYPE__URL_ASC
    TRAIT_SPECIFIC__DAMAGE_TYPE__URL_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__NAME_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__NAME_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DESC_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DESC_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_DESC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_ASC
    TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyTraitInput {
    _id: String
    desc: [String]
    index: String
    name: String
    proficiencies: [FilterFindManyTraitProficienciesInput]
    proficiency_choices: FilterFindManyTraitProficiency_choicesInput
    races: [FilterFindManyTraitRacesInput]
    subraces: [FilterFindManyTraitSubracesInput]
    parent: FilterFindManyTraitParentInput
    trait_specific: FilterFindManyTraitTrait_specificInput
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyTraitOperatorsInput
    OR: [FilterFindManyTraitInput!]
    AND: [FilterFindManyTraitInput!]
  }

  #
  input FilterFindManyTraitProficienciesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyTraitProficiency_choicesInput {
    choose: Float
    from: [FilterFindManyTraitProficiency_choicesFromInput]
    type: String
  }

  #
  input FilterFindManyTraitProficiency_choicesFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyTraitRacesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyTraitSubracesInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyTraitParentInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyTraitTrait_specificInput {
    subtrait_options: FilterFindManyTraitTrait_specificSubtrait_optionsInput
    spell_options: FilterFindManyTraitTrait_specificSpell_optionsInput
    damage_type: FilterFindManyTraitTrait_specificDamage_typeInput
    breath_weapon: FilterFindManyTraitTrait_specificBreath_weaponInput
  }

  #
  input FilterFindManyTraitTrait_specificSubtrait_optionsInput {
    choose: Float
    from: [FilterFindManyTraitTrait_specificSubtrait_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyTraitTrait_specificSubtrait_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyTraitTrait_specificSpell_optionsInput {
    choose: Float
    from: [FilterFindManyTraitTrait_specificSpell_optionsFromInput]
    type: String
  }

  #
  input FilterFindManyTraitTrait_specificSpell_optionsFromInput {
    index: String
    name: String
    url: String
    _id: MongoID
  }

  #
  input FilterFindManyTraitTrait_specificDamage_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyTraitTrait_specificBreath_weaponInput {
    name: String
    desc: String
    usage: FilterFindManyTraitTrait_specificBreath_weaponUsageInput
    dc: FilterFindManyTraitTrait_specificBreath_weaponDcInput
    damage: [FilterFindManyTraitTrait_specificBreath_weaponDamageInput]
  }

  #
  input FilterFindManyTraitTrait_specificBreath_weaponUsageInput {
    type: String
    times: Float
  }

  #
  input FilterFindManyTraitTrait_specificBreath_weaponDcInput {
    dc_type: FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeInput
    success_type: String
  }

  #
  input FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeInput {
    index: String
    name: String
    url: String
  }

  #
  input FilterFindManyTraitTrait_specificBreath_weaponDamageInput {
    damage_type: FilterFindManyTraitTrait_specificBreath_weaponDamageDamage_typeInput
    damage_at_character_level: JSON
    _id: MongoID
  }

  #
  input FilterFindManyTraitTrait_specificBreath_weaponDamageDamage_typeInput {
    index: String
    name: String
    url: String
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyTraitOperatorsInput {
    _id: FilterFindManyTrait_idOperatorsInput
    desc: FilterFindManyTraitDescOperatorsInput
    index: FilterFindManyTraitIndexOperatorsInput
    name: FilterFindManyTraitNameOperatorsInput
    proficiency_choices: FilterFindManyTraitProficiency_choicesOperatorsInput
    parent: FilterFindManyTraitParentOperatorsInput
    trait_specific: FilterFindManyTraitTrait_specificOperatorsInput
    url: FilterFindManyTraitUrlOperatorsInput
  }

  input FilterFindManyTrait_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitProficiency_choicesOperatorsInput {
    choose: FilterFindManyTraitProficiency_choicesChooseOperatorsInput
    type: FilterFindManyTraitProficiency_choicesTypeOperatorsInput
  }

  input FilterFindManyTraitProficiency_choicesChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyTraitProficiency_choicesTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitParentOperatorsInput {
    index: FilterFindManyTraitParentIndexOperatorsInput
    name: FilterFindManyTraitParentNameOperatorsInput
    url: FilterFindManyTraitParentUrlOperatorsInput
  }

  input FilterFindManyTraitParentIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitParentNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitParentUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificOperatorsInput {
    subtrait_options: FilterFindManyTraitTrait_specificSubtrait_optionsOperatorsInput
    spell_options: FilterFindManyTraitTrait_specificSpell_optionsOperatorsInput
    damage_type: FilterFindManyTraitTrait_specificDamage_typeOperatorsInput
    breath_weapon: FilterFindManyTraitTrait_specificBreath_weaponOperatorsInput
  }

  input FilterFindManyTraitTrait_specificSubtrait_optionsOperatorsInput {
    choose: FilterFindManyTraitTrait_specificSubtrait_optionsChooseOperatorsInput
    type: FilterFindManyTraitTrait_specificSubtrait_optionsTypeOperatorsInput
  }

  input FilterFindManyTraitTrait_specificSubtrait_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificSubtrait_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificSpell_optionsOperatorsInput {
    choose: FilterFindManyTraitTrait_specificSpell_optionsChooseOperatorsInput
    type: FilterFindManyTraitTrait_specificSpell_optionsTypeOperatorsInput
  }

  input FilterFindManyTraitTrait_specificSpell_optionsChooseOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificSpell_optionsTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificDamage_typeOperatorsInput {
    index: FilterFindManyTraitTrait_specificDamage_typeIndexOperatorsInput
    name: FilterFindManyTraitTrait_specificDamage_typeNameOperatorsInput
    url: FilterFindManyTraitTrait_specificDamage_typeUrlOperatorsInput
  }

  input FilterFindManyTraitTrait_specificDamage_typeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificDamage_typeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificDamage_typeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificBreath_weaponOperatorsInput {
    name: FilterFindManyTraitTrait_specificBreath_weaponNameOperatorsInput
    desc: FilterFindManyTraitTrait_specificBreath_weaponDescOperatorsInput
    usage: FilterFindManyTraitTrait_specificBreath_weaponUsageOperatorsInput
    dc: FilterFindManyTraitTrait_specificBreath_weaponDcOperatorsInput
  }

  input FilterFindManyTraitTrait_specificBreath_weaponNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificBreath_weaponDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificBreath_weaponUsageOperatorsInput {
    type: FilterFindManyTraitTrait_specificBreath_weaponUsageTypeOperatorsInput
    times: FilterFindManyTraitTrait_specificBreath_weaponUsageTimesOperatorsInput
  }

  input FilterFindManyTraitTrait_specificBreath_weaponUsageTypeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificBreath_weaponUsageTimesOperatorsInput {
    gt: Float
    gte: Float
    lt: Float
    lte: Float
    ne: Float
    in: [Float]
    nin: [Float]
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificBreath_weaponDcOperatorsInput {
    dc_type: FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeOperatorsInput
    success_type: FilterFindManyTraitTrait_specificBreath_weaponDcSuccess_typeOperatorsInput
  }

  input FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeOperatorsInput {
    index: FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeIndexOperatorsInput
    name: FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeNameOperatorsInput
    url: FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeUrlOperatorsInput
  }

  input FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificBreath_weaponDcDc_typeUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitTrait_specificBreath_weaponDcSuccess_typeOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyTraitUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  #
  input FilterFindOneWeaponPropertyInput {
    _id: String
    desc: [String]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindOneWeaponPropertyOperatorsInput
    OR: [FilterFindOneWeaponPropertyInput!]
    AND: [FilterFindOneWeaponPropertyInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindOneWeaponPropertyOperatorsInput {
    _id: FilterFindOneWeaponProperty_idOperatorsInput
    desc: FilterFindOneWeaponPropertyDescOperatorsInput
    index: FilterFindOneWeaponPropertyIndexOperatorsInput
    name: FilterFindOneWeaponPropertyNameOperatorsInput
    url: FilterFindOneWeaponPropertyUrlOperatorsInput
  }

  input FilterFindOneWeaponProperty_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneWeaponPropertyDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneWeaponPropertyIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneWeaponPropertyNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindOneWeaponPropertyUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  enum SortFindOneWeaponPropertyInput {
    _ID_ASC
    _ID_DESC
    DESC_ASC
    DESC_DESC
    INDEX_ASC
    INDEX_DESC
    NAME_ASC
    NAME_DESC
    URL_ASC
    URL_DESC
  }

  #
  input FilterFindManyWeaponPropertyInput {
    _id: String
    desc: [String]
    index: String
    name: String
    url: String

    # List of *indexed* fields that can be filtered via operators.
    _operators: FilterFindManyWeaponPropertyOperatorsInput
    OR: [FilterFindManyWeaponPropertyInput!]
    AND: [FilterFindManyWeaponPropertyInput!]
  }

  # For performance reason this type contains only *indexed* fields.
  input FilterFindManyWeaponPropertyOperatorsInput {
    _id: FilterFindManyWeaponProperty_idOperatorsInput
    desc: FilterFindManyWeaponPropertyDescOperatorsInput
    index: FilterFindManyWeaponPropertyIndexOperatorsInput
    name: FilterFindManyWeaponPropertyNameOperatorsInput
    url: FilterFindManyWeaponPropertyUrlOperatorsInput
  }

  input FilterFindManyWeaponProperty_idOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyWeaponPropertyDescOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyWeaponPropertyIndexOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyWeaponPropertyNameOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }

  input FilterFindManyWeaponPropertyUrlOperatorsInput {
    gt: String
    gte: String
    lt: String
    lte: String
    ne: String
    in: [String]
    nin: [String]
    regex: RegExpAsString
    exists: Boolean
  }
`;
module.exports = dnd;
