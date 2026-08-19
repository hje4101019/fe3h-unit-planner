/* ---------------------------------------------------------------------
   Constants and lookup tables
   --------------------------------------------------------------------- */

// Colour used for a character's marker, sorted by their house.
// The var(--xxx) values are CSS custom properties defined in style.css.
// "None" is used for Byleth, Anna, and Jeritza.
const HOUSE_COLORS = {
  "None": "#1A1A1A",
  "Church of Seiros": "var(--church)",
  "Black Eagles": "var(--eagles)",
  "Blue Lions": "var(--lions)",
  "Golden Deer": "var(--deer)",
  "Ashen Wolves": "var(--wolves)"
};

// Colour used for the sidebar tab buttons
// Byleth and the Three Lords are above the rest, 
// as the entrie sare in order of apperance in-game.
const TAB_COLORS = {
  "Byleth": "var(--byleth)",
  "Edelgard": "var(--eagles)",
  "Dimitri": "var(--lions)",
  "Claude": "var(--deer)",
  "Black Eagles": "var(--eagles)",
  "Blue Lions": "var(--lions)",
  "Golden Deer": "var(--deer)",
  "Church of Seiros": "var(--church)",
  "Ashen Wolves": "var(--wolves)"
};

// The order the sidebar tabs (and therefore the character list) appear in.
// Every character's `.group` field (set in the data) matches one of these.
const GROUP_ORDER = [
  "Byleth", "Edelgard", "Dimitri", "Claude",
  "Black Eagles", "Blue Lions", "Golden Deer",
  "Church of Seiros", "Ashen Wolves"
];

// A character's proficiencies object uses these short codes as values.
const PROF_LABEL = {
  "Strong": "Strong",
  "Weak": "Weak",
  "BuddingTalent": "Budding Talent"
};

// The order skill categories are shown in-game, as well as the Skill Reference tab,
// and the "Skills They Can Learn" section on each character's page.
const SKILL_ORDER = [
  "Sword", "Lance", "Axe", "Bow", "Brawling",
  "Reason", "Faith", "Authority", "Heavy Armour", "Riding", "Flying"
];

// A quick lookup to go from a class's NAME (e.g."Myrmidon")
// to its full data object, without looping through
// DATA_CLASSES every time it's needed.
const CLASS_BY_NAME = {};
DATA_CLASSES.forEach(function (classObj) {
  CLASS_BY_NAME[classObj.class_name] = classObj;
});


/* ---------------------------------------------------------------------
   Helper functions
   --------------------------------------------------------------------- */

// * Build the path to an icon image, e.g. iconPath('abilities', 'Vantage_FE16.webp')
// * returns "assets/abilities/Vantage_FE16.webp". All the image folders
// * (abilities, classes, icons) live inside one shared "assets" folder,
// * so every path gets that prefix added here in one place.
 
function iconPath(folder, filename) {
  if (!filename) return "";
  return "assets/" + folder + "/" + encodeURIComponent(filename);
}

/**
 * Turn a character's name into up-to-two-letter initials for their
 * badge, e.g. "Edelgard" -> "E", "Byleth (M)" -> "B".
 * The parenthetical part (like "(M)") is stripped first.
 */
function initials(name) {
  const withoutParens = name.replace(/\(.*?\)/g, '').trim();
  const words = withoutParens.split(/\s+/);
  const firstLetters = words.map(function (w) { return w[0]; });
  return firstLetters.slice(0, 2).join('').toUpperCase();
}
// I don't like this, I'll make it the commoner/noble sprite for each unit instead later

/* ---------------------------------------------------------------------
   App state (two variables that track what the unit is currently selected.)
   --------------------------------------------------------------------- */

let currentHouse = "All";   // which sidebar tab is selected
let currentChar = null;     // which character is selected (or null)


/* ---------------------------------------------------------------------
   Sidebar (house tabs + character list)
   --------------------------------------------------------------------- */


