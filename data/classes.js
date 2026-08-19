const DATA_CLASSES = [
  {
    "section": "Unique Classes",
    "class_name": "Commoner",
    "proficiency": "",
    "cert_requirement": "None",
    "abilities": "",
    "mastery": "HP +5",
    "notes": "Can use magic at half uses",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Commoner_FByleth_Icon.webp"
    ],
    "abilities_parsed": [],
    "mastery_parsed": {
      "name": "HP +5",
      "icon": "HP%2B5_FE16.webp",
      "description": "Increases maximum HP by 5."
    }
  },
  {
    "section": "Unique Classes",
    "class_name": "Noble",
    "proficiency": "",
    "cert_requirement": "None",
    "abilities": "",
    "mastery": "HP +5",
    "notes": "Can use magic at half uses",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Noble_Claude_Icon.webp",
      "FE16_Noble_Dimitri_Icon.webp",
      "FE16_Noble_Edelgard_Icon.webp"
    ],
    "abilities_parsed": [],
    "mastery_parsed": {
      "name": "HP +5",
      "icon": "HP%2B5_FE16.webp",
      "description": "Increases maximum HP by 5."
    }
  },
  {
    "section": "Unique Classes",
    "class_name": "Dancer",
    "proficiency": "Sword (+2) Authority (+2)",
    "cert_requirement": "Win the White Heron Cup",
    "abilities": "Dance",
    "mastery": "Special Dance",
    "notes": "Can use magic",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Dancer_Female_Icon.webp",
      "FE16_Dancer_Male_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Dance",
        "icon": null,
        "description": "Use Dance to allow an ally to move again."
      }
    ],
    "mastery_parsed": {
      "name": "Special Dance",
      "icon": "Special_Dance_FE16.webp",
      "description": "When using the Dance ability, grant Dex/Spd/Lck +4 to target ally."
    }
  },
  {
    "section": "Character-Unique Classes",
    "class_name": "Enlightened One",
    "proficiency": "Sword (+3) Brawl (+2) Faith (+3) Authority (+3)",
    "cert_requirement": "Automatically gained at the start of Chapter 11",
    "abilities": "Swordfaire | Terrain Resistance",
    "mastery": "Sacred Power",
    "notes": "Byleth only Can use magic",
    "gender_lock": "",
    "unique_characters": [
      "Byleth"
    ],
    "icons": [
      "FE16_Enlightened_One_Female_Byleth_Icon.webp",
      "FE16_Enlightened_One_Male_Byleth_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Swordfaire",
        "icon": "Swordfaire_FE16.webp",
        "description": "Grants Atk +5 when using a sword."
      },
      {
        "name": "Terrain Resistance",
        "icon": "Terrain_Resistance_FE16.webp",
        "description": "Nullifies damage from terrain."
      }
    ],
    "mastery_parsed": {
      "name": "Sacred Power",
      "icon": "Sacred_Power_FE16.webp",
      "description": ""
    }
  },
  {
    "section": "Character-Unique Classes",
    "class_name": "Armored Lord",
    "proficiency": "Axe (+3) Authority (+3) Heavy Armor (+3)",
    "cert_requirement": "Automatically gained at the start of Chapter 13",
    "abilities": "Charm | Axefaire",
    "mastery": "Pomp & Circumstance",
    "notes": "Edelgard only",
    "gender_lock": "",
    "unique_characters": [
      "Edelgard"
    ],
    "icons": [
      "FE16_Armored_Lord_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Charm",
        "icon": "Charm_FE16.webp",
        "description": "Adjacent allies deal 3 extra damage during combat."
      },
      {
        "name": "Axefaire",
        "icon": "Axefaire_FE16.webp",
        "description": "Grants Atk +5 when using an axe."
      }
    ],
    "mastery_parsed": {
      "name": "Pomp & Circumstance",
      "icon": "Pomp_%26_Circumstance_FE16.webp",
      "description": "Grants Lck/Cha +4."
    }
  },
  {
    "section": "Character-Unique Classes",
    "class_name": "High Lord",
    "proficiency": "Sword (+3) Lance (+3) Authority (+3)",
    "cert_requirement": "Automatically gained at the start of Chapter 13",
    "abilities": "Charm | Lancefaire",
    "mastery": "Pomp & Circumstance",
    "notes": "Dimitri only",
    "gender_lock": "",
    "unique_characters": [
      "Dimitri"
    ],
    "icons": [
      "FE16_High_Lord_Dimitri_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Charm",
        "icon": "Charm_FE16.webp",
        "description": "Adjacent allies deal 3 extra damage during combat."
      },
      {
        "name": "Lancefaire",
        "icon": "Lancefaire_FE16.webp",
        "description": "Grants Atk +5 when using a lance."
      }
    ],
    "mastery_parsed": {
      "name": "Pomp & Circumstance",
      "icon": "Pomp_%26_Circumstance_FE16.webp",
      "description": "Grants Lck/Cha +4."
    }
  },
  {
    "section": "Character-Unique Classes",
    "class_name": "Wyvern Master",
    "proficiency": "Bow (+3) Authority (+3) Flying (+3)",
    "cert_requirement": "Automatically gained at the start of Chapter 13",
    "abilities": "Charm | Bowfaire | Canto",
    "mastery": "Pomp & Circumstance",
    "notes": "Claude only",
    "gender_lock": "",
    "unique_characters": [
      "Claude"
    ],
    "icons": [
      "FE16_Wyvern_Master_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Charm",
        "icon": "Charm_FE16.webp",
        "description": "Adjacent allies deal 3 extra damage during combat."
      },
      {
        "name": "Bowfaire",
        "icon": "Bowfaire_FE16.webp",
        "description": "Grants Atk +5 when using a bow."
      },
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      }
    ],
    "mastery_parsed": {
      "name": "Pomp & Circumstance",
      "icon": "Pomp_%26_Circumstance_FE16.webp",
      "description": "Grants Lck/Cha +4."
    }
  },
  {
    "section": "Character-Unique Classes",
    "class_name": "Death Knight",
    "proficiency": "Lance (+3) Reason (+3) Riding (+3)",
    "cert_requirement": "Automatically gained at the start of Chapter 13",
    "abilities": "Canto | Lancefaire",
    "mastery": "Counterattack",
    "notes": "Jeritza only Can use magic",
    "gender_lock": "",
    "unique_characters": [
      "Jeritza"
    ],
    "icons": [
      "FE16_Death_Knight_Jeritza_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Lancefaire",
        "icon": "Lancefaire_FE16.webp",
        "description": "Grants Atk +5 when using a lance."
      }
    ],
    "mastery_parsed": {
      "name": "Counterattack",
      "icon": "Counterattack.webp",
      "description": "Allows unit to counterattack regardless of distance to attacker."
    }
  },
  {
    "section": "Character-Unique Classes",
    "class_name": "Emperor",
    "proficiency": "Axe (+3) Authority (+3) Heavy Armor (+3)",
    "cert_requirement": "Automatically gained at the start of Chapter 16",
    "abilities": "Charm | Axefaire",
    "mastery": "Flickering Flower",
    "notes": "Edelgard only",
    "gender_lock": "",
    "unique_characters": [
      "Edelgard"
    ],
    "icons": [
      "FE16_Emperor_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Charm",
        "icon": "Charm_FE16.webp",
        "description": "Adjacent allies deal 3 extra damage during combat."
      },
      {
        "name": "Axefaire",
        "icon": "Axefaire_FE16.webp",
        "description": "Grants Atk +5 when using an axe."
      }
    ],
    "mastery_parsed": {
      "name": "Flickering Flower",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Character-Unique Classes",
    "class_name": "Great Lord",
    "proficiency": "Sword (+3) Lance (+3) Authority (+3)",
    "cert_requirement": "Automatically gained at the start of Chapter 16",
    "abilities": "Charm | Lancefaire",
    "mastery": "Paraselene",
    "notes": "Dimitri only",
    "gender_lock": "",
    "unique_characters": [
      "Dimitri"
    ],
    "icons": [
      "FE16_Great_Lord_Dimitri_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Charm",
        "icon": "Charm_FE16.webp",
        "description": "Adjacent allies deal 3 extra damage during combat."
      },
      {
        "name": "Lancefaire",
        "icon": "Lancefaire_FE16.webp",
        "description": "Grants Atk +5 when using a lance."
      }
    ],
    "mastery_parsed": {
      "name": "Paraselene",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Character-Unique Classes",
    "class_name": "Barbarossa",
    "proficiency": "Bow (+3) Authority (+3) Flying (+3)",
    "cert_requirement": "Automatically gained at the start of Chapter 17",
    "abilities": "Charm | Bowfaire | Canto",
    "mastery": "Wind God",
    "notes": "Claude only",
    "gender_lock": "",
    "unique_characters": [
      "Claude"
    ],
    "icons": [
      "FE16_Barbarossa_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Charm",
        "icon": "Charm_FE16.webp",
        "description": "Adjacent allies deal 3 extra damage during combat."
      },
      {
        "name": "Bowfaire",
        "icon": "Bowfaire_FE16.webp",
        "description": "Grants Atk +5 when using a bow."
      },
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      }
    ],
    "mastery_parsed": {
      "name": "Wind God",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Beginner Classes",
    "class_name": "Myrmidon",
    "proficiency": "Sword (+1)",
    "cert_requirement": "Sword level at D or higher",
    "abilities": "",
    "mastery": "Swap Speed +2",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Myrmidon_Icon.webp"
    ],
    "abilities_parsed": [],
    "mastery_parsed": {
      "name": "Swap Speed +2",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Beginner Classes",
    "class_name": "Soldier",
    "proficiency": "Lance (+1)",
    "cert_requirement": "Lance level at D or higher",
    "abilities": "",
    "mastery": "Reposition Defense +2",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Soldier_Icon.webp"
    ],
    "abilities_parsed": [],
    "mastery_parsed": {
      "name": "Reposition Defense +2",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Beginner Classes",
    "class_name": "Fighter",
    "proficiency": "Axe (+1) Bow (+1) Brawl (+1)",
    "cert_requirement": "Axe, Bow or Brawl level at D or higher",
    "abilities": "",
    "mastery": "Shove Strength +2",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Fighter_Icon.webp"
    ],
    "abilities_parsed": [],
    "mastery_parsed": {
      "name": "Shove Strength +2",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Beginner Classes",
    "class_name": "Monk",
    "proficiency": "Reason (+1) Faith (+1)",
    "cert_requirement": "Reason or Faith level at D or higher",
    "abilities": "",
    "mastery": "Draw Back Magic +2",
    "notes": "Can use magic",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Monk_Icon.webp"
    ],
    "abilities_parsed": [],
    "mastery_parsed": {
      "name": "Draw Back Magic +2",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Lord",
    "proficiency": "Sword (+2) Lance (+1) Authority (+2)",
    "cert_requirement": "Sword level at D+ or higher Authority level at C or higher",
    "abilities": "Charm",
    "mastery": "Subdue Resistance +2",
    "notes": "Edelgard , Dimitri and Claude only",
    "gender_lock": "",
    "unique_characters": [
      "Edelgard",
      "Dimitri",
      "Claude"
    ],
    "icons": [
      "FE16_Lord_Claude_Icon.webp",
      "FE16_Lord_Dimitri_Icon.webp",
      "FE16_Lord_Edelgard_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Charm",
        "icon": "Charm_FE16.webp",
        "description": "Adjacent allies deal 3 extra damage during combat."
      }
    ],
    "mastery_parsed": {
      "name": "Subdue Resistance +2",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Mercenary",
    "proficiency": "Sword (+2) Axe (+1)",
    "cert_requirement": "Sword level at C or higher",
    "abilities": "",
    "mastery": "Vantage",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Mercenary_Icon.webp"
    ],
    "abilities_parsed": [],
    "mastery_parsed": {
      "name": "Vantage",
      "icon": "Vantage_FE16.webp",
      "description": "When foe initiates combat, unit still attacks first if HP is ≤ 50%."
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Thief",
    "proficiency": "Sword (+2) Bow (+1)",
    "cert_requirement": "Sword level at C or higher",
    "abilities": "Steal | Locktouch",
    "mastery": "Steal",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Thief_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Steal",
        "icon": "Steal_FE16.webp",
        "description": "Allows unit to steal a non-weapon item from a foe with a lower Spd stat."
      },
      {
        "name": "Locktouch",
        "icon": "Locktouch_FE16.webp",
        "description": "Allows unit to open doors and chests without keys."
      }
    ],
    "mastery_parsed": {
      "name": "Steal",
      "icon": "Steal_FE16.webp",
      "description": "Allows unit to steal a non-weapon item from a foe with a lower Spd stat."
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Cavalier",
    "proficiency": "Sword (+1) Lance (+2) Riding (+2)",
    "cert_requirement": "Lance level at C or higher Riding level at D or higher",
    "abilities": "Canto",
    "mastery": "Desperation",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Cavalier_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      }
    ],
    "mastery_parsed": {
      "name": "Desperation",
      "icon": "Desperation_FE16.webp",
      "description": "If unit initiates combat with HP ≤ 50%, unit's follow-up attack (if possible) occurs before foe's counterattack."
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Pegasus Knight",
    "proficiency": "Sword (+1) Lance (+2) Flying (+2)",
    "cert_requirement": "Lance level at C or higher Flying level at D or higher",
    "abilities": "Canto | Avoid +10",
    "mastery": "Darting Blow Triangle Attack",
    "notes": "Female only",
    "gender_lock": "Female",
    "unique_characters": [],
    "icons": [
      "FE16_Pegasus_Knight_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Avoid +10",
        "icon": null,
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Darting Blow Triangle Attack",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Brigand",
    "proficiency": "Axe (+2) Brawl (+1)",
    "cert_requirement": "Axe level at C or higher",
    "abilities": "",
    "mastery": "Death Blow",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Brigand_Icon.webp"
    ],
    "abilities_parsed": [],
    "mastery_parsed": {
      "name": "Death Blow",
      "icon": "Death_Blow_FE16.webp",
      "description": ""
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Armored Knight",
    "proficiency": "Lance (+1) Axe (+2) Heavy Armor (+2)",
    "cert_requirement": "Axe level at C or higher Heavy Armor level at D or higher",
    "abilities": "",
    "mastery": "Armored Blow",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Armored_Knight_Icon.webp"
    ],
    "abilities_parsed": [],
    "mastery_parsed": {
      "name": "Armored Blow",
      "icon": "Armored_Blow_FE16.webp",
      "description": ""
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Archer",
    "proficiency": "Sword (+1) Bow (+2)",
    "cert_requirement": "Bow level at C or higher",
    "abilities": "Bowrange +1",
    "mastery": "Hit +20",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Archer_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Bowrange +1",
        "icon": "Bowrange%2B1_FE16.webp",
        "description": "Increases bow range by 1."
      }
    ],
    "mastery_parsed": {
      "name": "Hit +20",
      "icon": null,
      "description": "Increases Hit by 20."
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Brawler",
    "proficiency": "Axe (+1) Brawl (+2)",
    "cert_requirement": "Brawl level at C or higher",
    "abilities": "Unarmed Combat",
    "mastery": "Unarmed Combat",
    "notes": "Male only",
    "gender_lock": "Male",
    "unique_characters": [],
    "icons": [
      "FE16_Brawler_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Unarmed Combat",
        "icon": "Unarmed_Combat_FE16.webp",
        "description": "Allows unit to fight without a weapon."
      }
    ],
    "mastery_parsed": {
      "name": "Unarmed Combat",
      "icon": "Unarmed_Combat_FE16.webp",
      "description": "Allows unit to fight without a weapon."
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Mage",
    "proficiency": "Reason (+2) Faith (+1)",
    "cert_requirement": "Reason level at C or higher",
    "abilities": "Fire",
    "mastery": "Fiendish Blow",
    "notes": "Can use magic",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Mage_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Fire",
        "icon": "Fire_FE16.webp",
        "description": "Allows unit to cast Fire. If Fire is already available, then unit can cast it twice as often."
      }
    ],
    "mastery_parsed": {
      "name": "Fiendish Blow",
      "icon": "Fiendish_Blow_FE16.webp",
      "description": ""
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Dark Mage",
    "proficiency": "Reason (+2) Faith (+1)",
    "cert_requirement": "Reason level at C or higher Dark Seal",
    "abilities": "Miasma Δ | Heartseeker",
    "mastery": "Poison Strike",
    "notes": "Can use magic Male only",
    "gender_lock": "Male",
    "unique_characters": [],
    "icons": [
      "FE16_Dark_Mage_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Miasma Δ",
        "icon": "Miasma_%3F_FE16.webp",
        "description": "Allows unit to cast Miasma Δ. If Miasma Δ is already available, then unit can cast it twice as often."
      },
      {
        "name": "Heartseeker",
        "icon": "Heartseeker_FE16.webp",
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Poison Strike",
      "icon": "Poison_Strike_FE16.webp",
      "description": "If unit initiates combat and lands a hit, targeted foe loses up to 20% of max HP after combat."
    }
  },
  {
    "section": "Intermediate Classes",
    "class_name": "Priest",
    "proficiency": "Reason (+1) Faith (+2)",
    "cert_requirement": "Faith level at C or higher",
    "abilities": "Heal | White Magic Heal +5",
    "mastery": "Miracle",
    "notes": "Can use magic",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Priest_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Heal",
        "icon": "Heal_FE16.webp",
        "description": "Allows unit to cast Heal. If Heal is already available, then unit can cast it twice as often."
      },
      {
        "name": "White Magic Heal +5",
        "icon": "White_Magic_Heal%2B5_FE16.webp",
        "description": "Heal 5 extra HP when using white magic."
      }
    ],
    "mastery_parsed": {
      "name": "Miracle",
      "icon": "Miracle.webp",
      "description": "Chance to survive lethal damage with 1 HP, if HP is greater than 1. Trigger % = Lck stat."
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Swordmaster",
    "proficiency": "Sword (+3)",
    "cert_requirement": "Sword level at A or higher",
    "abilities": "Swordfaire | Sword Critical +10",
    "mastery": "Astra",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Swordmaster_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Swordfaire",
        "icon": "Swordfaire_FE16.webp",
        "description": "Grants Atk +5 when using a sword."
      },
      {
        "name": "Sword Critical +10",
        "icon": null,
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Astra",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Hero",
    "proficiency": "Sword (+3) Axe (+2)",
    "cert_requirement": "Sword level at B or higher Axe level at C or higher",
    "abilities": "Swordfaire | Vantage",
    "mastery": "Defiant Str",
    "notes": "Male only",
    "gender_lock": "Male",
    "unique_characters": [],
    "icons": [
      "FE16_Hero_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Swordfaire",
        "icon": "Swordfaire_FE16.webp",
        "description": "Grants Atk +5 when using a sword."
      },
      {
        "name": "Vantage",
        "icon": "Vantage_FE16.webp",
        "description": "When foe initiates combat, unit still attacks first if HP is ≤ 50%."
      }
    ],
    "mastery_parsed": {
      "name": "Defiant Str",
      "icon": "Defiant_Str_FE16.webp",
      "description": "Grants Str +8 when HP is ≤ 25%."
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Assassin",
    "proficiency": "Sword (+3) Bow (+2)",
    "cert_requirement": "Sword level at B or higher Bow level at C or higher",
    "abilities": "Swordfaire | Locktouch | Stealth",
    "mastery": "Lethality Assassinate",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Assassin_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Swordfaire",
        "icon": "Swordfaire_FE16.webp",
        "description": "Grants Atk +5 when using a sword."
      },
      {
        "name": "Locktouch",
        "icon": "Locktouch_FE16.webp",
        "description": "Allows unit to open doors and chests without keys."
      },
      {
        "name": "Stealth",
        "icon": "Stealth_FE16.webp",
        "description": "Makes it more difficult for foes to target unit."
      }
    ],
    "mastery_parsed": {
      "name": "Lethality Assassinate",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Paladin",
    "proficiency": "Sword (+2) Lance (+3) Riding (+3)",
    "cert_requirement": "Lance level at B or higher Riding level at B or higher",
    "abilities": "Canto | Lancefaire | Terrain Resistance",
    "mastery": "Aegis",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Paladin_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Lancefaire",
        "icon": "Lancefaire_FE16.webp",
        "description": "Grants Atk +5 when using a lance."
      },
      {
        "name": "Terrain Resistance",
        "icon": "Terrain_Resistance_FE16.webp",
        "description": "Nullifies damage from terrain."
      }
    ],
    "mastery_parsed": {
      "name": "Aegis",
      "icon": "Aegis_FE16.webp",
      "description": "Chance to reduce bow/magic damage by half. Trigger % = Dex stat."
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Warrior",
    "proficiency": "Axe (+3)",
    "cert_requirement": "Axe level at A or higher",
    "abilities": "Axefaire | Axe Critical +10",
    "mastery": "Wrath",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Warrior_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Axefaire",
        "icon": "Axefaire_FE16.webp",
        "description": "Grants Atk +5 when using an axe."
      },
      {
        "name": "Axe Critical +10",
        "icon": null,
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Wrath",
      "icon": "Wrath_FE16.webp",
      "description": "If foe initiates combat while unit's HP is ≤ 50%, grants Crit +50."
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Fortress Knight",
    "proficiency": "Lance (+2) Axe (+3) Heavy Armor (+3)",
    "cert_requirement": "Axe level at B or higher Heavy Armor level at B or higher",
    "abilities": "Axefaire | Weight -5",
    "mastery": "Pavise",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Fortress_Knight_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Axefaire",
        "icon": "Axefaire_FE16.webp",
        "description": "Grants Atk +5 when using an axe."
      },
      {
        "name": "Weight -5",
        "icon": "Weight_-5_FE16.webp",
        "description": "Reduces total equipment weight by 5."
      }
    ],
    "mastery_parsed": {
      "name": "Pavise",
      "icon": "Pavise_FE16.webp",
      "description": "Chance to reduce sword/lance/axe/brawling damage by half. Trigger % = Dex stat."
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Wyvern Rider",
    "proficiency": "Lance (+2) Axe (+3) Flying (+3)",
    "cert_requirement": "Axe level at B or higher Flying level at C or higher",
    "abilities": "Canto | Axefaire",
    "mastery": "Seal Defense",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Wyvern_Rider_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Axefaire",
        "icon": "Axefaire_FE16.webp",
        "description": "Grants Atk +5 when using an axe."
      }
    ],
    "mastery_parsed": {
      "name": "Seal Defense",
      "icon": "Seal_Defense_FE16.webp",
      "description": ""
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Sniper",
    "proficiency": "Bow (+3)",
    "cert_requirement": "Bow level at A or higher",
    "abilities": "Bowrange +1 | Bowfaire",
    "mastery": "Hunter's Volley",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Sniper_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Bowrange +1",
        "icon": "Bowrange%2B1_FE16.webp",
        "description": "Increases bow range by 1."
      },
      {
        "name": "Bowfaire",
        "icon": "Bowfaire_FE16.webp",
        "description": "Grants Atk +5 when using a bow."
      }
    ],
    "mastery_parsed": {
      "name": "Hunter's Volley",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Grappler",
    "proficiency": "Brawl (+3)",
    "cert_requirement": "Brawl level at A or higher",
    "abilities": "Fistfaire | Unarmed Combat",
    "mastery": "Tomebreaker Fierce Iron Fist",
    "notes": "Male only",
    "gender_lock": "Male",
    "unique_characters": [],
    "icons": [
      "FE16_Grappler_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Fistfaire",
        "icon": "Fistfaire_FE16.webp",
        "description": "Grants Atk +5 when brawling."
      },
      {
        "name": "Unarmed Combat",
        "icon": "Unarmed_Combat_FE16.webp",
        "description": "Allows unit to fight without a weapon."
      }
    ],
    "mastery_parsed": {
      "name": "Tomebreaker Fierce Iron Fist",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Warlock",
    "proficiency": "Reason (+3) Faith (+2)",
    "cert_requirement": "Reason level at A or higher",
    "abilities": "Black Tomefaire | Black Magic Uses x2",
    "mastery": "Bowbreaker",
    "notes": "Can use magic",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Warlock_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Black Tomefaire",
        "icon": "Black_Tomefaire_FE16.webp",
        "description": "Grants Atk +5 when using black magic."
      },
      {
        "name": "Black Magic Uses x2",
        "icon": "Black_Magic_Uses_x2_FE16.webp",
        "description": "Doubles the number of uses for black magic."
      }
    ],
    "mastery_parsed": {
      "name": "Bowbreaker",
      "icon": null,
      "description": "Grants Hit/Avo +20 when using magic against bow users."
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Dark Bishop",
    "proficiency": "Reason (+3) Faith (+2)",
    "cert_requirement": "Reason level at A or higher Dark Mage qualification Dark Seal",
    "abilities": "Miasma Δ | Heartseeker | Fiendish Blow",
    "mastery": "Lifetaker",
    "notes": "Can use magic Male only",
    "gender_lock": "Male",
    "unique_characters": [],
    "icons": [
      "FE16_Dark_Bishop_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Miasma Δ",
        "icon": "Miasma_%3F_FE16.webp",
        "description": "Allows unit to cast Miasma Δ. If Miasma Δ is already available, then unit can cast it twice as often."
      },
      {
        "name": "Heartseeker",
        "icon": "Heartseeker_FE16.webp",
        "description": ""
      },
      {
        "name": "Fiendish Blow",
        "icon": "Fiendish_Blow_FE16.webp",
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Lifetaker",
      "icon": "Lifetaker_FE16.webp",
      "description": "Unit recovers HP equal to 50% of damage dealt after defeating a foe."
    }
  },
  {
    "section": "Advanced Classes",
    "class_name": "Bishop",
    "proficiency": "Reason (+2) Faith (+3)",
    "cert_requirement": "Faith level at A or higher",
    "abilities": "White Magic Uses x2 | White Magic Heal +10 | Terrain Resistance",
    "mastery": "Renewal",
    "notes": "Can use magic",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Bishop_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "White Magic Uses x2",
        "icon": "White_Magic_Uses_x2_FE16.webp",
        "description": "Doubles the number of uses for white magic."
      },
      {
        "name": "White Magic Heal +10",
        "icon": "White_Magic_Heal%2B10_FE16.webp",
        "description": "Heal 10 extra HP when using white magic."
      },
      {
        "name": "Terrain Resistance",
        "icon": "Terrain_Resistance_FE16.webp",
        "description": "Nullifies damage from terrain."
      }
    ],
    "mastery_parsed": {
      "name": "Renewal",
      "icon": "Renewal_FE16.webp",
      "description": "Unit recovers up to 20% of max HP at the start of each turn."
    }
  },
  {
    "section": "Special Classes",
    "class_name": "Trickster",
    "proficiency": "Sword (+3) Reason (+1) Faith (+2)",
    "cert_requirement": "Sword level at B or higher Faith level at B or higher Thief qualification",
    "abilities": "Locktouch | Stealth | Lucky Seven",
    "mastery": "Duelist's Blow Foul Play",
    "notes": "Can use magic at half uses",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Trickster_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Locktouch",
        "icon": "Locktouch_FE16.webp",
        "description": "Allows unit to open doors and chests without keys."
      },
      {
        "name": "Stealth",
        "icon": "Stealth_FE16.webp",
        "description": "Makes it more difficult for foes to target unit."
      },
      {
        "name": "Lucky Seven",
        "icon": null,
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Duelist's Blow Foul Play",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Special Classes",
    "class_name": "War Monk",
    "proficiency": "Axe (+1) Brawl (+3) Faith (+1)",
    "cert_requirement": "Brawl level at B+ or higher Faith level at C+ or higher",
    "abilities": "Fistfaire | Unarmed Combat | Heal",
    "mastery": "Brawl Avoid +20 Pneuma Gale",
    "notes": "Can use magic at half uses Male only",
    "gender_lock": "Male",
    "unique_characters": [],
    "icons": [
      "FE16_War_Monk_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Fistfaire",
        "icon": "Fistfaire_FE16.webp",
        "description": "Grants Atk +5 when brawling."
      },
      {
        "name": "Unarmed Combat",
        "icon": "Unarmed_Combat_FE16.webp",
        "description": "Allows unit to fight without a weapon."
      },
      {
        "name": "Heal",
        "icon": "Heal_FE16.webp",
        "description": "Allows unit to cast Heal. If Heal is already available, then unit can cast it twice as often."
      }
    ],
    "mastery_parsed": {
      "name": "Brawl Avoid +20 Pneuma Gale",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Special Classes",
    "class_name": "War Cleric",
    "proficiency": "Axe (+1) Brawl (+3) Faith (+1)",
    "cert_requirement": "Brawl level at B+ or higher Faith level at C+ or higher",
    "abilities": "Fistfaire | Unarmed Combat | Heal",
    "mastery": "Brawl Avoid +20 Pneuma Gale",
    "notes": "Can use magic at half uses Female only",
    "gender_lock": "Female",
    "unique_characters": [],
    "icons": [
      "FE16_War_Cleric_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Fistfaire",
        "icon": "Fistfaire_FE16.webp",
        "description": "Grants Atk +5 when brawling."
      },
      {
        "name": "Unarmed Combat",
        "icon": "Unarmed_Combat_FE16.webp",
        "description": "Allows unit to fight without a weapon."
      },
      {
        "name": "Heal",
        "icon": "Heal_FE16.webp",
        "description": "Allows unit to cast Heal. If Heal is already available, then unit can cast it twice as often."
      }
    ],
    "mastery_parsed": {
      "name": "Brawl Avoid +20 Pneuma Gale",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Special Classes",
    "class_name": "Dark Flier",
    "proficiency": "Sword (+2) Reason (+3) Flying (+3)",
    "cert_requirement": "Reason level at B+ or higher Flying level at C or higher",
    "abilities": "Canto | Black Tomefaire | Transmute",
    "mastery": "Transmute",
    "notes": "Can use magic Female only",
    "gender_lock": "Female",
    "unique_characters": [],
    "icons": [
      "FE16_Dark_Flier_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Black Tomefaire",
        "icon": "Black_Tomefaire_FE16.webp",
        "description": "Grants Atk +5 when using black magic."
      },
      {
        "name": "Transmute",
        "icon": "Transmute_FE16.webp",
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Transmute",
      "icon": "Transmute_FE16.webp",
      "description": ""
    }
  },
  {
    "section": "Special Classes",
    "class_name": "Valkyrie",
    "proficiency": "Reason (+3) Faith (+1) Riding (+3)",
    "cert_requirement": "Reason level at B or higher Riding level at B or higher",
    "abilities": "Canto | Black Magic Range +1 | Dark Magic Range +1",
    "mastery": "Uncanny Blow",
    "notes": "Can use magic Female only",
    "gender_lock": "Female",
    "unique_characters": [],
    "icons": [
      "FE16_Valkyrie_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Black Magic Range +1",
        "icon": "Black_Magic_Range_%2B1_FE16.webp",
        "description": "Increases black magic range by 1."
      },
      {
        "name": "Dark Magic Range +1",
        "icon": "Dark_Magic_Range_%2B1_FE16.webp",
        "description": "Increases dark magic range by 1."
      }
    ],
    "mastery_parsed": {
      "name": "Uncanny Blow",
      "icon": "Uncanny_Blow_FE16.webp",
      "description": ""
    }
  },
  {
    "section": "Master Classes",
    "class_name": "Falcon Knight",
    "proficiency": "Sword (+3) Lance (+3) Flying (+3)",
    "cert_requirement": "Sword Level at C or higher Lance level at A or higher Flying level at B+ or higher",
    "abilities": "Canto | Lancefaire | Avoid +10",
    "mastery": "Defiant Avo",
    "notes": "Female only",
    "gender_lock": "Female",
    "unique_characters": [],
    "icons": [
      "FE16_Falcon_Knight_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Lancefaire",
        "icon": "Lancefaire_FE16.webp",
        "description": "Grants Atk +5 when using a lance."
      },
      {
        "name": "Avoid +10",
        "icon": null,
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Defiant Avo",
      "icon": "Defiant_Avo_FE16.webp",
      "description": "Grants Avo +30 when HP is ≤ 25%."
    }
  },
  {
    "section": "Master Classes",
    "class_name": "Wyvern Lord",
    "proficiency": "Lance (+3) Axe (+3) Flying (+3)",
    "cert_requirement": "Lance level at C or higher Axe Level at A or higher Flying level at A or higher",
    "abilities": "Canto | Axefaire | Avoid +10",
    "mastery": "Defiant Crit",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Wyvern_Lord_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Axefaire",
        "icon": "Axefaire_FE16.webp",
        "description": "Grants Atk +5 when using an axe."
      },
      {
        "name": "Avoid +10",
        "icon": null,
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Defiant Crit",
      "icon": "Defiant_Crit_FE16.webp",
      "description": "Grants Crit +50 when HP is ≤ 25%."
    }
  },
  {
    "section": "Master Classes",
    "class_name": "Mortal Savant",
    "proficiency": "Sword (+3) Reason (+3)",
    "cert_requirement": "Sword Level at A or higher Reason level at B+ or higher",
    "abilities": "Swordfaire | Black Tomefaire",
    "mastery": "Warding Blow",
    "notes": "Can use magic",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Mortal_Savant_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Swordfaire",
        "icon": "Swordfaire_FE16.webp",
        "description": "Grants Atk +5 when using a sword."
      },
      {
        "name": "Black Tomefaire",
        "icon": "Black_Tomefaire_FE16.webp",
        "description": "Grants Atk +5 when using black magic."
      }
    ],
    "mastery_parsed": {
      "name": "Warding Blow",
      "icon": "Warding_Blow_FE16.webp",
      "description": ""
    }
  },
  {
    "section": "Master Classes",
    "class_name": "Great Knight",
    "proficiency": "Lance (+3) Axe (+3) Heavy Armor (+3)",
    "cert_requirement": "Axe level at B+ or higher Heavy Armor level at A or higher Riding level at B+ or higher",
    "abilities": "Canto | Lancefaire | Axefaire",
    "mastery": "Defiant Def",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Great_Knight_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Lancefaire",
        "icon": "Lancefaire_FE16.webp",
        "description": "Grants Atk +5 when using a lance."
      },
      {
        "name": "Axefaire",
        "icon": "Axefaire_FE16.webp",
        "description": "Grants Atk +5 when using an axe."
      }
    ],
    "mastery_parsed": {
      "name": "Defiant Def",
      "icon": "Defiant_Def_FE16.webp",
      "description": "Grants Def +8 when HP is ≤ 25%."
    }
  },
  {
    "section": "Master Classes",
    "class_name": "Bow Knight",
    "proficiency": "Lance (+3) Bow (+3) Riding (+3)",
    "cert_requirement": "Lance level at C or higher Bow level at A or higher Riding level at A or higher",
    "abilities": "Canto | Bowfaire | Bowrange +2",
    "mastery": "Defiant Spd",
    "notes": "",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Bow_Knight_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Bowfaire",
        "icon": "Bowfaire_FE16.webp",
        "description": "Grants Atk +5 when using a bow."
      },
      {
        "name": "Bowrange +2",
        "icon": "Bowrange%2B2_FE16.webp",
        "description": "Increases bow range by 2."
      }
    ],
    "mastery_parsed": {
      "name": "Defiant Spd",
      "icon": "Defiant_Spd_FE16.webp",
      "description": "Grants Spd +8 when HP is ≤ 25%."
    }
  },
  {
    "section": "Master Classes",
    "class_name": "Dark Knight",
    "proficiency": "Lance (+3) Reason (+3) Riding (+3)",
    "cert_requirement": "Lance level at C or higher Reason level B+ or higher Riding level at A or higher",
    "abilities": "Canto | Black Tomefaire | Dark Tomefaire",
    "mastery": "Seal Resistance",
    "notes": "Can use magic",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Dark_Knight_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "Black Tomefaire",
        "icon": "Black_Tomefaire_FE16.webp",
        "description": "Grants Atk +5 when using black magic."
      },
      {
        "name": "Dark Tomefaire",
        "icon": "Dark_Tomefaire_FE16.webp",
        "description": "Grants Atk +5 when using dark magic."
      }
    ],
    "mastery_parsed": {
      "name": "Seal Resistance",
      "icon": "Seal_Resistance_FE16.webp",
      "description": ""
    }
  },
  {
    "section": "Master Classes",
    "class_name": "Holy Knight",
    "proficiency": "Lance (+3) Faith (+3) Riding (+3)",
    "cert_requirement": "Lance level at C or higher Faith level B+ or higher Riding level at A or higher",
    "abilities": "Canto | White Tomefaire | Terrain Resistance",
    "mastery": "Defiant Res",
    "notes": "Can use magic",
    "gender_lock": "",
    "unique_characters": [],
    "icons": [
      "FE16_Holy_Knight_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Canto",
        "icon": "Canto_FE16.webp",
        "description": "Allows unit to move again after completing certain actions, if there is movement remaining."
      },
      {
        "name": "White Tomefaire",
        "icon": "White_Tomefaire_FE16.webp",
        "description": "Grants Atk +5 when using white magic."
      },
      {
        "name": "Terrain Resistance",
        "icon": "Terrain_Resistance_FE16.webp",
        "description": "Nullifies damage from terrain."
      }
    ],
    "mastery_parsed": {
      "name": "Defiant Res",
      "icon": "Defiant_Res_FE16.webp",
      "description": "Grants Res +8 when HP is ≤ 25%."
    }
  },
  {
    "section": "Master Classes",
    "class_name": "War Master",
    "proficiency": "Axe (+3) Brawl (+3)",
    "cert_requirement": "Axe level at A or higher Brawl level at A or higher",
    "abilities": "Axefaire | Fistfaire | Critical +20",
    "mastery": "Quick Riposte War Master's Strike",
    "notes": "Male only",
    "gender_lock": "Male",
    "unique_characters": [],
    "icons": [
      "FE16_War_Master_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Axefaire",
        "icon": "Axefaire_FE16.webp",
        "description": "Grants Atk +5 when using an axe."
      },
      {
        "name": "Fistfaire",
        "icon": "Fistfaire_FE16.webp",
        "description": "Grants Atk +5 when brawling."
      },
      {
        "name": "Critical +20",
        "icon": null,
        "description": ""
      }
    ],
    "mastery_parsed": {
      "name": "Quick Riposte War Master's Strike",
      "icon": null,
      "description": ""
    }
  },
  {
    "section": "Master Classes",
    "class_name": "Gremory",
    "proficiency": "Reason (+3) Faith (+3)",
    "cert_requirement": "Reason level at A or higher Faith at level A or higher",
    "abilities": "Black Magic Uses x2 | Dark Magic Uses x2 | White Magic Uses x2",
    "mastery": "Defiant Mag",
    "notes": "Female only Can use magic",
    "gender_lock": "Female",
    "unique_characters": [],
    "icons": [
      "FE16_Gremory_Icon.webp"
    ],
    "abilities_parsed": [
      {
        "name": "Black Magic Uses x2",
        "icon": "Black_Magic_Uses_x2_FE16.webp",
        "description": "Doubles the number of uses for black magic."
      },
      {
        "name": "Dark Magic Uses x2",
        "icon": "Dark_Magic_Uses_x2_FE16.webp",
        "description": "Doubles the number of uses for dark magic."
      },
      {
        "name": "White Magic Uses x2",
        "icon": "White_Magic_Uses_x2_FE16.webp",
        "description": "Doubles the number of uses for white magic."
      }
    ],
    "mastery_parsed": {
      "name": "Defiant Mag",
      "icon": "Defiant_Mag_FE16.webp",
      "description": "Grants Mag +8 when HP is ≤ 25%."
    }
  }
];