const DATA_CHARACTERS = [
  {
    "name": "Byleth (F)",
    "group": "Byleth",
    "house": "None",
    "gender": "Female",
    "starting_class": null,
    "from_chapter": null,
    "recruitment_requirement": null,
    "personal_ability": {
      "pre_timeskip": {
        "skill_name": "Professor's Guidance",
        "effect": "Multiplies this unit's and adjacent allies' experience earned by 1.2.",
        "icon": "Teacher%27s_Guidance.webp"
      },
      "post_timeskip": {
        "skill_name": "Professor's Guidance+",
        "effect": "Unit deals 2 extra damage during combat. Multiplies this unit's and adjacent allies' experience earned by 1.2.",
        "icon": "Professor2B.webp"
      }
    },
    "initial_skill_levels": {
      "Sword": "D+",
      "Brawling": "E+",
      "Authority": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Brawling": "Strong",
      "Faith": "BuddingTalent",
      "Authority": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Faith",
      "unlock": "White Magic Avoid +20",
      "description": "Grants Avo +20 when using white magic.",
      "icon": "White_Mag_Avo_20_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Model Leader",
        "icon": "Sacred_Power_FE16.webp",
        "description": "Doubles experience earned for battalions."
      },
      {
        "threshold": "A",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      },
      {
        "threshold": "S",
        "skill_type": "Authority",
        "skill_name": "Rally Movement",
        "icon": "Rally_Movement_FE16.webp",
        "description": "Use Rally to grant Mv +1 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Bane of Monsters"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Windsweep"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "Draining Blow"
      },
      {
        "weapon": "Brawling",
        "threshold": "A",
        "art_name": "Mystic Blow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Enlightened One",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Byleth (M)",
    "group": "Byleth",
    "house": "None",
    "gender": "Male",
    "starting_class": null,
    "from_chapter": null,
    "recruitment_requirement": null,
    "personal_ability": {
      "pre_timeskip": {
        "skill_name": "Professor's Guidance",
        "effect": "Multiplies this unit's and adjacent allies' experience earned by 1.2.",
        "icon": "Teacher%27s_Guidance.webp"
      },
      "post_timeskip": {
        "skill_name": "Professor's Guidance+",
        "effect": "Unit deals 2 extra damage during combat. Multiplies this unit's and adjacent allies' experience earned by 1.2.",
        "icon": "Professor2B.webp"
      }
    },
    "initial_skill_levels": {
      "Sword": "D+",
      "Brawling": "E+",
      "Authority": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Brawling": "Strong",
      "Faith": "BuddingTalent",
      "Authority": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Faith",
      "unlock": "White Magic Avoid +20",
      "description": "Grants Avo +20 when using white magic.",
      "icon": "White_Mag_Avo_20_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Model Leader",
        "icon": "Sacred_Power_FE16.webp",
        "description": "Doubles experience earned for battalions."
      },
      {
        "threshold": "A",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      },
      {
        "threshold": "S",
        "skill_type": "Authority",
        "skill_name": "Rally Movement",
        "icon": "Rally_Movement_FE16.webp",
        "description": "Use Rally to grant Mv +1 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Bane of Monsters"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Windsweep"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "Draining Blow"
      },
      {
        "weapon": "Brawling",
        "threshold": "A",
        "art_name": "Mystic Blow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Enlightened One",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Edelgard",
    "group": "Edelgard",
    "house": "Black Eagles",
    "gender": "Female",
    "starting_class": "Noble",
    "from_chapter": "",
    "recruitment_requirement": "Cannot be recruited (leaves party if you ally with church Ch.11)",
    "personal_ability": {
      "pre_timeskip": {
        "skill_name": "Imperial Lineage",
        "effect": "Multiplies experience earned by 1.2.",
        "icon": "Imperial_Bloodline.webp"
      },
      "post_timeskip": {
        "skill_name": "Imperial Lineage+",
        "effect": "If unit takes no action except Wait grants Res +4 for 1 turn. Multiplies experience earned by 1.2.",
        "icon": "Imperial_Lineage%2B.webp"
      }
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Axe": "D",
      "Authority": "D",
      "Heavy Armour": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Axe": "Strong",
      "Bow": "Weak",
      "Reason": "BuddingTalent",
      "Faith": "Weak",
      "Authority": "Strong",
      "Heavy Armour": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Reason",
      "unlock": "Black Magic Crit +10",
      "description": "Grants Crit +10 when using black magic.",
      "icon": "Black_Mag_Crit_10_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Model Leader",
        "icon": "Sacred_Power_FE16.webp",
        "description": "Doubles experience earned for battalions."
      },
      {
        "threshold": "A",
        "skill_type": "Authority",
        "skill_name": "Battalion Renewal",
        "icon": "Battalion_Renewal_FE16.webp",
        "description": "Unit recovers up to 30% of max HP at the start of each turn if a battalion is assigned."
      },
      {
        "threshold": "S",
        "skill_type": "Authority",
        "skill_name": "Rally Charm",
        "icon": "Rally_Charm_FE16.webp",
        "description": "Use Rally to grant Cha +8 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Haze Strike"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Hexblade"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Monster Breaker"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Lightning Axe"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Armored Lord",
      "Emperor",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Lord",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "dark"
  },
  {
    "name": "Dimitri",
    "group": "Dimitri",
    "house": "Blue Lions",
    "gender": "Male",
    "starting_class": "Noble",
    "from_chapter": "",
    "recruitment_requirement": "Cannot be recruited",
    "personal_ability": {
      "pre_timeskip": {
        "skill_name": "Royal Lineage",
        "effect": "Multiplies experience earned by 1.2.",
        "icon": "Royal_Bloodline.webp"
      },
      "post_timeskip": {
        "skill_name": "Royal Lineage+",
        "effect": "Grants Avo +20 while unit is at full HP. Multiplies experience earned by 1.2.",
        "icon": "Royal_Lineage%2B.webp"
      }
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Lance": "D+",
      "Authority": "D",
      "Riding": "D+"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Lance": "Strong",
      "Axe": "Weak",
      "Reason": "Weak",
      "Authority": "Strong",
      "Riding": "BuddingTalent"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Riding",
      "unlock": "Seal Movement",
      "description": "If unit damages foe during combat foe suffers Mv -1 for 1 turn after combat.",
      "icon": "Seal_Movement_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Model Leader",
        "icon": "Sacred_Power_FE16.webp",
        "description": "Doubles experience earned for battalions."
      },
      {
        "threshold": "A",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      },
      {
        "threshold": "S",
        "skill_type": "Authority",
        "skill_name": "Rally Charm",
        "icon": "Rally_Charm_FE16.webp",
        "description": "Use Rally to grant Cha +8 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Sunder"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Windsweep"
      },
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Monster Piercer"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Glowing Ember"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "High Lord",
      "Great Lord",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Lord",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Claude",
    "group": "Claude",
    "house": "Golden Deer",
    "gender": "Male",
    "starting_class": "Noble",
    "from_chapter": "",
    "recruitment_requirement": "Cannot be recruited",
    "personal_ability": {
      "pre_timeskip": {
        "skill_name": "Leicester Lineage",
        "effect": "Multiplies experience earned by 1.2.",
        "icon": "Alliance_Bloodline.webp"
      },
      "post_timeskip": {
        "skill_name": "Leicester Lineage+",
        "effect": "Allows unit to pass through spaces occupied by foes. Multiplies experience earned by 1.2.",
        "icon": "Leicester_Lineage%2B.webp"
      }
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Bow": "D",
      "Authority": "D",
      "Riding": "E+",
      "Flying": "E+"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Lance": "Weak",
      "Axe": "BuddingTalent",
      "Bow": "Strong",
      "Faith": "Weak",
      "Authority": "Strong",
      "Flying": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": true,
      "skill_level": "Axe",
      "unlock": "Diamond Axe",
      "description": "A powerful attack that greatly increases Mt.",
      "icon": "Icon_Combat_Art_FE16_Axe.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Model Leader",
        "icon": "Sacred_Power_FE16.webp",
        "description": "Doubles experience earned for battalions."
      },
      {
        "threshold": "A",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      },
      {
        "threshold": "S",
        "skill_type": "Authority",
        "skill_name": "Rally Charm",
        "icon": "Rally_Charm_FE16.webp",
        "description": "Use Rally to grant Cha +8 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Bane of Monsters"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Finesse Blade"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Monster Blast"
      },
      {
        "weapon": "Bow",
        "threshold": "A",
        "art_name": "Encloser"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Wyvern Master",
      "Barbarossa",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Lord",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Bernadetta",
    "group": "Black Eagles",
    "house": "Black Eagles",
    "gender": "Female",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 20 Strength and C in Bow",
    "personal_ability": {
      "skill_name": "Persecution Complex",
      "effect": "Grants Atk +5 when unit is not at full HP.",
      "icon": "Persecution_Complex.webp"
    },
    "initial_skill_levels": {
      "Lance": "E+",
      "Bow": "D"
    },
    "proficiencies": {
      "Sword": "Weak",
      "Lance": "Strong",
      "Axe": "Weak",
      "Bow": "Strong",
      "Brawling": "Weak",
      "Heavy Armour": "Weak",
      "Riding": "BuddingTalent"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Riding",
      "unlock": "Pass",
      "description": "Allows unit to pass through spaces occupied by foes.",
      "icon": "Pass_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Vengeance"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Deadeye"
      },
      {
        "weapon": "Bow",
        "threshold": "A",
        "art_name": "Encloser"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Caspar",
    "group": "Black Eagles",
    "house": "Black Eagles",
    "gender": "Male",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 10 Strength and C in Brawling",
    "personal_ability": {
      "skill_name": "Born Fighter",
      "effect": "Adjacent foes suffer Avo -10 during combat.",
      "icon": "Born_Fighter.webp"
    },
    "initial_skill_levels": {
      "Axe": "D",
      "Brawling": "E+"
    },
    "proficiencies": {
      "Axe": "Strong",
      "Bow": "Weak",
      "Brawling": "Strong",
      "Reason": "Weak",
      "Authority": "Weak"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Wild Abandon"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Exhaustive Strike"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "Bombard"
      },
      {
        "weapon": "Brawling",
        "threshold": "A",
        "art_name": "Mighty Blow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Dorothea",
    "group": "Black Eagles",
    "house": "Black Eagles",
    "gender": "Female",
    "starting_class": "Commoner",
    "from_chapter": "2",
    "recruitment_requirement": "Need 25 Charm and B in Authority",
    "personal_ability": {
      "skill_name": "Songstress",
      "effect": "Adjacent allies recover up to 10% of max HP at the start of each turn.",
      "icon": "Songstress_skill.webp"
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Reason": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Reason": "Strong",
      "Faith": "Weak+BuddingTalent",
      "Riding": "Weak",
      "Flying": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Faith",
      "unlock": "White Magic Avoid +20",
      "description": "Grants Avo +20 when using white magic.",
      "icon": "White_Mag_Avo_20_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Charm",
        "icon": "Rally_Charm_FE16.webp",
        "description": "Use Rally to grant Cha +8 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Hexblade"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Ferdinand",
    "group": "Black Eagles",
    "house": "Black Eagles",
    "gender": "Male",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 10 Dexterity and C in Heavy Armour",
    "personal_ability": {
      "skill_name": "Confidence",
      "effect": "Grants Hit/Avo +15 when unit is at full HP.",
      "icon": "Confidence_skill.webp"
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Lance": "D",
      "Axe": "E+",
      "Riding": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Lance": "Strong",
      "Axe": "Strong",
      "Heavy Armour": "BuddingTalent",
      "Riding": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Heavy Armour",
      "unlock": "Seal Speed",
      "description": "If unit damages foe during combat foe suffers Spd -6 for 1 turn after combat.",
      "icon": "Seal_Speed_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Dexterity",
        "icon": "Rally_Dexterity_FE16.webp",
        "description": "Use Rally to grant Dex +8 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Sunder"
      },
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Shatter Slash"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Swift Strikes"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Focused Strike"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Armored Strike"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Hubert",
    "group": "Black Eagles",
    "house": "Black Eagles",
    "gender": "Male",
    "starting_class": "Noble",
    "from_chapter": "",
    "recruitment_requirement": "Cannot be recruited (leaves party if you ally with church Ch.11)",
    "personal_ability": {
      "skill_name": "Officer Duty",
      "effect": "Grants Mt +5 with gambits.",
      "icon": "Strategist.webp"
    },
    "initial_skill_levels": {
      "Bow": "E+",
      "Reason": "D",
      "Authority": "E+"
    },
    "proficiencies": {
      "Lance": "BuddingTalent",
      "Axe": "Weak",
      "Bow": "Strong",
      "Reason": "Strong",
      "Faith": "Weak",
      "Authority": "Strong",
      "Flying": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": true,
      "skill_level": "Lance",
      "unlock": "Frozen Lance",
      "description": "A magic attack. Mt increases based on unit's Dex.",
      "icon": "Icon_Combat_Art_FE16_Lance.webp"
    },
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Magic",
        "icon": "Rally_Magic_FE16.webp",
        "description": "Use Rally to grant Mag +4 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Rally Resistance",
        "icon": "Rally_Resistance_FE16.webp",
        "description": "Use Rally to grant Res +4 to an ally."
      },
      {
        "threshold": "A",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      },
      {
        "threshold": "S",
        "skill_type": "Authority",
        "skill_name": "Rally Speed",
        "icon": "Rally_Speed_FE16.webp",
        "description": "Use Rally to grant Spd +4 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Heavy Draw"
      },
      {
        "weapon": "Bow",
        "threshold": "A",
        "art_name": "Schism Shot"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "dark"
  },
  {
    "name": "Linhardt",
    "group": "Black Eagles",
    "house": "Black Eagles",
    "gender": "Male",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 10 Magic and C in Reason",
    "personal_ability": {
      "skill_name": "Catnap",
      "effect": "If unit takes no action except Wait recovers up to 10% of max HP.",
      "icon": "Catnap.webp"
    },
    "initial_skill_levels": {
      "Reason": "E+",
      "Faith": "D+"
    },
    "proficiencies": {
      "Axe": "Weak",
      "Brawling": "Weak",
      "Reason": "Strong",
      "Faith": "Strong"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Renewal",
        "icon": "Battalion_Renewal_FE16.webp",
        "description": "Unit recovers up to 30% of max HP at the start of each turn if a battalion is assigned."
      }
    ],
    "combat_arts": [],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Petra",
    "group": "Black Eagles",
    "house": "Black Eagles",
    "gender": "Female",
    "starting_class": "Commoner",
    "from_chapter": "2",
    "recruitment_requirement": "Need 10 Dexterity and C in Riding",
    "personal_ability": {
      "skill_name": "Hunter's Boon",
      "effect": "Grants Crit +20 when foe's HP is <=50%.",
      "icon": "Hunter%27s_Boon.webp"
    },
    "initial_skill_levels": {
      "Sword": "D+",
      "Axe": "E+",
      "Bow": "E+",
      "Flying": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Axe": "Strong",
      "Bow": "Strong",
      "Reason": "Weak",
      "Faith": "Weak",
      "Flying": "Strong"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Bane of Monsters"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Finesse Blade"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Wild Abandon"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Diamond Axe"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Waning Shot"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Annette",
    "group": "Blue Lions",
    "house": "Blue Lions",
    "gender": "Female",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 10 Magic and B in Faith",
    "personal_ability": {
      "skill_name": "Perseverance",
      "effect": "Use Rally to grant Str +4 to an ally.",
      "icon": "Perseverance.webp"
    },
    "initial_skill_levels": {
      "Axe": "E+",
      "Reason": "D+",
      "Authority": "E+"
    },
    "proficiencies": {
      "Axe": "Strong",
      "Bow": "Weak",
      "Reason": "Strong",
      "Authority": "Strong",
      "Heavy Armour": "Weak"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Resistance",
        "icon": "Rally_Resistance_FE16.webp",
        "description": "Use Rally to grant Res +4 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Renewal",
        "icon": "Battalion_Renewal_FE16.webp",
        "description": "Unit recovers up to 30% of max HP at the start of each turn if a battalion is assigned."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Rally Speed",
        "icon": "Rally_Speed_FE16.webp",
        "description": "Use Rally to grant Spd +4 to an ally."
      },
      {
        "threshold": "A",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      },
      {
        "threshold": "S",
        "skill_type": "Authority",
        "skill_name": "Rally Movement",
        "icon": "Rally_Movement_FE16.webp",
        "description": "Use Rally to grant Mv +1 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Lightning Axe"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Ashe",
    "group": "Blue Lions",
    "house": "Blue Lions",
    "gender": "Male",
    "starting_class": "Commoner",
    "from_chapter": "2",
    "recruitment_requirement": "Need 15 Charm and C in Lance (leaves party in Part 2 unless Edelgard/Dimitri present; re-recruitable by defeating him Ch.15)",
    "personal_ability": {
      "skill_name": "Lockpick",
      "effect": "Allows unit to open doors and chests without keys.",
      "icon": "Wisdom_to_Live.webp"
    },
    "initial_skill_levels": {
      "Axe": "E+",
      "Bow": "D"
    },
    "proficiencies": {
      "Lance": "BuddingTalent",
      "Axe": "Strong",
      "Bow": "Strong",
      "Reason": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": true,
      "skill_level": "Lance",
      "unlock": "Shatter Smash",
      "description": "Enemies hit by this attack suffer -5 Def for 1 turn.",
      "icon": "Icon_Combat_Art_FE16_Lance.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Focused Strike"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Deadeye"
      },
      {
        "weapon": "Bow",
        "threshold": "A",
        "art_name": "Waning Shot"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Dedue",
    "group": "Blue Lions",
    "house": "Blue Lions",
    "gender": "Male",
    "starting_class": "Commoner",
    "from_chapter": "",
    "recruitment_requirement": "Cannot be recruited",
    "personal_ability": {
      "skill_name": "Staunch Shield",
      "effect": "If unit takes no action except Wait grants Def +4 for 1 turn.",
      "icon": "Lone_Wolf_skill.webp"
    },
    "initial_skill_levels": {
      "Lance": "E+",
      "Axe": "D+",
      "Brawling": "E+",
      "Heavy Armour": "D"
    },
    "proficiencies": {
      "Lance": "Strong",
      "Axe": "Strong",
      "Brawling": "Strong",
      "Faith": "Weak",
      "Heavy Armour": "Strong",
      "Riding": "Weak",
      "Flying": "Weak"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Vengeance"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Monster Breaker"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Armored Strike"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "One-Two Punch"
      },
      {
        "weapon": "Brawling",
        "threshold": "A",
        "art_name": "Mighty Blow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Felix",
    "group": "Blue Lions",
    "house": "Blue Lions",
    "gender": "Male",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 15 Speed and B+ in Sword",
    "personal_ability": {
      "skill_name": "Lone Wolf",
      "effect": "Unit deals 5 extra damage when no battalion is assigned or when battalion endurance is 0.",
      "icon": "Lone_Wolf_skill.webp"
    },
    "initial_skill_levels": {
      "Sword": "D",
      "Bow": "E+",
      "Brawling": "E+"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Bow": "Strong",
      "Brawling": "Strong",
      "Reason": "Weak+BuddingTalent",
      "Authority": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Reason",
      "unlock": "Black Magic Crit +10",
      "description": "Grants Crit +10 when using black magic.",
      "icon": "Black_Mag_Crit_10_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Sunder"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Finesse Blade"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Heavy Draw"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "Nimble Combo"
      },
      {
        "weapon": "Brawling",
        "threshold": "A",
        "art_name": "Mystic Blow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Ingrid",
    "group": "Blue Lions",
    "house": "Blue Lions",
    "gender": "Female",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 15 Dexterity and D in Flying",
    "personal_ability": {
      "skill_name": "Lady Knight",
      "effect": "Grants Mt +3 and Hit +5 with gambits.",
      "icon": "Lady_Knight_skill.webp"
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Lance": "D",
      "Riding": "D",
      "Flying": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Lance": "Strong",
      "Riding": "Strong",
      "Flying": "Strong"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Magic",
        "icon": "Rally_Magic_FE16.webp",
        "description": "Use Rally to grant Mag +4 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Hexblade"
      },
      {
        "weapon": "Lance",
        "threshold": "C",
        "art_name": "Hit and Run"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Frozen Lance"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Mercedes",
    "group": "Blue Lions",
    "house": "Blue Lions",
    "gender": "Female",
    "starting_class": "Commoner",
    "from_chapter": "2",
    "recruitment_requirement": "Need 15 Magic and C in Bow",
    "personal_ability": {
      "skill_name": "Live to Serve",
      "effect": "When healing an ally with white magic unit recovers the same amount of HP.",
      "icon": "Live_to_Serve_FE16.webp"
    },
    "initial_skill_levels": {
      "Reason": "E+",
      "Faith": "D"
    },
    "proficiencies": {
      "Sword": "Weak",
      "Lance": "Weak",
      "Axe": "Weak",
      "Bow": "BuddingTalent",
      "Reason": "Strong",
      "Faith": "Strong",
      "Heavy Armour": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": true,
      "skill_level": "Bow",
      "unlock": "Waning Shot",
      "description": "Enemies hit by this attack suffer -5 Str for 1 turn.",
      "icon": "Icon_Combat_Art_FE16_Bow.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Renewal",
        "icon": "Battalion_Renewal_FE16.webp",
        "description": "Unit recovers up to 30% of max HP at the start of each turn if a battalion is assigned."
      }
    ],
    "combat_arts": [],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Sylvain",
    "group": "Blue Lions",
    "house": "Blue Lions",
    "gender": "Male",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 25 Charm and C in Reason (auto-joins if protagonist is female)",
    "personal_ability": {
      "skill_name": "Philanderer",
      "effect": "If a female ally is adjacent unit deals 2 extra damage and takes 2 less damage during combat.",
      "icon": "Philanderer.webp"
    },
    "initial_skill_levels": {
      "Lance": "D",
      "Axe": "D",
      "Riding": "D"
    },
    "proficiencies": {
      "Lance": "Strong",
      "Axe": "Strong",
      "Bow": "Weak",
      "Reason": "BuddingTalent",
      "Riding": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Reason",
      "unlock": "Black Magic Avo +20",
      "description": "Grants Avo +20 when using black magic.",
      "icon": "Black_Mag_Avo_20_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Monster Piercer"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Swift Strikes"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Spike"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Lightning Axe"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Hilda",
    "group": "Golden Deer",
    "house": "Golden Deer",
    "gender": "Female",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 30 Charm and C in Axe (Black Eagles: unavailable until Ch.12 after allying with church)",
    "personal_ability": {
      "skill_name": "Advocate",
      "effect": "Adjacent male allies deal 3 extra damage during combat.",
      "icon": "Plead.webp"
    },
    "initial_skill_levels": {
      "Lance": "E+",
      "Axe": "D"
    },
    "proficiencies": {
      "Lance": "Strong",
      "Axe": "Strong",
      "Faith": "Weak",
      "Authority": "Weak",
      "Heavy Armour": "BuddingTalent"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Heavy Armour",
      "unlock": "Seal Speed",
      "description": "If unit damages foe during combat foe suffers Spd -6 for 1 turn after combat.",
      "icon": "Seal_Speed_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Shatter Slash"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Spike"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Diamond Axe"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Ignatz",
    "group": "Golden Deer",
    "house": "Golden Deer",
    "gender": "Male",
    "starting_class": "Commoner",
    "from_chapter": "2",
    "recruitment_requirement": "Need 10 Dexterity and B in Authority",
    "personal_ability": {
      "skill_name": "Watchful Eye",
      "effect": "Grants Hit +20.",
      "icon": "Watchful_Eye.webp"
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Bow": "D",
      "Authority": "E+"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Bow": "Strong",
      "Reason": "BuddingTalent",
      "Authority": "Strong",
      "Flying": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Reason",
      "unlock": "Seal Strength",
      "description": "If unit damages foe during combat foe suffers Str -6 for 1 turn after combat.",
      "icon": "Seal_Strength_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Speed",
        "icon": "Rally_Speed_FE16.webp",
        "description": "Use Rally to grant Spd +4 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Rally Dexterity",
        "icon": "Rally_Dexterity_FE16.webp",
        "description": "Use Rally to grant Dex +8 to an ally."
      },
      {
        "threshold": "A",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      },
      {
        "threshold": "S",
        "skill_type": "Authority",
        "skill_name": "Rally Strength",
        "icon": "Rally_Strength_FE16.webp",
        "description": "Use Rally to grant Str +4 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Haze Slice"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Break Shot"
      },
      {
        "weapon": "Bow",
        "threshold": "A",
        "art_name": "Ward Arrow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Leonie",
    "group": "Golden Deer",
    "house": "Golden Deer",
    "gender": "Female",
    "starting_class": "Commoner",
    "from_chapter": "2",
    "recruitment_requirement": "Need 15 Strength and C in Lance",
    "personal_ability": {
      "skill_name": "Rivalry",
      "effect": "If a male ally is adjacent unit deals 2 extra damage and takes 2 less damage during combat.",
      "icon": "Rivalry_FE16.webp"
    },
    "initial_skill_levels": {
      "Lance": "D+",
      "Bow": "E+",
      "Riding": "E+"
    },
    "proficiencies": {
      "Lance": "Strong",
      "Bow": "Strong",
      "Riding": "Strong"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Monster Piercer"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Lance Jab"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Break Shot"
      },
      {
        "weapon": "Bow",
        "threshold": "A",
        "art_name": "Point-Blank Volley"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Lorenz",
    "group": "Golden Deer",
    "house": "Golden Deer",
    "gender": "Male",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 20 Charm and C in Reason (leaves party in Part 2 unless Edelgard/Claude present; re-recruitable by defeating him Ch.16)",
    "personal_ability": {
      "skill_name": "Distinguished House",
      "effect": "Unit deals 2 extra damage while in formation with a battalion.",
      "icon": "Prestigious_Noble.webp"
    },
    "initial_skill_levels": {
      "Lance": "D",
      "Reason": "E+",
      "Riding": "D"
    },
    "proficiencies": {
      "Lance": "Strong",
      "Brawling": "Weak",
      "Reason": "Strong",
      "Riding": "Strong"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Frozen Lance"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Lysithea",
    "group": "Golden Deer",
    "house": "Golden Deer",
    "gender": "Female",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 15 Magic and B in Faith (also recruitable by defeating Edelgard Ch.14 if she is present)",
    "personal_ability": {
      "skill_name": "Mastermind (Discipline)",
      "effect": "Doubles skill experience earned in battle.",
      "icon": "Mastermind_icon.webp"
    },
    "initial_skill_levels": {
      "Reason": "D",
      "Faith": "E+",
      "Authority": "E+"
    },
    "proficiencies": {
      "Sword": "Weak+BuddingTalent",
      "Lance": "Weak",
      "Axe": "Weak",
      "Reason": "Strong",
      "Faith": "Strong",
      "Authority": "Strong",
      "Heavy Armour": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": true,
      "skill_level": "Sword",
      "unlock": "Soulblade",
      "description": "A magic attack. Mt increases based on unit's Res.",
      "icon": "Icon_Combat_Art_FE16_Sword.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "dark"
  },
  {
    "name": "Marianne",
    "group": "Golden Deer",
    "house": "Golden Deer",
    "gender": "Female",
    "starting_class": "Noble",
    "from_chapter": "2",
    "recruitment_requirement": "Need 10 Magic and C in Riding",
    "personal_ability": {
      "skill_name": "Animal Friend",
      "effect": "Unit recovers up to 20% of max HP at the start of each turn when adjacent to a cavalry or flying ally.",
      "icon": "Animal_Friend.webp"
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Faith": "D+"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Lance": "BuddingTalent",
      "Brawling": "Weak",
      "Faith": "Strong",
      "Heavy Armour": "Weak",
      "Riding": "Strong",
      "Flying": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": true,
      "skill_level": "Lance",
      "unlock": "Frozen Lance",
      "description": "A magic attack. Mt increases based on unit's Dex.",
      "icon": "Icon_Combat_Art_FE16_Lance.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Renewal",
        "icon": "Battalion_Renewal_FE16.webp",
        "description": "Unit recovers up to 30% of max HP at the start of each turn if a battalion is assigned."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Soulblade"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Raphael",
    "group": "Golden Deer",
    "house": "Golden Deer",
    "gender": "Male",
    "starting_class": "Commoner",
    "from_chapter": "2",
    "recruitment_requirement": "Need 20 Strength and C in Heavy Armour",
    "personal_ability": {
      "skill_name": "Goody Basket",
      "effect": "Chance to recover up to 10% of max HP at the start of each turn. Trigger % = Lck stat.",
      "icon": "Catnap.webp"
    },
    "initial_skill_levels": {
      "Axe": "E+",
      "Brawling": "D",
      "Heavy Armour": "D"
    },
    "proficiencies": {
      "Axe": "Strong",
      "Bow": "Weak",
      "Brawling": "Strong",
      "Reason": "Weak",
      "Heavy Armour": "Strong",
      "Riding": "Weak"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Strength",
        "icon": "Rally_Strength_FE16.webp",
        "description": "Use Rally to grant Str +4 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Wild Abandon"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "Monster Crusher"
      },
      {
        "weapon": "Brawling",
        "threshold": "A",
        "art_name": "Draining Blow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Alois",
    "group": "Church of Seiros",
    "house": "Church of Seiros",
    "gender": "Male",
    "starting_class": "Warrior",
    "from_chapter": "11",
    "recruitment_requirement": "Need to be Level 15",
    "personal_ability": {
      "skill_name": "Compassion",
      "effect": "Use Rally to grant Lck +8 to an ally.",
      "icon": "Rally_Luck_FE16.webp"
    },
    "initial_skill_levels": {
      "Axe": "C",
      "Brawling": "D+",
      "Authority": "C",
      "Heavy Armour": "C"
    },
    "proficiencies": {
      "Axe": "Strong",
      "Brawling": "Strong",
      "Reason": "Weak",
      "Heavy Armour": "Strong",
      "Flying": "Weak"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Strength",
        "icon": "Rally_Strength_FE16.webp",
        "description": "Use Rally to grant Str +4 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Spike"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Exhaustive Strike"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "One-Two Punch"
      },
      {
        "weapon": "Brawling",
        "threshold": "A",
        "art_name": "Mighty Blow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Catherine",
    "group": "Church of Seiros",
    "house": "Church of Seiros",
    "gender": "Female",
    "starting_class": "Swordmaster",
    "from_chapter": "4",
    "recruitment_requirement": "Need to be Level 15 (Black Eagles: unavailable until Ch.12 after allying with church",
    "personal_ability": {
      "skill_name": "Fighting Spirit",
      "effect": "Unit takes 5 less damage when no battalion is assigned or when battalion endurance is 0.",
      "icon": "Confidence_skill.webp"
    },
    "initial_skill_levels": {
      "Sword": "B",
      "Brawling": "D+",
      "Authority": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Brawling": "Strong",
      "Reason": "Weak"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Bane of Monsters"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Finesse Blade"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "Nimble Combo"
      },
      {
        "weapon": "Brawling",
        "threshold": "A",
        "art_name": "Bombard"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Cyril",
    "group": "Church of Seiros",
    "house": "Church of Seiros",
    "gender": "Male",
    "starting_class": "Commoner",
    "from_chapter": "5",
    "recruitment_requirement": "Need to be Level 10 (Black Eagles: unavailable until Ch.12 after allying with church",
    "personal_ability": {
      "skill_name": "Aptitude",
      "effect": "Makes each stat 20% more likely to increase on level up.",
      "icon": "Aptitude_FE16.webp"
    },
    "initial_skill_levels": {
      "Axe": "D+",
      "Bow": "D"
    },
    "proficiencies": {
      "Lance": "Strong",
      "Axe": "Strong",
      "Bow": "Strong",
      "Reason": "Weak",
      "Faith": "Weak",
      "Riding": "Strong",
      "Flying": "Strong"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Vengeance"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Lance Jab"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Monster Breaker"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Armored Strike"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Point-Blank Volley"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Flayn",
    "group": "Church of Seiros",
    "house": "Church of Seiros",
    "gender": "Female",
    "starting_class": "Priest",
    "from_chapter": "7",
    "recruitment_requirement": "Joins automatically (leaves party if opposing church Ch.11)",
    "personal_ability": {
      "skill_name": "Lily's Poise",
      "effect": "Adjacent allies take 3 less damage during combat.",
      "icon": "Plead.webp"
    },
    "initial_skill_levels": {
      "Lance": "E+",
      "Faith": "D+",
      "Flying": "D"
    },
    "proficiencies": {
      "Lance": "Strong",
      "Reason": "BuddingTalent",
      "Faith": "Strong",
      "Heavy Armour": "Weak",
      "Riding": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Reason",
      "unlock": "Seal Magic",
      "description": "If unit damages foe during combat foe suffers Mag -6 for 1 turn after combat.",
      "icon": "Seal_Magic_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Luck",
        "icon": "Rally_Luck_FE16.webp",
        "description": "Use Rally to grant Lck +8 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Renewal",
        "icon": "Battalion_Renewal_FE16.webp",
        "description": "Unit recovers up to 30% of max HP at the start of each turn if a battalion is assigned."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Hit and Run"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Frozen Lance"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Gilbert",
    "group": "Church of Seiros",
    "house": "Church of Seiros",
    "gender": "Male",
    "starting_class": "Fortress Knight",
    "from_chapter": "13",
    "recruitment_requirement": "Automatically from Turn 3 (Blue Lions only)",
    "personal_ability": {
      "skill_name": "Veteran Knight",
      "effect": "Unit takes 2 less damage while in formation with a battalion.",
      "icon": "Prestigious_Noble.webp"
    },
    "initial_skill_levels": {
      "Lance": "C",
      "Axe": "C",
      "Authority": "D+",
      "Heavy Armour": "D",
      "Riding": "C"
    },
    "proficiencies": {
      "Lance": "Strong",
      "Axe": "Strong",
      "Heavy Armour": "Strong",
      "Riding": "Strong"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Defence",
        "icon": "Rally_Defense_FE16.webp",
        "description": ""
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Shatter Slash"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Glowing Ember"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Spike"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Hanneman",
    "group": "Church of Seiros",
    "house": "Church of Seiros",
    "gender": "Male",
    "starting_class": "Mage",
    "from_chapter": "8",
    "recruitment_requirement": "Need to be Level 15",
    "personal_ability": {
      "skill_name": "Crest Scholar",
      "effect": "Use Rally to grant Mag +4 to an ally.",
      "icon": "Crest_Scholar_FE16.webp"
    },
    "initial_skill_levels": {
      "Bow": "D",
      "Reason": "C",
      "Authority": "D",
      "Riding": "D"
    },
    "proficiencies": {
      "Bow": "Strong",
      "Reason": "Strong",
      "Heavy Armour": "Weak",
      "Riding": "Strong",
      "Flying": "Weak"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Schism Shot"
      },
      {
        "weapon": "Bow",
        "threshold": "A",
        "art_name": "Ward Arrow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Manuela",
    "group": "Church of Seiros",
    "house": "Church of Seiros",
    "gender": "Female",
    "starting_class": "Priest",
    "from_chapter": "8",
    "recruitment_requirement": "Need to be Level 15",
    "personal_ability": {
      "skill_name": "Infirmary Master",
      "effect": "Adjacent allies gain Crit Avo +10 during combat.",
      "icon": "Plead.webp"
    },
    "initial_skill_levels": {
      "Sword": "D",
      "Faith": "C",
      "Flying": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Reason": "Weak",
      "Faith": "Strong",
      "Heavy Armour": "Weak",
      "Flying": "Strong"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Charm",
        "icon": "Rally_Charm_FE16.webp",
        "description": "Use Rally to grant Cha +8 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Renewal",
        "icon": "Battalion_Renewal_FE16.webp",
        "description": "Unit recovers up to 30% of max HP at the start of each turn if a battalion is assigned."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Hexblade"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Seteth",
    "group": "Church of Seiros",
    "house": "Church of Seiros",
    "gender": "Male",
    "starting_class": "Wyvern Rider",
    "from_chapter": "12",
    "recruitment_requirement": "Joins automatically (unavailable if opposing church Ch.11)",
    "personal_ability": {
      "skill_name": "Guardian",
      "effect": "Adjacent female allies deal 3 extra damage during combat.",
      "icon": "Plead.webp"
    },
    "initial_skill_levels": {
      "Sword": "D+",
      "Lance": "C",
      "Axe": "C",
      "Authority": "C",
      "Flying": "C"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Lance": "Strong",
      "Axe": "Strong",
      "Authority": "Strong",
      "Riding": "Weak",
      "Flying": "Strong"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Defence",
        "icon": "Rally_Defense_FE16.webp",
        "description": ""
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Model Leader",
        "icon": "Sacred_Power_FE16.webp",
        "description": "Doubles experience earned for battalions."
      },
      {
        "threshold": "A",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      },
      {
        "threshold": "S",
        "skill_type": "Authority",
        "skill_name": "Rally Resistance",
        "icon": "Rally_Resistance_FE16.webp",
        "description": "Use Rally to grant Res +4 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Haze Slice"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Focused Strike"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Diamond Axe"
      },
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Monster Piercer"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Swift Strikes"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Shamir",
    "group": "Church of Seiros",
    "house": "Church of Seiros",
    "gender": "Female",
    "starting_class": "Sniper",
    "from_chapter": "6",
    "recruitment_requirement": "Need to be Level 15 (Black Eagles: auto-joins Ch.12 if allying with church)",
    "personal_ability": {
      "skill_name": "Survival Instinct",
      "effect": "If unit initiates combat and defeats foe grants Str/Mag/Dex/Spd +4 for one turn.",
      "icon": "Confidence_skill.webp"
    },
    "initial_skill_levels": {
      "Lance": "D+",
      "Bow": "B",
      "Authority": "D"
    },
    "proficiencies": {
      "Lance": "Strong",
      "Bow": "Strong",
      "Faith": "Weak"
    },
    "budding_talent": null,
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Hit and Run"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Lance Jab"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Heavy Draw"
      },
      {
        "weapon": "Bow",
        "threshold": "A",
        "art_name": "Monster Blast"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Anna",
    "group": "Ashen Wolves",
    "house": "None",
    "gender": "Female",
    "starting_class": null,
    "from_chapter": null,
    "recruitment_requirement": null,
    "personal_ability": {
      "skill_name": "Business Prosperity",
      "effect": "Grants Lck +5.",
      "icon": "Pomp_%26_Circumstance_FE16.webp"
    },
    "initial_skill_levels": {
      "Sword": "D",
      "Axe": "E+",
      "Bow": "E+",
      "Faith": "E+"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Axe": "Strong",
      "Bow": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Riding",
      "unlock": "Pass",
      "description": "Allows unit to pass through spaces occupied by foes.",
      "icon": "Pass_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Luck",
        "icon": "Rally_Luck_FE16.webp",
        "description": "Use Rally to grant Lck +8 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Soulblade"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Hexblade"
      },
      {
        "weapon": "Bow",
        "threshold": "C+",
        "art_name": "Break Shot"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Spike"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Armored Strike"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Balthus",
    "group": "Ashen Wolves",
    "house": "Ashen Wolves",
    "gender": "Male",
    "starting_class": null,
    "from_chapter": null,
    "recruitment_requirement": null,
    "personal_ability": {
      "skill_name": "King of Grappling",
      "effect": "Grants Str/Def +6 when HP <=50%.",
      "icon": "FE16_King_of_Grappling_icon.webp"
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Axe": "D",
      "Brawling": "D+",
      "Authority": "E+"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Lance": "Weak",
      "Axe": "Strong",
      "Bow": "Weak",
      "Brawling": "Strong",
      "Reason": "BuddingTalent",
      "Faith": "Strong",
      "Heavy Armour": "Strong",
      "Flying": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Reason",
      "unlock": "Black Magic Crit +10",
      "description": "Grants Crit +10 when using black magic.",
      "icon": "Black_Mag_Crit_10_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Strength",
        "icon": "Rally_Strength_FE16.webp",
        "description": "Use Rally to grant Str +4 to an ally."
      },
      {
        "threshold": "B",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Bane of Monsters"
      },
      {
        "weapon": "Axe",
        "threshold": "C+",
        "art_name": "Diamond Axe"
      },
      {
        "weapon": "Axe",
        "threshold": "A",
        "art_name": "Armored Strike"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "Draining Blow"
      },
      {
        "weapon": "Brawling",
        "threshold": "A",
        "art_name": "Mighty Blow"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Constance",
    "group": "Ashen Wolves",
    "house": "Ashen Wolves",
    "gender": "Female",
    "starting_class": null,
    "from_chapter": null,
    "recruitment_requirement": null,
    "personal_ability": {
      "skill_name": "Circadian Beat",
      "effect": "Grants Str/Mag +3 when indoors and Def/Res +3 when outdoors.",
      "icon": "FE16_Circadian_Beat_icon.webp"
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Reason": "D",
      "Flying": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Axe": "Weak",
      "Brawling": "BuddingTalent",
      "Reason": "Strong",
      "Authority": "Strong",
      "Heavy Armour": "Weak",
      "Flying": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": true,
      "skill_level": "Brawling",
      "unlock": "Mystic Blow",
      "description": "A magic attack.",
      "icon": "Icon_Combat_Art_FE16_Brawl.webp"
    },
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Magic",
        "icon": "Rally_Magic_FE16.webp",
        "description": "Use Rally to grant Mag +4 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Rally Resistance",
        "icon": "Rally_Resistance_FE16.webp",
        "description": "Use Rally to grant Res +4 to an ally."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Soulblade"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Hexblade"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Hapi",
    "group": "Ashen Wolves",
    "house": "Ashen Wolves",
    "gender": "Female",
    "starting_class": null,
    "from_chapter": null,
    "recruitment_requirement": null,
    "personal_ability": {
      "skill_name": "Monstrous Appeal",
      "effect": "Makes all attacks effective against monsters and makes it easier for monsters to target unit.",
      "icon": "FE16_Monstrous_Appeal_icon.webp"
    },
    "initial_skill_levels": {
      "Sword": "E+",
      "Reason": "D",
      "Riding": "D"
    },
    "proficiencies": {
      "Axe": "BuddingTalent",
      "Brawling": "Weak",
      "Reason": "Strong",
      "Authority": "Weak",
      "Heavy Armour": "Weak",
      "Riding": "Strong",
      "Flying": "Strong"
    },
    "budding_talent": {
      "is_fallback_icon": true,
      "skill_level": "Axe",
      "unlock": "Exhaustive Strike",
      "description": "An attack that consumes all remaining durability and adds 30% of it to Mt.",
      "icon": "Icon_Combat_Art_FE16_Axe.webp"
    },
    "authority_abilities": [
      {
        "threshold": "D",
        "skill_type": "Authority",
        "skill_name": "Rally Dexterity",
        "icon": "Rally_Dexterity_FE16.webp",
        "description": "Use Rally to grant Dex +8 to an ally."
      },
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      }
    ],
    "combat_arts": [],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Pegasus Knight",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Mage",
      "Priest",
      "Swordmaster",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Warlock",
      "Bishop",
      "Trickster",
      "War Cleric",
      "Dark Flier",
      "Valkyrie",
      "Falcon Knight",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "Gremory"
    ],
    "magic_alignment": "dark"
  },
  {
    "name": "Yuri",
    "group": "Ashen Wolves",
    "house": "Ashen Wolves",
    "gender": "Male",
    "starting_class": null,
    "from_chapter": null,
    "recruitment_requirement": null,
    "personal_ability": {
      "skill_name": "Honorable Spirit",
      "effect": "If unit is not near an ally grants Atk +3 when in combat with a foe one space away.",
      "icon": "FE16_Honorable_Spirit_icon.webp"
    },
    "initial_skill_levels": {
      "Sword": "D",
      "Reason": "E+",
      "Faith": "D",
      "Authority": "D"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Lance": "Weak",
      "Axe": "Weak",
      "Bow": "BuddingTalent",
      "Reason": "Strong",
      "Faith": "Strong",
      "Authority": "Strong",
      "Riding": "Weak",
      "Flying": "Weak"
    },
    "budding_talent": {
      "is_fallback_icon": true,
      "skill_level": "Bow",
      "unlock": "Deadeye",
      "description": "A bow attack with a long range.",
      "icon": "Icon_Combat_Art_FE16_Bow.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Vantage",
        "icon": "Battalion_Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if battalion endurance is ≤ 1/3."
      },
      {
        "threshold": "C+",
        "skill_type": "Authority",
        "skill_name": "Model Leader",
        "icon": "Sacred_Power_FE16.webp",
        "description": "Doubles experience earned for battalions."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Windsweep"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Finesse Blade"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  },
  {
    "name": "Jeritza",
    "group": "Ashen Wolves",
    "house": "None",
    "gender": "Male",
    "starting_class": null,
    "from_chapter": null,
    "recruitment_requirement": null,
    "personal_ability": {
      "skill_name": "Murderous Intent",
      "effect": "If unit initiates combat grants Hit +20 during combat.",
      "icon": "Born_Fighter.webp"
    },
    "initial_skill_levels": {
      "Sword": "B",
      "Lance": "A",
      "Brawling": "D+",
      "Authority": "B",
      "Riding": "B"
    },
    "proficiencies": {
      "Sword": "Strong",
      "Lance": "Strong",
      "Brawling": "Strong",
      "Faith": "Weak",
      "Authority": "Weak",
      "Riding": "Strong",
      "Flying": "BuddingTalent"
    },
    "budding_talent": {
      "is_fallback_icon": false,
      "skill_level": "Flying",
      "unlock": "Darting Blow",
      "description": "If unit initiates combat grants AS +6 during combat.",
      "icon": "Darting_Blow_FE16.webp"
    },
    "authority_abilities": [
      {
        "threshold": "C",
        "skill_type": "Authority",
        "skill_name": "Battalion Wrath",
        "icon": "Battalion_Wrath_FE16.webp",
        "description": "If foe initiates combat while unit's battalion endurance is ≤ 1/3, grants Crit +50."
      },
      {
        "threshold": "B",
        "skill_type": "Authority",
        "skill_name": "Battalion Desperation",
        "icon": "Battalion_Desperation_FE16.webp",
        "description": "If unit initiates combat when battalion endurance is ≤ 1/3, unit's follow-up attack (if possible) occurs before foe's counterattack."
      },
      {
        "threshold": "E+",
        "skill_type": "Sword",
        "skill_name": "Mastermind",
        "icon": "Mastermind_icon.webp",
        "description": "Doubles skill experience earned in battle."
      }
    ],
    "combat_arts": [
      {
        "weapon": "Sword",
        "threshold": "C+",
        "art_name": "Haze Slice"
      },
      {
        "weapon": "Sword",
        "threshold": "A",
        "art_name": "Windsweep"
      },
      {
        "weapon": "Brawling",
        "threshold": "C+",
        "art_name": "Nimble Combo"
      },
      {
        "weapon": "Lance",
        "threshold": "C+",
        "art_name": "Shatter Slash"
      },
      {
        "weapon": "Lance",
        "threshold": "A",
        "art_name": "Glowing Ember"
      }
    ],
    "reachable_classes": [
      "Commoner",
      "Noble",
      "Dancer",
      "Death Knight",
      "Myrmidon",
      "Soldier",
      "Fighter",
      "Monk",
      "Mercenary",
      "Thief",
      "Cavalier",
      "Brigand",
      "Armored Knight",
      "Archer",
      "Brawler",
      "Mage",
      "Dark Mage",
      "Priest",
      "Swordmaster",
      "Hero",
      "Assassin",
      "Paladin",
      "Warrior",
      "Fortress Knight",
      "Wyvern Rider",
      "Sniper",
      "Grappler",
      "Warlock",
      "Dark Bishop",
      "Bishop",
      "Trickster",
      "War Monk",
      "Wyvern Lord",
      "Mortal Savant",
      "Great Knight",
      "Bow Knight",
      "Dark Knight",
      "Holy Knight",
      "War Master"
    ],
    "magic_alignment": "black"
  }
];