// Draws the row of tab buttons at the top of the sidebar
function renderHouseTabs() {
  const wrap = document.getElementById('house-tabs');
  const groups = ["All"].concat(GROUP_ORDER);

  wrap.innerHTML = groups.map(function (groupName) {
    const isActive = groupName === currentHouse;
    const color = groupName === "All" ? "var(--ink)" : TAB_COLORS[groupName];
    const background = isActive ? color : 'rgba(0,0,0,0.04)';
    const textColor = isActive ? 'color:#fff;' : '';
    return '<div class="house-tab' + (isActive ? ' active' : '') + '" data-house="' + groupName + '"' +
           ' style="background:' + background + '; ' + textColor + '">' + groupName + '</div>';
  }).join('');

  // Click listener
  wrap.querySelectorAll('.house-tab').forEach(function (tabEl) {
    tabEl.addEventListener('click', function () {
      currentHouse = tabEl.dataset.house;
      renderHouseTabs();  // redraw so the newly-clicked tab shows as active
      renderCharList();   // redraw the character list, filtered to this tab
    });
  });
}


// Draws the scrollable list of character names in the sidebar,
// as well as filtering by the currently-selected tab and/or the search box text.

function renderCharList() {
  const searchText = document.getElementById('search').value.trim().toLowerCase();
  const listEl = document.getElementById('char-list');

  let chars = DATA_CHARACTERS;
  if (currentHouse !== "All") {
    chars = chars.filter(function (c) { return c.group === currentHouse; });
  }
  if (searchText) {
    chars = chars.filter(function (c) {
      return c.name.toLowerCase().includes(searchText);
    });
  }

  if (chars.length === 0) {
    listEl.innerHTML = '<div style="padding:16px; font-size:13px; color:var(--ink-soft);">No characters found.</div>';
    return;
  }

  listEl.innerHTML = chars.map(function (c) {
    const isActive = currentChar && currentChar.name === c.name;
    const houseLabel = c.house === "None" ? "" : c.house;
    return '<div class="char-list-item' + (isActive ? ' active' : '') + '" data-name="' + c.name + '">' +
             '<div class="dot" style="background:' + HOUSE_COLORS[c.house] + '"></div>' +
             '<div class="cname">' + c.name + '</div>' +
             '<div class="chouse">' + houseLabel + '</div>' +
           '</div>';
  }).join('');

  // Re-attach click listeners (same reasoning as renderHouseTabs above).
  listEl.querySelectorAll('.char-list-item').forEach(function (itemEl) {
    itemEl.addEventListener('click', function () {
      currentChar = DATA_CHARACTERS.find(function (c) { return c.name === itemEl.dataset.name; });
      renderCharList();    // redraw so the newly-clicked character is highlighted
      renderCharDetail();  // draw that character's full detail page
    });
  });
}


/* ---------------------------------------------------------------------
   Character detail page
   --------------------------------------------------------------------- */


 // Renders the "Personal Ability" card. Byleth and the Lords have two.

function renderPersonalAbility(c) {
  const personalAbility = c.personal_ability;
  if (!personalAbility) return "";

  const hasTwoPhases = Boolean(personalAbility.pre_timeskip || personalAbility.post_timeskip);

  // Builds one ability card, with an optional small label above it
  // (used for the "Pre-Timeskip" / "Post-Timeskip" headings).
  function renderCard(ability, label) {
    if (!ability) return "";
    const labelHtml = label
      ? '<div style="font-size:11px; font-weight:700; color:var(--ink-soft); ' +
        'margin:' + (label === 'Pre-Timeskip' ? '0' : '10px') + ' 0 4px; ' +
        'text-transform:uppercase; letter-spacing:0.06em;">' + label + '</div>'
      : '';
    const iconHtml = ability.icon
      ? '<img class="icon" src="' + iconPath('abilities', ability.icon) + '" alt="">'
      : '';
    return labelHtml +
      '<div class="ability-card">' +
        iconHtml +
        '<div><div class="name">' + ability.skill_name + '</div>' +
        '<div class="effect">' + ability.effect + '</div></div>' +
      '</div>';
  }

  const body = hasTwoPhases
    ? renderCard(personalAbility.pre_timeskip, 'Pre-Timeskip') +
      renderCard(personalAbility.post_timeskip, 'Post-Timeskip')
    : renderCard(personalAbility, null);

  if (!body) return "";
  return '<section class="block"><h3>Personal Ability</h3>' + body + '</section>';
}


// Renders the "Skills They Can Learn" section which is the same for most 
// characters, save for Edelgard, Hubert, Lysithea, and Hapi

function renderSkillProgression(c) {
  let html = '<section class="block"><h3>Skills They Can Learn</h3>';

  SKILL_ORDER.forEach(function (weaponType) {
    let abilityList = DATA_ABILITIES[weaponType] || [];
    if (abilityList.length === 0) return;

    // Drop whichever Black/Dark Magic branch this character doesn't use.
    // Abilities with no magic_branch tag (i.e. everything except those
    // four Reason entries) always pass through untouched.
    abilityList = abilityList.filter(function (ability) {
      return !ability.magic_branch || ability.magic_branch === c.magic_alignment;
    });

    const weaponIcon = DATA_ICON_REFERENCE.weapon_type_icons[weaponType];
    const weaponIconHtml = weaponIcon
      ? '<img class="wicon" src="' + iconPath('icons', weaponIcon) + '" alt="">'
      : '';

    html += '<details class="progression-group">' +
              '<summary>' + weaponIconHtml + weaponType +
                '<span class="count">' + abilityList.length + ' skills</span>' +
              '</summary>' +
              '<div class="skill-list">';

    abilityList.forEach(function (ability) {
      // Combat arts have a generic per-weapon icon from the "icons" folder 
      // instead of the unique ability icons found in the "abilities" folder.
      const folder = ability.is_fallback_icon ? 'icons' : 'abilities';
      const iconHtml = ability.icon
        ? '<img class="icon-sm" src="' + iconPath(folder, ability.icon) + '" alt="">'
        : '';
      const descriptionHtml = ability.description
        ? '<div class="effect">' + ability.description + '</div>'
        : '';

      html += '<div class="skill-row' + (ability.is_fallback_icon ? ' fallback' : '') + '">' +
                '<span class="threshold">' + ability.threshold + '</span>' +
                iconHtml +
                '<div><div>' + ability.skill_name + '</div>' + descriptionHtml + '</div>' +
              '</div>';
    });

    html += '</div></details>';
  });

  html += '</section>';
  return html;
}


// Builds one class "tile" which shows the class icon/name, its requirements, 
// and every personal ability + mastery skill with its own icon and description.

function classTile(cls) {
  const classIcon = (cls.icons && cls.icons.length) ? cls.icons[0] : null;

  // "Lock" tags explain why a class might not be available to everyone,
  // this exists for genderlocked or storylocked classes.

  const locks = [];
  if (cls.gender_lock) locks.push(cls.gender_lock + "-only");
  if (cls.unique_characters && cls.unique_characters.length) {
    locks.push(cls.unique_characters.join(' / '));
  }

  // Renders one ability or mastery-skill row (icon + name + description).
  function abilityRow(ability, isMastery) {
    if (!ability || !ability.name) return '';
    // If there's no icon for an ability, this falls back to the generic
    // star combat-art icon rather than showing a broken image.
    const folder = ability.icon ? 'abilities' : 'icons';
    const fallbackIcon = DATA_ICON_REFERENCE.combat_art_generic_icon;
    const iconSrc = iconPath(folder, ability.icon || fallbackIcon);
    const dimmedStyle = ability.icon ? '' : 'opacity:0.5;';
    const nameColor = isMastery ? 'color:var(--budding);' : '';
    const descriptionHtml = ability.description
      ? '<div style="font-size:11.5px; color:var(--ink-soft); line-height:1.4;">' + ability.description + '</div>'
      : '';

    return '<div style="display:flex; gap:8px; align-items:flex-start; margin-top:6px;">' +
             '<img src="' + iconSrc + '" alt="" style="width:22px; height:22px; border-radius:4px; ' +
               'flex-shrink:0; margin-top:1px; ' + dimmedStyle + '">' +
             '<div>' +
               '<div style="font-weight:600; font-size:12.5px; ' + nameColor + '">' + ability.name + '</div>' +
               descriptionHtml +
             '</div>' +
           '</div>';
  }

  const abilitiesBlock = (cls.abilities_parsed && cls.abilities_parsed.length)
    ? '<div style="margin-top:8px;">' +
        '<div style="font-size:10.5px; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-soft); font-weight:700;">Abilities</div>' +
        cls.abilities_parsed.map(function (a) { return abilityRow(a, false); }).join('') +
      '</div>'
    : '';

  const masteryBlock = cls.mastery_parsed
    ? '<div style="margin-top:8px;">' +
        '<div style="font-size:10.5px; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-soft); font-weight:700;">Mastery</div>' +
        abilityRow(cls.mastery_parsed, true) +
      '</div>'
    : '';

  return '<div class="class-card">' +
           '<div class="ctop">' +
             (classIcon ? '<img class="cicon" src="' + iconPath('classes', classIcon) + '" alt="">' : '') +
             '<div class="cname">' + cls.class_name + '</div>' +
           '</div>' +
           (cls.proficiency ? '<div class="cfield"><b>Proficiency:</b> ' + cls.proficiency + '</div>' : '') +
           (cls.cert_requirement ? '<div class="cfield"><b>Requirement:</b> ' + cls.cert_requirement + '</div>' : '') +
           (locks.length ? '<div class="lock-tags">' + locks.map(function (l) { return '<span class="lock-tag">' + l + '</span>'; }).join('') + '</div>' : '') +
           abilitiesBlock +
           masteryBlock +
         '</div>';
}


// Renders every class that character can reach (based on genderlocks,
// and storylocks) grouped by tier, using the classTile() builder.

function renderReachableClasses(c) {
  if (!c.reachable_classes || !c.reachable_classes.length) return "";

  // Groups the character's reachable class NAMES by tier/section,
  const bySection = {};
  c.reachable_classes.forEach(function (className) {
    const cls = CLASS_BY_NAME[className];
    if (!cls) return;
    if (!bySection[cls.section]) bySection[cls.section] = [];
    bySection[cls.section].push(cls);
  });

  let html = '<section class="block"><h3>Classes &amp; Class Mastery</h3>';
  Object.keys(bySection).forEach(function (sectionName) {
    html += '<h4>' + sectionName + '</h4><div class="class-grid">';
    bySection[sectionName].forEach(function (cls) { html += classTile(cls); });
    html += '</div>';
  });
  html += '</section>';
  return html;
}


// The right-hand detail panel builds the whole page for whichever character is currently selected
function renderCharDetail() {
  const detailEl = document.getElementById('char-detail');

  if (!currentChar) {
    detailEl.innerHTML =
      '<div class="empty-state">' +
        '<h2>Select a character</h2>' +
        '<div>Choose someone from the list to see their skills, classes, and growth.</div>' +
      '</div>';
    return;
  }

  const c = currentChar;
  const badgeColor = HOUSE_COLORS[c.house];

  // Header: badge, name, house/class line
  let html = '<div class="char-header">' +
               '<div class="badge" style="background:' + badgeColor + '">' + initials(c.name) + '</div>' +
               '<div>' +
                 '<h2>' + c.name + '</h2>' +
                 '<div class="meta">' +
                   (c.house === "None" ? "No house affiliation" : c.house) +
                   (c.starting_class ? ' · ' + c.starting_class : '') +
                 '</div>' +
               '</div>' +
             '</div>';

  html += renderPersonalAbility(c);

  // Recruitment info skip for unrecruitable units
  if (c.recruitment_requirement !== undefined && c.recruitment_requirement !== null && c.house !== "None") {
    html += '<section class="block"><h3>Recruitment</h3>' +
              '<div class="recruit-box">' +
                (c.from_chapter ? '<div class="row"><span class="label">From Chapter</span><span>' + c.from_chapter + '</span></div>' : '') +
                '<div class="row"><span class="label">Requirement</span><span>' +
                  (c.recruitment_requirement || 'Joins automatically with house selection') +
                '</span></div>' +
              '</div>' +
            '</section>';
  }

  // Skill Levels & Proficiencies grid
  const skillLevelKeys = Object.keys(c.initial_skill_levels || {});
  const proficiencyKeys = Object.keys(c.proficiencies || {});
  if (skillLevelKeys.length || proficiencyKeys.length) {
    // Combine both key lists without duplicates to show every
    // skill type a character has either a starting level OR a proficiency flag for.
    const allSkillTypes = Array.from(new Set(skillLevelKeys.concat(proficiencyKeys)));

    html += '<section class="block"><h3>Skill Levels &amp; Proficiencies</h3><div class="prof-grid">';
    allSkillTypes.forEach(function (skillType) {
      const weaponIcon = DATA_ICON_REFERENCE.weapon_type_icons[skillType];
      const level = c.initial_skill_levels[skillType] || '—';
      const proficiency = c.proficiencies[skillType];
      const proficiencyIcon = proficiency ? DATA_ICON_REFERENCE.proficiency_icons[proficiency] : null;

      html += '<div class="prof-cell" title="' + (proficiency ? PROF_LABEL[proficiency] : '') + '">' +
                (weaponIcon ? '<img class="wicon" src="' + iconPath('icons', weaponIcon) + '" alt="">' : '') +
                '<span class="skname">' + skillType + '</span>' +
                '<span class="level">' + level + '</span>' +
                (proficiencyIcon ? '<img class="pflag" src="' + iconPath('icons', proficiencyIcon) + '" alt="' + proficiency + '">' : '') +
              '</div>';
    });
    html += '</div></section>';
  }

  // Budding talent
  if (c.budding_talent) {
    const bt = c.budding_talent;
    const folder = bt.is_fallback_icon ? 'icons' : 'abilities';
    html += '<section class="block"><h3>Budding Talent — ' + bt.skill_level + '</h3>' +
              '<div class="ability-card">' +
                (bt.icon ? '<img class="icon" src="' + iconPath(folder, bt.icon) + '" alt="">' : '') +
                '<div><div class="name">' + bt.unlock + '</div><div class="effect">' + bt.description + '</div></div>' +
              '</div>' +
            '</section>';
  }

  // Authority-linked Abilities
  if (c.authority_abilities && c.authority_abilities.length) {
    html += '<section class="block"><h3>Authority-linked Abilities</h3><div class="skill-list">';
    c.authority_abilities.forEach(function (ability) {
      html += '<div class="skill-row">' +
                '<span class="threshold">' + ability.threshold + '</span>' +
                (ability.icon ? '<img class="icon-sm" src="' + iconPath('abilities', ability.icon) + '" alt="">' : '') +
                '<div><div>' + ability.skill_name + '</div>' +
                  (ability.description ? '<div class="effect">' + ability.description + '</div>' : '') +
                '</div>' +
                '<span class="weapon-tag">' + ability.skill_type + '</span>' +
              '</div>';
    });
    html += '</div></section>';
  }

  // Combat Arts
  if (c.combat_arts && c.combat_arts.length) {
    html += '<section class="block"><h3>Combat Arts</h3><div class="skill-list">';
    c.combat_arts.forEach(function (art) {
      // Combat arts always use the generic per-weapon fallback icon
      const fallbackIcon = DATA_ICON_REFERENCE.combat_art_fallback_icons[art.weapon] ||
                            DATA_ICON_REFERENCE.combat_art_generic_icon;
      html += '<div class="skill-row fallback">' +
                '<span class="threshold">' + art.threshold + '</span>' +
                '<img class="icon-sm" src="' + iconPath('icons', fallbackIcon) + '" alt="">' +
                '<span>' + art.art_name + '</span>' +
                '<span class="weapon-tag">' + art.weapon + '</span>' +
              '</div>';
    });
    html += '</div></section>';
  }

  // Shared sections: every skill this character could ever learn and every class they could ever reach
  html += renderSkillProgression(c);
  html += renderReachableClasses(c);

  detailEl.innerHTML = html;
}


/* ---------------------------------------------------------------------
   Classes tab (the full class list, independent of any selected character)
   --------------------------------------------------------------------- */

function renderClasses() {
  const el = document.getElementById('view-classes');

  const bySection = {};
  DATA_CLASSES.forEach(function (cls) {
    if (!bySection[cls.section]) bySection[cls.section] = [];
    bySection[cls.section].push(cls);
  });

  let html = '';
  Object.keys(bySection).forEach(function (sectionName) {
    html += '<div class="class-section-title" style="font-size:17px; margin-top:26px;">' + sectionName + '</div>' +
            '<div class="class-grid">';
    bySection[sectionName].forEach(function (cls) { html += classTile(cls); });
    html += '</div>';
  });

  el.innerHTML = html;
}


/* ---------------------------------------------------------------------
   Skill Reference tab (the full unlock table for every
   weapon/skill type, independent of any selected character)
   --------------------------------------------------------------------- */

function renderReference() {
  const el = document.getElementById('view-reference');

  let html = '<div class="ref-grid">';
  SKILL_ORDER.forEach(function (weaponType) {
    const abilityList = DATA_ABILITIES[weaponType] || [];
    const weaponIcon = DATA_ICON_REFERENCE.weapon_type_icons[weaponType];
    const weaponIconHtml = weaponIcon
      ? '<img class="wicon" src="' + iconPath('icons', weaponIcon) + '" alt="">'
      : '';

    html += '<div class="ref-card"><h3>' + weaponIconHtml + weaponType + '</h3><div class="skill-list">';
    abilityList.forEach(function (ability) {
      const folder = ability.is_fallback_icon ? 'icons' : 'abilities';
      const iconHtml = ability.icon
        ? '<img class="icon-sm" src="' + iconPath(folder, ability.icon) + '" alt="">'
        : '';
      const descriptionHtml = ability.description
        ? '<div class="effect">' + ability.description + '</div>'
        : '';

      html += '<div class="skill-row' + (ability.is_fallback_icon ? ' fallback' : '') + '">' +
                '<span class="threshold">' + ability.threshold + '</span>' +
                iconHtml +
                '<div><div>' + ability.skill_name + '</div>' + descriptionHtml + '</div>' +
              '</div>';
    });
    html += '</div></div>';
  });
  html += '</div>';

  el.innerHTML = html;
}


/* ---------------------------------------------------------------------
   Top-level tab switching (Characters / Classes / Skill Reference).
   --------------------------------------------------------------------- */

document.querySelectorAll('nav.maintabs button').forEach(function (tabButton) {
  tabButton.addEventListener('click', function () {
    // Highlight the clicked tab button, un-highlight the rest.
    document.querySelectorAll('nav.maintabs button').forEach(function (b) {
      b.classList.remove('active');
    });
    tabButton.classList.add('active');

    // Show only the panel matching the clicked tab; hide the other two.
    ['characters', 'classes', 'reference'].forEach(function (tabName) {
      const panel = document.getElementById('view-' + tabName);
      panel.style.display = (tabName === tabButton.dataset.tab) ? '' : 'none';
    });
    // The "characters" panel is a CSS grid layout (sidebar + detail side by side).
    document.getElementById('view-characters').style.display =
      (tabButton.dataset.tab === 'characters') ? 'grid' : 'none';

    // Builds the Classes / Skill Reference panels the first time they're opened.
    // The "loaded" flag on the element remembers it's been initilised.
    if (tabButton.dataset.tab === 'classes' && !document.getElementById('view-classes').dataset.loaded) {
      renderClasses();
      document.getElementById('view-classes').dataset.loaded = "1";
    }
    if (tabButton.dataset.tab === 'reference' && !document.getElementById('view-reference').dataset.loaded) {
      renderReference();
      document.getElementById('view-reference').dataset.loaded = "1";
    }
  });
});


/* ---------------------------------------------------------------------
   SECTION 9: Search box
   --------------------------------------------------------------------- */

// Every time the user types in the search box, redraw the character
// list filtered to match (renderCharList() reads the box's value itself).
document.getElementById('search').addEventListener('input', renderCharList);



// Inital page load
renderHouseTabs();
renderCharList();