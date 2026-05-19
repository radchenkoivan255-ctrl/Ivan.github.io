// Дані
const agents = [
    {
        id: 1,
        name: "Ellen Joe",
        rarity: "S",
        element: "Ice",
        role: "Attack",
        faction: "Victoria Housekeeping",
        image: "image/IconRoleCrop21.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Saw Teeth Trimming<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 3 attacks, dealing <span class='element-physical'>Physical DMG</span>.<br>Press repeatedly or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during the 3rd attack to extend the skill duration.<br><br>Basic Attack: Flash Freeze Trimming<br>While Flash Freeze is active, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch up to 3 attacks at enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Each attack consumes 1 Flash Freeze Charge.<br>Press repeatedly or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during the 3rd attack to extend the skill duration.<br><br>Basic Attack: Glacial Blade Wave<br>After the 3rd hit of Basic Attack: Flash Freeze Trimming, Dash Attack: Arctic Ambush's charged scissor strike, Dodge Counter: Reef Rock, and Quick Assist, if Ellen has Flash Freeze Charges, pressing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> will launch Basic Attack: Glacial Blade Wave, dealing <span class='element-ice'>Ice DMG</span>.<br>This skill consumes 2 points of Flash Freeze Charge.<br>After use, it can be directly followed up with the 3rd hit of her Basic Attack.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Icy Blade<br>After the 3rd hit of Basic Attack: Flash Freeze Trimming, EX Special Attack: Sharknami, Dodge Counter: Reef Rock, and Assist Follow-Up, automatically launch Basic Attack: Icy Blade, dealing multiple instances of <span class='element-ice'>Ice DMG</span> to all enemies in a large area ahead. It inflicts additional instances of <span class='element-ice'>Ice DMG</span> against Medium and Large foes.<br>After the skill, Ellen gains the Quick Charge effect.Basic Attack: Icy Blade does not affect the branch or form of the original skill.<br>Character is invulnerable while using this skill.",

            "Dodge": "Dodge: Vortex<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A rapid dash dodge.<br>Character is invulnerable while using this skill.<br>When Perfect Dodge is triggered, Ellen gains the Quick Charge effect, reducing the charge time of Dash Attack: Arctic Ambush, lasting up to 5 seconds or until it triggers.<br><br>Dash: Roaming Hunt<br>Hold or double-press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Enter the Roaming state, allowing dashing movement.<br>In the Roaming state, drag the joystick to control Ellen's direction, and release to stop.<br>Ellen is invulnerable for a brief time after activation.<br><br>Dash Attack: Arctic Ambush<br>While in the Roaming state, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Delivers a spinning slash to enemies before opening her scissors for a Swift Scissors strike, dealing <span class='element-ice'>Ice DMG</span>.<br>Gain 1 point of Flash Freeze Charge when the Swift Scissors strike hits.<br><br>While in the Roaming state, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a spinning slash against the enemy," +
                " then pull apart the scissors to unleash a Charged Scissor strike, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Gain 3 points of Flash Freeze Charge when the Charged Scissor strike hits.<br>If the enemy is Frozen, it always triggers Shatter.<br>Anti - Interrupt level is increased while charging the skill, and DMG taken is reduced by 40%.<br>When taking DMG from enemies while the skill is charging, that instance of DMG is nullified, and charging instantly completes.<br>Character is invulnerable while using this skill.<br><br>Flash Freeze<br>When Ellen has Flash Freeze Charges, the Flash Freeze effect is activated.<br>Once Flash Freeze activates, Basic Attacks and Dash Attacks expend Flash Freeze Charges, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Ellen can have up to a maximum of 6 Flash Freeze Charges.<br><br>Dash Attack: Monstrous Wave<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Launches a dashing slash attack at enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dash Attack: Cold Snap<br>While Flash Freeze is active, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during dodge to activate:<br>Launches a dashing slash attack at enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Consumes 1 Flash Freeze Charge.<br><br>Dodge Counter: Reef Rock<br>Press during a Perfect Dodge to activate:<br>Rapidly move through enemies with open scissors for a cutting strike, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Shark Sentinel<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Speedily move through the enemy with open scissors for a cutting strike, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br>When the character on the field is launched, drag the joystick and press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:Enter the Roaming state, enabling dashing movement.<br>While in the Roaming state, use the joystick to change directions and release to stop.<br>Character is invulnerable briefly when triggering the skill.<br>Upon triggering a Quick Assist, Ellen gains the Quick Charge effect, shortening the charging time of Dash Attack: Arctic Ambush, lasting up to 5s or until it triggers once.<br><br>Defensive Assist: Wavefront Impact<br>When the character on field is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Shark Cruiser<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Charge and slash enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Press repeatedly or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during the attack to extend the skill duration.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Drift<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Use a quick tail sweep attack in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Tail Swipe<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a forceful tail whip attack that deals massive <span class='element-ice'>Ice DMG</span>. Gain 1 Flash Freeze Charge upon striking an enemy. Character is invulnerable while using this skill. After executing the move, you can immediately follow up with the 3rd hit of a Basic Attack.<br><br>EX Special Attack: Sharknami<br>With enough Energy and after executing EX Special Attack: Tail Swipe, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a powerful series of slashes ahead that deal massive <span class='element-ice'>Ice DMG</span>. Gain 1 Flash Freeze Charge upon striking an enemy. Character is invulnerable while using this skill. After executing the move, you can immediately follow up with the 3rd hit of a Basic Attack.",

            "Chain Attack": "Chain Attack: Avalanche<br>When a Chain Attack is triggered, select the character to activate:<br>Crash down from above and unleash an ice storm, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Endless Winter<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Crash down from above and unleash an ice storm before a powerful scissor strike, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Sharp-Toothed<br>When Ellen launches a Charged Scissor strike during Dash Attack: Arctic Ambush, or consumes Flash Freeze Charge to activate Basic Attack: Flash Freeze Trimming, the skill's CRIT DMG increases by 100%.<br>The above effect also applies to Chain Attacks, Ultimates, Basic Attack: Icy Blade, and Basic Attack: Glacial Blade Wave.<br><br>Additional Ability: Rising Storm<br>When another character in your squad is a Stun character or shares the same Attribute or Faction:<br>When Ellen deals <span class='element-ice'>Ice DMG</span>, subsequent <span class='element-ice'>Ice DMG</span> increases by 3% for 10s. This effect can stack up to 10 times, and repeated triggers reset the duration."
        },
        mindscapes: [
            { number: 1, name: "Glacial Omen ", desc: "Upon hitting an enemy with a Swift Scissors strike during Dash Attack: Arctic Ambush, the obtained Flash Freeze Charges are increased to 3. Upon hitting an enemy with a Charged Scissors strike during Dash Attack: Arctic Ambush, the obtained Flash Freeze Charges are increased to 6. For each Flash Freeze Charge consumed, Ellen's CRIT Rate is increased by 2% for 15s, stacking up to 6 times. The duration of each stack is calculated separately." },
            { number: 2, name: "Arctic Ocean Predator ", desc: "The 3rd hit of Basic Attack: Flash Freeze Trimming can be directly followed up with EX Special Attack: Sharknami. For each point of Flash Freeze Charge when using an EX Special Attack, the current attack's CRIT DMG is increased by 20%, up to a max of 60%." },
            { number: 3, name: "Overtime-Intolerant ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Endless Hoarfrost ", desc: "Whenever a squad member Freezes or Stuns an enemy, Ellen gains 6 Flash Freeze Charges and the Quick Charge effect. She also recovers 4 Energy. The Energy recovery effect can trigger once per 10s." },
            { number: 5, name: "Adequate Sleep", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "The Feast Begins ", desc: "When Ellen uses an EX Special Attack, Chain Attack, or gains Quick Charge, her PEN Ratio increases by 20% for 6s. She also gains 1 stack of The Feast Begins, up to a maximum of 3 stacks. With 3 stacks of The Feast Begins, using a Charged Scissors strike during Dash Attack: Arctic Ambush consumes all stacks, increasing the DMG of the current attack by 250%." }
        ]
    },
    {
        id: 2,
        name: "Nekomata",
        rarity: "S",
        element: "Physical",
        role: "Attack",
        faction: "Cunning Hares",
        image: "image/кошка_1021_272_14050658.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Kitty Slash<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 5 slashes, dealing <span class='element-physical'>Physical DMG</span>.<br>On the last hit, there is a 33.33% chance to repeat this hit 3 times.<br><br>Basic Attack: Crimson Blade<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during the first 3 hits of Nekomata's Basic Attack to activate:<br>Slashes enemies in front and passes through them, dealing <span class='element-physical'>Physical DMG</span>.<br>Upon activation, there is a 33.33% chance to repeat this attack 3 times.",

            "Dodge": "Dodge: Can't Touch Me-ow~<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Over Here!<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Phantom Claws<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Cat's Paw<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Desperate Defense<br>When the character on field is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Shadow Strike<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Charge and slash enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Surprise Attack<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes a downward strike, dealing <span class='element-physical'>Physical DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Super Surprise Attack!<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes a powerful falling slash that deals massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Claw Swipe<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful slash at enemies ahead in a large area, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Claw Smash<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes powerful slashes at enemies ahead in a large area, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Stealthy Paws<br>When Nekomata's Dodge Counter or Quick Assist hits an enemy, her DMG increases by 60% for 6s.<br><br>Additional Ability: Catwalk<br>When another character in your squad shares the same Attribute or Faction:<br>After any character inflicts Assault, increases the DMG of Nekomata's next EX Special Attack by 35%, stacking up to 2 times."
        },
        mindscapes: [
            { number: 1, name: "Bird Hunter  ", desc: "When Nekomata hits an enemy from behind, she ignores 16% of her target's Physical RES. If the enemy is Stunned, all Nekomata's attacks against them are considered back attacks." },
            { number: 2, name: "Cat & Mouse  ", desc: "When there's only one enemy on the field and Nekomata is in combat, her Energy Generation Rate is increased by 25%." },
            { number: 3, name: "Curious Left Tail  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Sharpen Claws  ", desc: "When Nekomata uses her EX Special Attack, her CRIT Rate increases by 7% for 15s, stacking up to 2 times, with each stack's duration being calculated separately." },
            { number: 5, name: "Lucky Right Tail", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Predator Lineage  ", desc: "When Nekomata launches a Chain Attack or uses her Ultimate, her CRIT DMG increases by 18%, stacking up to 3 times. The effect expires when she's no longer in-combat. This effect gains maximum stacks immediately on defeating an enemy." }
        ]
    },
    {
        id: 3,
        name: "Rina",
        rarity: "S",
        element: "Electric",
        role: "Support",
        faction: "Victoria Housekeeping",
        image: "image/IconRoleCrop22.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Whack the Dimwit<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Order Drusilla and Anastella to attack up to 4 times, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-electric'>Electric DMG</span>.<br>Performing other actions with Rina during Drusilla and Anastella's attacks will not interrupt Rina's Basic Attack combo count.<br><br>Basic Attack: Shoo the Fool<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> or <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Calls back Drusilla and Anastella to swing them around for a ranged attack, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti-Interrupt level is increased while using this skill.",

            "Dodge": "Dodge: Dress Adjustment<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Sudden Surprise<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Order Drusilla and Anastella to execute a piercing attack, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Bangboo Callback<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Order Drusilla and Anastella to spin forward and trigger an explosion, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Duple Meter Allemande<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Order Drusilla and Anastella to spin forward and trigger an explosion, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: Triple Meter Courante<br>When the character on field is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Dodges the enemy's attack and activates Vital View.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Quadruple Meter Gavotte<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after an Evasive Assist to activate:<br>Order Drusilla and Anastella to push forward and generate an electrical vortex, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Beat the Blockhead<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Order Anastella to execute a downward smash, dealing <span class='element-electric'>Electric DMG</span><br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Dimwit Disappearing Trick<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Order Drusilla and Anastella to execute multiple downward smashes, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.",

            "Chain Attack": "Chain Attack: Code of Conduct<br>When a Chain Attack is triggered, select the character to activate:<br>Order Drusilla and Anastella to push forward and generate a ball-shaped electrical field that deals massive <span class='element-electric'>Electric DMG</span>.<br>During this skill, Drusilla and Anastella are unable to perform Basic Attacks, Dash Attacks, Special Attacks, and EX Special Attacks, but can be recalled to Rina's side through Basic Attack: Shoo the Fool.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br><br>Ultimate: The Queen's Attendants<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Order Drusilla and Anastella to spin forward, dealing massive <span class='element-electric'>Electric DMG</span>.<br>During this skill, Drusilla and Anastella are unable to respond to Basic Attack, Dash Attack, Special Attack, or EX Special Attack commands, but can be recalled to Rina's side through Basic Attack: Shoo the Fool.<br>Upon activating this skill, the other squad members recover 10 Energy. The next character to switch in recovers an additional 20 Energy.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.",

            "Core Skill": "Core Passive: Mini Destruction Partner<br>When ordering Drusilla or Anastella to attack, other squad members' PEN Ratio increases together with Rina's, by 25% of Rina's PEN Ratio + 12%, up to 30%. The effect ends when both Drusilla and Anastella return to Rina.<br><br>Additional Ability: Banquet of Perfection<br>When another character in your squad shares the same Attribute or Faction:<br>Increases the duration of <span class='element-electric'>Shock</span> inflicted on enemies by any character by 3s. When <span class='element-electric'>Shocked</span> enemies are on the field, all squad members' <span class='element-electric'>Electric DMG</span> increases by 10%."
        },
        mindscapes: [
            { number: 1, name: "Dance Duet ", desc: "After being sent out to launch an attack, Drusilla and Anastella stay in place for an additional 5.5s before returning to Rina.The effect gained from Core Passive: Mini Destruction Partner by characters within 10m is increased to 130% of the original value." },
            { number: 2, name: "Master's Paragon ", desc: "Upon becoming the active character in combat, Rina's DMG increases by 15% for 12s. This effect can trigger once every 18s." },
            { number: 3, name: "Head Maid's Specialty  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Needle and Hammer ", desc: "Rina's Energy Regen increases by 0.5/s when both Drusilla and Anastella are deployed. The effect ends when Drusilla or Anastella returns to Rina." },
            { number: 5, name: "Head Maid Perfectionist ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Stormy Night's Fright ", desc: "When an EX Special Attack, Chain Attack or Ultimate hits an enemy, the entire squad's <span class='element-electric'>Electric DMG</span> is increased by 15% for 8s." }
        ]
    },
    {
        id: 4,
        name: "Lycaon",
        rarity: "S",
        element: "Ice",
        role: "Stun",
        faction: "Victoria Housekeeping",
        image: "image/лікан.webp",
        stats: {
            "HP": "8416",
            "ATK": "728",
            "DEF": "606",
            "Impact": "137",
            "CRIT Rate": "5%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "91",
            "Anomaly Proficiency": "90",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Moon Hunter<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 5 strikes in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Hold down <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge up, increasing the power of the attack and dealing <span class='element-ice'>Ice DMG</span>.",

            "Dodge": "Dodge: Suitable Positioning<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Keep it Clean<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slides forward, launching a series of strikes in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Etiquette Manual<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Strikes enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Wolf Pack<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strikes enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Disrupted Hunt<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Vengeful Counterattack<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Creates an icicle in front, which strikes all enemies within range, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Vengeful Counterattack - Glacial Waltz<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Quickly launch multiple strikes against enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Time to Hunt<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes a series of strikes in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Hold down <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge up, increasing its power.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Thrill of the Hunt<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes a series of powerful strikes in front, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Hold down <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge up, consuming Energy and enhancing the power of the attack.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: As You Wish<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a series of powerful strikes at enemies in a small area in front of him, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Mission Complete<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes multiple powerful strikes at enemies in a large area, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Metallic Paws<br>When Lycaon completes charging during a Basic Attack, or activates a Dodge Counter or Dash Attack, the Daze inflicted by the skill increases by 80%.<br>When EX Special Attack: Thrill of the Hunt, Assist Follow-Up: Vengeful Counterattack, or Assist Follow-Up: Vengeful Counterattack - Glacial Waltz hits an enemy, the target's Ice RES is reduced by 25%, and it increases the DMG to the target from other attributes by 30% for 30s.<br>Upon entering the battlefield, Lycaon gains one Encircle Prey activation chance.<br>When Encircle Prey has available activations, hitting an enemy with Assist Follow-Up: Vengeful Counterattack - Glacial Waltz triggers the Quick Assist of the previous character in the squad. During this skill, when other squad members enter via Quick Assist, Lycaon enters the Encircle Prey state for 8s.<br>When an elite or boss enemy becomes Stunned, 1 Encircle Prey activation chance is gained. Up to 1 Encircle Prey activation can be stored.<br>When the Encircle Prey state ends, Lycaon automatically activates Assist Follow-Up: Vengeful Counterattack - Glacial Waltz. If the Encircle Prey state ends early, for every 1s of remaining duration, the Daze dealt by the next Assist Follow-Up: Vengeful Counterattack - Glacial Waltz increases by 6%.<br>When the currently active character stops attacking or uses a Chain Attack or Ultimate, Lycaon will end the Encircle Prey state early." +
                "<br>When Lycaon manually uses Assist Follow-Up: Vengeful Counterattack - Glacial Waltz, the Encircle Prey state also ends early, but Assist Follow-Up: Vengeful Counterattack - Glacial Waltz will not be automatically triggered.<br>While the Encircle Prey state is active, Lycaon will activate Basic Attack, Dodge, Dash Attack, and Dodge Counter based on the skills used by the currently active character.<br>When the currently active character uses a Basic Attack or EX Special Attack, Lycaon will simultaneously perform the 1st through 3rd hits of his Basic Attack.<br>When the active character performs a Dodge or Dodge Counter, Lycaon will simultaneously perform a Dodge or Dodge Counter. After performing a Dodge Counter while in the Encircle Prey state, Lycaon can immediately follow up with the 3rd hit of his Basic Attack.<br>While the Encircle Prey state is active, when Lycaon is not the currently active Agent, his attacks only deal DMG and Daze. While Lycaon is the currently active character, the Encircle Prey duration does not decrease.<br><br>Additional Ability: Elegant Predator<br>When another character in your squad is an Anomaly character or shares the same Attribute or Faction:<br>When Lycaon hits a Stunned enemy, the target's Stun DMG Multiplier increases by 35%."
        },
        mindscapes: [
            { number: 1, name: "Full Moon Momentum  ", desc: "When Lycaon's EX Special Attack: Thrill of the Hunt hits an enemy, the attack's Daze increases by 12%. This effect can trigger once every 8s. When he charges his EX Special Attack: Thrill of the Hunt to completion, this buff will increase by an additional 10%." },
            { number: 2, name: "Energy Feedback ", desc: "When Stunning an enemy or triggering a squad member's Chain Attack, Lycaon gains 5 Energy. Can trigger once every 1s." },
            { number: 3, name: "Attendant Training ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Graceful Demeanor ", desc: "If Lycaon is attacked while using a Basic Attack or Special Attack, he will immediately gain a Shield equal to 7.5% of his Max HP, lasting for 15s.During the Shield's duration, his Anti-Interrupt level is increased. This effect can trigger once every 15s." },
            { number: 5, name: "Alpha Nature ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Ruthless Hunter  ", desc: "When a charged attack hits an enemy, the target suffers 10% increased DMG from Lycaon, stacking up to 5 times and lasting 12s. Only one stack can be gained per skill use, and repeated triggers reset the duration." }
        ]
    },
    {
        id: 5,
        name: "Soldier 11",
        rarity: "S",
        element: "Fire",
        role: "Attack",
        faction: "New Eridu Defense Force",
        image: "image/солд_1041_272_14050658.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Warmup Sparks<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 4 slashes, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Basic Attack: Fire Suppression<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> at the right moment to activate:<br>Launches a stronger slash, dealing <span class='element-fire'>Fire DMG</span>.<br>When Fire Suppression is guaranteed to trigger, pressing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> when the attack is about to end speeds up the transition into the next hit of Basic Attack.<br>When Fire Suppression is guaranteed to trigger, the 5th hit of the Basic Attack string unlocks. Activating a Chain Attack or Ultimate powers up her next Basic Attack 5th hit. A strengthened Basic Attack 5th hit will consume all remaining guaranteed Fire Suppression activations to deal additional <span class='element-fire'>Fire DMG</span> per activation spent.<br>After triggering a Perfect Dodge, the current Basic Attack hit count is retained for 5s. After performing a Dodge Counter, pressing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> resumes the Basic Attack from the retained hit count.<br><br>Basic Attack: Fire Assault<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate: Basic Attack: Fire Charge<br>Release <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> while Basic Attack: Fire Charge is activated to launch Basic Attack: Fire Assault.<br>If attacked by an enemy during Basic Attack: Fire Assault or the moment Basic Attack: Fire Charge is activated, a Block Counter can be triggered, negating that instance of DMG and granting 3 guaranteed triggers of Fire Suppression. Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to follow up with the 3rd hit of a Basic Attack, up to 8 times.<br>While charging, tilting the joystick launches Basic Attack: Blazing Rush.",

            "Dodge": "Dodge: Tempered Fire<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Blazing Fire<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dash Attack: Fire Suppression<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br><br>Dodge Counter: Backdraft<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Executes a powerful slash against enemies in front, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Covering Fire<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slashes enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Hold the Line<br>When the character on field is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Reignition<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Charge and cross slash enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Raging Fire<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slashes enemies nearby, dealing <span class='element-fire'>Fire DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Fervent Fire<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Executes a powerful slash against enemies nearby, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using this skill, Soldier 11's Basic Attacks and Dash Attacks are guaranteed to trigger Fire Suppression for up to 30s or 8 times.<br>After using this skill, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with the 4th hit of a Basic Attack.<br>Soldier 11 enters the Alert Stance after using this skill. While in Alert Stance, if hit during a Basic Attack, triggers Basic Attack: Fire Charge to block the attack, followed by Basic Attack: Fire Assault. After Basic Attack: Fire Assault is performed, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to resume Basic Attack from the retained Basic Attack hit count.",

            "Chain Attack": "Chain Attack: Uplifting Flame<br>When a Chain Attack is triggered, select the character to activate:<br>Slashes enemies in a small area ahead, then executes a powerful upwards slash, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using this skill, Soldier 11's Basic Attacks and Dash Attacks are guaranteed to trigger Fire Suppression for up to 30s or 8 times.<br>After using this skill, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with the 4th hit of a Basic Attack.<br>Soldier 11 enters the Alert Stance after using this skill. While in Alert Stance, if hit during a Basic Attack, triggers Basic Attack: Fire Charge to block the attack, followed by Basic Attack: Fire Assault. After Basic Attack: Fire Assault is performed, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to resume Basic Attack from the retained Basic Attack hit count.<br><br>Ultimate: Bellowing Flame<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slashes enemies nearby, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using this skill, Soldier 11's Basic Attacks and Dash Attacks are guaranteed to trigger Fire Suppression for up to 30s or 8 times.<br>After using this skill, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with the 4th hit of a Basic Attack.<br>Soldier 11 enters the Alert Stance after using this skill. While in Alert Stance, if hit during a Basic Attack, triggers Basic Attack: Fire Charge to block the attack, followed by Basic Attack: Fire Assault. After Basic Attack: Fire Assault is performed, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to resume Basic Attack from the retained Basic Attack hit count.",

            "Core Skill": "Core Passive: Heatwave<br>When triggering Fire Suppression during a Basic Attack or Dash Attack, increase that attack's DMG by 70%.<br><br>Additional Ability: Fields of Fire<br>When another character in your squad shares the same Attribute or Faction:<br>Soldier 11 deals 10% more <span class='element-fire'>Fire DMG</span>. When attacking Stunned enemies, this effect is further enhanced by an additional 22.5%."
        },
        mindscapes: [
            { number: 1, name: "Rapid Heat  ", desc: "When Soldier 11 becomes the active character in combat, if her Energy is less than 40, her Energy is recovered to 80. This effect can trigger once every 50s." },
            { number: 2, name: "Scorching Convergence  ", desc: "When triggering Fire Suppression, Basic Attack, Dash Attack, and Dodge Counter DMG increases by 3%, up to 12 stacks, lasting 15s, with the duration of each stack calculated separately." },
            { number: 3, name: "Elite Soldier ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: " Indulgent Blaze  ", desc: "If Fire Suppression is triggered during the 1st, 2nd, or 3rd hit of Soldier 11's Basic Attack or a Dash Attack, Anti-Interrupt Level increases and DMG received is reduced by 18% during skill activation.If Fire Suppression is triggered during the 4th hit of her Basic Attack, she becomes invulnerable during skill activation." },
            { number: 5, name: "Perfect Soldier ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Scorching Flow  ", desc: "When Soldier 11 uses her EX Special Attack, Chain Attack, or Ultimate, she gains 8 stacks of Charge (max 8 stacks).When Fire Suppression is triggered, 1 stack of Charge is consumed, causing the current move to ignore 25% of the target's Fire RES." }
        ]
    },
    {
        id: 6,
        name: "Grace",
        rarity: "S",
        element: "Electric",
        role: "Anomaly",
        faction: "Belobog Heavy Industries",
        image: "image/грейс.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: High-Pressure Spike<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 4 attacks, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-electric'>Electric DMG</span>.<br>While launching Basic Attacks, drag the joystick to move while attacking. This allows Grace to reposition herself and deal <span class='element-physical'>Physical DMG</span>. If used after the 1st or 2nd hit of a Basic Attack, pressing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> again resumes the combo from the 3rd or 4th hit of the Basic Attack.<br>While Grace is launching Basic Attacks, her Basic Attack combo will not be interrupted by her Special Attacks, EX Special Attacks, Dodge, Dash Attacks, or Dodge Counter.",

            "Dodge": "Dodge: Safety Regulation<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Quick Inspection<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slide forward while shooting, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Violation Penalty<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Throws a grenade at enemies, dealing <span class='element-electric'>Electric DMG</span>, then automatically triggers the Basic Attack's 4th hit.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Incident Management<br>When the active character is launched in the air, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Throws a grenade at the enemy, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: Rapid Risk Response<br>When the character on field is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Dodges the enemy's attack and activates Vital View.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Counter Volt Needle<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after an Evasive Assist to activate:<br>Unleashes a spinning hail of bullets against enemies in front and throws a grenade, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Obstruction Removal<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Throws a grenade forward, dealing <span class='element-electric'>Electric DMG</span>.<br>During the skill, drag the joystick to reposition in that direction.<br>When activated via consuming Zap, dodge incoming enemy attacks.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Supercharged Obstruction Removal<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Leaps into the air and throws two grenades forward, dealing massive <span class='element-electric'>Electric DMG</span>.<br>During the skill, drag the joystick to change directions.<br>If Zap reaches max stacks, throws an additional Vortex Cluster Grenade, generating an electromagnetic field at the point of detonation that pulls in enemies and deals <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Pulse<br>Activating an Ultimate grants 25 stacks of Pulse (max 25 stacks). When gaining Zap, consumes 1 stack of Pulse.<br>After consuming Pulse to obtain 8 stacks of Zap, the next grenade throw includes an additional Pulse Grenade. If it hits an enemy suffering <span class='element-ether'>Ether</span>, <span class='element-electric'>Electric</span>, <span class='element-fire'>Fire</span>, <span class='element-physical'>Physical</span>, <span class='element-ice'>Ice</span>, or <span class='element-wind'>Wind</span> Anomaly, it triggers <span class='highlight-white'>Abloom</span>:" +
                " deals an additional instance of DMG equal to <span class='highlight-white'>560%</span>/<span class='highlight-white'>280%</span>/<span class='highlight-white'>700%</span>/<span class='highlight-white'>50%</span>/<span class='highlight-white'>70%</span>/<span class='highlight-white'>28%</span> of the original Anomaly's DMG.<br>While in the Pulse state, Special Attack: Obstruction Removal - Cycle is unlocked.<br><br>Special Attack: Obstruction Removal - Cycle<br>While in the Pulse state, hold <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Repeatedly hurls grenades forward during the skill, dealing <span class='element-electric'>Electric DMG</span> and granting 1 Zap stack each time grenades are thrown.<br>During the skill, tilt the joystick to reposition and dodge enemy attacks.<br>Anti-Interrupt level is increased while using this skill.",

            "Chain Attack": "Chain Attack: Collaborative Construction<br>When a Chain Attack is triggered, select the character to activate:<br>Throws three grenades into the air then strafes to detonate them, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Demolition Blast - Beware<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Throws a custom grenade which explodes in the air and splits into four smaller grenades, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Gains 8 stacks of Zap and 25 stacks of Pulse (max 25 stacks).<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Pre-Driven Needle<br>When Grace's Basic Attack or Dash Attack hits an enemy and deals <span class='element-physical'>Physical DMG</span>, she gains 1 stack of Zap (up to 8 stacks). Upon reaching maximum stacks, using a Special Attack or EX Special Attack will consume all stacks of Zap, increasing the accumulated <span class='element-electric'>Electric Anomaly Buildup</span> by <span class='highlight-white'>130%</span>.<br><br>Additional Ability: Tech Support Dept.<br>When another character in your squad shares the same Attribute or Faction, or is an Anomaly character:<br>When Grace's EX Special Attack hits an enemy, the next time that target is afflicted with <span class='element-electric'>Shock</span>, that instance of <span class='element-electric'>Shock DMG</span> is increased by <span class='highlight-white'>18%</span>, stacking up to 2 times. This effect can trigger on each enemy only once per skill use, and all stacks reset when the <span class='element-electric'>Shock</span> state ends."
        },
        mindscapes: [
            { number: 1, name: "Recharge Chamber  ", desc: "When the 4th hit of Grace's Basic Attack hits an enemy, all squad members gain 0.25 Energy.Within the same move, this effect can grant a max of 2 Energy to all squad members." },
            { number: 2, name: "Lightning Piercer  ", desc: "When Grace's thrown grenade hits an enemy during a Basic Attack, Special Attack, or EX Special Attack, the target's Electric RES is reduced by 8.5%, and Electric Anomaly Buildup RES is reduced by 8.5%, lasting for 8s." },
            { number: 3, name: "Chief Mechanic  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Burst Capacitor ", desc: "When Grace uses her EX Special Attack, she gains 6 stacks of Charge (max 6 stacks). When her Basic Attack: High-Pressure Spike or Dash Attack: Quick Inspection hits an enemy, 1 stack of Charge is consumed, increasing her Energy Generation Rate of the attack by 20%." },
            { number: 5, name: "'Frosty Cold Iron Witch'", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Detonation Trigger  ", desc: "When all Zap stacks are consumed to activate a Special Attack or EX Special Attack, Grace's skill is enhanced, tossing an extra grenade and increasing each grenade's DMG to 200%." }
        ]
    },
    {
        id: 7,
        name: "Koleda",
        rarity: "S",
        element: "Fire",
        role: "Stun",
        faction: "Belobog Heavy Industries",
        image: "image/коляда_1101_272_14050658.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Smash 'n' Bash<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 4 strikes, dealing <span class='element-physical'>Physical DMG</span>.<br>When Koleda has the Furnace Fire effect, she can launch an enhanced Basic Attack after the 2nd hit, consuming the Furnace Fire effect and dealing massive <span class='element-fire'>Fire DMG</span>.<br>When Koleda and Ben are deployed together, executing an enhanced Basic Attack will trigger a coordinated attack from both, further increasing the move's power;<br>Koleda is invulnerable during the Basic Attack's 4th hit and enhanced Basic Attack.",

            "Dodge": "Dodge: Wait 'n' See<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Tremble!<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Dodge to activate:<br>Strikes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Don't Look Down on Me<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Strikes enemies in front and creates an explosion, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Coming Thru!<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strikes enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Protective Hammer<br>When the character on field is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Hammer Bell<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Koleda charges and strikes enemies in front, dealing <span class='element-fire'>Fire DMG</span> and obtaining Furnace Fire effect.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Hammer Time<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strikes enemies in front and triggers an explosion, dealing <span class='element-fire'>Fire DMG</span>.<br>This skill launches faster and triggers an explosion when used after the 2nd or 4th hit of Koleda's Basic Attack or enhanced Basic Attack.<br>When Koleda and Ben are both in your squad, and this skill is quickly launched after an enhanced Basic Attack, they team up to launch a coordinated attack, further increasing the power of the skill.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Boiling Furnace<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strikes enemies in front and triggers a powerful explosion, dealing massive <span class='element-fire'>Fire DMG</span>. Koleda also gains the Furnace Fire effect.<br>This skill activates faster and triggers an explosion when used after the 2nd or 4th hit of Koleda's Basic Attack or enhanced Basic Attack.<br>When Koleda and Ben are both in your squad and this skill is quickly launched after an enhanced Basic Attack, they team up to launch a coordinated attack, further increasing the power of the skill.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Natural Disaster<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful explosion on enemies in a large area, dealing massive <span class='element-fire'>Fire DMG</span> while also obtaining the Furnace Fire effect.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Hammerquake<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes a powerful explosion on enemies in a large area in front, dealing massive <span class='element-fire'>Fire DMG</span> while also obtaining the Furnace Fire effect.<br>Koleda and Ben can team up when fighting together to launch a coordinated attack, further increasing the power of the attack.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Demolition Hammer<br>When Koleda uses her EX Special Attack or consumes Furnace Fire to use an enhanced Basic Attack, the Daze she deals increases by 60%.<br><br>Additional Ability: Belobog Management<br>When another character in your squad shares the same Attribute or Faction or is a Rupture character:<br>When the explosion from Koleda's EX Special Attack hits an enemy, it applies a debuff to the target. While the target is Stunned, Chain Attacks deal 35% more DMG to the target. This effect can stack up to 2 times and resets when the Stunned effect ends."
        },
        mindscapes: [
            { number: 1, name: "Beat of the Hammer  ", desc: "After the 2nd or 4th hit of Koleda's Basic Attack or her enhanced Basic Attack, quickly use a Special Attack or EX Special Attack to increase the Daze dealt by 15%." },
            { number: 2, name: "Kinetic Recovery  ", desc: "When Koleda's EX Special Attack hits an enemy, she recovers 60 Energy. Can trigger once every 45s." },
            { number: 3, name: "'Mind Your Own!'", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Furnace's Glow  ", desc: "Koleda gains one stack of Charge (max 2 stacks) when consuming Furnace Fire to use her Enhanced Basic Attack. When her Chain Attack: Natural Disaster or Ultimate: Hammerquake hits an enemy, she consumes all stacks of Charge to increase the attack's DMG by 18% per stack." },
            { number: 5, name: "'You Dare Underestimate Me?' ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Saturated Blast  ", desc: "When EX Special Attack, Chain Attack, or Ultimate triggers an explosion that hits an enemy, it deals additional DMG equal to 360% of Koleda's ATK." }
        ]
    },
    {
        id: 8,
        name: "Zhu Yuan",
        rarity: "S",
        element: "Ether",
        role: "Attack",
        faction: "New Eridu Public Security",
        image: "image/джу.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Don't Move!<br>[Assault Mode]<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate.<br>Unleash a flurry of martial arts, bullets, and Ether Buckshots in a series of up to 5 attacks, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-ether'>Ether DMG</span>.<br>When the 4th or 5th hit strikes an enemy, obtain 1 Enhanced Shotshell per hit. A max of 1 can be obtained per activation of this Basic Attack.<br>While using this skill, drag the joystick and press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate Dash Attack: Firepower Offensive and readjust to face the selected direction.<br>While under Assault Mode, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to switch to Suppressive Mode.<br><br>Basic Attack: Please Do Not Resist<br>[Suppressive Mode]<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash up to 3 Shotshell piercing attacks, dealing <span class='element-physical'>Physical DMG</span>. If Zhu Yuan has Enhanced Shotshells upon firing, 1 Enhanced Shotshell will be consumed, dealing massive <span class='element-ether'>Ether DMG</span>.<br>While using this skill, drag the joystick to activate her Dash Attack: Overwhelming Firepower and readjust to face the selected direction.<br>While in Suppressive Mode, release <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to return to Assault Mode.",

            "Dodge": "Dodge: Tactical Detour<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Firepower Offensive<br>Assault Mode<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Uses handgun to attack, dealing <span class='element-ether'>Ether DMG</span>.<br><br>Dash Attack: Overwhelming Firepower<br>Suppressive Mode<br>Drag the joystick during Basic Attack: Please Do Not Resist to activate:<br>Unleashes a Shotshell piercing attack, dealing <span class='element-physical'>Physical DMG</span>. If Zhu Yuan has Enhanced Shotshells when firing, 1 Enhanced Shotshell will be consumed, dealing massive <span class='element-ether'>Ether DMG</span>.<br><br>Dodge Counter: Fire Blast<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate.<br>Shoots enemies in front with an Ether Buckshot, dealing <span class='element-ether'>Ether DMG</span>.<br>Gain 1 Enhanced Shotshell on skill use.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Covering Shot<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Shoots enemies in front with an Ether Buckshot, dealing <span class='element-ether'>Ether DMG</span>.<br>Gain 1 Enhanced Shotshell on skill use.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: Guarded Backup<br>When the character on field is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Dodges the enemy's attack and activates Vital View.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Defensive Counter<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after an Evasive Assist to activate:<br>Attack with a combination of martial arts and shotshells, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-ether'>Ether DMG</span>.<br>Upon activation, gain 3 Enhanced Shotshells.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Buckshot Blast<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Shoots Ether Buckshots that deal <span class='element-ether'>Ether DMG</span>. This can be repeated 3 times by repeatedly pressing <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Full Barrage<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Shoots a series of Ether Buckshots, that explode and deal massive <span class='element-ether'>Ether DMG</span>.<br>Upon activation, gain 3 Enhanced Shotshells.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Eradication Mode<br>When a Chain Attack is triggered, select the character to activate:<br>Uses Modified Master Firearm to execute a saturated attack, firing lasers and seeking missiles to deal massive <span class='element-ether'>Ether DMG</span>.<br>Upon activation, gain 3 Enhanced Shotshells.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Max Eradication Mode<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Uses Modified Master Firearm to execute a saturated attack, firing lasers and seeking missiles to deal massive <span class='element-ether'>Ether DMG</span>.<br>Upon activation, gain 3 Enhanced Shotshells.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Special Ops Ammunition<br>When Zhu Yuan is under Suppressive Mode, using Enhanced Shotshells increases her DMG by 40%. When attacking Stunned enemies, this DMG buff is increased by an additional 40%. When Zhu Yuan enters the battlefield, she immediately gains 6 Enhanced Shotshells.<br><br>Additional Ability: Tactical Coordination<br>When another character in your squad is a Support character or shares the same Faction:<br>Zhu Yuan's CRIT Rate is increased by 30% for 10s after using an EX Special Attack, Chain Attack, or Ultimate."
        },
        mindscapes: [
            { number: 1, name: "Quick Reload  ", desc: "When Zhu Yuan activates Chain Attacks/Ultimates, gain the Quick Reload effect. When Zhu Yuan has the Quick Reload effect and uses up all Enhanced Shotshells, the Quick Reload effect will be consumed to instantly gain 6/9 Enhanced Shotshells." },
            { number: 2, name: "Ether Ember  ", desc: "In Suppressive Mode, Zhu Yuan's Anti-Interrupt level is increased and DMG taken reduced by 10%. When Zhu Yuan hits an enemy with Enhanced Shotshells, deal 10% more Basic Attack: Please Do Not Resist and Dash Attack: Overwhelming Firepower <span class='element-ether'>Ether DMG</span>, stacking up to 5 times and lasting for 5s. Each shot adds one stack of this effect, and repeated triggers reset the duration." },
            { number: 3, name: "Public Security Special Training ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Ether Perforation  ", desc: "When Zhu Yuan hits an enemy with Enhanced Shotshells, her Basic Attack: Please Do Not Resist and Dash Attack: Overwhelming Firepower ignore 25% of the target's Ether RES." },
            { number: 5, name: "Special Ops Experience ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Expanded Energy Pack III  ", desc: "When Zhu Yuan consumes a total of 12 Enhanced Shotshells, she receives the Ether Afterglow effect, and the Energy cost of the next EX Special Attack is reduced by 30. Launching an EX Special Attack will consume Ether Afterglow and shoot an additional 4-bullet Ether Buckshot. Each extra bullet deals DMG equal to 220% of Zhu Yuan's ATK." }
        ]
    },
    {
        id: 9,
        name: "Yanagi",
        rarity: "S",
        element: "Electric",
        role: "Anomaly",
        faction: "Hollow Special Operations Section 6",
        image: "image/яна.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Tsukuyomi Kagura<br>Yanagi has two stances: Jougen and Kagen.<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Execute up to five forward slashes based on the current stance, causing <span class='element-physical'>Physical DMG</span> and <span class='element-electric'>Electric DMG</span>.<br>During combat, Yanagi gains the corresponding stance buff based on her current stance:<br>Jougen stance buff: <span class='element-electric'>Electric DMG</span> increases by 10%. Anti-Interrupt Level increases during Basic Attacks.<br>Kagen stance buff: PEN Ratio increases by 10%. Interrupt Level increases for Basic Attacks.<br>For 8s after switching stances, Yanagi retains the bonus from the previous stance.",

            "Dodge": "Dodge: Wandering Breeze<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Fleeting Flight<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Rapid Retaliation<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Slashes enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br>After using this skill, you can immediately follow up with the 3rd hit of the current stance's Basic Attack.",

            "Assist": "Quick Assist: Blade of Elegance<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slashes enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br>After using this skill, you can immediately follow up with the 3rd hit of the current stance's Basic Attack.<br><br>Defensive Assist: Radiant Reversal<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Weeping Willow Stab<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Switch stances, and quickly deliver multiple slashes to enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br>After using this skill, you can immediately follow up with the 3rd hit of the current stance's Basic Attack.",

            "Special Attack": "Special Attack: Ruten<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a forward slash, dealing <span class='element-electric'>Electric DMG</span>, and switch the current stance.<br>Anti-Interrupt level is increased while using this skill.<br>If activated after the 3rd, 4th, or 5th hit of a Basic Attack, it activates Swift Ruten, speeding up the slashes while switching her current stance.<br>Block enemy attacks while Swift Ruten is active.<br>Upon activating Swift Ruten, Yanagi can immediately follow up with the 3rd hit of the current stance's Basic Attack.<br><br>EX Special Attack: Gekka Ruten<br>With enough Energy, hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Charge up power for a quick forward thrust, followed by a downward attack, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Upon executing the thrust, Yanagi switches stances and enters the Shinrabanshou state, lasting 15s. For the duration of this state, when following up with a subsequent Basic Attack from the 5th hit of a Basic Attack or other skills, the combo will begin directly from the 3rd hit of the Basic Attack.<br>If the downward attack hits an enemy suffering an Anomaly, it triggers a special Disorder effect, Polarity Disorder, dealing 15% of the original Disorder effect's DMG to the target, plus an additional 3200% of Yanagi's Anomaly Proficiency. Polarity Disorder will not remove the target's Anomaly.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Celestial Harmony<br>When a Chain Attack is triggered, select the character to activate:<br>Switch stances and unleash a powerful slash on enemies in front, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br>After using this skill, you can immediately follow up with the 3rd hit of the current stance's Basic Attack.<br><br>Ultimate: Raiei Tenge<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Yanagi unleashes her potential and delivers a powerful slash to a large area of enemies in front in a very short time, followed by an additional lightning strike, dealing massive <span class='element-electric'>Electric DMG</span>.<br>When the lightning strike hits an enemy affected by an Attribute Anomaly, it triggers a special Disorder effect called Polarity Disorder. This deals DMG equal to 15% of the original Disorder effect plus an additional 3200% of Yanagi's Anomaly Proficiency. Polarity Disorder will not remove the target's Anomaly.<br>Character is invulnerable while using this skill.<br>After using this skill, Yanagi can immediately follow up with the 3rd hit of the current stance's Basic Attack.",

            "Core Skill": "Core Passive: Lunar Eclipse<br>After Yanagi activates her EX Special Attack, the DMG multiplier of Disorder is increased by 250% when any squad member applies the Disorder effect to an enemy, lasting 15s.<br>When her EX Special Attack hits an enemy, Yanagi's <span class='element-electric'>Electric DMG</span> against the target is increased by 20% for 15s.<br><br>Additional Ability: Gessou<br>When another character in your squad is an Anomaly character or shares the same attribute:<br>After switching stances, when Yanagi hits an enemy with Basic Attack: Tsukuyomi Kagura, <span class='element-electric'>Electric Anomaly Buildup</span> increases by 45% for 8s."
        },
        mindscapes: [
            { number: 1, name: "Know Thy Self, Know Thy Enemy  ", desc: "When any squad member inflicts an Anomaly on an enemy, Yanagi gains 1 stack of Clarity, lasting 15s, stacking up to 3 times. Repeated triggers reset the duration. Upon being hit by an enemy attack, Yanagi consumes 1 stack of Clarity to gain invulnerability for 1s. When Yanagi has 1 or more stacks of Clarity, her Anomaly Proficiency increases by 80." },
            { number: 2, name: "Outstanding Adaptability  ", desc: "During her EX Special Attack, the rapid thrust's Electric Anomaly Buildup increases by 20%. Holding down the Special Attack button after a rapid thrust hits an enemy will consume 10 additional Energy to launch another thrust. If Energy is insufficient or the button is released, the attack automatically follows up with the downward attack. When the downward attack hits an enemy suffering an Anomaly and triggers Polarity Disorder, the DMG multiplier increases to 20% of the original Disorder effect. Each additional thrust increases this multiplier by 15%, up to a maximum of 2 extra thrusts." },
            { number: 3, name: "Tsukishiro Style Management  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Chessmaster  ", desc: "When Yanagi inflicts Attribute Anomaly DMG on an enemy, they suffer the Exposed effect, lasting 15s. Attacks on enemies under the Expose effect will have 16% increased PEN Ratio." },
            { number: 5, name: "'Other Mother' ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Inhuman Blood  ", desc: "After a thrust attack during her EX Special Attack, the duration of the Shinrabanshou state increases to 30s. While the state is active, EX Special Attack DMG increases by 20%. The maximum number of times the additional DMG multiplier increase effect for Polarity Disorder in Outstanding Adaptability can be triggered increases to 4, and the Energy cost for the first 4 additional thrust attacks is halved." }
        ]
    },
    {
        id: 10,
        name: "Burnice",
        rarity: "S",
        element: "Fire",
        role: "Anomaly",
        faction: "Sons of Calydon",
        image: "image/берн.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Direct Flame Blend<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 5 attacks in front, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br><br>Basic Attack: Mixed Flame Blend<br>In the Nitro-Fuel Cocktail state, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Spins continuously while spraying flames around, followed by a Finishing Move, then triggers an extra instance of Afterburn that doesn't cost Heat and deals <span class='element-fire'>Fire DMG</span>. Continuing to hold extends the flame-spraying duration.<br>The DMG dealt by this skill also counts as Assist Attack DMG.<br>Upon activation, it consumes 20 Heat.<br>Anti-Interrupt level is increased while using this skill.<br>After executing the Finishing Move, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.",

            "Dodge": "Dodge: Fiery Phantom Dash<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Dangerous Fermentation<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Perform a forward rush attack with the flamethrower, dealing <span class='element-fire'>Fire DMG</span>.<br><br>Dodge Counter: Fluttering Steps<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Launch a series of attacks on enemies in front while spraying flames, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Energizing Specialty Drink<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a series of attacks at enemies ahead and sprays flames, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using this skill, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.<br><br>Defensive Assist: Smoky Cauldron<br>When the character on field is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Scorching Dew<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Leap into the air and quickly spin forward while spraying flames in all directions, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using the skill, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.",

            "Special Attack": "Special Attack: Intense Heat Aging Method<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash a fire blast forward, inflicting <span class='element-fire'>Fire DMG</span>;<br>Press and hold <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge, boosting the move's power.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Intense Heat Stirring Method<br>With enough energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Continuously spray flames with a one-handed flamethrower, then release a fire blast in a straight line ahead, dealing massive <span class='element-fire'>Fire DMG</span>. Continue holding to steadily consume energy and extend the spray's duration.<br>While continuously spraying, drag the joystick to execute a sidestep dodge, adjusting your position in the corresponding direction.<br>Anti-Interrupt Level is increased while continuously spraying, and DMG taken is reduced by 60%.<br>Character is invulnerable during sidestep dodge and fire blast.<br><br>EX Special Attack: Intense Heat Stirring Method - Double Shot<br>While using EX Special Attack: Intense Heat Stirring Method, with enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Use both flamethrowers to" +
                " continuously spray flames, followed by a fire blast in a front line, dealing massive <span class='element-fire'>Fire DMG</span>. Keep holding to continue consuming Energy and extend the spray's duration.<br>Character is invulnerable during the moment the spray is activated and during the activation of the fire blast.<br>Anti-Interrupt Level is increased while spraying, and DMG received is reduced by 60%.<br><br>EX Special Attack: Intense Heat Tossing Method<br>If Burnice has Emberflow, coming on-field activates this skill.<br>After squadmates trigger Afterburn 12 times, Burnice gains 1 point of Emberflow. With Emberflow, Burnice's next entry onto the field consumes 1 stack to automatically activate this skill. This entry is considered a Quick Assist. When Afterburn triggered by Basic Attack: Mixed Flame Blend hits an enemy, it counts for 2 times. While possessing Emberflow, the counter no longer increases. Consuming Emberflow clears the counter.<br>Quickly dashes forward and passes through the enemy, unleashing a fiery impact that deals <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br>When the skill's heavy attack hits a target suffering <span class='element-ether'>Ether</span>, <span class='element-electric'>Electric</span>, <span class='element-fire'>Fire</span>, <span class='element-physical'>Physical</span>, <span class='element-ice'>Ice</span>, or <span class='element-wind'>Wind</span> Anomaly, it triggers Abloom: deals an additional instance of DMG equal to <span class='highlight-white'>480%</span>/<span class='highlight-white'>240%</span>/<span class='highlight-white'>600%</span>/<span class='highlight-white'>40%</span>/<span class='highlight-white'>60%</span>/<span class='highlight-white'>24%</span> of the original Anomaly's DMG.<br>The Fire Anomaly Buildup increase from Additional Ability: Fire Kindling applies to this skill.<br>Character is invulnerable while using this skill.<br>After using this skill, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.",

            "Chain Attack": "Chain Attack: Fuel-Fed Flame<br>When a Chain Attack is triggered, select the character to activate:<br>Quickly dash forward while spraying flames in all directions, then launch a fire blast in a fan-shaped area ahead, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using the skill, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.<br><br>Ultimate: Glorious Inferno<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Dash forward quickly, then leap into the air and continuously spray flames over a wide area ahead, dealing massive <span class='element-fire'>Fire DMG</span>.<br>When leaping into the air, a Quick Assist will be triggered. If the Quick Assist is activated, Burnice will extend the duration of her flame spray.<br>Upon activation, recover 50 Heat.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Nitro-Fuel Cocktail<br>When Burnice expends Energy, she accumulates Heat, up to a max of 100. She gains 1.4 Heat for each 1 point of Energy consumed. At 50 Heat, she enters the Nitro-Fuel Cocktail state until all Heat is expended. Upon entering the battlefield, Burnice instantly accumulates 100 Heat.<br>While in the Nitro-Fuel Cocktail state, when Burnice hits an enemy with a Basic Attack: Mixed Flame Blend, EX Special Attack: Intense Heat Stirring Method, EX Special Attack: Intense Heat Stirring Method - Double Shot, Chain Attack: Fuel-Fed Flame, or Ultimate: Glorious Inferno, she applies the Scorched effect to the target until she exits the Nitro-Fuel Cocktail state. When other squad members hit enemies under the Scorched status, it triggers the Afterburn effect, expending 8 Heat to deal <span class='element-fire'>Fire DMG</span> equal to 350% of Burnice's ATK and accumulate Fire Anomaly Buildup. This effect can trigger once every 1.5s. For every 10 Anomaly Proficiency, Afterburn DMG increases by 1%, up to a max of 30%. DMG from the Afterburn effect is considered Assist Attack DMG.<br><br>Additional Ability: Fire Kindling<br>When another character in your squad is an Anomaly character or shares the same Faction:<br>When Burnice's Basic Attack: Mixed Flame Blend, EX Special Attack: Intense Heat Stirring Method or EX Special Attack: Intense Heat Stirring Method - Double Shot hits an enemy, or when the Afterburn effect is triggered, the move's accumulated Fire Anomaly Buildup increases by 65%. When any squad member applies the Burn effect to an enemy, the duration of that effect is extended by 3s."
        },
        mindscapes: [
            { number: 1, name: "Kindred Flames  ", desc: "Increases the limit of Heat from 100 to 140. Upon entering the battlefield, Burnice accumulates an additional 40 Heat. Increases the DMG Multiplier of the Afterburn effect by 100% of Burnice's ATK. Additionally, the accumulated Fire Anomaly Buildup from the Afterburn effect is increased by 25%." },
            { number: 2, name: "Extra at No Additional Charge  ", desc: "When triggering the Afterburn effect, Thermal Penetration is applied to the enemy, stacking up to 5 times and lasting 6s. Repeated triggers reset the duration. When any allied unit in the squad hits the enemy, the attack's PEN Ratio is increased by 4% for each stack of Thermal Penetration, up to a max of 20%." },
            { number: 3, name: "Optimistic by Nature  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Ultimate Fuel Supply  ", desc: "When an EX Special Attack or Assist Attack hits an enemy, the move's CRIT Rate increases by 30%. The max flame spray duration of EX Special Attack: Intense Heat Stirring Method - Double Shot is increased by 1s." },
            { number: 5, name: "Dance of Fire and Ice ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Burning Invitation  ", desc: "When Burnice hits an enemy with EX Special Attack: Intense Heat Stirring Method - Double Shot, it triggers an additional special Afterburn effect, dealing 60% of Burnice's ATK as <span class='element-fire'>Fire DMG</span> to the target. This effect can trigger once every 0.5s and does not consume Heat. After hitting an enemy with EX Special Attack: Intense Heat Stirring Method - Double Shot, while the move is active, EX Special Attack: Intense Heat Stirring Method - Double Shot, special Afterburn effects, and Burn DMG will ignore 25% of the target's Fire RES. When EX Special Attack: Intense Heat Stirring Method - Double Shot's fire blast hits an enemy, if that enemy is Burned, trigger an additional instance of Burn DMG equal to 1,800% of the original DMG. This effect can trigger once every 20s for each target." }
        ]
    },
    {
        id: 11,
        name: "Cissia",
        rarity: "S",
        element: "Electric",
        role: "Attack",
        faction: "New Eridu Public Security",
        image: "image/цис.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Tongue Flick<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch up to four attacks forward, dealing <span class='element-electric'>Electric DMG</span>.<br>When the 4th hit lands, gain 2 points of Venom. Hitting a Stunned enemy grants an additional 1 point of Venom.<br><br>Basic Attack: Serpent's Kiss<br>With Serpentine Shadow, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to launch:<br>Cissia leaps into the air and locks onto a target, then slams down, dealing <span class='element-electric'>Electric DMG</span> to enemies in the area.<br>While locking on, continue to hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> and drag the joystick to extend the lock-on duration and freely control the landing position.<br>For every 6 points of Venom gained, gain 1 stack of Serpentine Shadow, stacking up to 3 times.<br>Upon entering the battlefield, gain 1 stack of Serpentine Shadow.<br>Using this skill consumes 1 stack of Serpentine Shadow.<br>Upon hitting an enemy, all Venom is consumed to trigger Corrode Bone.<br>Upon activating this skill, a Quick Assist is triggered.<br>Character is invulnerable while using this skill.<br><br>Corrode Bone<br>Deal <span class='element-electric'>Electric DMG</span> to nearby enemies.<br>Each trigger increases CRIT Rate by 6% for 15s, stacking up to 3 times. Repeated triggers refresh the duration.",

            "Dodge": "Dodge: Slither<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Bite Mark<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Dash forward with a swift slash, dealing <span class='element-electric'>Electric DMG</span>.<br><br>Dodge Counter: Bite Back<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Leap forward and perform a sweeping attack upon landing, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Alarm System<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Leaps forward and performs a sweeping attack upon landing, dealing <span class='element-electric'>Electric DMG</span>.<br>During this skill, you can quickly chain into Special Attack: Bared Fangs, EX Special Attack: Venomous Bite, and Basic Attack: Serpent's Kiss.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Extra Prison Rations<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Partners in Crime<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Unleash a series of attacks, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Bared Fangs<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a long-range snake bite forward, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Venomous Bite<br>With enough energy, press or hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash multiple long-range snake bites forward, dealing <span class='element-electric'>Electric DMG</span>.<br>Grants 5 Energy when the move is used.<br>When activating by holding, consumes additional Energy. For every 20 additional Energy consumed, unleash 1 extra strike that deals <span class='element-electric'>Electric DMG</span>, up to a maximum of 60 additional Energy.<br>After activation, gain 3 Venom. For every additional 20 Energy consumed while holding, gain 1 more Venom.<br>After using this skill, it can be immediately followed up with the 4th hit of Basic Attack: Tongue Flick.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Gang Operation<br>When a Chain Attack is triggered, select the character to activate:<br>Launch multiple attacks ahead, dealing massive <span class='element-electric'>Electric DMG</span>.<br>After using this skill, gain 3 Venom.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Ophidiophobia<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Deliver a thunderbolt attack in front, dealing massive <span class='element-electric'>Electric DMG</span>.<br>After using this skill, obtain 3 Venom.<br>After using this skill, activate Ether Veil: Cold-Blooded, lasting 30s. All squad members' CRIT DMG increases by 5% for the duration.<br>Re-activating Ether Veil: Cold-Blooded a second time will first deactivate the active Ether Veil: Cold-Blooded.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Fatal Concoction<br>Upon entering the battlefield, gain 3 Venom. In Investigation Zone mode, this effect can trigger once every 180s.<br>While possessing Venom, consume 1 Venom every 5s while in combat to trigger Corrode Bone, dealing <span class='element-electric'>Electric DMG</span>.<br>With Venom, all squad members' <span class='element-electric'>Electric DMG</span> ignores 6% of enemy DEF. If initial Energy Regen is higher than 1.4, for every additional 0.12 above that threshold, an additional 1% of the enemy's DEF is ignored, up to a maximum of 25% of enemy DEF. This effect lasts until 30s after Venom is depleted.<br>Corrode Bone deals additional <span class='element-electric'>Electric DMG</span> equal to 335% of ATK.<br>When there are 1/2 Electric characters in the squad, the Daze dealt by Corrode Bone increases by 40%/60%.<br>When gaining Venom, every 1 excess point of Venom triggers Corrode Bone once.<br><br>Additional Ability: Festering Venom<br>When another character in your squad is a Stun character or shares the same attribute:<br>While possessing Venom, increases all squad members' CRIT DMG by 40%, with Cissia gaining an additional 10%. The effect lasts until 30s after Venom is depleted."
        },
        mindscapes: [
            { number: 1, name: "Traveler and Prey  ", desc: "The Venom gained upon entering the battlefield increases to 6. The DEF ignore from the Core Passive increases to 140% of its original value, and all squad members ignore 5% of the target's <span class='element-electric'>Electric RES</span>. Corrode Bone DMG ignores 10% of the target's <span class='element-electric'>Electric RES</span>." },
            { number: 2, name: "Hunger and Hard Truths  ", desc: "After a Chain Attack: Gang Operation or Ultimate: Ophidiophobia hits a Stunned enemy, gain an additional 3 Venom. Basic Attack: Serpent's Kiss deals 35% increased DMG." },
            { number: 3, name: "Chains and a Warm Nest  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "A Rogue's Resolve  ", desc: "When using an EX Special Attack, Chain Attack, or Ultimate, gain 1 stack of Decidedness, stacking up to 3 times. When using Basic Attack: Serpent's Kiss, consume all Decidedness. Each stack consumed triggers 1 special instance of Corrode Bone that does not consume Venom. This Corrode Bone does not cause Daze." },
            { number: 5, name: "False Evidence and Fangs ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Home and Sixth Street ", desc: "Each time Corrode Bone is triggered, gain 1 stack of Bone-Deep Corrosion. When attacks from any squad member, other than Corrode Bone, hit an enemy, consume 1 stack of Bone-Deep Corrosion to trigger 1 special Corrode Bone. This instance of Corrode Bone cannot inflict Daze, and at most 1 stack of Bone-Deep Corrosion can be consumed every 3s." }
        ]
    },
    {
        id: 12,
        name: "Aria",
        rarity: "S",
        element: "Ether",
        role: "Anomaly",
        faction: "Angels of Delusion",
        image: "image/аря.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Sweet Melody<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches up to four consecutive attacks forward, dealing <span class='element-ether'>Ether DMG</span>.<br>After hitting an enemy with the fourth hit, 1 Fandom Power is generated on the field after the attack ends.<br><br>Basic Attack: Perfect Pitch<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Aria enters a charging state and can reach three levels of charge. Releasing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> or reaching the maximum charge time causes Aria to unleash a powerful downward attack forward based on the current charge level, dealing massive <span class='element-ether'>Ether DMG</span>.<br>If there is Fandom Power nearby while Aria is charging, she will absorb the Fandom Power, with each absorbed Fandom Power instantly increasing charge level by 1 and granting 1 stack of a buff that increases the next Basic Attack: Perfect Pitch's Ether Anomaly Buildup by 10%. This buff can stack up to 2 times and is removed after the attack ends.<br>After the 4th hit of Basic Attack: Sweet Melody, Special Attack: Full-Sugar Electronica - No Ice, an EX Special Attack, a level three charged Basic Attack: Perfect Pitch, a Quick Assist, a Chain Attack, or an Ultimate, if there are at least 2 Fandom Power nearby, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to consume 2 Fandom Power and quickly activate a level three charged Basic Attack: Perfect Pitch. After a level three charged Basic Attack: Perfect Pitch, a Chain Attack, or an Ultimate, if there are at least 2 Fandom Power nearby, a level three charged Basic Attack: Perfect Pitch can also be quickly activated by pressing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> within a short window, consuming 2 Fandom Power.<br>Anti-Interrupt Level is increased while charging, and received DMG is reduced by 40%. Character is invulnerable while using this attack.",

            "Dodge": "Dodge: On-Beat Precision<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>If activated during a Basic Attack: Sweet Melody chain, this action does not reset the Basic Attack count.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Silky-Smooth Combo<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Launches a swift slashing attack forward, dealing <span class='element-ether'>Ether DMG</span>.<br>If activated during a Basic Attack: Sweet Melody chain, this action does not reset the Basic Attack count.<br><br>Dodge Counter: Slide-Shift Variation<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Unleashes a powerful slash against the target, dealing <span class='element-ether'>Ether DMG</span>.<br>After using this skill, it can be immediately followed up with the 3rd hit of Basic Attack: Sweet Melody.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Shatter Fantasy<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Delivers a powerful slash to the target, dealing <span class='element-ether'>Ether DMG</span>.<br>After using this skill, it can be immediately followed up with the 3rd hit of Basic Attack: Sweet Melody.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Clutch Save<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Encore Song<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Unleashes a powerful series of slashes on the target, dealing massive <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Full-Sugar Electronica<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Delivers a forward kick, dealing <span class='element-ether'>Ether DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>Special Attack: Full-Sugar Electronica - No Ice<br>After the 4th hit of Basic Attack: Sweet Melody, an Assist Follow-Up, a Chain Attack, or an Ultimate, press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Delivers a quicker forward kick, dealing <span class='element-ether'>Ether DMG</span>. If the attack hits an enemy, 1 Fandom Power is generated on the field after the attack ends.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Fall Into Delusion<br>With enough energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Delivers a powerful forward kick followed by a sonic wave attack, dealing <span class='element-ether'>Ether DMG</span>. If the attack hits an enemy, 3 Fandom Power are generated on the field after the attack ends.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Instantly Hooked<br>After launching EX Special Attack: Fall Into Delusion, and with enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Performs a powerful downward attack in front, dealing <span class='element-ether'>Ether DMG</span>. If the attack hits an enemy, 3 Fandom Power are generated on the field after the attack ends.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Dream Collab<br>When a Chain Attack is triggered, select the character to activate:<br>Launches a series of attacks forward, dealing massive <span class='element-ether'>Ether DMG</span>. 4 Fandom Power are generated on the field on skill activation.<br>Character is invulnerable while using this skill.<br><br>Ultimate: 100% Energy<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Releases all her power, entering Moment of Delusion, and fires multiple powerful shots at the target, dealing massive <span class='element-ether'>Ether DMG</span>.<br>Upon entering Moment of Delusion, Aria gains 3 stacks of All-Out Cheering and activates Ether Veil: Delusion Reprise. While Ether Veil: Delusion Reprise is active, all squad members gain an additional 50 ATK for 30s. Re-activating Ether Veil: Delusion Reprise will first cancel any existing instance of Ether Veil: Delusion Reprise.<br>While Aria is charging, if she has All-Out Cheering, stacks of All-Out Cheering are consumed first to charge. Each stack of All-Out Cheering consumed increases the charge level by 2.<br>Upon entering Moment of Delusion, if Aria already has All-Out Cheering, all remaining stacks of All-Out Cheering are first converted into Fandom Power and generated on the field. Each stack of All-Out Cheering is converted into 2 Fandom Power.<br>Moment of Delusion lasts for up to 15s. During Moment of Delusion, Aria's Basic Attack: Perfect Pitch 3rd attack is upgraded to an enhanced version.<br>When exiting Moment of Delusion, if Aria has All-Out Cheering, all remaining stacks of All-Out Cheering are converted into Fandom Power and generated on the field.<br>Each stack of All-Out Cheering is converted into 2 Fandom Power.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Innate Stage Presence<br>Aria's Anomaly Proficiency increases by 90.<br>If Aria's 3rd hit of Basic Attack: Perfect Pitch lands a heavy attack on an enemy suffering an <span class='element-ether'>Ether</span>, <span class='element-electric'>Electric</span>, <span class='element-fire'>Fire</span>, <span class='element-physical'>Physical</span>, <span class='element-ice'>Ice</span>, or <span class='element-wind'>Wind</span> Anomaly, it will trigger Abloom, which resolves an additional instance of Attribute Anomaly DMG equal to <span class='highlight-white'>27.5%</span>/<span class='highlight-white'>14.3%</span>/<span class='highlight-white'>35.7%</span>/<span class='highlight-white'>2.5%</span>/<span class='highlight-white'>3.6%</span>/<span class='highlight-white'>1.4%</span> per 10 points of initial Anomaly Mastery of the original Anomaly DMG. If the target is Stunned, the DMG ratio is further increased by 50%.<br><br>Additional Ability: Collaborative Stage<br>When another character in your squad is a Stun or Support character, or shares the same Faction:<br>When Ether Veil is activated, 4 Fandom Power are generated on the field. This can trigger once every 1s.<br>When any squad member applies Corruption to an enemy, its duration is extended by 3s."
        },
        mindscapes: [
            { number: 1, name: "Energetic Sound Waves ", desc: "When Aria's Basic Attack, Special Attack, or EX Special Attack deals DMG to enemies, it ignores 10% of the target's Ether Anomaly Buildup RES. Additionally, when Aria triggers Abloom, it has a chance to trigger a critical hit. The base CRIT Rate is 25%, and CRIT DMG is 25%. If initial Anomaly Mastery exceeds 100, each additional point of initial Anomaly Mastery increases this effect's CRIT Rate by 0.5%." },
            { number: 2, name: "Fantastical Beat  ", desc: "When Aria attacks or triggers Abloom, it ignores 16% of the target's DEF. During Moment of Delusion, attacks and Abloom triggers also ignore an additional 8% of the target's DEF." },
            { number: 3, name: "Delulu  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Mechanical Angel  ", desc: "When Aria triggers Abloom, she gains 4 Energy and 70 Decibels. This effect can trigger once every 10s." },
            { number: 5, name: "Tears in the Rain ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Construct's Dream ", desc: "When Aria triggers Abloom, she gains 4 Energy and 70 Decibels. This effect can trigger once every 10s." }
        ]
    },
    {
        id: 13,
        name: "Zhao",
        rarity: "S",
        element: "Ice",
        role: "Defense",
        faction: "Krampus Compliance Authority",
        image: "image/кроль.webp",
        stats: {
            "HP": "9117",
            "ATK": "765",
            "DEF": "701",
            "Impact": "93",
            "CRIT Rate": "5%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "93",
            "Anomaly Proficiency": "96",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Glacial Judgment<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches up to five slashes forward, the first dealing <span class='element-physical'>Physical DMG</span>, and the following four <span class='element-ice'>Ice DMG</span>.<br><br>Basic Attack: Final Verdict<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>After getting ready, Zhao starts charging up, then launches a forward slash on release, dealing massive <span class='element-ice'>Ice DMG</span>.<br>While charging, Zhao accumulates up to 5s of charge time. When the Finishing Move of Basic Attack: Final Verdict, Chain Attack, or Assist Follow-Up hits, the stored charge time is consumed to deal additional DMG. For every 1 second of charge time, Zhao deals 24% of Max HP as additional DMG.<br>When Zhao is in any Ether Veil, if she gets switched out while charging, the charge can continue.<br>If Frostbite Points are maxed out when the skill activates, all Frostbite Points are consumed to trigger Ether Veil: Wellspring and a Quick Assist. If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>During skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br>While not the currently controlled character, the character is invulnerable while using this skill.",

            "Dodge": "Dodge: Bunny Hop<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Bouncing Dash<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slashes forward, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-ice'>Ice DMG</span>.<br><br>Dodge Counter: Swift Blink<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Performs a falling slash ahead, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Entry Skill: Burst of Frost<br>When Zhao has maximum Frostbite Points, and is in combat, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches consecutive attacks forward, followed by a slash, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Upon activating this skill, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill, a Quick Assist is triggered. If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Activating this skill is considered as activating a Quick Assist.<br>Character is invulnerable while using this skill.<br><br>Quick Assist: Patch the Gaps<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a falling slash in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Frostveil Suppression<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Frostlight Reflection<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Launch multiple slashes in front, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Upon activating this skill, if Frostbite Points are maxed out, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill while in any Ether Veil, a Quick Assist is triggered. If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Shatterfrost Surge<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a forward slash, dealing <span class='element-ice'>Ice DMG</span>.<br>Upon activating this skill, consumes 5% of current HP to grant all squad members HP regeneration equal to 1.72% of Zhao's Max HP per second for 5s. The HP-consuming effects of Special Attack: Shatterfrost Surge and EX Special Attack: Frostflow Tundra can trigger at most once every 30s.<br><br>EX Special Attack: Frostflow Tundra<br>With enough energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches multiple forward slashes, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Upon activating this skill, consumes 5% of current HP to grant all squad members HP regeneration equal to 1.72% of Zhao's Max HP per second for 5s. The HP-consuming effects of Special Attack: Shatterfrost Surge and EX Special Attack: Frostflow Tundra can trigger at most once every 30s.<br>Upon activating this skill, gain 20 Frostbite Points. If Frostbite Points are maxed out, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill while in any Ether Veil, a Quick Assist is triggered. If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Temporary Alliance<br>When a Chain Attack is triggered, select the character to activate:<br>Launches multiple slashes in front, dealing massive <span class='element-ice'>Ice DMG</span>.<br>After using this skill, gains 5 Frostbite Points. If Frostbite Points are maxed out, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill while in any Ether Veil, a Quick Assist is triggered. If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Bunny Barrage<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches consecutive attacks in front, followed by a falling slash, dealing massive <span class='element-ice'>Ice DMG</span>.<br>After using this skill, gains 20 Frostbite Points. If Frostbite Points are maxed out, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill while in any Ether Veil, a Quick Assist is triggered. If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Ideal Colleague<br>Zhao gains bonus CRIT Rate based on her initial Max HP, gaining 1.4% CRIT Rate for every 1,000 initial Max HP.<br>Upon entering the battlefield, Zhao gains 100 Frostbite Points. This effect can trigger once every 180s in Investigation Zone mode. The maximum amount of Frostbite Points is 100.<br>When the currently active character's attacks hit an enemy, Zhao gains 6 Frostbite Points. This can be triggered once every 3s.<br>When Frostbite Points are maxed out, switching Zhao to the field while in combat will activate her Entry Skill.<br>When Zhao activates her Entry Skill, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>While Ether Veil: Wellspring is active, all squad members gain 5% Max HP for 40s. Re-activating Ether Veil: Wellspring ends the existing instance before applying a new Ether Veil: Wellspring.<br>When Zhao activates Ether Veil: Wellspring, all squad members' ATK increase by 1,000 for 50s. Repeated triggers reset the duration.<br><br>Additional Ability: Crystallization<br>When another character in your squad is an Attack, Anomaly, or Support character:<br>When Zhao is within any Ether Veil, the whole squad's DMG increases by 10%. If Zhao's initial Max HP exceeds 15,000, every additional 400 initial Max HP increases this DMG bonus by an additional 1%, up to a total maximum increase of 40%. This bonus reaches its maximum when Zhao's initial Max HP reaches 27,000."
        },
        mindscapes: [
            { number: 1, name: "Righteous Verdict ", desc: "When Zhao switches out of being the active character, all squad members' DMG ignores 15% of the target's All-Attribute RES for 50s." },
            { number: 2, name: "Krampus Senior  ", desc: "When Zhao recovers HP, her ATK increases by 20%, and other squad members' ATK increases by 15% for 50s. Repeated triggers reset the duration." },
            { number: 3, name: "Frostveil Edge  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Featherlight Footsteps  ", desc: "When Zhao activates an Ether Veil, she gains 250 Decibels. The CRIT DMG of her Ultimate, Chain Attack, and Basic Attack: Final Verdict increase by 40%." },
            { number: 5, name: "Fuzzy Listener ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "No Value Has Its Own Value  ", desc: "The CRIT Rate buff from Core Passive: Ideal Colleague increases to 125% of the original value. The extra DMG gained from charging during Basic Attack: Final Verdict increases to 140% of the original value, and accumulated charge time is no longer consumed when attacking." }
        ]
    },
    {
        id: 14,
        name: "Dialyn",
        rarity: "S",
        element: "Physical",
        role: "Stun",
        faction: "Krampus Compliance Authority",
        image: "image/дінька.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Happy to Be of Service<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to four attacks, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Basic Attack: Rock, Paper, Scissors<br>After EX Special Attack: Rock or EX Special Attack: Scissors, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Performs up to two attacks, dealing <span class='element-physical'>Physical DMG</span>.<br>During skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.",

            "Dodge": "Dodge: Line Busy<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Sudden Call<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Launches a dashing attack at enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Number Unavailable<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Launches consecutive attacks against enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Forward Call<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches consecutive attacks against enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Decline Call<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze. This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Back-to-Back Calls<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Performs a rapid dash followed by a slash attack, dealing <span class='element-physical'>Physical DMG</span>.<br>After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br>Character is invulnerable while using this skill.",

            "Special Attack": "EX Special Attack: Get Lost!<br>With Customer Complaint, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Delivers a forward martial salute attack. On activation, it consumes 1 Customer Complaint and deals <span class='element-physical'>Physical DMG</span>.<br>After activation, the previous character's Quick Assist is triggered.<br>Character is invulnerable while using this skill.<br><br>Special Attack: Welcome Gesture<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Throws dual rings to slash enemies, dealing <span class='element-physical'>Physical DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Rock<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a fist attack, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Scissors<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a scissors attack, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Paper!<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a paper attack, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Welcome Mat<br>When a Chain Attack is triggered, select the character to activate:<br>Launches consecutive kicks against enemies in front, dealing massive <span class='element-physical'>Physical DMG</span>.<br>After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Service Stopped for Number Dialed<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Rushes forward and performs a finger flick attack, dealing massive <span class='element-physical'>Physical DMG</span>.<br>After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Five-Star Service Hotline<br>Upon entering the battlefield, Dialyn starts with 60 Positive Reviews. If her initial CRIT Rate surpasses 50%, her Impact increases by 2 for each additional 1%, up to a maximum increase of 100.<br>After using EX Special Attack: Rock, the next EX Special Attack becomes EX Special Attack: Scissors for 8s.<br>After using EX Special Attack: Scissors, the next EX Special Attack becomes EX Special Attack: Paper! for 8s.<br>When EX Special Attack: Paper! hits an enemy, it applies the Malicious Complaint effect. While under Malicious Complaint, if the enemy becomes Stunned, the Stun duration is extended by 2s, and Stun DMG Multiplier increases by 30%. Before recovering from Stun, Malicious Complaint can trigger on the same target only once. The Stun duration bonus does not stack with similar effects. When an enemy with Malicious Complaint recovers from being Stunned, the effect ends.<br>While in combat, Dialyn gains 0.6 Positive Reviews per second. When a heavy attack of EX Special Attack: Rock, EX Special Attack: Scissors, or EX Special Attack: Paper! hits enemies, she gains 7.5 Positive Reviews. Each use of a skill can grant this bonus only once, up to a maximum of 120.<br>With at least 90 Positive Reviews, when Dialyn triggers the Chain Attack window using Chain Attack: Welcome Mat, EX Special Attack: Get Lost!, or Quick Assist: Forward Call," +
                " the next character to switch in will have their Chain Attack upgraded to an Ultimate.<br>When an ally launches an Ultimate this way, Dialyn consumes 60 Positive Reviews.<br>With at least 90 Positive Reviews, when Dialyn hits an enemy with EX Special Attack: Get Lost! and doesn't trigger a Chain Attack window, she consumes 90 Positive Reviews to forcibly trigger a Chain Attack window. The next character to switch in will have their Chain Attack upgraded to an Ultimate.<br>Each time Positive Reviews reaches 90 or an Ultimate is activated, Dialyn obtains 1 Customer Complaint. A maximum of 1 Customer Complaint can be held at a time.<br><br>Additional Ability: External Line<br>When another character in your squad is an Attack or Rupture character:<br>Dialyn's EX Special Attack CRIT DMG is increased by 50%.<br>When an EX Special Attack or Ultimate is activated, all squad members gain the Overwhelmingly Positive effect. While Overwhelmingly Positive is active, DMG dealt is increased by 40% for 15s. When Dialyn uses an EX Special Attack or Ultimate while Overwhelmingly Positive is active, if the remaining duration of Overwhelmingly Positive is less than 35s, its duration is extended by 10s.<br>When a heavy attack from EX Special Attack: Rock, EX Special Attack: Scissors, or EX Special Attack: Paper! hits, additional DMG is dealt based on the previous squad member's Specialty:<br>If the squad member is an Attack Agent, EX Special Attack: Rock, EX Special Attack: Scissors, and EX Special Attack: Paper! deal additional DMG equal to 320% of that Attack Agent's ATK.<br>If the squad member is a Rupture Agent, EX Special Attack: Rock, EX Special Attack: Scissors, and EX Special Attack: Paper! deal additional DMG equal to 400% of that Rupture Agent's Sheer Force."
        },
        mindscapes: [
            { number: 1, name: "Boundless Hospitality  ", desc: "The amount of Positive Reviews accumulated each second and gained when EX Special Attack: Rock, EX Special Attack: Scissors, or EX Special Attack: Paper! hits an enemy increase by 16%. While the Overwhelmingly Positive effect is active, characters ignore 15% of enemy All-Attribute RES." },
            { number: 2, name: "24/7 Hotline  ", desc: "Enemies affected by Malicious Complaint gain an additional 20% Stun DMG Multiplier when Stunned, and all units deal 15% increased DMG to targets affected by Malicious Complaint." },
            { number: 3, name: "Call From the Hollow  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "The Past Never Fades  ", desc: "Upon entering combat, Dialyn recovers 20 Energy. This effect can trigger once every 180s in Investigation Zone Mode. While the Overwhelmingly Positive effect is active, Dialyn's ATK increases by 500." },
            { number: 5, name: "Lies ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Truth  ", desc: "When an ally enters the field with an Ultimate through the Core Passive's effect, that ally gains the Aftertone effect. With this effect, landing an attack causes Dialyn to deal an additional instance of <span class='element-physical'>Physical DMG</span> equal to 480% of Dialyn's ATK. This DMG is treated as EX Special Attack DMG, and can trigger once every second, up to 12 times. Gaining Aftertone again refreshes its trigger count. Only one ally can have Aftertone at a time." }
        ]
    },
    {
        id: 15,
        name: "Nangong",
        rarity: "S",
        element: "Ether",
        role: "Stun",
        faction: "Angels of Delusion",
        image: "image/нань.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Shooting Star Step<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to three attacks forward, dealing <span class='element-ether'>Ether DMG</span>.<br><br>Basic Attack: Adorable Explosive Impact<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to launch a charged attack, dealing <span class='element-ether'>Ether DMG</span>. Release the button at the right moment to trigger precise charging, increasing the Daze dealt by the skill by 20%.<br>Nangong Yu can perform up to three hits. The second and third hits each must consume 50 Downbeats.<br>After using a Chain Attack, Ultimate, or EX Special Attack, if enough Downbeats are available, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to skip the first hit and directly perform the second and third hits, which always trigger precise charging.<br>When Nangong Yu is the active character, Chain Attacks, Ultimates, and EX Special Attacks do not interrupt the combo count of Basic Attack: Adorable Explosive Impact.<br>While charging the first hit, Anti-Interrupt Level increases and DMG taken decreases by 60%.<br>While charging the second and third hits, the character is Invulnerable.<br>During the dash phase of the first hit, enemy attacks can be Blocked. On a successful Block, the attack is treated as a precise charging attack.<br>Character is invulnerable during all attacks.",

            "Dodge": "Dodge: Natural Dancer<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Spinning Meteor<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Deliver a quick attack forward, dealing <span class='element-ether'>Ether DMG</span>.<br><br>Dodge Counter: Asteroid Waltz<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Launch a series of attacks on the target, dealing <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Emergency Save<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a series of attacks on the target, dealing <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Perfected Choreography<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Improvised Performance<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Launches a series of attacks on the target, dealing massive <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: The Weight of Love<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Delivers a morning star attack, dealing <span class='element-ether'>Ether DMG</span>.<br><br>EX Special Attack: The Unbearable Weight of Love<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Delivers a morning star attack, dealing <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Comet Gravity<br>When a Chain Attack is triggered, select the character to activate:<br>Launch a series of attacks forward, dealing massive <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Meteor Shower<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch multiple attacks forward, dealing massive <span class='element-ether'>Ether DMG</span>.<br>Upon activating this skill, Nangong Yu activates Ether Veil: Delusion Reprise. While Ether Veil: Delusion Reprise is active, all squad members gain an additional 50 ATK for 30s. If Nangong Yu activates Ether Veil: Delusion Reprise again, the current Ether Veil: Delusion Reprise will first deactivate.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Prodigious Idol<br>Nangong Yu's Anomaly Proficiency increases by 120.<br>When Nangong Yu's initial Anomaly Mastery exceeds 110, each point of initial Anomaly Mastery above that increases her Impact by 1.<br>When an enemy is Stunned, each time any character triggers Abloom DMG, Disorder DMG, or inflicts an Attribute Anomaly on the enemy, the enemy gains 1 stack of Vibrato.<br>A single enemy can have up to 4 stacks of Vibrato.<br>If Vibrato reaches the maximum stacks and the enemy is afflicted with an <span class='element-ether'>Ether</span>, <span class='element-electric'>Electric</span>, <span class='element-fire'>Fire</span>, <span class='element-physical'>Physical</span>, <span class='element-ice'>Ice</span>, or <span class='element-wind'>Wind</span> Anomaly, or if the enemy has Vibrato and recovers from being Stunned, all Vibrato stacks will be cleared.<br>When Vibrato is cleared, if the enemy is suffering an aforementioned Attribute Anomaly, Nangong Yu triggers an instance of Abloom DMG on the target, dealing an additional instance of Attribute Anomaly DMG equal to <span class='highlight-white'>720%</span>/<span class='highlight-white'>360%</span>/<span class='highlight-white'>900%</span>/<span class='highlight-white'>63%</span>/<span class='highlight-white'>90%</span>/<span class='highlight-white'>36%</span> of the original Attribute Anomaly DMG. Each stack of Vibrato on the enemy increases this Abloom DMG ratio by an additional 25%. During the same Stun period, once Vibrato has been cleared, the enemy cannot gain Vibrato again.<br>When Nangong Yu's Basic Attack: Adorable Explosive Impact or EX Special Attack: The Unbearable Weight of Love hits an enemy, her Anomaly Buildup Rate increases by 35%, and her Daze dealt increases by 20%, and the whole squad's DMG dealt increases by 25% for 30s." +
                " Repeated triggers reset the duration.<br>While in combat, Nangong Yu restores 3.8 Downbeats/s. When any squad member inflicts an Attribute Anomaly on an enemy, Nangong Yu restores an additional 12 Downbeats. This effect can trigger once every 6s.<br>Nangong Yu can have up to 100 Downbeats, and starts with 30 Downbeats upon entering the battlefield.<br><br>Additional Ability: Angel Captain<br>When another character in your squad is an Anomaly character or shares the same Faction:<br>Any squad member's attack against a Stunned enemy has 30% increased Anomaly Buildup. Chain Attacks against a Stunned enemy have an additional 30% increased Anomaly Buildup.<br>When any squad member Stuns an enemy, Nangong Yu gains 2 stacks of Dance Prowess, up to a maximum of 2 stacks, lasting 15s, repeated triggers reset the duration. With Dance Prowess, when a heavy attack from Nangong Yu's EX Special Attack: The Unbearable Weight of Love, Basic Attack: Adorable Explosive Impact, or Quick Assist: Emergency Save hits an enemy that is both Stunned and affected by an Attribute Anomaly, 1 stack of Dance Prowess is consumed to trigger the special Disorder effect Polarity Disorder against all enemies who meet the conditions. This deals DMG equal to 25% of the original Disorder DMG, and triggers the previous squad member's Quick Assist. Polarity Disorder does not clear the target's Attribute Anomaly. If the skill fails to trigger Polarity Disorder, Dance Prowess will not be consumed. When Nangong Yu has Dance Prowess, the next time she switches to the field, she will" +
                " immediately perform the first charged hit of Basic Attack: Adorable Explosive Impact, which will always trigger precise charging.<br>When any squad member Stuns an enemy, Nangong Yu's next EX Special Attack will not consume Energy. This effect lasts 15s and can trigger once every 15s.<br>When Nangong Yu and Aria are in the same squad, if Aria's Basic Attack: Perfect Pitch heavy attack hits an enemy that is both Stunned and affected by an Attribute Anomaly, and Nangong Yu fully participates in the attack, 1 stack of Dance Prowess will also be consumed to trigger Polarity Disorder on all enemies who meet the conditions.<br>When the third hit of Nangong Yu's Basic Attack: Adorable Explosive Impact or Ultimate: Meteor Shower hits an enemy, the enemy suffers Misstep. Under this effect, Stun DMG Multiplier increases by 30% and when an enemy becomes Stunned, their Stun duration increases by 3s. Before recovering from Stun, Misstep can only trigger once on the same target. The increased Stun duration cannot stack with similar effects. When an enemy with Misstep recovers from Stun, the Misstep effect ends."
        },
        mindscapes: [
            { number: 1, name: "Lazy Spotlight  ", desc: "When EX Special Attack: The Unbearable Weight of Love or Basic Attack: Adorable Explosive Impact hits an enemy, the enemy's All-Attribute RES decreases by 18% for 40s. Repeated triggers refresh the duration. When entering the battlefield, Nangong Yu's Downbeat is restored to the maximum. In Investigation Zone Mode, this effect can trigger once every 180s." },
            { number: 2, name: "Painless Tears  ", desc: "Each stack of Vibrato's additional Abloom DMG ratio increase from Core Passive: Prodigious Idol increases by an additional 10%. The Stun DMG Multiplier provided by Additional Ability: Angel Captain increases by an additional 30%. When the active character's Chain Attack heavy attack hits an enemy that is both Stunned and affected by an Attribute Anomaly, it triggers Polarity Disorder, dealing DMG equal to 25% of the original Disorder DMG. Each enemy can only trigger this effect once during the same Stun period." },
            { number: 3, name: "Chips on the Scales  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Accomplice's Dance Step  ", desc: "Anomaly Proficiency increases by 40. The Anomaly Buildup of Basic Attack: Adorable Explosive Impact when hitting an enemy increases by 35%." },
            { number: 5, name: "Center Stage ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "An Angel's Delusion  ", desc: "Nangong Yu's attacks deal 50% more Daze. When the enemy is not Stunned, each time any character triggers Abloom DMG, Disorder DMG, or inflicts an Attribute Anomaly on them, the enemy gains 1 stacks of Vibrato: Modified. When hit by the heavy attack of EX Special Attack: The Unbearable Weight of Love or Basic Attack: Adorable Explosive Impact, they gain 1 stacks of Vibrato: Modified. When hit by the heavy attack of Ultimate: Meteor Shower, they gain 2 stacks of Vibrato: Modified. Vibrato: Modified can stack up to 4 times. When the enemy becomes Stunned, all Vibrato: Modified stacks are cleared. When Vibrato: Modified is cleared, if the enemy is under an Ether, Electric, Fire, Physical, Ice, or Wind Anomaly, Nangong Yu triggers an instance of Abloom DMG on the target, dealing an additional instance of Attribute Anomaly DMG equal to 800%/400%/1,000%/70%/100%/40% of the original Attribute Anomaly DMG. Each stack of Vibrato: Modified on the enemy increases this Abloom DMG ratio by an additional 25%. Vibrato: Modified cannot stack with Vibrato." }
        ]
    },
    {
        id: 16,
        name: "Sunna",
        rarity: "S",
        element: "Physical",
        role: "Support",
        faction: "Angels of Delusion",
        image: "image/сана.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Mischief Meteor Hammer<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to four attacks ahead, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Basic Attack: Naughty Cat Spotted<br>During combat, when Sunna is off-field and there are no enemies with Cat's Gaze, Bubblegum consumes 1 Claw Sharpener to automatically launch an attack, dealing <span class='element-physical'>Physical DMG</span>.<br>When any squad member activates Ether Veil, Sunna gains 2 Claw Sharpeners.<br>When any squad member applies an Attribute Anomaly to an enemy, Sunna gains 1 Claw Sharpener. This effect can trigger at most once every 10s.<br>Bubblegum inherits Sunna's initial ATK. Sunna can hold up to 6 Claw Sharpeners.",

            "Dodge": "Dodge: Can't Hit Me<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Skyward Hammer<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Launches enemies in front into the air, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Delusion Strikeout<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Strikes enemies in front with a series of hammer blows, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Sonic Beatdown<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes a series of hammer attacks against enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Stage Fright<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Jump Training<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Continuously jumps forward on the inflatable hammer, dealing massive <span class='element-physical'>Physical DMG</span> to enemies in front.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Star Shooter<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Shoots Bubblegum to attack enemies in front using an air gun, dealing <span class='element-physical'>Physical DMG</span>. After activation, Bubblegum enters combat.<br><br>EX Special Attack: Bubblegum Barrage<br>With enough energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Hurls Bubblegum at the target, dealing <span class='element-physical'>Physical DMG</span>. After activation, Bubblegum enters combat.<br>Upon activating this skill, all Agents in the squad gain Angelic Chord-ination for 40s.<br>Landing a heavy attack with this skill triggers a Quick Assist.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Special Photography Technique<br>While in the Angelic Chord-ination state, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate, or during EX Special Attack: Bubblegum Barrage, keep holding <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to quickly activate:<br>Attacks the target enemy in coordination with Bubblegum, dealing <span class='element-physical'>Physical DMG</span>. After activation, Bubblegum enters combat.<br>Before the heavy attack is executed, activates Ether Veil: Delusion Reprise. While Ether Veil: Delusion Reprise is active, all squad members gain an additional 50 ATK for 40s. Re-activating Ether Veil: Delusion Reprise will cancel the existing instance of Ether Veil: Delusion Reprise.<br>Landing a heavy attack with this skill triggers a Quick Assist.<br>Character is invulnerable while using this skill. EX Special Attack: Special Photography Technique can be used once each time Sunna enters the Angelic Chord-ination state.",

            "Chain Attack": "Chain Attack: Don't Mess With the Cat<br>When a Chain Attack is triggered, select the character to activate:<br>Charges forward on Bubblegum, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Landing a heavy attack with this skill triggers a Quick Assist.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Smash It All!<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>After a series of hammer attacks, launches Bubblegum to cause an explosion, dealing massive <span class='element-physical'>Physical DMG</span> to enemies in an area.<br>On activating the heavy attack, gains 6 Claw Sharpeners.<br>Upon landing the downward attack from above on an enemy, triggers a Quick Assist and restores 2950 HP to all squad members.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Cuteness Is Justice<br>Characters in the Angelic Chord-ination state gain increased ATK, equal to 30% of Sunna's initial ATK, up to a maximum of 1,050 ATK. When Sunna's initial ATK reaches 3,500, the ATK bonus granted to all squad members reaches its maximum.<br>When attacks from Basic Attack: Naughty Cat Spotted, EX Special Attack: Bubblegum Barrage, EX Special Attack: Special Photography Technique, Chain Attack: Don't Mess With the Cat, or Ultimate: Smash It All! hit an enemy, apply Cat's Gaze to the target for 12s. While Sunna is on-field, the duration of Cat's Gaze is continuously refreshed. Some normal enemies affected by Cat's Gaze show reduced aggression toward Sunna.<br>When Attack or Anomaly characters in the squad continuously land attacks on enemies affected by Cat's Gaze, Cat's Gaze is triggered and removed:<br>When triggered by an Attack character, deals the Agent's Attribute DMG equal to 300% of ATK to enemies in an area.<br>When triggered by an Anomaly character, deals the Agent's Attribute DMG equal to 480% of ATK to enemies in an area. This DMG is guaranteed to CRIT, and the CRIT DMG is increased by 150%.<br>DMG dealt by Cat's Gaze is treated as DMG dealt by the triggering Agent.<br>When multiple enemies on the field have Cat's Gaze, only the primary attack target's Cat's Gaze is triggered. Upon triggering, Cat's Gaze is removed from all enemies on the field.<br>When an enemy is Stunned, the number of attacks required to trigger Cat's Gaze is significantly reduced.<br><br>Additional Ability: Daydreamer's Counterpoint<br>When another character in your squad is an Attack character or shares the same Faction:<br>When characters inside Ether Veil: Delusion Reprise land attacks on enemies, the target's Stun DMG Multiplier increases by 30% for 40s.<br>When Sunna enters the battlefield, she gains 15 Energy. In Investigation Zone mode, the effect can trigger once every 180s."
        },
        mindscapes: [
            { number: 1, name: "'Loneliness Corruption Symptoms' ", desc: "When Sunna enters the battlefield, she gains 15 Energy. In Investigation Zone Mode, this effect can trigger once every 180s. When Cat's Gaze triggers and damages an enemy, the target's DEF is reduced by 7% for 40s, stacking up to 3 times. The duration of each stack is calculated separately." },
            { number: 2, name: "'Feline Go- With - the - Flow'  ", desc: "While Sunna is within any Ether Veil, all squad members gain 10% ATK and she obtains 1 Claw Sharpener every 10s. The number of attacks required to trigger Cat's Gaze is reduced, and the DMG Multiplier on trigger is increased:When triggered by an Attack character, the DMG Multiplier is increased by 200%.When triggered by an Anomaly character, the DMG Multiplier is increased by 300%." },
            { number: 3, name: "'Transformation Apple' ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "'Delusion Investigation Team' ", desc: "When Sunna uses her Ultimate, all squad members deal 18% increased DMG for 60s." },
            { number: 5, name: "'Galaxy Tramway' ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "'Hollow Big Bang'  ", desc: "When Sunna uses an EX Special Attack, she enters the Focused Creation! state for 8s.<br><br>While in the Focused Creation! state, all attacks Sunna performs are guaranteed to CRIT, and her CRIT DMG increases by 0.03% of her initial ATK, up to a maximum of 105%<br><br>While in the Focused Creation! state, Sunna's Anti-Interrupt Level is increased, and DMG taken is reduced by 40%.<br><br>While in the Focused Creation! state, Sunna can trigger Cat's Gaze, its DMG being calculated using Attack Agent rules. If Cat's Gaze is triggered while Sunna has a Claw Sharpener, the Claw Sharpener is immediately consumed, and Cat's Gaze is reapplied to the enemy.<br><br>While in the Focused Creation! state, DMG dealt when any squad member triggers Cat's Gaze increases by 50%." }
        ]
    },
    {
        id: 17,
        name: "Ye Shunguang",
        rarity: "S",
        element: "Physical",
        role: "Attack",
        faction: "Yunkui Summit",
        image: "image/Е.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Swiftedge<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches up to four forward slashes, dealing <span class='element-physical'>Physical DMG</span>.<br>Can be chained into Dash Attack: Phantasm Dash after the 4th hit.<br><br>Basic Attack: Cloudstream Sword Will<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a flurry of blade shockwaves, dealing <span class='element-physical'>Physical DMG</span>. Hold to extend the attack.<br>Anti-Interrupt Level is increased during this skill.<br><br>Basic Attack: Enlightened Mind - Splitting Currents<br>While in the Enlightened Mind state and on the ground, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Performs up to three forward slashes, dealing <span class='element-physical'>Physical DMG</span>.<br>If struck by an enemy attack during the 3rd hit, triggers a block, negating that instance of DMG.<br>If she possesses Qingming Sword Force, the 3rd hit is replaced with Basic Attack: Enlightened Mind - Skyward Ascent.<br><br>Basic Attack: Enlightened Mind - Skyward Ascent<br>While in the Enlightened Mind state and with Qingming Sword Force, after the 2nd hit of Basic Attack: Enlightened Mind - Splitting Currents, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a swift rising attack, dealing <span class='element-physical'>Physical DMG</span> and entering an airborne state.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Enlightened Mind - Sunderlight Maximum<br>After activating Basic Attack: Enlightened Mind - Sunderlight Annihilation, and with Qingming Sword Force, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to" +
                "activate:<br>Launches a wide sweeping slash forward, dealing massive <span class='element-physical'>Physical DMG</span>. On hit, 1 point of Qingming Sword Force is consumed.<br>If struck by an enemy during the skill, triggers a block, negating that instance of DMG and increasing the skill's Interrupt Level.<br>After using this skill and with Qingming Sword Force, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to consume 1 point of Qingming Sword Force and launch a hit of EX Special Attack: Enlightened Mind - Soaring Light. This skill is automatically followed up with Basic Attack: Enlightened Mind - Skyward Ascent, and Ye Shunguang enters an airborne state.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Enlightened Mind - Sunderlight<br>In the Enlightened Mind state, and while airborne, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches up to two downward slashes in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>Press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> or <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to follow up with Basic Attack: Enlightened Mind - Sunderlight Annihilation.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Enlightened Mind - Sunderlight Annihilation<br>After the 2nd hit of Basic Attack: Enlightened Mind - Sunderlight, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to" +
                " activate:<br>Performs a falling attack in front, entering a grounded state, and dealing <span class='element-physical'>Physical DMG</span>.<br>When launching this skill with 2 or more points of Qingming Sword Force, Ye Shunguang will perform a downward falling strike across a large area in front instead, dealing massive <span class='element-physical'>Physical DMG</span>. On hit, 2 points of Qingming Sword Force are consumed, granting the Culmination effect. After using this skill, if Ye Shunguang possesses Qingming Sword Force, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to consume 1 point of Qingming Sword Force and launch a hit of EX Special Attack: Enlightened Mind - Soaring Light, which can be quickly followed up with Basic Attack: Enlightened Mind - Sunderlight Maximum.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>During this skill, if attacked by enemies, triggers a block, negating " +
                "that instance of DMG.<br>Character is invulnerable while using this skill.<br><br>Culmination<br>During EX Special Attack: Enlightened Mind - Soaring Light, each time Qingming Sword Force is consumed while Culmination is active, the Qingming Sword Force cost is replaced by consuming Culmination instead. This effect does not stack, and lasts until the current Enlightened Mind ends.",

            "Dodge": "Dodge: Leave No Trace<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br>During the Enlightened Mind state, and if a Perfect Dodge is triggered, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate Basic Attack: Enlightened Mind - Skyward Ascent.<br><br>Dodge: Wandering Cloud<br>While tilting the joystick, hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Enters a high-speed movement state. Steer with the joystick, and release the joystick to stop.<br><br>Dash Attack: Phantasm Dash<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Swallow Strike<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Leaps into the air and thrusts forward, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Entry Skill: Illuminating Darkness<br>With 6 Qingming Sword Force and while not in the Enlightened Mind state, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate, or press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> while in combat and switch on-field from off-field to activate:<br>Enters the Enlightened Mind state and activates Ether Veil: Verdict.<br>Deals <span class='element-physical'>Physical DMG</span> to enemies in a large area in front.<br>Activating this skill is considered as activating a Quick Assist.<br>Enters the airborne state after using this skill.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Support Guard<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Leaps into the air and thrusts forward, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: When I Return<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Cease Hostility<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Deals massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Quick Assist: Enlightened Mind - Tactical Support<br>While in the Enlightened Mind state, when the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a forward slash, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Enlightened Mind - Unification<br>While in the Enlightened Mind state and after a Defensive Assist, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Deals massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Guiding Tides<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>If a dodge is available, 1 dodge chance is consumed, and the action is counted as activating a Dodge.<br>If no dodge is available or a Perfect Dodge is not triggered, launches a quick sword energy attack that deals <span class='element-physical'>Physical DMG</span>.<br>If a Perfect Dodge is triggered at this time, launches a flying sword attack, dealing <span class='element-physical'>Physical DMG</span>, and immediately follow up with the 2nd hit of Basic Attack: Swiftedge.<br>Character is briefly invulnerable during the skill.<br><br>EX Special Attack: Gale Suppression<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a rushing slash and a flying sword attack at the enemy, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Enemy attacks can be dodged during this skill.<br>After this skill is used, gain 1 point of Qingming Sword Force.<br>Character is invulnerable while using this skill.<br><br>Special Attack: Enlightened Mind - Clean Exit<br>While in the Enlightened Mind state and grounded, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Performs a swift backstep slash, dealing <span class='element-physical'>Physical DMG</span>.<br>If a dodge is available, 1 dodge chance is consumed, and the action is counted as activating a Dodge.<br>If a Perfect Dodge is triggered at this time, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to quickly activate Enlightened Mind - Sunderlight Maximum and enter Vital View.<br>After this Enlightened Mind - Sunderlight Maximum activates, it can be immediately followed up with Basic Attack: Enlightened Mind - Skyward Ascent.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Enlightened Mind - Soaring Light<br>In the Enlightened Mind state and with Qingming Sword Force, hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Performs quick consecutive" +
                " slashes, dealing massive <span class='element-physical'>Physical DMG</span> while rapidly consuming Qingming Sword Force until none remains.<br>The skill ends early if Qingming Sword Force is insufficient or if <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> is released.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Enlightened Mind - Return to Dust<br>In the Enlightened Mind state, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> or hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> when all Qingming Sword Force is expended to activate:<br>Deals massive <span class='element-physical'>Physical DMG</span> to enemies in a large area.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>After using this skill, Ether Veil: Verdict is removed and the Enlightened Mind state ends.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Smite the Wicked<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful slash at enemies ahead in a large area, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Chasing Storms<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Summons a sword formation and enter the Enlightened Mind state, activating an Ether Veil: Verdict while also gaining 6 Qingming Sword Force. This skill deals massive <span class='element-physical'>Physical DMG</span>.<br>Upon activating this skill, if Decibels are consumed, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> while in this Enlightened Mind state to launch an Ultimate: Cleaving Heavens that doesn't consume Decibels.<br>Enter the airborne state after using this skill.<br>Character is invulnerable while using this skill.<br><br>Chain Attack: Enlightened Mind - Lure Thunder<br>While in the Enlightened Mind state, and when a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful slash at enemies ahead in a large area, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>Enter the airborne state after using this skill.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Cleaving Heavens<br>After consuming Decibels to launch Ultimate: Chasing Storms and while in the Enlightened Mind state, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> or hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> when all Qingming Sword Force is expended to activate:<br>Summons a massive blade, dealing massive <span class='element-physical'>Physical DMG</span> to enemies.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>After using this skill, the Enlightened Mind state ends, and Ether Veil: Verdict is removed.<br>This skill doesn't consume Decibels.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Burning Clarity<br>When not in the Enlightened Mind state and with fewer than 6 points of Qingming Sword Force, certain attacks slowly build Qingming Sword Force. Whenever Qingming Sword Force is gained by any means, each 1 point of Qingming Sword Force that exceeds the limit is converted into 1 stack of Bearer, stacking up to 3 times. Upon leaving the Enlightened Mind state, all Bearer stacks are consumed to grant the same number of Qingming Sword Force stacks.<br>Upon entering the battlefield, gain Unity, increasing CRIT Rate by 30% and DMG by 25%.<br>When Ultimate: Chasing Storms or Entry Skill: Illuminating Darkness is unleashed, Ye Shunguang enters the Enlightened Mind state and activates Ether Veil: Verdict. Ether Veil: Verdict has the same duration as Enlightened Mind. The duration lasts 16s, and the duration timer pauses while she is off-field. During the Enlightened Mind state, Ye Shunguang's skills are enhanced, all <span class='element-physical'>Physical DMG</span> dealt by her skills becomes Honed Edge DMG.<br>While Ether Veil: Verdict is active, when an enemy enters Ether Veil: Verdict, they gain a Veil Vulnerability effect based on their current Stun DMG Multiplier. During this, when Ye Shunguang deals DMG to enemies with her skills, enemy Stun DMG Multiplier is ignored and replaced with the Veil Vulnerability bonus. Veil Vulnerability caps at 110%. The effect is removed when Ether Veil: Verdict ends.<br><br>Additional Ability: Shadowtrace Flight<br>When another character in your squad is a Support or Defense character:<br>When a squadmate activates any Ether Veil, gain 3 points of Qingming Sword Force. If already in the Enlightened Mind state, this is instead converted into 3 stacks of Bearer."
        },
        mindscapes: [
            { number: 1, name: "Dreambound Self  ", desc: "Upon entering the battlefield, gains 6 Qingming Sword Force. This effect can trigger once every 180s in Investigation Zone mode.The Unity effect from Core Passive: Burning Clarity increases DMG dealt by an additional 10%, and they ignore 20% of the target's DEF." },
            { number: 2, name: "Light & Shadow  ", desc: "The max stack count of Bearer increases to 6, and Culmination can stack up to 9 times. While in the Enlightened Mind state, each point of Qingming Sword Force consumed grants 1 stack of Culmination. EX Special Attack: Enlightened Mind - Soaring Light and Ultimate: Cleaving Heavens's DMG ignore 40% of the target's DEF." },
            { number: 3, name: "Swordswoman  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Together into the Dust  ", desc: "Upon entering the battlefield, gains 1,000 Decibels. In Investigation Zone mode, this effect can trigger once every 180s. The Vulnerability bonus provided by Ether Veil: Verdict is increased to a maximum of 200%." },
            { number: 5, name: "Guiding Glimmer ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Lantern Wish  ", desc: "Upon entering the battlefield, gains 2 stacks of Lantern Wish. When entering the Enlightened Mind state, gains 1 stack of Lantern Wish, stacking up to 4 times. With 3 stacks of Lantern Wish, EX Special Attack: Enlightened Mind - Return to Dust is replaced with Ultimate: Cleaving Heavens. When this Ultimate: Cleaving Heavens is activated, it consumes 3 stacks of Lantern Wish. The last hit of Enlightened Mind - Return to Dust and Ultimate: Cleaving Heavens deal 1,500% of ATK as additional <span class='element-physical'>Physical DMG</span>." }
        ]
    },
    {
        id: 18,
        name: "Banyue",
        rarity: "S",
        element: "Fire",
        role: "Rupture",
        faction: "Krampus Compliance Authority",
        image: "image/бан.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Towering Peaks<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches up to four attacks in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Interrupt Level is increased during this skill.<br><br>Basic Attack: Majestic Summit<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches up to four attacks in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Anti-Interrupt Level is increased during this skill.<br><br>Basic Attack: Immolate<br>While not in the Visage of Wrath state and with at least 120 Wrathful Fires, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Deals <span class='element-fire'>Fire DMG</span> to nearby enemies, then enters the Visage of Wrath state.<br><br>Basic Attack: Inflame<br>While not in combat and with more than 50% HP and less than 120 Wrathful Fires, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Banyue consumes HP to recover Wrathful Fires. Upon reaching 120 Wrathful Fires, Banyue immediately enters the Visage of Wrath state.<br>Upon entering the battlefield, gain one chance to use this skill. In Investigation Zone mode, this effect can trigger once per 180s.<br>HP consumption will at most reduce Banyue's HP to 50% of Max HP.<br><br>Basic Attack: Toppling Mountain<br>When Banyue is in the Visage of Wrath state, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to consume 120 Wrathful Fires and activate:<br>Banyue hurls a massive mountain at the enemy, dealing massive <span class='element-fire'>Fire DMG</span>.<br>After using this move, Banyue exits the Visage of Wrath state.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Crushing Peaks<br>While Banyue is in the Visage of Wrath state and after performing two different EX Special Attacks through Basic Attack branches or quick input commands, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Banyue launches his beads forward to imprison enemies, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Banyue automatically follows up with Basic Attack: Toppling Mountain.<br>Character is invulnerable while using this skill.",

            "Dodge": "Dodge: Immovable Mountain<br>While attacking, press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> without moving the joystick to activate:<br>Banyue enters a defensive stance. If attacked during this time, he parries the enemy's attack and accumulates Daze.<br>If attacked at the exact moment the skill is activated, a Perfect Block occurs.<br>Character is invulnerable during a successful parry.<br><br>Dodge: Overcome Peaks<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dodge: Battle Cry<br>Rotate the joystick in a half-circle and press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Dodges backward and taunts enemies.<br>After any EX Special Attack, follow up with Dodge: Battle Cry and quickly execute the required inputs during Dodge: Battle Cry to then follow up with the corresponding EX Special Attack.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Scattering Sands<br>During a dodge, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'>, or during Dodge: Battle Cry, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches beads forward, dealing <span class='element-fire'>Fire DMG</span>.<br>After using this skill, can be followed up with the 2nd hit of Basic Attack: Towering Peaks or the 2nd hit of Basic Attack: Majestic Summit.<br><br>Dodge Counter: Stoneburst<br>After a Perfect Dodge is triggered through Dodge: Overcome Peaks, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'>, or after a Perfect Dodge is triggered though Dodge: Battle Cry, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a forward attack that deals <span class='element-fire'>Fire DMG</span>.<br>After using this skill, can be chained into the 3rd hit of Basic Attack: Towering Peaks or the 3rd hit of Basic Attack: Majestic Summit.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Batholith<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Executes a series of attacks against enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Iron Bastion<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Lofty Ascent<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Quickly dash forward and attack, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Pierce Heavens<br>After successfully parrying an enemy attack with Dodge: Immovable Mountain, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Quickly dash forward and attack, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "EX Special Attack: Earth Shaker<br>With enough Adrenaline, can be activated in one of three ways:<br>After the 3rd or 4th hit of Basic Attack: Towering Peaks, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>After an Assist Follow-Up, Dodge Counter, or Quick Assist, hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>During an EX Special Attack, Basic Attack: Immolate, Chain Attack, Ultimate, Assist Follow-Up, Dodge Counter, or Quick Assist, quickly input <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> in sequence to activate:<br>Banyue slams the ground repeatedly, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Mountain Tremor<br>With enough Adrenaline, can be activated in one of two ways:<br>After the 1st or" +
                " 2nd hit of Basic Attack: Majestic Summit, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>During an EX Special Attack, Basic Attack: Immolate, Chain Attack, Ultimate, Assist Follow-Up, Dodge Counter, or Quick Assist, quickly input <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> in sequence to activate:<br>Banyue throws a mountain, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: One's Path<br>With enough Adrenaline, can be activated in one of three ways:<br>After the 3rd or 4th hit of Basic Attack: Majestic Summit, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>After an Assist Follow-Up, Dodge Counter, or Quick Assist, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>During an EX Special Attack, Basic Attack: Immolate, Chain Attack, Ultimate, Assist Follow-Up, Dodge Counter, or Quick Assist, quickly input <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> in" +
                " sequence to activate:<br>Banyue throws out his beads, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Lion's Roar<br>With enough Adrenaline, can be activated in one of two ways:<br>After the 1st or 2nd hit of Basic Attack: Towering Peaks, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>During an EX Special Attack, Basic Attack: Immolate, Chain Attack, Ultimate, Assist Follow-Up, Dodge Counter, or Quick Assist, quickly input <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> in sequence to activate:<br>Banyue sends out a sonic wave forward, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Mountain Tremor - Wrath<br>With enough Adrenaline when using EX Special Attack: Earth Shaker, quickly input <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> in sequence to activate:<br>Banyue throws out an even larger mountain, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Lion's Roar - Wrath<br>With enough Adrenaline when using EX Special Attack: One's Path, quickly input <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> in sequence to activate:<br>Banyue releases a powerful sonic wave in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Cancel<br>When Banyue activates an EX Special Attack ALT through quick input commands, the currently activating EX Special Attack can be interrupted. Each EX Special Attack has its own Perfect Interrupt window. Interrupting an EX Special Attack after its Perfect Interrupt window will not affect the interrupted EX Special Attack's effect. Interrupting an EX Special Attack" +
                " during the Perfect Interrupt window is equal to triggering a Perfect Cancel.<br>While in the Visage of Wrath state and with Mountain's Might, Perfect Cancel is easier to trigger.",

            "Chain Attack": "Chain Attack: Blazing Wrath<br>When a Chain Attack is triggered, select the character to activate:<br>Launches a large area attack in front, dealing massive <span class='element-fire'>Fire DMG</span>.<br>If Banyue has more than 120 Wrathful Fires, he automatically enters the Visage of Wrath state after the attack.<br>Character is invulnerable while using this skill.<br><br>Ultimate: The World Trembles<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches a large area attack in front, dealing massive <span class='element-fire'>Fire DMG</span>.<br>If Banyue has more than 120 Wrathful Fires, he automatically enters the Visage of Wrath state after the attack.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: One With the Mountains<br>Banyue gains extra Sheer Force based on his Max HP, with every 1 point of Max HP increasing his Sheer Force by 0.1.<br>All <span class='element-fire'>Fire DMG</span> Banyue deals is Sheer DMG, ignoring enemy DEF and using his Sheer Force stat as the DMG Multiplier.<br>When Banyue enters the battlefield, he immediately recovers 60 Adrenaline. In Investigation Zone Mode, this effect can trigger once every 180s.<br>Banyue can recover Wrathful Fires through the following methods:<br>Recover 0.5 Wrathful Fires for every point of Adrenaline consumed;<br>Recover 4 Wrathful Fires upon activating Defensive Assist;<br>Recover 4 Wrathful Fires when parrying an enemy with Dodge: Immovable Mountain, and recover 6 Wrathful Fires instead upon triggering a Perfect Block, up to once every 1s;<br>Recover 4 Wrathful Fires upon triggering a Perfect Dodge, up to once every 1s.<br>Banyue can have up to 150 Wrathful Fires. When he possesses at least 120 Wrathful Fires, Banyue can enter the Visage of Wrath state by using Basic Attack: Immolate. While in Visage of Wrath state, Banyue can no longer gain Wrathful Fires. After Banyue uses Basic Attack: Toppling Mountain, he exits the Visage of Wrath state.<br>When entering the Visage of Wrath state, Banyue gains 4 Mountain's Might. If Banyue has Mountain's Might, launching an EX Special Attack no longer consumes Adrenaline, instead consuming 1 Mountain's Might and restoring 10 Adrenaline. Upon exiting the Visage of Wrath state, remove all Mountain's Might.<br>When possessing Mountain's Might in Visage of Wrath state, hold <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to launch four different EX Special Attacks and Basic Attack: Toppling Mountain in a fixed sequence.<br>When Banyue uses an EX Special Attack or Assist Follow-Up, he increases his Sheer Force by 300, <span class='element-fire'>Fire DMG</span> by 36%, and CRIT DMG by 36% for 30s. Repeated triggers reset the duration.<br><br>Additional Ability: Mountain's Zenith<br>When another character in your squad is a Support or Stun character:<br>While in the Visage of Wrath state, when Banyue consumes Mountain's Might to unleash an EX Special Attack through " +
                "a Basic Attack branch or quick input commands, he gains one stack of Vidyaraja. Each stack of Vidyaraja increases his <span class='element-fire'>Fire DMG</span> by 5%, stacking up to 3 times and lasting 8s. Repeated triggers reset the duration."
        },
        mindscapes: [
            { number: 1, name: "Greed Burns Like Fire  ", desc: "When Banyue hits an enemy with EX Special Attack: One's Path or EX Special Attack: Earth Shaker, he inflicts the Tremor state. In this state, enemies' Fire RES is reduced by 10%, lasting 30s. When EX Special Attack: Lion's Roar, EX Special Attack: Lion's Roar - Wrath, EX Special Attack: Mountain Tremor, EX Special Attack: Mountain Tremor - Wrath, Basic Attack: Toppling Mountain, and Basic Attack: Crushing Peaks hits an enemy in the Tremor state, the Sheer DMG dealt is increased by 10%. When Basic Attack: Crushing Peaks hits a Stunned enemy, the current Stun duration is extended by 2s. This effect can only trigger once per Stun and does not stack with similar effects." },
            { number: 2, name: "Anger Cuts Like a Blade  ", desc: "The CRIT DMG bonus from the Core Passive is increased by an additional 15%, and the <span class='element-fire'>Fire DMG</span> bonus is increased by an additional 15%. While in the Visage of Wrath state, Banyue restores an additional 5 Adrenaline when consuming Mountain's Might to unleash an EX Special Attack." },
            { number: 3, name: "Ignorance Binds Like Chains  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Purge Unit - Type Zero  ", desc: "EX Special Attack: Lion's Roar - Wrath, EX Special Attack: Mountain Tremor - Wrath, Basic Attack: Toppling Mountain, and Basic Attack: Crushing Peaks DMG increase by 30%." },
            { number: 5, name: "Student ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Descended Vidyaraja  ", desc: "At any time, when Banyue uses an EX Special Attack, he also gains Vidyaraja. The <span class='element-fire'>Fire DMG</span> bonus from Vidyaraja is increased by an additional 8%, and its duration is extended to 30s. When activating Basic Attack: Crushing Peaks, Banyue deals <span class='element-fire'>Fire DMG</span> equal to 600% of his Sheer Force to nearby enemies. Using Dodge: Battle Cry immediately after an EX Special Attack also grants Vidyaraja." }
        ]
    },
    {
        id: 19,
        name: "Lucia",
        rarity: "S",
        element: "Ether",
        role: "Support",
        faction: "Spook Shack",
        image: "image/лююс.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Orbital Combo<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to five forward strikes, dealing <span class='element-ether'>Ether DMG</span>.<br>The fifth attack is a Whim, conjuring an Ethereal figure that inflicts <span class='element-ether'>Ether DMG</span> on enemies in a circular area ahead.<br>When in combat and not in the Dream state, Lucia gains 40 Dream Points upon using this Whim.",

            "Dodge": "Dodge: Fading Silhouette<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Refraction<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Deliver a quick strike forward, dealing <span class='element-ether'>Ether DMG</span>.<br><br>Dodge Counter: Stardust Echo<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>This Dodge Counter is a Whim. When activated, summons an Ethereal figure that delivers a downward attack in a circular area ahead, dealing <span class='element-ether'>Ether DMG</span>.<br>If not in the Dream state, Lucia gains 20 Dream Points upon using this Whim. This effect can trigger once every 5s.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Crushing Mist<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>This Quick Assist is a Whim. When activated, it summons an Ethereal figure that delivers a downward attack in a circular area ahead, dealing <span class='element-ether'>Ether DMG</span>.<br>If not in the Dream state, Lucia gains 20 Dream Points upon using this Whim. This effect can trigger once every 5s.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Voice of Illusory Dreams<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Harmony of Painted Dreams<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>This Assist Follow-Up is a Harmony. When activated, it summons an Ethereal figure that delivers a downward attack in a circular area ahead, dealing <span class='element-ether'>Ether DMG</span>.<br>If not in the Dream state, Lucia gains 40 Dream Points upon using this Harmony.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Symphony of the Reaper - Storm<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>This Special Attack is a Whim. When activated, it recreates an Ethereal figure that slashes forward in a line, dealing <span class='element-ether'>Ether DMG</span>.<br>When in combat and not in the Dream state, Lucia gains 20 Dream Points upon using this Whim. This effect can trigger once every 5s.<br><br>EX Special Attack: Symphony of the Reaper - Daybreak<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>This EX Special Attack is a Harmony. When activated, it summons an Ethereal figure that delivers a powerful forward slash in a line, dealing <span class='element-ether'>Ether DMG</span>.<br>When Lucia uses any Harmony, all squad members gain the Darkbreaker state. While in Darkbreaker state, Sheer Force increases by 12. Every 200 points of Lucia's initial Max HP grants an additional 7.4 Sheer Force. The Darkbreaker state can increase Sheer Force by up to a maximum of 900, lasting 20s and repeated triggers reset the duration. When Lucia's initial Max HP reaches 24,000, the above bonus effect reaches its maximum value.<br>When any Harmony deals DMG, Lucia increases the final attack's DMG by an additional 70% of her Max HP.<br>If she activates this EX Special Attack while in the Dream state and under the effect of Ether Veil: Wellspring, Ether Veil: Wellspring duration is extended by 16s.<br>After activating her EX Special Attack, Lucia can immediately follow up with the 5th hit of her Basic Attack.<br>If not in the Dream state, Lucia gains 60 Dream Points upon using this Harmony.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Stage of Brilliance<br>When a Chain Attack is triggered, select the character to activate:<br>This Chain Attack is a Harmony. When activated, it summons an Ethereal figure that pulls in enemies in a circular area ahead and deals <span class='element-ether'>Ether DMG</span>.<br>If not in the Dream state, Lucia gains 40 Dream Points upon using this Harmony.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Charge, Great Armor!<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>This Ultimate is a Harmony. When activated, Lucia summons an Ethereal figure and rides it forward in a charge. Holding a directional button allows her to steer and extend the charge, up to 3s. During the charge, Anti-Interrupt Level is increased, DMG taken is reduced by 40%, and when Lucia takes fatal DMG, she remains in battle with HP not dropping below 1.<br>When the charge ends, Lucia unleashes a powerful strike in a large area around her, dealing <span class='element-ether'>Ether DMG</span>. A Quick Assist is triggered when this skill hits an enemy, and after the skill is used, it leaves behind a Starlight Convergence. Starlight Convergence lasts 8s. While inside Starlight Convergence, the currently active character gains HP regeneration equal to 1.6% of Lucia's Max HP per second. This effect ends 4s after leaving the Starlight Convergence or immediately when switching out.<br>After activation, if Lucia is in the Dream state and Ether Veil: Wellspring is active, Ether Veil: Wellspring duration is extended by 32s.<br>If not in the Dream state, Lucia gains 100 Dream Points upon using this Harmony. If she is in the Dream state when activating this Harmony, she will gain 100 Dream Points and re-enter Dream state the next time she exits it. This effect cannot be stacked.<br>Character is invulnerable while performing the powerful strike.",

            "Core Skill": "Core Passive: Lost Nocturne<br>When entering the battlefield, Lucia immediately gains 60 Dream Points. If her Dream Points reaches 100 upon activating a Whim or Harmony, she enters the Dream state.<br>When entering the Dream state, it triggers a Quick Assist and simultaneously activates Ether Veil: Wellspring. While Ether Veil: Wellspring is active, all squad members' Max HP increase by 5%, lasting 40s. Repeated triggers extend the duration, up to a max of 300s.<br>While Lucia is in the Dream state, using any Whim consumes 25 Dream Points and upgrades it to Harmony. Whenever another active character's attack hits an enemy, Lucia consumes 25 Dream Points to unleash an Aftershock. This Aftershock is a Harmony. After Lucia triggers a skill upgrade or Aftershock, Aftershock cannot be triggered for 8s.<br>When Lucia triggers a skill upgrade or an Aftershock, all squad members gain the Dreamer's Nursery Rhyme state. While in Dreamer's Nursery Rhyme state, DMG dealt increases by 20% for 12s. Repeated triggers reset the duration.<br>If Lucia runs out of Dream Points or she leaves the Ether Veil, she exits the Dream state.<br><br>Additional Ability: Ballad of the Long Night<br>When another character in your squad is a Rupture or Stun character:<br>When applying Darkbreaker, additionally applies a 30% CRIT DMG increase effect."
        },
        mindscapes: [
            { number: 1, name: "Secret Friend  ", desc: "When Dreamer's Nursery Rhyme deals additional DMG, ignore 18% of enemy All-Attribute RES and have 5% increased Decibel Generation Rate. Each time Lucia performs a skill upgrade, she gains 1 stack of Echo, stacking up to 4 times. When Dreamer's Nursery Rhyme ends, if Lucia has any Echo stacks, 1 stack is consumed to reapply Dreamer's Nursery Rhyme to all squad members." },
            { number: 2, name: "Great Magician  ", desc: "While Lucia is inside Ether Veil: Wellspring, Harmony deals 15% more DMG. Agents in the Darkbreaker state gain an additional 15% Sheer DMG increase while in Ether Veil: Wellspring." },
            { number: 3, name: "The Best Partner  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Late-Night Hours  ", desc: "When Ether Veil is activated or extended on the field, Lucia grants all squad members 100 Decibels. This effect can trigger once every 15s." },
            { number: 5, name: "Dream Watcher  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "The Never-Ending Journey  ", desc: "When Lucia is inside any Ether Veil, her ATK increases by 2% of her initial Max HP, and Harmony always triggers a CRIT with Harmony CRIT DMG increased by 30%." }
        ]
    },
    {
        id: 20,
        name: "Yidhari",
        rarity: "S",
        element: "Ice",
        role: "Rupture",
        faction: "Spook Shack",
        image: "image/ідха.webp",
        stats: {
            "HP": "8497",
            "ATK": "858",
            "DEF": "448",
            "Impact": "95",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "87",
            "Anomaly Proficiency": "90",
            "Adrenaline Accumulation": "2",
            "Sheer Force": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Crushing Strike<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 3 strikes, dealing <span class='element-ice'>Ice DMG</span>.<br>On the 3rd hit, Yidhari recovers 10% HP.<br><br>Basic Attack: Frostbite Embrace<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Yidhari begins charging, continuously consuming HP to reach up to three levels of charge. When <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> is released, Yidhari unleashes a powerful charged hammer attack in front based on the current charge level, dealing massive <span class='element-ice'>Ice DMG</span>.<br>The higher Yidhari's HP, the faster charging consumes it. HP consumption will at most reduce Yidhari's HP to 25% of Max HP.<br>At 2 charge levels, after using the skill, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with the 3rd hit of Basic Attack: Crushing Strike. The DMG of a Basic Attack: Crushing Strike triggered this way increases based on the current charge level, up to 30%.<br>At 3 charge levels, Yidhari gains increased Anti-Interrupt level during the charged skill. Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to chain early into the finishing smash.<br><br>Frost's Crushing Weight<br>While charging or spinning during Basic Attack: Frostbite Embrace, if hit by an enemy, Yidhari can block with her tentacles, reducing the DMG taken by 25%.<br>If charging or not yet at full charge, Yidhari counterattacks with her tentacles, returning to the charging stance and instantly gaining 1 charge level, while also dealing <span class='element-ice'>Ice DMG</span> to enemies ahead.<br>While Frost's Crushing Weight is active, pressing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> makes Yidhari immediately unleash the finishing slam of Basic Attack: Frostbite Embrace based on her current charge level.<br>While Frost's Crushing Weight is active, pressing <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> or <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> makes Yidhari unleash a Special Attack: Surging Cold, Crushing Pursuit that is guaranteed to trigger Surging Cold.",

            "Dodge": "Dodge: Dreamshift<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Frostbloom Impact<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Strike forward, dealing <span class='element-ice'>Ice DMG</span>.<br><br>Dodge Counter: Icehaul Reverb<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Strikes enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Frostshock Reinforcement<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strikes enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Flashquake Rejection<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Glacial Onslaught<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Execute an ice shard hammer attack against enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Cease Thoughts<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches enemies in front into the air, dealing <span class='element-ice'>Ice DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Frost Coil<br>With enough Adrenaline, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform two consecutive upward strikes, then release an icy mist, dealing massive <span class='element-ice'>Ice DMG</span>.<br>If EX Special Attack: Frost Coil hits an enemy, Yidhari recovers HP at the end of the skill equal to 33% of her missing HP.<br>Character is invulnerable while using this skill.<br><br>Special Attack: Surging Cold, Crushing Pursuit<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> or <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> while charging or spinning during Basic Attack: Frostbite Embrace, or press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> while holding <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches enemies in front into the air, dealing <span class='element-ice'>Ice DMG</span>.<br>When the skill's attack collides with an enemy's attack, it triggers Surging Cold.<br>If the skill hits a Stunned enemy, and with sufficient Adrenaline, it triggers Crushing Pursuit.<br>Triggering Surging Cold or Crushing Pursuit instantly raises the charge level to maximum.<br>During this skill, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> and Yidhari will immediately unleash the finishing slam of Basic Attack: Frostbite Embrace based on the current charge level.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Glacial Crush<br>When triggering Surging Cold or Crushing Pursuit, and with enough Adrenaline, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> or <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Dash forward with an upward attack, then leap into the air before delivering a powerful downward smash, dealing massive <span class='element-ice'>Ice DMG</span>.<br>" +
                "If EX Special Attack: Glacial Crush hits an enemy, Yidhari heals at the end of the skill for 33% of her missing HP.<br>If the skill is used after Surging Cold, it grants an additional 15 Adrenaline. This effect can trigger once every 1s.<br>After using this skill, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately unleash the finishing slam of Basic Attack: Frostbite Embrace based on the current charge level.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Frostbound Oath<br>When a Chain Attack is triggered, select the character to activate:<br>Unleash a powerful strike against enemies in a small area ahead, dealing massive <span class='element-ice'>Ice DMG</span>.<br>If inside Ether Veil: Wellspring, tentacles join in the assault, further enhancing the skill's power.<br>Character is invulnerable while using this skill.<br><br>Ether Veil: Wellspring<br>When Decibel Rating is at Maximum, the final hit of Basic Attack: Frostbite Embrace, EX Special Attack: Frost Coil, EX Special Attack: Glacial Crush, and Chain Attack: Frostbound Oath will consume 3,000 Decibels to activate an Ether Veil: Wellspring. While Ether Veil: Wellspring is active, all squad members' Max HP increase by 5% for 30s. Repeated triggers extend the duration, up to a maximum of 300s.<br>While Yidhari is within Ether Veil: Wellspring, the charge speed of Basic Attack: Frostbite Embrace increases, and HP is consumed faster during charging.<br><br>Ultimate: Final Act - Crossing the River of Regret<br>After Yidhari expends Decibels to activate Ether Veil: Wellspring, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> within 30s to activate:<br>Deliver a powerful strike to enemies in a large area ahead, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br>Each time Yidhari expends Decibels to activate an Ether Veil: Wellspring, she can use Ultimate: Final Act - Crossing the River of Regret once.",

            "Core Skill": "Core Passive: Dreamscape Collection<br>Yidhari gains extra Sheer Force based on her Max HP, with every 1 point of Max HP increasing Sheer Force by 0.1.<br>All <span class='element-ice'>Ice DMG</span> dealt by Yidhari deals is Sheer DMG, ignoring enemy DEF and using her Sheer Force stat as the DMG Multiplier. When Yidhari enters battle, she immediately gains 60 Adrenaline. In Investigation Zone Mode, this effect can trigger once every 180s.<br>Yidhari's skill DMG increases as her current HP percentage decreases.<br>When her HP falls below 50%, the buff reaches its maximum value, increasing her DMG by up to 100%. Once her HP is restored to 50%, the maximum bonus remains for 5s thereafter.<br>Yidhari gains fewer Decibels from landing skills. Instead, she gains Decibels as her HP decreases, with every 1% HP lost granting 10 Decibels.<br><br>Additional Ability: Narrative Completion<br>When another character in your squad is a Stun or Support character:<br>When Yidhari's HP falls below 50%, CRIT DMG increases by 30% and DMG taken is reduced by 25%.<br>While Yidhari is within Ether Veil: Wellspring, she gains the following additional effect:<br>After the level 3 charged attack of Yidhari's Basic Attack: Frostbite Embrace or EX Special Attack: Glacial Crush, an icy tentacle is summoned to attack, dealing extra damage. This effect can trigger once every 12s.<br>The above skill is considered an EX Special Attack, the DMG multiplier increases based on the EX Special Attack's level."
        },
        mindscapes: [
            { number: 1, name: "The Past Lost Beneath the Abyss  ", desc: "The Adrenaline cost to activate Yidhari's EX Special Attack is reduced by 10. After using EX Special Attack: Frost Coil or EX Special Attack: Glacial Crush, keeping hold of the Basic Attack or Special Attack button consumes 35 Adrenaline to forgo healing and immediately chain into another EX Special Attack: Glacial Crush. The HP restored by this EX Special Attack: Glacial Crush is increased by 100% of the original value. Yidhari's Basic Attacks and EX Special Attacks ignore 20% of targets' Ice RES." },
            { number: 2, name: "Who Lingers Here, Lost in Thought?  ", desc: "Yidhari's CRIT DMG increases by 40%. Triggering Surging Cold or Crushing Pursuit grants Adrenaline regen of 0.5/s for up to 30s. Repeated triggers reset the duration" },
            { number: 3, name: "A Story Without an Audience  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Blooming in Silence  ", desc: "Yidhari gains 10% more Decibels when losing HP for Core Passive: Dreamscape Collection. While in Ether Veil: Wellspring, Yidhari's Max HP is further increased by 5%." },
            { number: 5, name: "This Solace Is Real ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "At Last, a Peaceful Dream  ", desc: "After Yidhari spends Decibels to activate or extend Ether Veil: Wellspring, she gains Erudition for 30s. While Erudition is active, her Sheer DMG increases by 25%. Also, upon taking fatal DMG for the first time, her HP is reduced to at most 1, and for the next 5s, she cannot be defeated and will restore 25% HP over time." }
        ]
    },
    {
        id: 21,
        name: "Manato",
        rarity: "A",
        element: "Fire",
        role: "Rupture",
        faction: "Spook Shack",
        image: "image/манато.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Blazing Wind Slash<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to three forward slashes, dealing <span class='element-physical'>Physical DMG</span>.<br>During each slash, pressing <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> triggers Scorchwind, causing the attack to deal increased <span class='element-fire'>Fire DMG</span>.<br><br>Basic Attack: Blazing Wind - Misty Slash<br>While in the Molten Edge state, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash up to four forward slashes, dealing <span class='element-fire'>Fire DMG</span>.<br>If Manato's HP is above 30% when the skill is activated, 3.5% of his Max HP will be consumed.",

            "Dodge": "Dodge: Radiant Blade<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Radiant Blade - Zanshin<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Perform a shoulder slam forward, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Radiant Blade - Battle Sweep<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Perform a slash followed by a punch at enemies ahead, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Lone Shadow - Regroup<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slashes and punches enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Lone Shadow - Mountain Stand<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, inflicting massive Daze and dealing <span class='element-fire'>Fire DMG</span>.<br>Gain 75 Blazing Heart upon activating this skill.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Lone Shadow - Breaking Fang<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Unleash multiple slashes at enemies ahead, dealing <span class='element-fire'>Fire DMG</span>.<br>Repeated presses allow up to 7 extra consecutive slashes.<br>While chaining slashes, if Manato's HP is above 30%, 2% of Max HP is consumed.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Return to Ashes<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slash forward at enemies, dealing <span class='element-fire'>Fire DMG</span>.<br>If hit by an enemy during the skill, restore 20% of missing HP when unleashing the slash. The healing effects of Special Attack: Return to Ashes and Special Attack: Return to Ashes - Sacrifice have a shared cooldown and can trigger once every 20s.<br>If hit by an enemy during the skill, the slash is enhanced.<br>DMG taken is reduced by 40% while using this skill.<br>Anti-Interrupt level is increased while using this skill.<br><br>Special Attack: Return to Ashes - Sacrifice<br>Hold <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Enter a charging state, consuming up to 10% of Max HP and gaining 100 Blazing Heart. HP consumption will at most reduce Manato's HP to 30% of Max HP.<br>Release the button to activate Special Attack: Return to Ashes. If struck during the skill, the slash heals 20% of missing HP. The healing effects of Special Attack: Return to Ashes and Special Attack: Return to Ashes - Sacrifice have a shared cooldown and can trigger once every 20s.<br>If hit by an enemy during the skill or if charging reaches a certain duration, the slash is enhanced.<br>DMG taken is reduced by 40% while using this skill.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Return to Ashes - Fall<br>While in the Molten Edge state and with sufficient Adrenaline, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Jump up and unleash a falling slash on enemies in front, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Upon activating the skill, restore 33% of Max HP.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Blazing Eruption<br>When a Chain Attack is triggered, select the character to activate:<br>Hurls his sword forward, then charges the enemy to trigger an explosion, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Musou Aratama<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Jump into the air and deliver a falling slash at enemies in front, followed by an explosion, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Mighty Molten Edge<br>Manato gains extra Sheer Force based on his Max HP, with every 1 point of Max HP increasing Sheer Force by 0.1.<br>All <span class='element-fire'>Fire DMG</span> Manato deals is Sheer DMG, ignoring enemy DEF and using his Sheer Force stat as the DMG Multiplier.<br>When Manato uses Special Attack: Return to Ashes - Sacrifice or a Defensive Assist, he accumulates Blazing Heart, up to a maximum of 100 points. At 75 Blazing Heart, Manato enters the Molten Edge state. While in the Molten Edge state, Manato consumes 3.3 Blazing Heart per second. When Blazing Heart is fully depleted, he exits Molten Edge.<br>While in the Molten Edge state, Manato's Basic Attacks are enhanced, and he can use EX Special Attack: Return to Ashes - Fall.<br>When consuming HP during Basic Attack: Blazing Wind - Misty Slash or during the consecutive slashes from an Assist Follow-Up, that attack's CRIT DMG increases by 50%, and the Adrenaline Generation Rate increases by 100%.<br>While in the Molten Edge state, Manato's CRIT Rate increases by 10%, and his <span class='element-fire'>Fire DMG</span> increases by 20%.<br><br>Additional Ability: Rekindled Heart<br>When another character in your squad is a Support or Stun character:<br>When Manato uses his Ultimate, he gains 8 stacks of Remnant Flame, and when using a Chain Attack, he gains 4 stacks of Remnant Flame, lasting 60s, stacking up to 20 times. Repeated triggers reset the duration. While launching Basic Attack: Blazing Wind - Misty Slash or during the consecutive slashes of an Assist Follow-Up, if his HP is below 100% of Max HP, one stack of Remnant Flame is consumed to restore 2% of his Max HP."
        },
        mindscapes: [
            { number: 1, name: "Drifter's Rules of Survival  ", desc: "Whenever Manato loses HP, the amount of HP lost is tallied. Each 1% of his Max HP tallied increases the <span class='element-fire'>Fire DMG</span> of Assist Follow-Ups and Basic Attacks by 0.4%, up to a max of 20%." },
            { number: 2, name: "Day & Night, Kitchen & Love ", desc: "While in the Molten Edge state, Manato ignores 8% of a target's Fire RES. After being hit by an enemy while using Special Attack: Return to Ashes or Special Attack: Return to Ashes - Sacrifice, press Icon_Normal to trigger an Assist Follow-Up." },
            { number: 3, name: "Enter the Realm of Urban Legends  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Childhood Oath  ", desc: "Max HP increases by 8%. During Special Attack: Return to Ashes and Special Attack: Return to Ashes - Sacrifice, when Manato takes fatal DMG, he remains in battle, with his HP not dropping below 1. This effect can trigger once every 10s." },
            { number: 5, name: "Lone Shadow Returns to the Pack ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Beyond Dreams of the Past  ", desc: "When Special Attack: Return to Ashes hits a Stunned enemy, Manato gains 75 Blazing Heart and 4 stacks of Remnant Flame, and pressing Icon_Normal will launch an Assist Follow-Up. This Remnant Flame effect can trigger once every 20s. When his Assist Follow-Up hits an enemy, Manato's <span class='element-fire'>Fire DMG</span> increases by 3% for 8s, stacking up to 5 times. Repeated triggers reset the duration." }
        ]
    },
    {
        id: 22,
        name: "Orphie",
        rarity: "S",
        element: "Fire",
        role: "Attack",
        faction: "New Eridu Defense Force",
        image: "image/орфі.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: High-Pressure Flamethrower<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 5 attacks in front, followed by a powerful flame blade strike, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.",

            "Dodge": "Dodge: Flickering Flames<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Rush Command<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Perform a quick forward attack, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Counter Strike Opportunity<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Launch a series of attacks on enemies in front, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Searing Slash<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash a series of attacks on enemies in front, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Blazing Gunblade<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Boiling Pierce<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Unleash multiple attacks against enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Blazing Chamber<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Thrust forward and perform a tail attack, dealing <span class='element-fire'>Fire DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>Special Attack: Corrosive Flash<br>Automatically triggers during ally attacks:<br>Unleashes 4 laser Aftershock attacks, dealing <span class='element-fire'>Fire DMG</span>.<br>Triggers once per 5s.<br>Upon activating this skill, restore 20 Bottled Heat.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Watch Your Step<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a sweeping laser attack forward, dealing <span class='element-fire'>Fire DMG</span>.<br>After using this skill, immediately follow up with the powerful fire blade from the Basic Attack.<br>Upon activating this skill, restore 20 Bottled Heat.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Crimson Vortex<br>When off-field with 60 or more Energy, automatically triggers during ally attacks:<br>Performs a sweeping laser attack in an area around, dealing <span class='element-fire'>Fire DMG</span>.<br>Upon activating this skill, restore 20 Bottled Heat.<br>Character is invulnerable while using this" +
                " skill.<br><br>EX Special Attack: Heat Charge<br>When Bottled Heat is greater than or equal to 100, hold <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Consume 100 Bottled Heat to continuously fire a laser forward, dealing <span class='element-fire'>Fire DMG</span>.<br>When firing begins, triggers Quick Assist.<br>After continuous firing for a period, firepower increases, greatly boosting the skill's Interrupt Level.<br>When attacked during firing, will parry enemy attacks and immediately increase firepower.<br>When maximum firing duration is reached, automatically activates EX Special Attack: Fiery Eruption.<br>During the low firepower phase, Anti-Interrupt Level increases and DMG taken is reduced by 40%, while character is invulnerable during the high firepower phase.<br><br>EX Special Attack: Fiery Eruption<br>Automatically activates after EX Special Attack: Heat Charge reaches maximum firing time:<br>Performs a spinning attack forward, then fires a laser ahead dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Overheated Barrel<br>When a Chain Attack is triggered, select the character to activate:<br>Perform a spinning attack forward, then fire a laser ahead, dealing <span class='element-fire'>Fire DMG</span>.<br>Upon activating this skill, restore 20 points of Bottled Heat.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Dance With Fire<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a spinning attack forward, then fire a laser ahead, dealing <span class='element-fire'>Fire DMG</span>.<br>When leaping into the air, a Quick Assist will be triggered. If the Quick Assist is activated, Orphie & Magus will extend the laser firing duration.<br>Upon activating this skill, recover 20 Bottled Heat.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Taming Wind and Fire<br>Orphie & Magus's CRIT Rate increases by 25%, and Aftershock DMG increases by 85%.<br>Orphie & Magus initially gain 100 Bottled Heat, up to a maximum of 125.<br>When Orphie & Magus are off-field, if Special Attack: Corrosive Flash is available and Energy is greater than or equal to 60, consume 30 Energy to automatically trigger EX Special Attack: Crimson Vortex instead.<br>When the laser from EX Special Attack: Heat Charge hits enemies, all squad members gain Zeroed In for 12s. Repeated triggers reset the duration. Zeroed In increases Agent ATK by 280. When Orphie & Magus's initial Energy Regen is greater than or equal to 1.6, for every 0.1 initial Energy Regen above this threshold, ATK increases by an additional 20. The total increase from both initial and additional ATK increases cannot exceed 700. When an Agent with Zeroed In triggers Aftershock, their Zeroed In duration extends by 4s, up to a maximum extension of 20s.<br>The fire blade attack from Basic Attack: High-Pressure Flamethrower, EX Special Attack: Watch Your Step, EX Special Attack: Crimson Vortex, EX Special Attack: Heat Charge, EX Special Attack: Fiery Eruption, Chain Attack: Overheated Barrel, and Ultimate: Dance With Fire all count as Aftershock DMG, and using these skills counts as triggering Aftershock.<br><br>Additional Ability: Forged in Flames<br>When another character in your squad is a Stun or Support character:<br>Aftershock DMG dealt by Agents with Zeroed In ignores 25% DEF."
        },
        mindscapes: [
            { number: 1, name: "Luxurious Cat House  ", desc: "Orphie & Magus' Special Attack: Corrosive Flash, EX Special Attack: Crimson Vortex, EX Special Attack: Heat Charge, and EX Special Attack: Fiery Eruption ignore 15% of target's Fire RES, and Agents with Zeroed In deal 20% increased DMG." },
            { number: 2, name: "Weird Food List  ", desc: "When Orphie & Magus launch an Aftershock, restore 65 Decibels. This effect can trigger once every 4s. After Orphie & Magus use their Ultimate, their ATK increases by 20% for up to 45s." },
            { number: 3, name: "'Tactics Manual'  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Pink Holster  ", desc: "Initial duration of Zeroed In increases to 16s, and Orphie & Magus's EX Special Attack: Heat Charge and Ultimate: Dance With <span class='element-fire'>Fire DMG</span> increases by 40%." },
            { number: 5, name: "Ferry Toll ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Magic Seed  ", desc: "With enough energy, after the fire blade attack of Basic Attack: High-Pressure Flamethrower, press Icon_SpecialReady to immediately follow up with EX Special Attack: Crimson Vortex. When the fire blade attack of Basic Attack: High-Pressure Flamethrower is activated, recover 10 Bottled Heat, and the Interrupt Level during the low firepower phase of EX Special Attack: Heat Charge will also increase. When the laser from EX Special Attack: Heat Charge or Ultimate hits enemies, it deals additional <span class='element-fire'>Fire DMG</span> equal to 250% of Orphie & Magus's ATK. This effect can trigger once every 0.5s and is counted as EX Special Attack and Aftershock DMG" }
        ]
    },
    {
        id: 23,
        name: "Seed",
        rarity: "S",
        element: "Electric",
        role: "Attack",
        faction: "New Eridu Defense Force",
        image: "image/сід.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Chrysanthemum Wheel Dance<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to 4 attacks forward, dealing <span class='element-physical'>Physical DMG</span> for the first two hits and <span class='element-electric'>Electric DMG</span> for the third and fourth hits.<br>When attacked between the retreat of the 3rd hit to before the 4th hit, triggers an automatic dodge.<br><br>Basic Attack: Falling Petals - Slaughter<br>After the 4th hit of a Basic Attack, Dodge Counter, Quick Assist, or Assist Follow-Up, hold or press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Summon the mech to perform a charged punch attack, dealing massive <span class='element-electric'>Electric DMG</span>.<br>When Steel Charge reaches 120, gain one chance to quickly activate Basic Attack: Falling Petals - Slaughter by holding <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'>. This effect expires when Steel Charge is less than 120 or after using the method above to activate Basic Attack: Falling Petals - Slaughter once.<br>Does not accumulate Steel Charge on hit.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Falling Petals - Downfall<br>Seed has Steel Charge, which she can accumulate by hitting enemies with her skills.<br>Steel Charge has a maximum value of 150, and an initial value of 60. Upon reaching 120 Steel Charge and triggering Basic Attack: Falling Petals - Slaughter or Ultimate: Clockwork Garden - Bloom!, press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to consume 60 Steel Charge and unleash Basic Attack: Falling Petals - Downfall First Form, then automatically consume 60 Steel Charge to follow up with Basic Attack: Falling Petals - Downfall Second Form.<br>Pilots the mech to fire sweeping shots and perform a jumping smash, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Does not accumulate Steel Charge on hit.<br>Character is invulnerable while using this skill.",

            "Dodge": "Dodge: Running on Petals<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Magnetic Wheel Dance<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Throw steel wheels forward, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Blossom Burst<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Unleash a barrage of lasers at enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Barrage of Raining Flowers<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash a barrage of lasers at enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Sprouting Barrier<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Crimson Core Burst<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Unleash continuous floating turret attacks at enemies ahead, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Withered in Frost<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Throw a steel wheel that traces a curved path, dealing <span class='element-electric'>Electric DMG</span>.<br><br>EX Special Attack: Raining Iron Petals<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Enter flight mode, where Seed can move in four directions, and unleash a continuous barrage of missiles, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to extend the barrage duration while continuously consuming Energy.<br>During flight, release <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to trigger EX Special Attack: Raining Iron Petals - Away.<br>Upon consuming 60 Energy points in one flight, automatically trigger Basic Attack: Falling Petals - Slaughter.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Raining Iron Petals - Away<br>During EX Special Attack: Raining Iron Petals, release <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash rapid cannon fire, dealing <span class='element-electric'>Electric DMG</span>.<br>Does not accumulate Steel Charge on hit.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Tempest of Frosty Petals<br>When a Chain Attack is triggered, select the character to activate:<br>Summons her mech for protection, then launches cannon shots and a barrage of missiles, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Clockwork Garden - Bloom!<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Seed will pilot the mech personally, raining down missiles and a meteor shower of rockets, then performing a jumping smash, dealing massive <span class='element-electric'>Electric DMG</span>.<br>After using this skill, accumulate 60 Steel Charge.<br>Does not accumulate Steel Charge on hit.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Flower Chain Protocol<br>The Attack teammate with the highest initial ATK is considered Seed's Vanguard.<br>When the Vanguard unleashes an EX Special Attack, Seed gains Onslaught status, increasing Seed's ATK by 1,000 and CRIT DMG by 30%. When Seed unleashes an EX Special Attack, the Vanguard gains Direct Strike status, increasing the Vanguard's ATK by 1,000 and CRIT DMG by 30%.<br>When Direct Strike and Onslaught are both active, Seed and the Vanguard simultaneously gain Besiege status, increasing DMG dealt by 25%.<br>Onslaught, Direct Strike, and Besiege buffs can all take effect when the character is the current active character. When switching to inactive, the buffs remain until the character goes off-field or 3s after the switch. When the character returns to being the active character, the buffs re-activate.<br>Upon entering the battlefield with a Vanguard, Seed immediately gains Onslaught status and Besiege status, while the Vanguard immediately gains Direct Strike status and Besiege status.<br>Direct Strike and Onslaught status last for 40s, and repeated triggers refresh the duration.<br>When the Vanguard consumes Energy as the active character or when Seed consumes Energy, for every 1 point of Energy consumed, Seed recovers 0.5 points of Steel Charge.<br><br>Additional Ability: Surprise Strike<br>When another Attack Character is in your squad:<br>When Seed deals DMG as the active character, restore 2 Energy to the Vanguard. This effect can trigger once every 1s.<br>Seed's Basic Attack: Falling Petals - Slaughter, Basic Attack: Falling Petals - Downfall, and Ultimate: Clockwork Garden - Bloom! deal 30% increased DMG and ignore 25% of enemy <span class='element-electric'>Electric RES</span>."
        },
        mindscapes: [
            { number: 1, name: "'Hibernation Period'  ", desc: "When Seed's Steel Charge reaches 100, Basic Attack: Falling Petals - Downfall can be triggered, and the total Steel Charge consumed is reduced to 100. The amount of Steel Charge required to gain one chance to quickly release Basic Attack: Falling Petals - Slaughter is reduced to 100. Accumulate an additional 40/20 Steel Charge when entering the battlefield/using Ultimate. Increases Basic Attack: Falling Petals - Downfall CRIT DMG by 30%." },
            { number: 2, name: "'Light Absorption Technique'  ", desc: "When Besiege is active for an Agent, that Agent's DMG ignores 20% of DEF. When activating EX Special Attack: Raining Iron Petals, after consuming a total of 60 Energy, Seed can continue consuming Energy to extend the duration of the skill until the button is released or a total of 120 Energy is consumed. For every 5 Energy consumed by EX Special Attack: Raining Iron Petals, the following Basic Attack: Falling Petals - Slaughter's DMG increases by 5%." },
            { number: 3, name: "'A Story of Sprouting'  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "'Fragrant Tune' ", desc: "When Seed's Besiege status buff is active, her Decibel Generation Rate increases by 10%, and Ultimate DMG increases by 20%." },
            { number: 5, name: "'Time to Bloom' ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "'Theory of the Heart'  ", desc: "Seed's CRIT DMG increases by 50%.When using Basic Attack: Falling Petals - Slaughter, fires 3 additional laser beams, each dealing 165 % of ATK as DMG.This effect can trigger once every 3s." }
        ]
    },
    {
        id: 24,
        name: "Alice",
        rarity: "S",
        element: "Physical",
        role: "Anomaly",
        faction: "Spook Shack",
        image: "image/аліса.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Celestial Overture<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to 5 slashes forward, dealing <span class='element-physical'>Physical DMG</span>.<br>When Alice triggers Assault through Attribute Anomaly Buildup, the 5th hit of her next Basic Attack is enhanced.<br><br>Basic Attack: Starshine Waltz<br>When Alice's Blade Etiquette reaches 1 bar, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Hold to charge, expending up to 3 bars of Blade Etiquette. Release <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> or when Blade Etiquette is below 1 bar, Alice performs a series of slashes in an area centered on the target enemy, with the number of hits determined by charge level, dealing massive <span class='element-physical'>Physical DMG</span>.<br>When the Finishing Move of a three-stage charged Basic Attack: Starshine Waltz hits, it triggers a special Assault effect: Polarity Assault. This deals DMG equal to 100% of the original Assault, ignoring Anomaly Buildup, and can interact with other Attribute Anomalies, including Physical, to trigger Disorder.<br>Blade Etiquette does not accumulate when hitting an enemy.<br>Character is invulnerable while using this skill.",

            "Dodge": "Dodge: Jumpy Bunny<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Blade-Dancer's Gale<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Dodge Counter: Ceremony of Swordlight<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Slash and kick enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Intertwined Stab<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slash and kick enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Parry Guard<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Cross Riposte<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Charge forward and slash enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Piercing Dawn<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Hurl the blade to strike and pass through enemies ahead, dealing <span class='element-physical'>Physical DMG</span>.<br>Upon activating this skill, a Perfect Dodge can be triggered.<br>After triggering a Perfect Dodge, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to follow up with the 5th hit of a Basic Attack.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Aurora Thrust - Northern Cross<br>With enough energy, drag the joystick forward and press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A thrust attack that goes through enemies ahead, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Activating the skill can trigger Perfect Dodge and restores 10 Blade Etiquette.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Aurora Thrust - Southern Cross<br>With enough energy, and without moving the joystick or when dragging it backwards, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Back away with a slash, then thrust forward, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Activating the skill can trigger Perfect Dodge and restores 10 Blade Etiquette.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Starfall Intermission<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes powerful consecutive slashes at enemies ahead, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Starfall Finale<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes powerful slashes at enemies in a large area ahead, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Activating this skill restores 200 Blade Etiquette.<br>Blade Etiquette does not accumulate when hitting an enemy.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Twin Rainbows of the Swordheart<br>After any squad member inflicts a Physical Anomaly on an enemy, Alice deals additional DMG each 0.95s of its active duration, equal to 2.5% of the original Physical Anomaly DMG. If Disorder is triggered while the enemy is suffering a Physical Anomaly, for every 1s of remaining Physical Anomaly duration, the Disorder DMG multiplier increases by 18%, up to a max of 180%.<br>When Alice's attacks hit an enemy, she builds up Blade Etiquette. When she triggers an Assault through Anomaly Buildup, she gains 10 Blade Etiquette. Blade Etiquette has a maximum of 300, with each 100 being 1 bar.<br>When the Finishing Move of a three-stage charged Basic Attack: Starshine Waltz lands, it triggers a special Assault effect: Polarity Assault, dealing 100% of the original Assault DMG, ignoring Anomaly Buildup progress. This can be combined with any Attribute Anomaly, including Physical Anomaly, to trigger Disorder.<br>When Alice triggers Assault on an enemy, her Physical Anomaly Buildup Rate increases by 20.8% for 30s.<br><br>Additional Ability: Mystery Hunt<br>When another character in your squad is an Anomaly or Support character:<br>When any squad member triggers Disorder, Alice gains 30 Blade Etiquette.<br>If Alice's Anomaly Mastery exceeds 140, each additional point grants her 1.6 Anomaly Proficiency.<br>Upon entering the battlefield, Alice gains 300 Blade Etiquette. This effect can trigger once every 180s in Investigation Zone mode."
        },
        mindscapes: [
            { number: 1, name: "Palmful of Cilantro  ", desc: "When Alice triggers a Polarity Assault, she gains 25 Blade Etiquette. When she triggers Assault against an enemy, the target's DEF is reduced by 20% for 30s." },
            { number: 2, name: "Sage at the Sword's Tip  ", desc: "When Ultimate: Starfall Finale's Finishing Move hits an enemy, it triggers Polarity Assault. All squad members' Assault DMG increases by 15%. Disorder DMG against enemies suffering from Physical Anomaly increases by 15%. Upon entering the battlefield, Alice immediately gains 1,000 Decibels. Triggers once per 180s in Investigation Zone mode." },
            { number: 3, name: "Sage at the Sword's Tip  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Rosemary on Her Lips  ", desc: "Alice ignores 10% of the target's Physical RES. Enhanced Basic Attack: Celestial Overture accumulates 25% more Physical Anomaly Buildup." },
            { number: 5, name: "Passion for the Supernatural ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "A Heart of Thyme  ", desc: "When Alice uses a third-stage charged Basic Attack: Starshine Waltz or Ultimate: Starfall Finale, she enters the Victory State for 30s. During this time, whenever any squad member lands a hit on a target, Alice will follow up with an extra attack against the target, dealing <span class='element-physical'>Physical DMG</span> equal to 3,300% of her Anomaly Proficiency. This effect can trigger once every 1s and is guaranteed to CRIT. This effect can trigger up to 6 times. Gaining the Victory State again refreshes the available trigger count." }
        ]
    },
    {
        id: 25,
        name: "Yuzuha",
        rarity: "S",
        element: "Physical",
        role: "Support",
        faction: "Spook Shack",
        image: "image/юдза.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Tanuki Claws<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 5 strikes ahead, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Basic Attack: Tanuki Cloak<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Enter a defensive stance for up to 1.5 seconds. If hit during this time, parry the attack and inflict massive Daze against the attacking enemy.<br>Successfully parrying an attack gains 1 Sugar Points.<br>Character is invulnerable when successfully parrying.<br><br>Basic Attack: Hard Candy Shot<br>When Yuzuha has Sugar Points, landing a hit with other active characters' attacks will have Yuzuha continuously twirl her umbrella and attack centered around the target before launching a powerful shell, dealing <span class='element-physical'>Physical DMG</span>. When this attack lands a heavy attack, Yuzuha consumes 1 Sugar Point.<br>Basic Attack: Hard Candy Shot is considered an Aftershock.<br>Basic Attack: Hard Candy Shot can be triggered once every 8s.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Sugarburst Sparkles<br>Enemies under the effect of Sweet Scare will be attacked by a Basic Attack: Sugarburst Sparkles once every 1s.<br>Basic Attack: Sugarburst Sparkles initially deals <span class='element-physical'>Physical DMG</span>.<br>Basic Attack: Sugarburst Sparkles does not contribute its accumulated Attribute Anomaly Buildup toward Anomaly DMG calculation.<br>Basic Attack: Sugarburst Sparkles Anomaly Buildup Rate increases by 25%.<br><br>Basic Attack: Sugarburst Sparkles - Max<br>Enemies affected by Sweet Scare will be attacked by a Basic Attack: Sugarburst Sparkles - Max when hit with a heavy attack from Basic Attack: Hard Candy Shot or Assist Follow-Up: Stuffed Hard Candy Shot.<br>Basic Attack: Sugarburst Sparkles - Max initially deals <span class='element-physical'>Physical DMG</span>.<br>Basic Attack: Sugarburst Sparkles - Max does not contribute its" +
                " accumulated Attribute Anomaly Buildup toward Anomaly DMG calculation.<br>Basic Attack: Sugarburst Sparkles - Max Anomaly Buildup Rate increases by 25%.<br><br>Basic Attack: Tanuki Helper<br>When Yuzuha is off-field, tanuki Kama assists the active character in attacking enemies, dealing <span class='element-physical'>Physical DMG</span>.<br>When Yuzuha performs Basic Attack: Tanuki Cloak, tanuki Kama joins her in attacking the enemy, dealing <span class='element-physical'>Physical DMG</span>.<br>Tanuki Kama inherits Yuzuha's initial ATK.",

            "Dodge": "Dodge: Did I Scare You?<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: You're Outta Luck!<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Rapidly strikes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Time for Payback~<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Deliver a quick strike forward, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Dessert Time<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strike enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Replenish Your Fun<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Upon a successful parry, gain 1 Sugar Points.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: We Have Cookies<br>After triggering a Defensive Assist or successfully parrying an enemy attack with Basic Attack: Tanuki Cloak, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strike enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Stuffed Hard Candy Shot<br>After triggering a Defensive Assist or successfully parrying an enemy attack with Basic Attack: Tanuki Cloak, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> at the right moment to activate:<br>Following a continuous spinning umbrella attack, fire a powerful projectile that deals <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Gummy Bombardment<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Fire a cannon shot forward, dealing <span class='element-physical'>Physical DMG</span>.<br><br>EX Special Attack: Cavity Alert<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Throw a bomb at the enemy, dealing <span class='element-physical'>Physical DMG</span>.<br>Upon hitting an enemy with a heavy attack, it inflicts the Sweet Scare state.<br>Gains 2 Sugar Points upon activation.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Cavity Alert, Right Now!<br>After using Dodge Counter: Time for Payback~, Quick Assist: Dessert Time, Assist Follow-Up: We Have Cookies, or Assist Follow-Up: Stuffed Hard Candy Shot, or when a Perfect Dodge is triggered, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Quickly throw a bomb at the enemy, dealing <span class='element-physical'>Physical DMG</span>.<br>On hitting an enemy with a heavy attack, it inflicts the Sweet Scare state.<br>Gains 2 Sugar Points upon activation.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.<br><br>Sweet Scare<br>The Sweet Scare state lasts for 40s, repeated triggers reset the duration.<br>When an enemy affected by Sweet Scare is first hit by an active character using an attack of their attribute, Flavor Match is triggered against that enemy, changing the attribute of Basic Attack: Sugarburst Sparkles and Basic Attack: Sugarburst Sparkles - Max against that enemy to match that of the character who triggered Flavor Match.<br>When Sweet Scare is triggered again on an enemy, their existing Flavor Match state is removed. The process can be repeated to change the attribute of Basic Attack: Sugarburst Sparkles and Basic Attack: Sugarburst Sparkles - Max again.",

            "Chain Attack": "Chain Attack: Prank Assault<br>When a Chain Attack is triggered, select the character to activate:<br>Unleash a powerful strike on enemies in a small area ahead, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Gains 1 Sugar Points when used.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Surrender or Suffer the Mischief<br>When Decibel Rating reaches Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to trigger:<br>Unleash a powerful strike on enemies in a large area around the character, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Enemies hit with a heavy attack are inflicted with the Sweet Scare state.<br>Upon activating this skill, other squad members gain 25 Energy.<br>Upon activating this skill, gain 2 Sugar Points.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Whimsical Wonder<br>Upon entering the battlefield, Yuzuha immediately gains 3 Sugar Points.<br>Yuzuha can have up to 6 Sugar Points.<br>When Yuzuha's EX Special Attack: Cavity Alert, EX Special Attack: Cavity Alert, Right Now!, or Ultimate: Surrender or Suffer the Mischief hits an enemy, all squad members receive the Tanuki Wish effect.<br>Tanuki Wish grants an ATK increase equal to 40% of Yuzuha's initial ATK, up to a maximum increase of 1,200, and increases the DMG dealt by those with the effect by 15%, lasting 40s. Repeated triggers reset the duration.<br>If Yuzuha's initial ATK reaches 3,000, she grants the full ATK bonus to all squad members.<br><br>Additional Ability: The More the Merrier<br>When another character in your squad is an Anomaly character or shares the same Faction:<br>If Yuzuha's Anomaly Mastery exceeds 100, every point over increases the Anomaly Buildup Rate of characters with Tanuki Wish by 0.2%, up to a maximum of 20%, and all Attribute Anomaly DMG and Disorder DMG by 0.2%, up to a maximum of 20%. When Yuzuha's Anomaly Mastery is at 200, she grants the full buff effect."
        },
        mindscapes: [
            { number: 1, name: "Lucky Constitution  ", desc: "Yuzuha regains 30 Energy when she enters the battlefield. In Investigation Zone Mode, this effect can trigger at most once every 180s. Enemies in the Sweet Scare state have their All-Attribute RES reduced by 10%. The Attribute Anomaly DMG and Disorder DMG buff from her Additional Ability is increased to 130% of its original value." },
            { number: 2, name: "Full of Colorful Company  ", desc: "When Yuzuha's EX Special Attack: Cavity Alert, EX Special Attack: Cavity Alert, Right Now!, or Ultimate: Surrender or Suffer the Mischief hits an enemy, all squad members' DMG increases by 15% and Anomaly Buildup Rate by 15%, lasting 40s and repeated triggers reset the duration. When a heavy attack hits an enemy that is not Stunned, it will trigger a forced Chain Attack. Chain Attacks triggered this way have reduced Interrupt Level and forced Chain Attacks can only occur once every 20s. Whenever another character enters through a Chain Attack, Yuzuha gains 1 Sugar Points. Yuzuha's Basic Attack: Hard Candy Shot cooldown is reduced by 25%." },
            { number: 3, name: "Fairytale of the Haunted City  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Falling Magic  ", desc: "The DMG of Yuzuha's Assist Follow-Up: Stuffed Hard Candy Shot and Assist Follow-Up: We Have Cookies increases by 30%, Anomaly Buildup Rate by 20%, and triggers a Quick Assist when it hits an enemy." },
            { number: 5, name: "Dreams of a Fading Winter ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Put Down Roots  ", desc: "Gain 1 additional Sugar Points when successfully parrying an enemy attack using a Defensive Assist or Basic Attack: Tanuki Cloak. When using Assist Follow-Up: Stuffed Hard Candy Shot, hold Icon_Normal to charge for up to 0.8 seconds. Releasing Icon_Normal or reaching full charge fires an extra powerful shell at the enemy. For every 0.4s charged, Yuzuha consumes 1 Sugar Point to fire an additional powerful shell, each dealing 300% of her ATK as <span class='element-physical'>Physical DMG</span>. If any powerful shell from Assist Follow-Up: Stuffed Hard Candy Shot hits an enemy, all squad members' Disorder DMG Multiplier increases by 105% for 40s, and stacking up to 3 times, with each stack duration being calculated separately. In addition, if the powerful shell hits an enemy under Sweet Scare, it'll trigger 1 Basic Attack: Sugarburst Sparkles - Max attack. If Yuzuha is attacked while charging, she will automatically dodge the attack and immediately unleash the max-charged attack." }
        ]
    },
    {
        id: 26,
        name: "Ju Fufu",
        rarity: "S",
        element: "Fire",
        role: "Stun",
        faction: "Yunkui Summit",
        image: "image/фуфу.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Tiger Seven Forms - Flaming Claw<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slash forward up to four times, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br>During the 3rd hit, repeatedly press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to maintain the combo and keep striking the enemy.<br>During the 3rd hit, hold or pause before pressing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to chain into the 4th hit.<br>During the 3rd hit, Anti-Interrupt Level is increased, and DMG received is reduced by 40%.<br><br>Basic Attack: Hu Wei<br>During combat, Hu Wei will automatically attack enemies, dealing <span class='element-fire'>Fire DMG</span>.<br>Upon hitting an enemy, gain 20 points of Might, triggering up to once per use of a skill. The maximum for Might is 200.",

            "Dodge": "Dodge: Tiger Seven Forms - Tigerwind<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Tiger Seven Forms - Tiger Charge<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Perform a quick slash forward, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dash Attack: Tiger Seven Forms - Mountain King's Game<br>After using Dash Attack: Tiger Seven Forms - Tiger Charge, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Enter a high-speed spinning state. While in this state, use the joystick to move and deal <span class='element-physical'>Physical DMG</span> upon contact with enemies.<br>After Ju Fufu gains Momentum from other skills, she will be surrounded by flames in the high-speed spinning state. Upon contact with enemies, 1 point of Momentum is consumed, changing the DMG to <span class='element-fire'>Fire DMG</span> and granting 25 points of Might. The maximum for Momentum is 15.<br>When consuming Momentum to deal <span class='element-fire'>Fire DMG</span>, if Might is above 100 points, 100 points of Might will be automatically consumed to trigger Chain Attack: Suppressing Tiger Cauldron.<br>Releasing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> will have Ju Fufu exit the spinning state and throw Hu Wei to attack enemies, dealing <span class='element-fire'>Fire DMG</span>. When switching to another character, Ju Fufu will remain in the spinning state and attempt to collide with the nearest enemy.<br>While Ju Fufu is the currently active character, DMG taken during the skill is reduced by 40%, and Anti-Interrupt Level is increased. If not the active character, she becomes Invulnerable.<br><br>Dodge Counter: Tiger Seven Forms - Reignited Mountain<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Perform multiple slashes on enemies ahead, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Decisive Stomp<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slashes enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Steadfast Crouching Tiger<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Feral Blazing Maw<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Slash forward at enemies, then use Hu Wei to follow up with a downward attack, dealing <span class='element-fire'>Fire DMG</span>.<br>Gain 1 point of Momentum upon activation at most once every 10s.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Tiger Seven Forms - Mountain-Descending Tiger<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a spinning slash forward, followed by a falling slash, dealing <span class='element-fire'>Fire DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Tiger Seven Forms Alt - Mountain-Descending Savage Tiger<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Swing Hu Wei forward for a powerful strike, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Upon activation, gain 3 points of Momentum and 80 points of Might.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Tiger Cauldron Collapse<br>When a Chain Attack is triggered, select the character to activate:<br>Swing Hu Wei to deliver a powerful strike to enemies in a small area ahead, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Chain Attack: Suppressing Tiger Cauldron<br>With at least 100 points of Might, after triggering a Chain Attack, automatically activate:<br>Consume 100 Might to open Hu Wei and fire flames and popcorn at enemies, striking them in a small area ahead, dealing massive <span class='element-fire'>Fire DMG</span>.<br>If Momentum is available, and while not the active character, the high-speed spinning state will activate after the skill ends.<br>This is an Aftershock. Character is invulnerable while using this skill.<br><br>Ultimate: Tiger Seven Forms - Raging Tiger Explosion<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform two downward attacks with Hu Wei, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Upon activation, gain 6 points of Momentum and 100 points of Might.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Fu-rocious Might<br>When Ju Fufu has yet to use Hu Wei, it will automatically attack enemies and gain Might upon hitting them.<br>When Hu Wei hits an enemy and has at least 100 Might, and Ju Fufu is not the currently active character, Ju Fufu will launch Chain Attack: Suppressing Tiger Cauldron centered around the target enemy. Upon activation, all squad members gain the Tiger's Roar effect: CRIT DMG increases by 20%, and when Ju Fufu's initial ATK is greater than or equal to 2,800, every additional 100 ATK further increases CRIT DMG by 5%, up to a maximum additional increase of 30%.<br>While in the Tiger's Roar state, character Chain Attack/Ultimate DMG increases by 20%/40%.<br>The Tiger's Roar state lasts for 30s. Repeated triggers reset the duration. While Ju Fufu is in the Tiger's Roar state, Impact increases by 50.<br><br>Additional Ability: Aura of Authority<br>When another character in your squad is an Attack or Rupture character:<br>The maximum Decibels for all characters in the squad increases by 1,000. When an Attack or Rupture character uses an Ultimate, that character gains 300 Decibels."
        },
        mindscapes: [
            { number: 1, name: "Super Scary Little Tiger  ", desc: "Upon entering combat, Ju Fufu's CRIT Rate increases by 12%, and she immediately gains 100 Might. When Ju Fufu's Chain Attack hits an enemy, when the target is Stunned, the target's Stun DMG Multiplier increases by 35%, lasting for 30s." },
            { number: 2, name: "Almighty Qingming Warrior  ", desc: "While in the Tiger's Roar state, character CRIT DMG increases by an additional 22%. Whenever any character activates an Ultimate, Ju Fufu gains 3 points of Momentum." },
            { number: 3, name: "Righteous Young Hero  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Monster-Slaying Tiger Mystic  ", desc: "While Ju Fufu is in the Tiger's Roar state, her CRIT DMG increases by 35%." },
            { number: 5, name: "Unrivaled Almighty Senior ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Roar of My Inner Tiger ", desc: "Ju Fufu's Chain Attack DMG increases by 30%. Upon consuming Momentum and hitting an enemy in the high-speed spinning state, fire 3 popcorns, each dealing 160% of Fufu's ATK as DMG. This DMG is treated as Chain Attack DMG." }
        ]
    },
    {
        id: 27,
        name: "Yixuan",
        rarity: "S",
        element: "Ether",
        role: "Rupture",
        faction: "Yunkui Summit",
        image: "image/іся.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Cirrus Strike<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to five attacks forward, dealing <span class='element-ether'>Auric Ink DMG</span>.<br>This skill's Anti-Interrupt Level increases during the 3rd and 4th hit.<br><br>Basic Attack: Ink‐Veil Cloud Coalescence<br>Hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Deploy a Grand Tai Chi Formation, dealing <span class='element-ether'>Auric Ink DMG</span>.<br>When the skill ends, automatically launch the 5th hit of Basic Attack: Cirrus Strike.<br>Anti-Interrupt level is increased while using this skill, and DMG received is reduced by 40%.<br><br>Basic Attack: Auric Array<br>While possessing an Auric Ink Point: tap <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during Dodge: Nimbus Step, or hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Deploy an array, continuously dealing <span class='element-ether'>Auric Ink DMG</span>.<br>When the skill ends, it automatically triggers Basic Attack: Qingming Eruption.<br>While channeling, continuously recover Adrenaline, recovering 7/s, for up to 3s.<br>Character is invulnerable while using this skill, and enters the Vital View state.<br><br>Basic Attack: Qingming Eruption<br>Automatically activates when Basic Attack: Auric Array reaches the max duration:<br>Spreads her wings to launch an explosive attack, dealing massive <span class='element-ether'>Auric Ink DMG</span>.<br>Character is invulnerable while using this skill.",

            "Dodge": "Dodge: Hidden Cloud Technique<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Skybreaker<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Launch a forward rush attack, dealing <span class='element-ether'>Auric Ink DMG</span>.<br><br>Dodge: Nimbus Step<br>When dragging the joystick, hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Enter a high‐speed Light as Air state. While in the Light as Air state in Investigation Zone Mode, automatically collect from all resource pickup points within range.<br>While in the Light as Air state, use the joystick to steer. Release the joystick to stop.<br>Character is invulnerable at the moment this skill activates.<br><br>Dodge Counter: Banishing Blow<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Launch a series of attacks on enemies ahead, dealing <span class='element-ether'>Auric Ink DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Cloudstream Shadow<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch a series of attacks on enemies ahead, dealing <span class='element-ether'>Auric Ink DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Clear Sky Surge<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Celestial Cloud Blitz<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Quickly dash forward and attack, dealing <span class='element-ether'>Auric Ink DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Shadow-Ignition<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Swiftly retreat, then attack forward, dealing <span class='element-ether'>Auric Ink DMG</span>.<br>While retreating, a Perfect Dodge can be triggered, but cannot be followed up with a Dodge Counter.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Ink Manifestation<br>With enough Adrenaline, press or hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Charge continuously, and release <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to launch an upward wing attack, dealing massive <span class='element-ether'>Auric Ink DMG</span>.<br>While charging, incoming attacks are automatically blocked and will activate the upward wing attack.<br>If hit at the exact moment charging begins, it triggers a Perfect Block effect, negating the DMG and increasing the skill's Interrupt Level to match a Heavy Defensive Assist, and recovering 10 Adrenaline.<br>When an upward wing strike hits an enemy with a red flash or yellow flash, a Perfect Block can be triggered, negating the hit and increasing the skill's Interrupt Level to match a Defensive Assist and recovering 10 Adrenaline.<br>The Perfect Block effect can occur at most once every 0.5s.<br>If charged until flashing or when triggering the Perfect Block effect, the upward wing attack can be followed by an additional Talisman Attack.<br>After the skill, press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to launch EX Special Attack: Celestial Cloud Blitz - Break.<br>After EX Special Attack: Celestial Cloud Blitz - Break, and with enough Adrenaline, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to consume another 20 Adrenaline to launch EX Special Attack: Qingming Eruption - Break.<br>After using EX Special Attack: Qingming Eruption - Break and with enough Auric Ink Points, hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to quickly follow up with Basic Attack: Auric Array.<br>Character is invulnerable during the upward wing attack, and Anti-Interrupt Level is increased while charging.<br><br>EX Special" +
                " Attack: Cloud-Shaper<br>With enough Adrenaline, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Continuously charge up, channeling energy around enemies to deal DMG over time, up to a max of 2s, dealing massive <span class='element-ether'>Auric Ink DMG</span>.<br>Once fully charged or if interrupted, automatically trigger EX Special Attack: Ashen Ink Becomes Shadows.<br>At the moment the skill is activated, a Perfect Dodge can be triggered. After the Perfect Dodge, enter the Vital View state.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Ashen Ink Becomes Shadows<br>Triggers automatically during EX Special Attack: Cloud-Shaper:<br>When the energy orb appears and contracts, it deals <span class='element-ether'>Auric Ink DMG</span>.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Auric Ink Rush<br>When a Chain Attack is triggered, select the character to activate:<br>Rapidly dash forward and attack, followed by an explosive wing burst, dealing massive <span class='element-ether'>Auric Ink DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Qingming Skyshade<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch a barrage of wing attacks, then guide countless talismans to attack, dealing massive <span class='element-ether'>Auric Ink DMG</span>.<br>Upon activating this skill, Yixuan evenly redistributes the squad's HP.<br>After using this skill and with enough Auric Ink Points, hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to quickly follow up with Basic Attack: Auric Array.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Endless Talisman Suppression<br>With enough Technique Points, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Consumes 120 Technique Points to spread her wings, then guide countless talismans to attack, dealing massive <span class='element-ether'>Auric Ink DMG</span>.<br>With both enough Technique Points and Decibels, this skill triggers with priority.<br>After using this skill and with enough Auric Ink Points, hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to quickly follow up with Basic Attack: Auric Array.<br>Upon activating this skill, Yixuan evenly redistributes the squad's HP.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Grandmaster of Mysticism<br>Yixuan gains extra Sheer Force based on her Max HP, with every 1 point of Max HP increasing Sheer Force by 0.1.<br>All <span class='element-ether'>Auric Ink DMG</span> Yixuan deals via her skills is Sheer DMG, ignoring enemy DEF and using her Sheer Force stat as the DMG Multiplier.<br>When Yixuan accumulates <span class='element-ether'>Auric Ink Anomaly Buildup</span>, it uses an independent Anomaly Buildup gauge, and when triggering an Anomaly, she restores an additional 10 Adrenaline. This can trigger once every 10s.<br>Upon entering combat, Yixuan immediately restores all Adrenaline. In Investigation Zone Mode, this effect can only trigger once every 180s. Triggering a Perfect Dodge grants an additional 5 Adrenaline and can occur at most once per second.<br>When she consumes Adrenaline, Yixuan accumulates Technique Points, gaining 0.667 points for each point of Adrenaline consumed. With enough Technique Points, she can trigger an additional Ultimate: Endless Talisman Suppression. The maximum for Technique Points is 120.<br>The DMG dealt by Yixuan's Basic Attack: Auric Array, Basic Attack: Qingming Eruption, EX Special Attack, Assist Follow-Up, Chain Attack, and Ultimate increases by 60%.<br>After launching Ultimate: Endless Talisman Suppression, Yixuan gains one Auric Ink Point. She can spend an Auric Ink Point to launch Basic Attack: Auric Array.<br><br>Additional Ability: Auric Ink Undercurrent<br>When another character in your squad is a Stun, Support, or Defense character:<br>When a fellow squad member uses an Ultimate, Yixuan continuously recovers 2 Adrenaline for 10s. If Yixuan is switched out by a Perfect Assist, she automatically follows up with a lightning strike attack, dealing DMG equal to 225% of her Sheer Force and restoring an additional 5 Adrenaline.<br>EX Special Attack: Cloud-Shaper and EX Special Attack: Ashen Ink Becomes Shadows deal 30% increased DMG to Stunned enemies.<br>After activating her Ultimate, Yixuan enters the Meditation state, increasing her CRIT DMG by 40% for 15s."
        },
        mindscapes: [
            { number: 1, name: "Spiritual Path  ", desc: "Upon entering combat, CRIT Rate increases by 10% and immediately gain 120 Technique Points. In Investigation Zone Mode, this effect can only trigger once every 180s. When any squad member lands a hit on an enemy, Yixuan automatically summons an extra lightning strike, dealing DMG equal to 50% of her Sheer Force and restoring 5 additional Adrenaline. This can trigger once every 6s." },
            { number: 2, name: "Ward Off Misfortune  ", desc: "When an Ultimate or EX Special Attack deals DMG, it ignores 15% of the target's <span class='element-ether'>Ether RES</span>. Triggering Ultimate: Qingming Skyshade extends all enemies' Stunned state by 3s. In a single Stun state duration, enemies can only have this effect applied once, and it does not stack with similar effects. Additionally, when using Ultimate: Endless Talisman Suppression, gain one stack of the Condensed Ink effect. After Basic Attack: Qingming Eruption or EX Special Attack: Ashen Ink Becomes Shadows, press the Basic Attack button, or after EX Special Attack: Qingming Eruption - Break, press the Special Attack button to consume one stack of Condensed Ink and launch EX Special Attack: Endless Talisman Suppression - Break, dealing DMG up to 1,200% of Sheer Force. Only one stack of Condensed Ink can be held at a time." },
            { number: 3, name: "Cycle of Yin and Yang  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "The One Path of Mysticism  ", desc: "Activating an Ultimate grants one stack of Tranquility, up to a max of 2 stacks. For each stack of Tranquility, the next EX Special Attack: Cloud-Shaper DMG and EX Special Attack: Ashen Ink Becomes Shadows DMG increase by 30%." },
            { number: 5, name: "Calm Sky Vigil ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Swift Yet Still  ", desc: "After using Ultimate: Qingming Skyshade, gain a stack of the Regulated Breathing effect. While under this effect, you can ignore the Technique Point cost to launch Ultimate: Endless Talisman Suppression once. The Regulated Breathing effect ends after Ultimate: Endless Talisman Suppression is used. This effect can only be gained once every 30s. Only one stack of Regulated Breathing can be held. Additionally, while in the Meditation state, Yixuan's Sheer DMG is increased by 20%." }
        ]
    },
    {
        id: 28,
        name: "Pan Yinhu",
        rarity: "A",
        element: "Physical",
        role: "Defense",
        faction: "Yunkui Summit",
        image: "image/панда.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Unyielding Strikes<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches up to four consecutive melee attacks, dealing <span class='element-physical'>Physical DMG</span>.",

            "Dodge": "Dodge: Light as a Swallow<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Sizzling Oil Supreme<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Perform a quick forward melee attack, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Moving Mountains and Seas<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Perform a melee attack on enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Lift Your Gaze to Good Fortune<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a melee attack on enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Intimidating Presence<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Ride the Momentum<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Perform a melee attack on enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Sonic Pressure-Point Strike<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Delivers a forward melee technique while tossing firecrackers, dealing <span class='element-physical'>Physical DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>Special Attack: Touch of Death<br>With Break Force, press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Special Attack: Touch of Death attacks centered on the enemy, dealing <span class='element-physical'>Physical DMG</span>.<br>The skill can be chained up to three times. Each use of Special Attack: Touch of Death consumes 1 point of Break Force.<br>When Pan Yinhu is the active character, DMG received during the skill is reduced by 40% and Anti-Interrupt Level is increased. If he isn't the active character, he becomes Invulnerable.<br><br>EX Special Attack: Mountainous Pulse Strike<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>EX Special Attack: Mountainous Pulse Strike unleashes a powerful strike forward, dealing <span class='element-physical'>Physical DMG</span>.<br>Gain 3 points of Break Force on activation. Upon hitting an enemy, it triggers the Quick Assist of the previous character in the squad.<br>Agents who enter the field via this Quick Assist will gain the Sheer Force bonus from the Core Passive. After switching out, Pan Yinhu will stay on the field and automatically launch Special Attack: Touch of Death until his Break Force runs out, where he then leaves the field.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Anointed with Wok Steam<br>When a Chain Attack is triggered, select the character to activate:<br>Hop onto the Iron Wok and spin rapidly to ram into enemies, dealing massive <span class='element-physical'>Physical DMG</span> to all enemies on the way.<br>Character is invulnerable while using this skill.<br><br>Ultimate: A Feast Fit for an Emperor!<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a technique that compresses qi into fried rice and catapults it at foes, dealing massive <span class='element-physical'>Physical DMG</span> and healing all squad members for 820 HP, while also applying a 8s heal over time on all squad members, recovering 1.4% HP/s.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Meridian Enlightenment<br>For a brief period when Pan Yinhu's EX Special Attack: Mountainous Pulse Strike hits an enemy and triggers Quick Assist, the next Agent entering through a Quick Assist or Chain Attack will gain the Meridian Flow effect. This effect provides a Sheer Force boost equal to 18% of Pan Yinhu's initial ATK and lasts for 25s. The Sheer Force provided by this effect cannot exceed 540 points.<br><br>Additional Ability: Iron Stomach<br>When another character in your squad is a Rupture character or shares the same Faction:<br>When Pan Yinhu hits an enemy with Special Attack: Touch of Death, the enemy suffers the Depleted Qi effect, increasing DMG from all units against the target by 20%. Each hit of Special Attack: Touch of Death inflicts a 10s Depleted Qi effect. This effect does not stack, but repeated hits on the same enemy will extend the duration."
        },
        mindscapes: [
            { number: 1, name: "Qi Shield  ", desc: "All units deal 10% increased DMG to enemies affected by Depleted Qi." },
            { number: 2, name: "Yunkui Pressure-Point Strike  ", desc: "For every 6 points of Break Force consumed, Pan Yinhu will recover 4 Energy, and the Depleted Qi effect applied when Special Attack: Touch of Death hits an enemy will have its duration increased to 12s." },
            { number: 3, name: "Non-Meridian Pressure Point  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "First-Class Head Chef  ", desc: "When Ultimate: A Feast Fit for an Emperor! heals all squad members, the HP recovery is increased by 25%, and the healing over time effect is increased by 25%. On activating Ultimate: A Feast Fit for an Emperor!, gain the Backup Provisions effect. Whenever any character in the squad loses HP, consume the Backup Provisions effect to instantly restore 50% of the HP recovered with Ultimate: A Feast Fit for an Emperor!'s instant HP recovery effect. This effect does not stack." },
            { number: 5, name: "'Thiren' ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Meridian Theory  ", desc: "The Meridian Flow effect provided by Core Passive: Meridian Enlightenment increases by an extra 6% of Pan Yinhu's initial ATK. The maximum Sheer Force provided by this effect increases to 720." }
        ]
    },
    {
        id: 29,
        name: "Hugo",
        rarity: "S",
        element: "Ice",
        role: "Attack",
        faction: "Mockingbird",
        image: "image/хуго.webp",
        stats: {
            "HP": "7940",
            "ATK": "919",
            "DEF": "616",
            "Impact": "95",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "86",
            "Anomaly Proficiency": "90",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Dark Abyss Quartet<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to four attacks forward, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-ice'>Ice DMG</span>.<br>The fourth attack is a shot. During this attack, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge and perform a charged shot.<br>Anti-Interrupt level is increased during the fourth attack, and DMG received is reduced by 40%.<br><br>Basic Attack: Dark Abyss Concerto<br>After the 4th hit of Basic Attack: Dark Abyss Quartet, the shot of Dodge Counter: Phantasm - Slash, or the shot of Quick Assist: Elegy, press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Throw the scythe forward to perform a slash, followed by a shot, dealing <span class='element-ice'>Ice DMG</span>.<br>During the shot, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge and perform a charged shot.<br>During this skill, Anti-Interrupt level is increased, and DMG received is reduced by 40%.",

            "Dodge": "Dodge: Phantasm<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Phantasm - Shatter<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Launch a dashing attack at enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Phantasm - Slash<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Performs a series of attacks on enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>During the skill, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to launch a shot. During the shot, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge and perform a charged shot.<br>The shot is considered a Basic Attack, with its DMG treated as Basic Attack DMG.<br>After the skill is used, it can be directly followed up with the 4th hit of Basic Attack: Dark Abyss Quartet.<br>During the skill's ranged phase, Anti-Interrupt level is increased, and DMG received is reduced by 40%.<br>Invulnerable during the slashes and ranged retreat of the skill.",

            "Assist": "Quick Assist: Elegy<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Performs a series of attacks on enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>During the skill, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to launch a shot. During the shot, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge and perform a charged shot.<br>The shot is considered a Basic Attack, with its DMG treated as Basic Attack DMG.<br>After the skill is used, it can be directly followed up with the 4th hit of Basic Attack: Dark Abyss Quartet.<br>During the skill's ranged phase, Anti-Interrupt Level is increased, and DMG received is reduced by 40%.<br>Invulnerable during the slashes and ranged retreat of the skill.<br><br>Defensive Assist: The End Has Not Come<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Ace Reversal<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Dash forward and perform two slashes, dealing <span class='element-ice'>Ice DMG</span>.<br>After the skill is used, it can be directly followed up with the 4th hit of Basic Attack: Dark Abyss Quartet.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Soul Hunter - Judgment<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Spins the scythe and then unleashes a forward slash, dealing <span class='element-ice'>Ice DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Soul Hunter - Punishment<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Spins the scythe to attack and then executes a powerful Finishing Move, dealing massive <span class='element-ice'>Ice DMG</span>.<br>This skill is not counted as a heavy attack.<br>After the skill is used, it can be directly followed up with the 4th hit of Basic Attack: Dark Abyss Quartet.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Trick of Fate<br>When a Chain Attack is triggered, select the character to activate:<br>Dash forward to perform a slash across a large area, then launch a shot, dealing massive <span class='element-ice'>Ice DMG</span>.<br>The shot activated by this skill is considered a charged shot.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Blaspheme<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Throws the scythe in a powerful spinning attack, then launches a Finishing Move, dealing massive <span class='element-ice'>Ice DMG</span>.<br>This skill is not counted as a heavy attack.<br>After the skill is used, it can be directly followed up with the 4th hit of Basic Attack: Dark Abyss Quartet.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Terminating Verdict<br>When Chain Attack: Trick of Fate hits an enemy or Hugo's attacks Stun an enemy, Hugo gains the Dark Abyss Reverb state for 6s, and repeated triggers reset the duration. During this state, Hugo's CRIT Rate increases by 12% and CRIT DMG increases by 25%.<br>When there are 1/2 Stun characters in your squad, Hugo's ATK increases by 300/900.<br>When the Finishing Move of EX Special Attack: Soul Hunter - Punishment or Ultimate: Blaspheme hits an enemy while they are Stunned, it triggers the Totalize effect, increasing the DMG Multiplier of the skill's Finishing Move by 1,000%. Additionally, the Totalize effect further increases the skill's DMG multiplier based on the remaining Stun time of the enemy when triggered: for each remaining second of Stun time from the portion that is less than or equal to 5s, the skill's DMG multiplier increases by 280%; for each remaining second of Stun time from the portion between 5 and 15s, the skill's DMG multiplier increases by 100%. The total increase can raise the skill's DMG multiplier by a maximum of 3,400%.<br>After Hugo triggers the Totalize effect, the enemy's Stunned state will immediately end. Based on the remaining Stun time at the moment Totalize is triggered, a certain amount of Daze will be accumulated. For every second of Stun time remaining, 5% Daze is accumulated, up to a maximum Daze equivalent to 25% of the enemy's maximum Daze.<br>When EX Special Attack: Soul Hunter - Punishment hits an enemy, if the enemy is not Stunned, the Daze accumulated by the skill increases by 20%.<br><br>Additional Ability: Prelude to Finality<br>When another character in your squad is a Stun character or shares the same attribute:<br>Chain Attack: Trick of Fate's DMG increases by 15%, with a further increase of 35% against normal enemies. When Totalize is triggered, the DMG dealt by the skill increases by 40%. EX Special Attack: Soul Hunter - Punishment generates an additional 20 Energy when triggering Totalize on normal enemies. The Energy generation effect can trigger once every 30s."
        },
        mindscapes: [
            { number: 1, name: "Child of Hatred  ", desc: "When triggering the Totalize effect in the Dark Abyss Reverb state, the skill's CRIT Rate is increased by an additional 12%, and CRIT DMG by 30%." },
            { number: 2, name: "The Child Within  ", desc: "When Ultimate: Blaspheme triggers Totalize, it will not end the enemy's Stunned state. Additionally, when Totalize is triggered, the skill will ignore 15% of the enemy's DEF." },
            { number: 3, name: "Fruit of the Poisonous Tree  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Dramatic Theory  ", desc: "After a Charged Shot hits an enemy, Hugo's attacks against that target will ignore 12% of that target's Ice RES for 15s, repeated triggers reset the duration." },
            { number: 5, name: "Nirvana ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Crown of Thorns  ", desc: "All shooting attacks that hit enemies trigger the Dark Abyss Reverb state, lasting up to 6s, and repeated triggers reset the duration. Additionally, whenever any skill triggers the Totalize effect, that DMG is further increased by 60%. The Finishing Move of EX Special Attack: Soul Hunter - Punishment also triggers the Totalize effect when hitting an enemy that isn't Stunned, boosting the DMG multiplier of the Finishing Move by a fixed 1,000 %." }
        ]
    },
    {
        id: 30,
        name: "Vivian",
        rarity: "S",
        element: "Ether",
        role: "Anomaly",
        faction: "Mockingbird",
        image: "image/віва.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Feathered Strike<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to four attacks in front, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-ether'>Ether DMG</span>.<br>After triggering the fourth attack, enter the Noblewoman state.<br>With Flight Feathers available, holding <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during the fourth attack will activate the Fluttering Frock state.<br><br>Basic Attack: Noblewoman - Waltz<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> while in the Noblewoman state to activate:<br>Dash forward with an attack that deals <span class='element-ether'>Ether DMG</span> and restores 1 Flight Feather upon hitting an enemy.<br>Character is invulnerable while using this skill.<br>If a Perfect Dodge is triggered during the dash, gain 1 additional Flight Feather.<br>If Flight Feathers are available after the skill, enter the Fluttering Frock state, which can be canceled by holding <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> when the skill is used.<br><br>Basic Attack: Fluttering Frock - Suspension<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> while in the Fluttering Frock state to activate:<br>Attack an area ahead, dealing <span class='element-ether'>Ether DMG</span>.<br>After activation, this skill consumes all Flight Feathers, and each one consumed grants 1 Guard Feather.<br>Character is invulnerable while using this skill.<br>When switching characters during the Fluttering Frock state, Vivian will automatically perform Basic Attack: Fluttering Frock - Suspension.<br>While in the Fluttering Frock state, press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to exit the state.<br><br>Basic Attack: Featherbloom<br>After any squad member hits a target with an EX Special Attack, Vivian will consume 1 Guard Feather to launch Basic Attack: Featherbloom against the target, dealing <span class='element-ether'>Ether DMG</span>, triggering at most once per use of a skill. This effect can trigger even while Vivian is off-field.<br>A maximum of 5 Guard Feathers can be stored.",

            "Dodge": "Dodge: Lightstream<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Silver Thorned Melody<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Launches a forward thrust at enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Wingblade Reverb<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Launches an attack on enemies ahead, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.<br>After activating the skill, enter the Noblewoman state.<br>When there are Flight Feathers available, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during skill activation to enter the Fluttering Frock state.<br><br>Dodge: Dainty Steps<br>When in the Noblewoman state and about to be attacked, an automatic dodge will trigger, during which the character will be Invulnerable, but a Perfect Dodge will not be triggered.<br>This can trigger once each time the Noblewoman state is entered.",

            "Assist": "Quick Assist: Frostwing Guard<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launches an attack on enemies ahead, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.<br>After the skill activates, enter the Noblewoman state.<br>With Flight Feathers available, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during skill activation to enter the Fluttering Frock state.<br><br>Defensive Assist: Silver Umbrella Formation<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Featherblade Execution<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Launch an attack at enemies ahead, dealing <span class='element-ether'>Ether DMG</span> and gaining 2 Flight Feathers.<br>Character is invulnerable while using this skill.<br>After the skill activates enter the Fluttering Frock state, which can be canceled by holding <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> during the skill.",

            "Special Attack": "Special Attack: Song of Silver Wings<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Quickly attack forward, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-ether'>Ether DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Violet Requiem<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash a powerful forward attack that deals massive <span class='element-ether'>Ether DMG</span> and grants 3 Flight Feathers.<br>Character is invulnerable while using this skill.<br>Enter the Fluttering Frock state after using the skill. Hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> during the skill to enter the Noblewoman state.",

            "Chain Attack": "Chain Attack: Chorus of Celestial Wings<br>When a Chain Attack is triggered, select the character to activate:<br>Launch a powerful attack on a large area of enemies ahead, dealing massive <span class='element-ether'>Ether DMG</span> and gaining 2 Flight Feathers.<br>Character is invulnerable while using this skill.<br>After the skill activates, enter the Fluttering Frock state, which can be canceled by holding <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> during the skill.<br><br>Ultimate: Soaring Bird's Song<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch a powerful attack on a large area of enemies ahead, dealing massive <span class='element-ether'>Ether DMG</span> and gaining 5 Flight Feathers.<br>Character is invulnerable while using this skill.<br>After the skill is activated, enter the Fluttering Frock state, which can be canceled by holding <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> during the skill.",

            "Core Skill": "Core Passive: Dirge of Destiny<br>When Basic Attack: Featherbloom hits a target suffering <span class='element-ether'>Ether</span>, <span class='element-electric'>Electric</span>, <span class='element-fire'>Fire</span>, <span class='element-physical'>Physical</span>, <span class='element-ice'>Ice</span>, or <span class='element-wind'>Wind</span> Anomaly, it triggers Abloom: deals an additional instance of DMG equal to <span class='highlight-white'>6.15%</span>/<span class='highlight-white'>3.2%</span>/<span class='highlight-white'>8%</span>/<span class='highlight-white'>0.75%</span>/<span class='highlight-white'>1.08%</span>/<span class='highlight-white'>0.32%</span> per 10 points of Anomaly Proficiency of the original Anomaly's DMG.<br>When Basic Attack: Fluttering Frock - Suspension or Basic Attack: Featherbloom hits a target suffering any Attribute Anomaly, apply Vivian's Prophecy to the target, causing the target to take <span class='element-ether'>Ether DMG</span> equal to 55% of Vivian's ATK every 0.55s. This DMG can trigger the additional DMG of Attribute Anomalies. When the enemy is no longer suffering an Attribute Anomaly, Vivian's Prophecy expires.<br>Upon entering the battlefield, Vivian gains 2 Flight Feathers.<br><br>Additional Ability: Prophetic Tears<br>When another character in your squad is an Anomaly character or shares the same attribute:<br>Whenever another squad member applies an Attribute Anomaly to an enemy, Vivian will consume 1 Guard Feather to launch Basic Attack: Featherbloom on the target. This can trigger once every 0.5s.<br>Corruption DMG dealt by all squad members and the Corruption status' Disorder DMG increases by 12%."
        },
        mindscapes: [
            { number: 1, name: "'Walking Into the Orchard in Spring'  ", desc: "When a total of 4 Guard Feathers are consumed, gain 1 Flight Feather. All Attribute Anomaly DMG and Disorder DMG received by targets under Vivian's Prophecy increases by 16%." },
            { number: 2, name: "'Stormy Night, Stormy Night'  ", desc: "Vivian's Ether Anomaly Buildup Rate increases by 25%. The benefits of Abloom from Anomaly Proficiency are raised to 130% of the original value, and 15% of the target's All-Attribute RES is ignored." },
            { number: 3, name: "'Another and the Same'  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "'The Wind Between the Reeds'  ", desc: "Basic Attack: Fluttering Frock - Suspension and Basic Attack: Featherbloom will always CRIT on hit, and they will also increase Vivian's ATK by 12% for 12s. Repeated triggers reset the duration.When entering the battlefield, Vivian immediately gains 5 Guard Feathers." },
            { number: 5, name: "'Sonnet' ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "'Vivian'  ", desc: "Vivian's <span class='element-ether'>Ether DMG</span> increases by 40%. When triggering a Perfect Dodge during Basic Attack: Noblewoman - Waltz's dash, or using EX Special Attack: Violet Requiem, gain 1 additional Flight Feather. Launching Basic Attack: Fluttering Frock - Suspension consumes all Guard Feathers, the downward attack's area of effect increases, and upon hit, triggers a special instance of Abloom. Each additional Guard Feather consumed will increase the proportion of additional Anomaly DMG dealt by that instance of Abloom, consuming a maximum of 5 Guard Feathers to increase the DMG up to a maximum of 5 times the original." }
        ]
    },
    {
        id: 31,
        name: "Trigger",
        rarity: "S",
        element: "Electric",
        role: "Stun",
        faction: "New Eridu Defense Force",
        image: "image/трігер.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Cold-Bore Shot<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 4 shots ahead. The first 3 hits deal <span class='element-physical'>Physical DMG</span>, the 4th hit deals <span class='element-electric'>Electric DMG</span>.<br><br>Basic Attack: Silenced Shot<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Trigger enters the Sniper Stance and fires forward continuously, dealing <span class='element-electric'>Electric DMG</span>.<br>While continually firing, when attacked by an enemy, Trigger will automatically evade. This effect can trigger once every 8s.<br>While continually firing, you can drag the joystick to adjust her position to the left/right/back.<br>Automatically evading attacks or adjusting position when about to be hit will trigger a Perfect Dodge, followed by an automatic charged counter.<br>After releasing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'>, Trigger will step back, ready her weapon and unleash a Finishing Move, then exit Sniper Stance.<br>Character is invulnerable during the charged counter and Finishing Move.<br>When the continuous firing or the charged counter hits an enemy, Trigger gains 25 Purge, up to a maximum of 100 Purge.<br>When the Finishing Move hits an enemy, it triggers the Quick Assist of the previous character in the squad. A Quick Assist can only be triggered through this method once every 25s.<br><br>Basic Attack: Harmonizing Shot<br>When Trigger has Purge, use another active character in the squad to hit an enemy with a Basic Attack, Dodge Counter, Special Attack, Dash Attack or Quick Assist to activate:<br>While encircling the enemy, rapidly fire two shots at the enemy, dealing <span class='element-electric'>Electric DMG</span>.<br>Upon activating this skill, consume 3 Purge.<br>Character is invulnerable while using this skill.<br>Basic Attack: Harmonizing Shot is an Aftershock attack.<br>The squad can trigger Basic Attack: Harmonizing Shot once every 3s.<br><br>Basic Attack: Harmonizing Shot - Tartarus<br>When Trigger has" +
                " Purge, use another active character in the squad to hit an enemy with a heavy attack from an EX Special Attack, Assist Follow-Up, or Ultimate to activate:<br>While encircling the enemy, rapidly fires three shots at the enemy, followed by a Finishing Move, dealing <span class='element-electric'>Electric DMG</span>.<br>Upon activating this skill, consume 5 Purge.<br>Character is invulnerable while using this skill.<br>Basic Attack: Harmonizing Shot - Tartarus is an Aftershock attack.<br>The same skill type can trigger Basic Attack: Harmonizing Shot - Tartarus up to 2 times within 20s for the entire squad.<br>During Basic Attack: Harmonizing Shot, Basic Attack: Harmonizing Shot - Tartarus will immediately activate instead if triggered.",

            "Dodge": "Dodge: Phantom Concealment<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Vengeful Specter<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Rapidly lift the gun and fire, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Condemned Soul<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Rotate and fire a quick shot at enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Cold-Bore Cover Fire<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Rotate and fire a quick shot at enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Delaying Demise<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Piercing Thunder<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Unleash a series of slashes at enemies ahead, followed by a powerful charged shot after landing, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Spectral Flash<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Lunge forward with a slash, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Flash Burial<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Lunge forward with a slash, then leap up with a powerful shot to the ground, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br>When this skill hits an enemy, it triggers the Quick Assist of the previous character in the squad.<br>When this skill hits an enemy, Trigger enters Coordinated Support. While in this state, when another active character in the squad hits an enemy with any attack, it triggers a Basic Attack: Harmonizing Shot without consuming Purge and with no cooldown restrictions. This state lasts 8s and the effect can trigger up to 4 times. Repeatedly entering Coordinated Support extends the duration and grants additional triggers, lasting a maximum of 20s and triggering up to a maximum of 10 times.",

            "Chain Attack": "Chain Attack: Stygian Guide<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes continuous powerful shots forward, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Underworld Requiem<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Deliver a powerful shot at enemies in a large area ahead, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br>When the skill hits an enemy, it triggers the Quick Assist of the previous character in the squad.<br>When the skill hits an enemy, Trigger enters Coordinated Support. While in this state, when another active character in the squad hits an enemy with any attack, it triggers a Basic Attack: Harmonizing Shot without consuming Purge and with no cooldown restrictions. This state lasts 12s and the effect can trigger up to 6 times. Repeatedly entering Coordinated Support extends the duration and grants additional triggers, lasting a maximum of 20s and triggering up to a maximum of 10 times.",

            "Core Skill": "Core Passive: Soul-Searching Gaze<br>When Trigger's Aftershock hits an enemy, the target's Stun DMG Multiplier increases by 35% for 5s. This Stun DMG Multiplier increase will apply even if the target isn't stunned.<br><br>Additional Ability: Silver Lantern's Gaze<br>When another character in your squad is an Attack character or shares the same attribute:<br>When Trigger's CRIT Rate exceeds 40%, each 1% CRIT Rate above this threshold increases her Daze dealt by Aftershocks by 1.5%, up to a maximum increase of 75%."
        },
        mindscapes: [
            { number: 1, name: "Sharpened Senses  ", desc: "The Stun DMG Multiplier applied through Core Passive: Soul-Searching Gaze is increased by an additional 20%. When activating Basic Attack: Harmonizing Shot, the cooldown is reduced to 2s. Purge gained upon hitting an enemy with the continuous fire or charged counter in Sniper Stance increases by 25%. Maximum Purge increases to 125." },
            { number: 2, name: "'Ether Vision'  ", desc: "Upon using an Aftershock, Trigger gains 1 stack of Hunter's Gaze. When executing a Finishing Move in Sniper Stance, Trigger gains 2 stacks of Hunter's Gaze. Each stack of Hunter's Gaze increases all squad members' CRIT DMG by 6%, stacking up to 4 times, and lasting 10s. Repeated triggers reset the duration." },
            { number: 3, name: "'Homecoming'  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Concealment  ", desc: "When Trigger enters or extends Coordinated Support, while the state is active, the next time other squad members trigger Basic Attack: Harmonizing Shot or Basic Attack: Harmonizing Shot - Tartarus, it will trigger Disconnect upon hitting an enemy, dealing additional DMG equal to 200% of Trigger's ATK and inflict Daze equal to 120% of Trigger's Impact. This skill has a relatively high Interrupt Level." },
            { number: 5, name: "Locked In ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Beyond the River of the Dead  ", desc: "Upon entering the battlefield, Trigger gains 5 Armor Break Rounds. For every 25 Purge consumed, Trigger gains 1 additional Armor Break Round, up to a maximum of 5 rounds. While possessing Armor Break Rounds, when Trigger hits a target in Sniper Stance, 1 Armor Break Round is consumed to deal additional Electric DMG equal to 1,200% of Trigger's ATK. Armor Break Round DMG is additionally increased by 50%. This effect can trigger once every 0.2s." }
        ]
    },
    {
        id: 32,
        name: "Solder 0",
        rarity: "S",
        element: "Electric",
        role: "Attack",
        faction: "New Eridu Defense Force",
        image: "image/0.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Penetrating Shock<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to five slashes ahead, dealing <span class='element-electric'>Electric DMG</span>.<br>On the 3rd hit of the Basic Attack, enemies are continuously pulled in.<br>After the 4th attack hits the enemy, repeatedly press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to quickly pass through enemies in front up to 5 times.",

            "Dodge": "Dodge: Strobe<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Torrent<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Perform a horizontal slash forward, then follow up with a thrust attack, dealing <span class='element-electric'>Electric DMG</span>.<br><br>Dodge Counter: Ground Flash Counter<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Perform consecutive slashes at enemies in front, dealing <span class='element-electric'>Electric DMG</span>. On hit, gain the Voltage Overload state for 15s. Repeated triggers refresh the duration.<br>While in the Voltage Overload state, dodge performance is enhanced. Additionally, when using Basic Attack/Dash Attack/Dodge Counter, if the enemy target has White Thunder, pressing <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> will immediately cancel the current skill and launch Special Attack: Azure Flash.<br>While in this state, if the enemy does not have White Thunder, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to directly launch EX Special Attack: Sundering Bolt.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Cloud Flash<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Repeatedly slash enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Counter Surge<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Conducting Blow<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Dash forward and unleash a series of slashes at enemies ahead, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Celestial Thunder<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Dash diagonally forward, then unleash a cross slash, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>Special Attack: Azure Flash<br>When Soldier 0 - Anby's attacks hit an enemy, they apply the Silver Star mark and charges the target.<br>For every one-third of charge, the enemy receives 1 stack of White Thunder, stacking up to 3 times.<br>When the enemy has White Thunder, press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Quickly dash forward, slashing through enemies and dealing multiple hits of <span class='element-electric'>Electric DMG</span>.<br>When the skill hits an enemy, it will consume 1 stack of White Thunder to trigger an Aftershock that deals 1 extra instance of <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Special Attack: Thunder Smite<br>When the additional damage from White Thunder triggers 3 times on the same enemy:<br>A lightning strike will fall at the enemy's location, dealing <span class='element-electric'>Electric DMG</span> to enemies within range.<br>This DMG is considered Aftershock DMG.<br><br>Special Attack: Azure Flash - Boundary<br>When Special Attack: Thunder Smite DMG is triggered:<br>If EX Special Attack: Sundering Bolt or Special Attack: Azure Flash is currently being used, then Special Attack: Azure Flash - Boundary will automatically trigger when the current skill ends, unleashing a flurry of slashes that deal multiple instances of <span class='element-electric'>Electric DMG</span>. This skill counts as an Aftershock.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Sundering Bolt<br>With enough energy, hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Combines her twin swords and throws them forward for a high-speed slash, dealing massive <span class='element-electric'>Electric DMG</span>.<br>When the skill hits an enemy, it will fully charge Silver Star.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Leaping Thunderstrike<br>When a Chain Attack is triggered, select the character to activate:<br>Leap forward, then quickly dive and perform a cross slash, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Voidstrike<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a powerful series of slashes at a large area in front, followed by a lightning strike, dealing massive <span class='element-electric'>Electric DMG</span>.<br>When the skill hits an enemy, it will fully charge Silver Star.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Voltage Gap<br>Soldier 0 - Anby deals 25% more DMG to enemies marked with Silver Star. When an enemy is afflicted with Silver Star, they take additional CRIT DMG from Aftershocks, equal to 30% of Soldier 0 - Anby's CRIT DMG. When marked with a Silver Star, DMG from allies' Aftershocks builds Silver Star charge on the enemy. This effect can trigger once every 5s.<br>The Aftershock CRIT DMG bonus from Silver Star is further increased by 5% of Soldier 0 - Anby's CRIT DMG. When an enemy afflicted with White Thunder is defeated, automatically unleash Special Attack: Thunder Smite on the nearest enemy target.<br><br>Additional Ability: Voltage Surge<br>When another character in your squad is a Stun or Support character:<br>Soldier 0 - Anby's CRIT Rate increases by 10%. When the current active character is Soldier 0 - Anby, all squad members' Aftershocks deal 25% more DMG to enemies marked with Silver Star.<br>Soldier 0 - Anby's Chain Attack and Ultimate are treated as Aftershock DMG."
        },
        mindscapes: [
            { number: 1, name: "Static Charge  ", desc: "When Soldier 0 - Anby uses an EX Special Attack to hit an enemy, it triggers the additional DMG from White Thunder 3 times. This effect does not consume any White Thunder stacks." },
            { number: 2, name: "Fail-Safe Protocol  ", desc: "Soldier 0 - Anby's CRIT Rate increases by 12%. When she uses her Ultimate, she gains 6 stacks of Thunder's Cry (max 6 stacks). With Thunder's Cry, when using Special Attack: Azure Flash to hit an enemy with White Thunder, it will consume 1 stack of Thunder's Cry instead. Only 1 stack of Thunder's Cry will be consumed when a single use of a skill hits multiple enemies, and consuming Thunder's Cry will still activate the additional DMG from White Thunder.After activating potential, every 3 stacks of Thunder's Cry consumed, the next Special Attack: Azure Flash - Boundary will be activated faster." },
            { number: 3, name: "Past Glory  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Silver Reverb  ", desc: "When hitting an enemy marked with Silver Star, Soldier 0 - Anby ignores 12% of the target's Electric RES." },
            { number: 5, name: "Director's Cut ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Prequel Protagonist ", desc: "Upon triggering 6 instances of White Thunder's additional DMG, an electromagnetic vortex will be generated, dealing 1,000% of Soldier 0 - Anby's ATK as Electric DMG against the target and surrounding enemies. This DMG is considered Aftershock DMG." }
        ]
    },
    {
        id: 33,
        name: "Pulchra",
        rarity: "A",
        element: "Physical",
        role: "Stun",
        faction: "Sons of Calydon",
        image: "image/пудька.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Swift Strike<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 3 attacks forward, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Basic Attack: Leaping Strike<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Leap forward and unleash a series of slashes, dealing <span class='element-physical'>Physical DMG</span>.",

            "Dodge": "Dodge: Reversal Shot<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: First Strike Advantage<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Dash forward and slash, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Relentless Retribution<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Thrust at enemies in front, then follow up with a swift slash, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Contract - Bodyguard<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Thrust at enemies in front, followed by rapid slashes, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: Contract - Outsourced Combat<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Dodges the enemy's attack and activates Vital View.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Independent Pricing<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after an Evasive Assist to activate:<br>Leap forward into the air and fire, dealing <span class='element-physical'>Physical DMG</span>.<br>Upon activating this skill, consume 1 Assist Point to enter the Hunter's Gait state.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Rending Claw<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a rapid back-and-forth piercing attack, dealing <span class='element-physical'>Physical DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>Special Attack: Rending Claw - Nightmare Shadow<br>While Pulchra is in the Hunter's Gait state, and when another active character in the squad hits an enemy with a heavy attack from a Special Attack or EX Special Attack:<br>Dash back-and-forth piercing enemies centered on the target, dealing <span class='element-physical'>Physical DMG</span>.<br>After using this skill, if another active character in the squad hits an enemy, Pulchra will repeat the attack up to 5 additional times, with the final attack being a more powerful Finishing Move.<br>Character is invulnerable while using this skill.<br>Special Attack: Rending Claw - Nightmare Shadow is an Aftershock attack.<br><br>EX Special Attack: Rending Claw - Flashstep<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Pierce back and forth times, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Hey, Didn't Expect That, Right?<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a charged shot forward, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Oh, Time to Play?<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash a powerful shot at enemies in a large area ahead, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Hunter's Instinct<br>When Pulchra activates an EX Special Attack, Assist Follow-Up, Chain Attack, or Ultimate, she enters the Hunter's Gait state, increasing the Daze she deals by 30% for 6s. After switching to another character, if Pulchra is still in the Hunter's Gait state, the state will last until Pulchra switches back in. While in the Hunter's Gait state and as the active character, when Pulchra lands a heavy attack on enemies, she can trigger a Quick Assist from the previous character in the squad.<br><br>Additional Ability: Business Partner<br>When another character in your squad is an Attack or Rupture character or shares the same Faction:<br>When Pulchra hits enemies with Special Attack: Rending Claw - Nightmare Shadow, EX Special Attack: Rending Claw - Flashstep, Assist Follow-Up: Independent Pricing, Chain Attack: Hey, Didn't Expect That, Right?, or Ultimate: Oh, Time to Play?, it applies the Binding Trap effect for 15s. After applying Binding Trap, all units' Aftershock DMG against the target is increased by 30%."
        },
        mindscapes: [
            { number: 1, name: "Self-Interest  ", desc: "When dealing DMG to enemies affected by Binding Trap, increase own CRIT Rate by 10%." },
            { number: 2, name: "Opportunistic  ", desc: "While in the Hunter's Gait state from Core Passive: Hunter's Instinct, Pulchra's ATK is increased by an additional 10%." },
            { number: 3, name: "Territorial  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Joy of the Hunt  ", desc: "Reduces Energy Cost of activating EX Special Attack: Rending Claw - Flashstep by 5." },
            { number: 5, name: "Tail Game ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Behind the Mask  ", desc: "Special Attack: Rending Claw - Nightmare Shadow's DMG is increased by 15%, and the number of times the repeated attack can trigger is increased by 2. Additional Ability: Business Partner's Binding Trap effect now also applies to all damage types, not just Aftershock DMG." }
        ]
    },
    {
        id: 34,
        name: "Evelyn",
        rarity: "S",
        element: "Fire",
        role: "Attack",
        faction: "Stars of Lyra",
        image: "image/IconRoleCrop37.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Razor Wire<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch up to five attacks ahead, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br>When the 5th hit lands against an enemy, Evelyn will use her Lunalux Garrote to bind the primary target and enter Binding Seal.<br><br>Passive: Bind<br>When Evelyn uses her skills to deal DMG to enemies, she will accumulate Burning Embers.<br>When Evelyn consumes Burning Embers to activate Garrote or consumes Decibels to perform an Ultimate, she gains 1 Burning Tether Point.<br>Once Evelyn has 3 Burning Tether Points, her next use of Garrote will consume all Burning Tether Points to instead use a lower Interrupt Level version of Chain Attack: Lunalux - Snare.<br><br>Basic Attack: Garrote - First Form<br>When Burning Embers is at 50% or higher, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> or <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Consume 50% Burning Embers to use Lunalux Garrote to perform a slashing attack, dealing <span class='element-fire'>Fire DMG</span>.<br>During skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br>After using this skill, gain 1 Burning Tether Point.<br><br>Basic Attack: Garrote - Second Form<br>When Burning Embers is 50% or higher, after using Basic Attack: Garrote - First Form, continue to hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> or <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Consume 50% Burning Embers to use Lunalux Garrote to perform a follow-up attack, dealing <span class='element-fire'>Fire DMG</span>.<br>During skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br>After using this skill, gain 1 Burning Tether Point.",

            "Dodge": "Dodge: Arc Step<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Piercing Ambush<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Deliver a kick to the enemy in front, causing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Strangling Reversal<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Use Lunalux Garrote to slash surrounding enemies, dealing <span class='element-fire'>Fire DMG</span>;<br>When the attack hits an enemy, Evelyn will use Lunalux Garrote to bind the primary target and enter Binding Seal.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Fierce Blade<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Use Lunalux Garrote to slash surrounding enemies, dealing <span class='element-fire'>Fire DMG</span>.<br>When the attack hits an enemy, Evelyn will use Lunalux Garrote to bind the primary target and enter Binding Seal.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Silent Protection<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Course Disruption<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Evelyn slashes with Lunalux Garrote, then triggers an explosion ahead, dealing <span class='element-fire'>Fire DMG</span>.<br>When the attack hits an enemy, Evelyn will use Lunalux Garrote to bind the primary target and enter Binding Seal.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Locked Position<br>Before entering Binding Seal, press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> or <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Use Lunalux Garrote to pull the enemy and charge forward with a kick, dealing <span class='element-fire'>Fire DMG</span>.<br>When the attack hits the enemy, Evelyn will use Lunalux Garrote to bind the primary target and enter Binding Seal.<br>Anti-Interrupt level is increased while using this skill.<br><br>Special Attack: Binding Sunder - First Form<br>After entering Binding Seal, press or hold <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Centered on the target affected by Binding Seal, tether surrounding enemies and detonate an explosion, dealing <span class='element-fire'>Fire DMG</span>. Binding Seal will end after detonation.<br>Dodge enemy attacks upon activating the skill, and if a Perfect Dodge is triggered, gain an additional 25% Burning Embers.<br>After tethering surrounding enemies, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to cancel detonation and immediately follow up with the Basic Attack's 3rd hit.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Binding Sunder - Final Form<br>After entering Binding Seal and with enough Energy, press or hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Centered on the target affected by Binding Seal, tether surrounding enemies and detonate an explosion, dealing massive <span class='element-fire'>Fire DMG</span>. Binding Seal will end after detonation.<br>Dodge enemy attacks upon activating the skill, and if a Perfect Dodge is triggered, gain an additional 25% Burning Embers.<br>After pulling in surrounding enemies, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to cancel detonation and immediately follow up with the Basic Attack's 3rd hit.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Lunalux - Snare<br>When a Chain Attack is triggered, select the character to activate:<br>Evelyn slashes in front with multiple Lunalux Garrotes and detonates an explosion, dealing massive <span class='element-fire'>Fire DMG</span> to enemies in the area.<br>When the attack hits an enemy, Evelyn uses Lunalux Garrote to bind the primary target and enters Binding Seal.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Lunalux Garrote - Timbre<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Evelyn slashes in front with multiple Lunalux Garrotes and detonates an explosion, dealing massive <span class='element-fire'>Fire DMG</span> to enemies in the area.<br>Upon activating this skill, Evelyn removes her jacket and enters the Dance of Awakened Fire state, which lasts for the entire battle. While in the Dance of Awakened Fire state, when Evelyn consumes Burning Tether Points to activate Chain Attack: Lunalux - Snare, she will retain 1 point of Burning Tether Point. When the attack hits an enemy, Evelyn uses Lunalux Garrote to bind the primary target, entering Binding Seal.<br>Character is invulnerable while using this skill.<br>After using this skill, gain 1 Burning Tether Point.<br><br>Ultimate: Lunalux Garrote - Shadow<br>While under the Dance of Awakened Fire state, and when Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Evelyn slashes in front with multiple Lunalux Garrotes and detonates an explosion, dealing massive <span class='element-fire'>Fire DMG</span> to enemies in the area.<br>When the attack hits an enemy, Evelyn uses Lunalux Garrote to bind the primary target and enters Binding Seal.<br>Character is invulnerable while using this skill.<br>After using this skill, gain 1 Burning Tether Point.",

            "Core Skill": "Core Passive: Entangle<br>Upon entering Binding Seal, Evelyn's CRIT Rate increases by 25%. After leaving Binding Seal, she retains the buff for 10s. If Evelyn switches to another character while in Binding Seal, she will automatically follow up with Special Attack: Binding Sunder - First Form.<br><br>Additional Ability: Ambush Point<br>When another character in your squad is a Stun or Support character:<br>Evelyn's Chain Attack and Ultimate DMG increases by 30%. When Evelyn's CRIT Rate is at or over 80%, the DMG multiplier for her Chain Attack: Lunalux - Snare, Ultimate: Lunalux Garrote - Timbre and Ultimate: Lunalux Garrote - Shadow increases to 125% of the original value."
        },
        mindscapes: [
            { number: 1, name: "Dreamweave  ", desc: "Upon entering the battlefield, Evelyn immediately gains 1,500 Decibels. Enemies affected by Binding Seal will be Bound. When Evelyn attacks Bound enemies, she ignores 12% of their DEF. When Evelyn uses Special Attack: Binding Sunder - First Form or EX Special Attack: Binding Sunder - Final Form, the Bound effect spreads to all enemies hit by the skill. This spread Bound effect lasts for 10s." },
            { number: 2, name: "Dance of Fire  ", desc: "Evelyn's ATK increases by 15%. When Evelyn uses Basic Attack: Garrote - First Form or Basic Attack: Garrote - Second Form, the Burning Embers consumed will be returned. This effect can trigger once every 25s. When Evelyn consumes Burning Tether Point to trigger Chain Attack: Lunalux - Snare, the skill's Interrupt Level increases." },
            { number: 3, name: "Metamorphosis  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Fate's Melody  ", desc: "Upon activating a Chain Attack or Ultimate, Evelyn immediately gains a shield equal to 10% of her Max HP. While this shield exists, Evelyn's CRIT DMG increases by 40%." },
            { number: 5, name: "Crimson Threads Like the Dawn ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Bond of Light and Shadow  ", desc: "Upon launching a Chain Attack or Ultimate, Evelyn gains Shadowstring Edge for 20s. During Shadowstring Edge, when Evelyn hits her primary target with a Basic Attack, Dash Attack, Special Attack, or EX Special Attack, she additionally executes a Lunalux Garrote follow-up attack, dealing <span class='element-fire'>Fire DMG</span> equal to 375% of her ATK to enemies in the area. This DMG is considered Chain Attack DMG and can trigger up to 16 times. Gaining another Shadowstring Edge will refresh the trigger count." }
        ]
    },
    {
        id: 35,
        name: "Astra Yao",
        rarity: "S",
        element: "Ether",
        role: "Support",
        faction: "Stars of Lyra",
        image: "image/астра.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: 'Capriccio'<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to three attacks forward, dealing <span class='element-ether'>Ether DMG</span>.<br>During the 3rd hit, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge, drawing enemies in and expanding the attack range for a stronger attack.<br>After using other skills, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to initiate the 3rd hit directly.<br><br>Basic Attack: Interlude<br>While in the Idyllic Cadenza state, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Release Tremolo forward to attack, dealing <span class='element-ether'>Ether DMG</span>.<br>A Quick Assist will be triggered when this skill hits an enemy.<br><br>Basic Attack: Chorus<br>While in the Idyllic Cadenza state, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Launch multiple Tremolo attacks at enemies in front, dealing massive <span class='element-ether'>Ether DMG</span>.<br>A Quick Assist will be triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Finale<br>While in the Idyllic Cadenza state, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Release Tremolo forward to attack, dealing <span class='element-ether'>Ether DMG</span> and exit the Idyllic Cadenza state.<br>Upon activation of the skill, it grants Astra Yao the buff from Core Passive: 'Graceful Andante'.<br>With enough Energy, consumes Energy to follow up with 1 Tremolo and 3 Tone Clusters. This Tremolo attack released is considered an EX Special Attack.",

            "Dodge": "Dodge: 'Mini Waltz'<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: 'Lunar Eclipse Melody'<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Attack ahead, dealing <span class='element-ether'>Ether DMG</span>.<br>When triggered, dragging the joystick allows movement in the corresponding direction.<br><br>Dodge Counter: 'Umbrella Waltz'<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Attack enemies in front, dealing <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: 'One Luminous Sky'<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Attack enemies in front, dealing <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: 'Two Hearts'<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Dodges the enemy's attack and activates Vital View.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: 'Three Lifetimes of Fate'<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after an Evasive Assist to activate:<br>Release an energy beam forward, dealing <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: 'Windchimes & Oaths'<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Quickly move away, then release Tremolo, dealing <span class='element-ether'>Ether DMG</span>, and enter the Idyllic Cadenza state.<br>During activation, dragging the joystick enables movement in the direction held.<br>Hold <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to charge during activation, drawing enemies in, and follow up with 1 to 4 Tremolos depending on the charge duration.<br>A Quick Assist will be triggered when this skill hits an enemy.<br>Character is invulnerable when quickly moving away.<br><br>Idyllic Cadenza<br>After entering the Idyllic Cadenza state, Astra Yao increases all squad members' DMG by 20% and CRIT DMG by 25%.<br>While in the Idyllic Cadenza state, Astra Yao cannot move, but pressing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> will activate Basic Attack: Interlude, and pressing <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> will activate a dodge. After triggering a Perfect Dodge, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate Basic Attack: Chorus.<br>While in this state, Astra Yao's Anti-Interrupt Level is increased, and the DMG she takes is reduced by 40%. After switching to another character, Astra Yao will remain on the field and become Invulnerable. When switching back to her, she will automatically follow up with Special Attack: 'Windchimes & Oaths'.<br>During this state, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate Basic Attack: Finale, exiting the Idyllic Cadenza state, or hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to exit the Idyllic Cadenza state directly.<br><br>Chord<br>For every 25 Energy, Astra Yao will have 1 Chord.<br>While in the Idyllic Cadenza state, when Astra Yao has Chords" +
                ", a Quick Assist can be triggered in the following situations:<br>· When the active character's attack hits an enemy, once per 3s.<br>· When the active character's heavy attack hits an enemy, once per 1s.<br>When other squad members switch in through a Quick Assist, Chain Attack, Defensive Assist, or Evasive Assist, Astra Yao will consume 25 Energy and release 1 Tremolo to attack. This Tremolo attack released is considered an EX Special Attack.<br>After triggering a Quick Assist, quickly press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to switch characters and trigger a Precise Assist, causing Astra Yao to follow up with 3 Tone Clusters to attack. When other squad members switch in through a Chain Attack, Defensive Assist, or Evasive Assist, it will automatically trigger a Precise Assist.",

            "Chain Attack": "Chain Attack: 'Tipsy Concerto'<br>When a Chain Attack is triggered, select the character to activate:<br>Use song to channel energy into a blast, dealing massive <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br>After the skill, Astra Yao enters the Idyllic Cadenza state.<br><br>Ultimate: 'Fantasian Sonata'<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Use song to channel energy into a blast, dealing massive <span class='element-ether'>Ether DMG</span>, and restoring 2950 HP to all squad members.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br>After the skill, Astra Yao enters the Idyllic Cadenza state.<br>After the skill, the next two Quick Assists will be replaced by Chain Attacks.<br>Before all replacement chances are used up, a Quick Assist is triggered whenever any squad member hits an enemy with a Chain Attack or Ultimate.",

            "Core Skill": "Core Passive: 'Graceful Andante'<br>During the Idyllic Cadenza state, when other squad members switch in through a Quick Assist, Chain Attack, Defensive Assist, or Evasive Assist, and when Astra Yao expends Energy to release Tremolo to attack, both Astra Yao and the incoming character's ATK are increased. The increase is equal to 35% of Astra Yao's initial ATK, up to a maximum of 1,200. The effect lasts for 20s and can be extended up to 30s with repeated triggers.<br><br>Additional Ability: 'Moonlit Frenzy'<br>When another character in your squad is an Attack, Anomaly, or Rupture character:<br>When Energy is consumed to trigger a Precise Assist or Basic Attack: Finale, Astra Yao will additionally follow up with 1 Tremolo and 3 Tone Clusters."
        },
        mindscapes: [
            { number: 1, name: "12-Tone Equal Temperament  ", desc: "When Astra Yao's attack hits an enemy, the target's All-Attribute RES is reduced by 6%, stacking up to 3 times and lasting 30s. Repeated triggers reset the duration. Upon entering the battlefield, Astra Yao immediately gains 1,000 Decibels. When activating her Ultimate, all squad members gain 1 stack of Song of Protection for 60s. When attacked by an enemy, consume Song of Protection, granting Invulnerability for 1s." },
            { number: 2, name: "Art of Greed  ", desc: "The ATK buff from Core Passive: <span class='highlight-white'>\"Graceful Andante\"\ </span> is further increased by 19%, with an increased maximum of 400. While in the Idyllic Cadenza state, when other squad members switch in through a Quick Assist, Chain Attack, Defensive Assist, or Evasive Assist, Astra Yao will additionally follow up with 1 Tremolo and 3 Tone Clusters to attack.This effect can trigger once every 3s." },
            { number: 3, name: "Interwoven Staff Notation", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "'Hair Upon Your Nape' ", desc: "After activating a Chain Attack or Ultimate, within 15s, Astra Yao can trigger a Quick Assist even if she does not have Chords. When the attack hits an enemy, the interval for triggering a Quick Assist is reduced to 1s. While in the Idyllic Cadenza state, when other squad members enter the field via a Quick Assist, they will receive different buffs based on their specialty, and this effect can be triggered once every 3s for the entire squad: Attack: The next Quick Assist heavy attack on an enemy will deal extra DMG equal to 300% of Astra Yao's ATK; Anomaly: The next Quick Assist will have 50% increased Anomaly Buildup; Stun: The next Quick Assist will inflict 50% increased Daze." },
            { number: 5, name: "Proxy and Silk String  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "We Are the World  ", desc: "While in the Idyllic Cadenza state, the DMG multiplier for Tremolo and Tone Clusters released or followed up with will increase to 200% of the original, and CRIT Rate is increased by 80%. When triggering a Precise Assist, Astra Yao will automatically follow up with the charged 3rd-hit of Basic Attack: <span class='highlight-white'>\"Capriccio\"\ </span>, with a 80% increased CRIT Rate. This effect can trigger once every 10s." }
        ]
    },
    {
        id: 36,
        name: "Harumasa",
        rarity: "S",
        element: "Electric",
        role: "Attack",
        faction: "Hollow Special Operations Section 6",
        image: "image/каламаса.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Cloud Piercer<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch up to five piercing attacks ahead, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-electric'>Electric DMG</span>.<br>When the 5th hit of the Basic Attack hits an enemy, it generates 2 Electro Quivers.<br>After activating a Chain Attack, the next time Harumasa activates the 5th hit of Basic Attack: Cloud Piercer and hits an enemy with it, it generates 6 Electro Quivers.<br><br>Basic Attack: Cloud Piercer - Drift<br>During Basic Attack: Cloud Piercer, drag the joystick and press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Shoot a ranged piercing attack and reposition towards the corresponding drag direction, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Basic Attack: Falling Feather<br>After the 5th hit of Basic Attack: Cloud Piercer, a Special Attack, an EX Special Attack, or a Chain Attack, hold <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Immediately shoot Falling Feather at enemies ahead, dealing <span class='element-electric'>Electric DMG</span>.<br>Hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to aim at a target and release <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>After drawing the bowstring and aiming, shoot Falling Feather at the target, dealing <span class='element-electric'>Electric DMG</span>.<br><br>Basic Attack: Ha-Oto no Ya<br>When the 5th hit of Basic Attack: Cloud Piercer/EX Special Attack/Chain Attack hits an enemy or the ground, it can generate 2/6/6 Electro Quivers. If there are no Electro Quivers on the field when any squad member applies an Attribute Anomaly to an enemy, generate 6 Electro Quivers. This effect can trigger once every 12s.<br>There can be up to 6" +
                " Electro Quivers present at a time. If there are any Electro Quivers present when Harumasa fires and hits enemies with Falling Feather, the Electro Quivers will activate and fire Ha-Oto no Ya at the enemies hit by Falling Feather, dealing <span class='element-electric'>Electric DMG</span>.<br>Ha-Oto no Ya will apply Electro Prison to enemies hit, stacking up to 8 times and lasting 10s, repeated triggers reset the duration. While a target has at least 2 stacks of Electro Prison, they will be X-Marked.",

            "Dodge": "Dodge: Quick Flash<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Hiten no Tsuru<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Launch multiple piercing attacks ahead, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Hidden Edge<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Pierces enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Hiten no Tsuru - Slash<br>While there are X-Marked enemies on the field, Harumasa will enter the Awakened state, switching Dash Attack: Hiten no Tsuru for Dash Attack: Hiten no Tsuru - Slash.<br>While in the Awakened state, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Rush forward to the closest X-Marked enemy and execute a powerful slash, dealing <span class='element-electric'>Electric DMG</span>. Hitting a Stunned enemy triggers Chasing Thunder, dealing 1 instance of additional <span class='element-electric'>Electric DMG</span>.<br>When the slash hits the target, it consumes 2 stacks of Electro Prison. With less than 2 stacks of Electro Prison, X-Marked will be removed from the enemy. Before X-Marked is removed, repeatedly press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to repeatedly use Dash Attack: Hiten no Tsuru - Slash. While no X-Marked enemies exist on the field, Harumasa leaves the Awakened state.<br>While in the Awakened state, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after Basic Attack: Falling Feather to quickly follow up with Dash Attack: Hiten no Tsuru - Slash.<br>Enemy attacks can be blocked during the 1st hit of the skill. The pursuit effect of the second and third hits is increased.<br>During skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.",

            "Assist": "Quick Assist: Braced Bow<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash a piercing attack at enemies ahead, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Yugamae<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Yugamae - Slash<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Unleash a series of slashes at enemies ahead, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Nowhere to Hide<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch an arrow forward, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Nowhere to Run<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch daggers and an enhanced arrow ahead, dealing massive <span class='element-electric'>Electric DMG</span>.<br>When the enhanced arrow hits an enemy or the ground, it generates 6 Electro Quivers.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Nowhere to Run - Patrol<br>With enough energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> after using the 4th/5th attack of Basic Attack: Cloud Piercer, Dash Attack: Hiten no Tsuru - Slash, an Ultimate, Dodge Counter: Hidden Edge, or Quick Assist: Braced Bow to activate:<br>Fire enhanced arrows forward in rapid succession, dealing massive <span class='element-electric'>Electric DMG</span>.<br>When the first enhanced arrow hits an enemy or the ground, 6 Electro Quivers are generated. When the final enhanced arrow hits an enemy, it activates the Electro Quivers on the field, firing Ha-Oto no Ya at the target, dealing <span class='element-electric'>Electric DMG</span>.<br>When the target's Electro Prison stacks are close to the maximum, fewer Electro Quivers will be activated.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Kai - Hanare<br>When a Chain Attack is triggered, select the character to activate:<br>Unleash a piercing attack on enemies in a large area ahead then fire an enhanced arrow, dealing massive <span class='element-electric'>Electric DMG</span>.<br>When the arrow hits the ground, it generates 6 Electro Quivers.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Zanshin<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash a piercing attack on enemies in a large area ahead, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Zanshin - Scattered Blossoms<br>Activates automatically after Ultimate: Zanshin:<br>Unleashes a wide-area piercing attack against enemies in front, dealing <span class='element-electric'>Electric DMG</span>. This is considered Ultimate DMG.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Day Break<br>The CRIT Rate of Dash Attack: Hiten no Tsuru - Slash, Chasing Thunder, and Ultimate increase by 25%. When Harumasa's Dash Attack: Hiten no Tsuru - Slash/Ultimate triggers a critical hit against an enemy, he gains 1/6 stacks of Gleaming Edge. Dash Attack: Hiten no Tsuru - Slash can grant a maximum of 3 stacks per activation, and Gleaming Edge can stack up to 6 times, lasting 5s. Repeated triggers reset the duration. Each stack of Gleaming Edge increases the CRIT DMG of Dash Attack: Hiten no Tsuru - Slash, Chasing Thunder, and Ultimate by 12%.<br><br>Additional Ability: Overclock<br>When another character in your squad is a Stun or Anomaly character:<br>When Harumasa's attacks hit Stunned enemies or enemies under Attribute Anomaly, his DMG increases by 40%. When Harumasa's Falling Feather hits Stunned enemies or enemies under Attribute Anomaly, it will apply 2 stacks of Electro Prison to the target."
        },
        mindscapes: [
            { number: 1, name: "\"High Spirit\"\  ", desc: "The maximum stack limit of Electro Prison from Basic Attack: Ha-Oto no Ya increases to 14 stacks. When an Electro Quiver is triggered, 2 consecutive Ha-Oto no Ya will be fired at the target." },
            { number: 2, name: "Languish  ", desc: "When using an <span class='highlight-white'>Chain Attack </span> or <span class='highlight-white'>Ultimate </span>, Harumasa gains 7 stacks of Electro Blitz, up to a max of 7 stacks. While possessing Electro Blitz, the DMG of Dash Attack: Hiten no Tsuru - Slash increases by 50%. Consume 1 stack of Electro Blitz once Dash Attack: Hiten no Tsuru - Slash ends." },
            { number: 3, name: "White Lies  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Occasionally Motivated  ", desc: "Electro Prison now lasts for 20s. When Dash Attack: Hiten no Tsuru - Slash hits enemies, Harumasa gains 30 Decibels once per use of this skill. Upon activating Ultimate, apply the maximum stacks of Electro Prison to all on-field enemies.." },
            { number: 5, name: "No One Knows ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Tacit Understanding  ", desc: "After Ha-Oto no Ya hits Stunned enemies or enemies under Attribute Anomalies, Harumasa will ignore 15% of the target's Electric RES for 12s. Every 12 times an enemy is hit by Ha-Oto no Ya, trigger an extra electromagnetic explosion, dealing 1,500% of Harumasa's ATK to the target as Electric DMG." }
        ]
    },
    {
        id: 37,
        name: "Miyabi",
        rarity: "S",
        element: "Ice",
        role: "Anomaly",
        faction: "Hollow Special Operations Section 6",
        image: "image/IconRoleCrop13.webp",
        stats: {
            "HP": "7673",
            "ATK": "880",
            "DEF": "606",
            "Impact": "86",
            "CRIT Rate": "5%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "116",
            "Anomaly Proficiency": "238",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Kazahana<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to five slashes ahead, the first two deal <span class='element-physical'>Physical DMG</span>, and the last three deal <span class='element-ice'>Frost DMG</span>.<br>Block enemy attacks during the 5th hit of the Basic Attack.<br><br>Basic Attack: Shimotsuki<br>With at least 2 points of Fallen Frost, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Hoshimi Miyabi sheaths her blade, enters Shimotsuki Stance and starts to charge up. Every level of charge will consume 2 points of Fallen Frost, up to a maximum of three levels of charge.<br>When releasing <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'>, or when Fallen Frost is completely depleted, Hoshimi Miyabi will draw her blade and unleash a powerful slash ahead based on the current charge level, dealing massive <span class='element-ice'>Frost DMG</span>. She then exits Shimotsuki Stance.<br>Character is invulnerable during Shimotsuki Stance.<br>Hoshimi Miyabi can have up to 6 points of Fallen Frost. Upon entering the battlefield, Hoshimi Miyabi immediately obtains 3 points of Fallen Frost.",

            "Dodge": "Dodge: Mizutori<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br>While dodging, repeatedly press or hold <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A dash dodge that covers a lot of ground.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Fuyubachi<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Kan Suzume<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Slashes enemies in front, dealing <span class='element-ice'>Frost DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Dancing Petals<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slashes enemies in front, dealing <span class='element-ice'>Frost DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Drifting Petals<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Falling Petals<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Charges and slashes enemies in front, dealing <span class='element-ice'>Frost DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Miyuki<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Quickly draws her blade and slashes ahead, dealing <span class='element-ice'>Frost DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Hisetsu<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Rush forward, unleashing powerful slashes against enemies along the way, dealing massive <span class='element-ice'>Frost DMG</span>.<br>Upon activating this skill, gain 2 points of Fallen Frost.<br>Character is invulnerable while using this skill.<br>After using this skill, with enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> again to activate:<br>Consume extra Energy and unleash a powerful follow-up attack against enemies in front, dealing massive <span class='element-ice'>Frost DMG</span>.<br>Upon activating this skill, gain 2 points of Fallen Frost.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Spring's Call<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful slash at enemies in front in a large area, dealing massive <span class='element-ice'>Frost DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Lingering Snow<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes powerful slashes at enemies ahead in a large area then pauses, before unleashing a Finishing Move, dealing massive <span class='element-ice'>Frost DMG</span>.<br>Upon activating this skill, gain 3 points of Fallen Frost and increase <span class='element-ice'>Ice DMG</span> by 30% for 12s.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Searing Cold<br>When Hoshimi Miyabi deals <span class='element-ice'>Frost DMG</span>, she applies Icefire to the target, lasting 30s. When accumulating Frost Anomaly Buildup against targets with Icefire, increases Frost Anomaly Buildup Rate by 100% of Hoshimi Miyabi's CRIT Rate, up to a maximum increase of 80%. As Hoshimi Miyabi accumulates Frost Anomaly Buildup, it has its own independent Attribute Anomaly Buildup gauge and triggers Freeze, Shatter, and Frostbite that can react with other Attribute Anomalies, including Ice Attribute Anomaly, to trigger Disorder.<br>When Hoshimi Miyabi applies Frostbite to enemies with Icefire, it will consume the Icefire to trigger Frostburn - Break, dealing <span class='element-ice'>Frost DMG</span> equal to 1,500% of Hoshimi Miyabi's ATK and causing the target to enter the Frostburn state. All units accumulate 20% more Anomaly Buildup against enemies under the Frostburn state, but Hoshimi Miyabi cannot reapply Icefire to these enemies. The Frostburn state ends when Frostbite expires. While this state remains active, triggering another Attribute Anomaly will overwrite Frostbite and remove Frostburn.<br>Upon triggering Frostburn - Break, Hoshimi Miyabi obtains 1 point of Fallen Frost. This effect can trigger once every 10s.<br><br>Additional Ability: Bask in Frost<br>When another character in your squad is a Support character or shares the same Faction:<br>Basic Attack: Shimotsuki DMG increases by 60%. When any squad member triggers Disorder, Hoshimi Miyabi obtains 2 points of Fallen Frost and Basic Attack: Shimotsuki during the next Shimotsuki Stance will ignore 30% of the target's Ice RES."
        },
        mindscapes: [
            { number: 1, name: "Frost Atop the Snow  ", desc: "While in Shimotsuki Stance, every 1 point of Fallen Frost consumed will allow Basic Attack: Shimotsuki to ignore 6% of DEF, stacking up to 6 times and lasting until Shimotsuki Stance ends. When the slash for charge level three of Basic Attack: Shimotsuki hits an enemy under Frostburn, it will immediately remove the Frostburn state and increase all squad members' Anomaly Buildup Rate by 20% for 10s." },
            { number: 2, name: "Breath Technique  ", desc: "Basic Attack: Kazahana and Dodge Counter DMG increases by 30%. Hoshimi Miyabi gains 1 point of Fallen Frost when the final move of the 5th hit of Basic Attack: Kazahana hits an enemy. Upon entering the battlefield, Hoshimi Miyabi immediately obtains 6 points of Fallen Frost and her CRIT Rate increases by 15%." },
            { number: 3, name: "Martial Discipline  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Rupture  ", desc: "Frostburn - Break DMG increases by 30%. Upon triggering Frostburn - Break, Hoshimi Miyabi generates 250 more Decibels." },
            { number: 5, name: "Anniversary ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Prodigious Talent  ", desc: "During Shimotsuki Stance, Hoshimi Miyabi obtains Polar, which increases Basic Attack: Shimotsuki DMG by 30%. After obtaining Polar, Hoshimi Miyabi will automatically draw her blade and unleash powerful slashes based on the current charge level upon consuming Fallen Frost. Before Fallen Frost is completely depleted, the draw and slashes will not interrupt charging under Shimotsuki Stance. Each occurrence of Shimotsuki Stance can perform up to 3 draws and slashes." }
        ]
    },
    {
        id: 38,
        name: "Lighter",
        rarity: "S",
        element: "Fire",
        role: "Stun",
        faction: "Sons of Calydon",
        image: "image/лайт.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: L-Form Thundering Fist<br>Press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform up to five forward strikes, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br>During the 3rd hit of the Basic Attack, drag the joystick, and repeatedly press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to unleash a series of melee follow-up attacks. Release the joystick to follow up with the 4th hit of the Basic Attack.<br>While performing the startup light punch in the 5th hit of the Basic Attack, drag the joystick and repeatedly press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to keep alternating between the light punch and 4th hit of the Basic Attack. Release the joystick to follow up with the subsequent jab combo.<br>Continue repeatedly pressing or holding <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to extend the duration of the jab combo.<br>When you stop pressing or holding <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'>, or when the combo reaches its maximum duration, launches a Finishing Move forward. Lighter is invulnerable during the Finishing Move.<br>During the 5th hit of the Basic Attack, Lighter takes 40% less DMG.<br>While in the Morale Burst state, Anti-Interrupt Level is increased during the 5th hit of his Basic Attack, and the DMG reduction effect is increased to 80%.",

            "Dodge": "Dodge: Shadowed Slide<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> while the character is attacking to activate:<br>Perform a quick shuffle dodge in the direction of the Joystick.<br>This skill will not interrupt the combo count for Basic Attacks.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Charging Slam<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Rapidly strikes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Blazing Flash<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Strike enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using the skill, press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with the 5th hit of the Basic Attack.",

            "Assist": "Quick Assist: Blazing Flash - Guard<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strike enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using the skill, press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with the 5th hit of the Basic Attack.<br><br>Defensive Assist: Swift Break<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Charging Slam - Stab<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Strike enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using this skill, press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately follow up with the 5th hit of the Basic Attack.",

            "Special Attack": "Special Attack: V-Form Sunrise Uppercut<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strikes enemies in front with an uppercut, dealing <span class='element-fire'>Fire DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> during a shuffle dodge to activate:<br>Strike forward with a series of punches, dealing <span class='element-fire'>Fire DMG</span>.<br>This skill will not interrupt the combo count for Basic Attacks.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: V-Form Sunrise Uppercut - Full Distance<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Strikes enemies in front with a powerful uppercut, leaping into the air and dealing massive <span class='element-fire'>Fire DMG</span>.<br>During the move, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> again to spend additional Energy to perform a powerful follow-up attack, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>After using the move, press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to transition to the 4th hit of the Basic Attack.<br>During the shuffle dodge, with enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Perform a powerful combo punch forward, dealing massive <span class='element-fire'>Fire DMG</span>. Using this skill will not break the combo count for Basic Attacks.<br>Character is invulnerable while using this skill.<br>After the attack, press or hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to immediately transition into the 5th hit of the Basic Attack.",

            "Chain Attack": "Chain Attack: V-Form Scorching Sun<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful strike at enemies in front in a small area, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: W-Form Crowned Inferno<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes a powerful strike in a large area around, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Accelerant<br>Lighter automatically gains Morale over time, at a rate of 2.9 points per second. For each point of Energy consumed by any squad member, Lighter recovers an additional 0.26 Morale, up to a maximum of 100. When Morale reaches 80, the next time Lighter switches into battle he immediately launches a Quick Assist. Once Morale is 80 or higher, executing the 5th hit of his Basic Attack puts Lighter in the Morale Burst state, enhancing the power of the startup light punch, jab combo, and the Finishing Move of the 5th hit of his Basic Attack. When a skill hits an enemy with its power increased, it will continuously consume Morale. With every 10 points of Morale consumed, Lighter's Impact increases by 2%, up to a maximum increase of 20%, and lasting 6s.<br>In the Morale Burst state, Lighter will no longer automatically gain Morale over time. If his Morale is exhausted during a startup light punch or jab combo, he will automatically follow up with a more powerful Finishing Move.<br>In the Morale Burst state, when startup light punches or jab combos hit enemies, the target's Ice RES and Fire RES are reduced by 15%, lasting 30s.<br>In the Morale Burst state, when the Finishing Move hits an enemy, it applies the Collapse effect on the target, extending its Stunned duration by 3s. The Collapse effect can trigger only once on the same target before they recover from Stun.<br>When the Finishing Move of the 5th hit of his Basic Attack hits an enemy, when he switches off field, or when his Morale runs out, Lighter will leave the Morale Burst state, keeping any unspent Morale.<br><br>Additional Ability: Fighting Spirit<br>When another character in your squad is an Attack character or shares the same Faction:<br>While under the Morale Burst" +
                " state, when the 5th hit of Lighter's Basic Attack hits an enemy, all squad members gain a stack of Elation, stacking up to 20 times and lasting 30s. Repeated triggers reset the duration. For each stack of Elation, an Agent's <span class='element-ice'>Ice DMG</span> and <span class='element-fire'>Fire DMG</span> increase by 1.25%.<br>When obtaining Elation, if Lighter's Impact exceeds 170, every additional 10 points of Impact will increase the buff effect provided by each stack of Elation by an extra 0.25%. When any squad member launches a Chain Attack, it will refresh the duration of all squad members' Elation. Elation can increase the <span class='element-ice'>Ice DMG</span> and <span class='element-fire'>Fire DMG</span> of Agents by a maximum of 75%."
        },
        mindscapes: [
            { number: 1, name: "The Champion  ", desc: "Among the debuffs imposed by Core Passive: Accelerant, the Collapse effect increases Stun duration by 5s, while further reducing Ice RES and Fire RES by 10%. The more powerful Finishing Move that follows when Lighter's Morale is completely exhausted during a startup light punch or jab combo deals 30% increased DMG." },
            { number: 2, name: "Red Scarf  ", desc: "When applying Collapse via Core Passive: Accelerant to enemies, the target's Stun DMG Multiplier increases by 25%. The increase to <span class='element-ice'>Ice DMG</span> and <span class='element-fire'>Fire DMG</span> provided by Elation from Additional Ability: Fighting Spirit increases to 120% of the original." },
            { number: 3, name: "Mercenary Leader  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Sunglasses  ", desc: "When Lighter is off-field, the Energy Regen for the on-field character is increased by 10%. Upon entering the Morale Burst state, Lighter restores 4 Energy for off-field characters. This effect can trigger once every 18s." },
            { number: 5, name: "Decision Maker ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Survivor  ", desc: "Lighter's Morale recovery efficiency is increased to 200% of its original value. When Lighter lands a heavy strike on enemies during a Basic Attack, Dodge Counter, Special Attack, EX Special Attack, Quick Assist, Assist Follow-Up, Chain Attack, or Ultimate, it will trigger the Blazing Impact effect, dealing 250% of ATK as <span class='element-fire'>Fire DMG</span>. This effect can trigger once every 8s on each enemy. If Lighter's Impact exceeds 170 points, each additional point will further increase the multiplier of Blazing Impact by 5%, up to a maximum increase of 500%. The more powerful Finishing Move that follows when Lighter's Morale is completely exhausted during a light punch or jab combo will trigger an additional activation of Blazing Impact when hitting an enemy, ignoring the effect's cooldown." }
        ]
    },
    {
        id: 39,
        name: "Jane Doe",
        rarity: "S",
        element: "Physical",
        role: "Anomaly",
        faction: "New Eridu Public Security",
        image: "image/криса.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Dancing Blades<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleashes up to 6 attacks in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Passion<br>When Jane triggers Perfect Dodge, Defensive Assist, or performs a move that deals DMG to the enemy, she accumulates Passion Stream. Upon reaching the maximum Passion Stream, Jane enters the Passion state.<br>While in the Passion state, Jane's Physical Anomaly Buildup Rate is increased by 25%. Additionally, if Jane's Anomaly Proficiency exceeds 120, each extra point raises her ATK by 2, up to a maximum of 600.<br>In the Passion state, Jane's skills that deal damage consume Passion Stream. Activating a Perfect Dodge or Defensive Assist regenerates Passion Stream. Jane exits the Passion state when all of her Passion Stream is consumed.<br><br>Basic Attack: Salchow Jump<br>Entering the Passion state grants Jane one use of Basic Attack: Salchow Jump.<br>When available, hold <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Launch rapid consecutive attacks forward, followed by a Finishing Move, dealing <span class='element-physical'>Physical DMG</span>.<br>Hold the button during the consecutive attacks to extend the skill duration. Release <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> to trigger the Finishing Move early.<br>Anti-Interrupt level is increased during the consecutive attacks, and Jane takes 40% reduced DMG. Jane is invulnerable during the Finishing Move.<br>Using and damaging an enemy with Basic Attack: Salchow Jump while in the Passion state generates Passion Stream.",

            "Dodge": "Dodge: Phantom<br>Press <img src='image/додж.webp' style='width:24px;height:24px;vertical-align:middle;'> to trigger.<br>A quick slide dodge.<br>Character is invulnerable while using this skill.<br>Jane has an extra dodge. Before she enters the Passion state, she alternates between the two dodges. After entering the Passion state, Jane can pass through enemies in front when dodging.<br><br>Dash Attack: Edge Jump<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>If after the first dodge, launch an upward slash in front, dealing <span class='element-physical'>Physical DMG</span>.<br>If after the second dodge, perform a consecutive slashes in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dash Attack: Phantom Thrust<br>While in the Passion state, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a dodge to activate:<br>Launch three quick rushing slashes in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Swift Shadow<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>If after the first dodge, unleash multiple slashes at enemies in front, followed by a downward thrust, dealing <span class='element-physical'>Physical DMG</span>.<br>If after the second dodge, leap up and deliver three consecutive attacks to enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Dodge Counter: Swift Shadow Dance<br>While in the Passion state, press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> during a Perfect Dodge to activate:<br>Slash enemies in front quickly multiple times, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Dark Thorn<br>When the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Unleash multiple slashes at enemies in front, followed by a downward thrust, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Quick Assist: Lutz Jump<br>While in the Passion state, when the active character is launched, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Slash enemies in front quickly multiple times, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Last Defense<br>When the on-field character is about to be attacked, press <img src='image/assist.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Gale Sweep<br>Press <img src='image/база.webp' style='width:24px;height:24px;vertical-align:middle;'> after a Defensive Assist to activate:<br>Leap up and swiftly slash the enemy, then execute a wide sweeping slash across a large area in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Aerial Sweep<br>Press <img src='image/ex21.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Leaps into the air to launch consecutive kicks forward, then sweeps across, dealing <span class='element-physical'>Physical DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Aerial Sweep - Clearout<br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Leaps into the air to launch multiple consecutive kicks forward, then sweeps across, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Flowers of Sin<br>When a Chain Attack is triggered, select the character to activate:<br>Weaves between and slashes enemies in a large area in front, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Jane directly enters the Passion state upon activating the skill, and gains max Passion Stream.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Final Curtain<br>When Decibel Rating is at Maximum, press <img src='image/чейн.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br>Weaves between and slashes enemies with a powerful attack in a large area in front, followed by a Finishing Move, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Jane directly enters the Passion state upon activating the skill, and gains max Passion Stream.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Insight<br>When Jane's attacks hit an enemy, it causes them to enter the Gnawed state, lasting for 10s. If any squad member triggers Assault on an enemy in the Gnawed state and causes the Flinch effect, the Flinch effect duration is extended by 5s. Assault DMG has a chance to trigger a critical hit against enemies in the Gnawed state, with a base CRIT Rate of 40% and CRIT DMG of 50%. Each point of Jane's Anomaly Proficiency further increases this CRIT Rate by 0.16%.<br><br>Additional Ability: Sore Spot<br>When another character in your squad is an Anomaly character or shares the same Faction:<br>Jane's Physical Anomaly Buildup Rate is increased by 20%. When the enemy is already suffering from an Attribute Anomaly, Jane's Physical Anomaly Buildup towards the target is increased by an additional 15%."
        },
        mindscapes: [
            { number: 1, name: "Crime Counsel  ", desc: "The maximum uses of Basic Attack: Salchow Jump are increased by one. While in the Passion state, Jane's Physical Anomaly Buildup Rate increases by an extra 15% and each point of Jane's Anomaly Proficiency increases her DMG by 0.1%, up to a maximum increase of 30%." },
            { number: 2, name: "Adapt to the Environment  ", desc: "When Jane's attack hits an enemy in the Gnawed state, or when any squad member triggers Assault on an enemy in the Gnawed state, 15% of the enemy's DEF is ignored. Additionally, when Assault DMG triggers a critical hit, the CRIT DMG dealt is increased by an additional 50%." },
            { number: 3, name: "Anonymity  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Adapt and Thrive  ", desc: "When any squad member triggers the Assault or Disorder effects, all squad members' Attribute Anomaly DMG is increased by 18%, lasting 15s." },
            { number: 5, name: "Compulsive Hoarder ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "\"Shady\"\ Technique  ", desc: "While in the Passion state, Jane's CRIT Rate increases by 20%, and CRIT DMG by 40%. After any squad member inflicts Assault, Jane instantly enters the Passion state, and gains max Passion Stream. When that instance of Assault triggers a critical hit, Jane performs an additional attack on the target, dealing <span class='element-physical'>Physical DMG</span> equal to 1,600% of her Anomaly Proficiency." }
        ]
    },
    {
        id: 40,
        name: "Anton",
        rarity: "A",
        element: "Electric",
        role: "Attack",
        faction: "Belobog Heavy Industries",
        image: "image/антон.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Enthusiastic Drills<br>Press Icon_Normal to activate:<br>Unleashes up to 4 mixed attacks in front, dealing <span class='element-physical'>Physical DMG</span>.<br>The 4th hit is a Piledriver Attack.<br><br>Basic Attack: Enthusiastic Drills (Burst Mode)<br>Press Icon_Normal while Anton is in Burst Mode to activate:<br>Unleashes up to 3 mixed attacks in front, dealing massive <span class='element-electric'>Electric DMG</span>.<br>During the 2nd Drill Attack and 3rd Piledriver Attack, press repeatedly or hold Icon_Normal to extend the skill duration.",

            "Dodge": "Dodge: Let's Move<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Fire With Fire<br>Press Icon_Normal during a Dodge to activate:<br>Rams into enemies in front of him, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Retaliation<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Continuously strikes enemies in front with heavy punches, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Dodge Counter: Overload Drill (Burst Mode)<br>While in Burst Mode, press Icon_Normal during a Perfect Dodge to activate:<br>Launches a Drill Attack at enemies in front of him, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable during the attack.",

            "Assist": "Quick Assist: Shoulder-To-Shoulder<br>When the active character is launched, press Icon_Switch to activate:<br>Continuously strikes enemies in front of him with heavy punches, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Quick Assist: Protective Drill (Burst Mode)<br>When the active character is launched, press Icon_Switch to activate:<br>Attacks enemies in front with a Drill Attack, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable during the attack.<br><br>Defensive Assist: Iron Wrist<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Limit Burst<br>Press Icon_Normal after a Defensive Assist to activate:<br>Launches a Drill Attack that ends in a Piledriver Attack, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Spin, Bro!<br>Press Icon_Special to activate:<br>Unleashes a Piledriver Attack against enemies in a line in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Smash the Horizon, Bro!<br>With enough Energy, press Icon_SpecialReady to activate:<br>Launches several Piledriver Attacks at enemies in a line in front of him, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br>Anton enters Burst Mode after using this skill. When in Burst Mode, Anton's attacks become more powerful, dealing massive <span class='element-electric'>Electric DMG</span> while continually consuming Energy upon hitting an enemy. Burst Mode remains active until his Energy is depleted.<br><br>Special Attack: Explosive Drill (Burst Mode)<br>Press Icon_Special while in Burst Mode to activate:<br>Launches a Piledriver Attack at enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti-Interrupt level is increased while using this skill.",

            "Chain Attack": "Chain Attack: Go Go Go!<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a Piledriver Attack onto the ground in front of him over a large area, dealing massive <span class='element-electric'>Electric DMG</span> to enemies within range.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Go Go Go Go Go!<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a Piledriver Attack onto the ground in front of him over a large area, dealing massive <span class='element-electric'>Electric DMG</span> to enemies within range.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Brothers in Arms!<br>When Anton uses his Piledriver Attack, the skill's DMG is increased by 24% and when he uses his Drill Attack, the skill's DMG is increased by 40%.<br><br>Additional Ability: Teamwork<br>When another character in your squad shares the same Attribute or Faction:<br>While Anton is in Burst Mode, for every 4 critical hits, the next attack hitting <span class='element-electric'>Shocked</span> enemies triggers an additional bout of <span class='element-electric'>Shock DMG</span> at 45% of the original DMG. This effect can trigger once every 0.5s."
        },
        mindscapes: [
            { number: 1, name: "Warm-Up Exercises  ", desc: "When Drill Attack hits an enemy, Anton gains additional Energy, up to a maximum of 5 Energy per skill use." },
            { number: 2, name: "State of Flow  ", desc: "When Anton uses his EX Special Attack and enters Burst Mode, he gains a Shield that equals to 7.5% of his Max HP. While in Burst Mode, entering combat or switching in reapplies the Shield effect. This effect can trigger once every 15s. The Shield dissipates when Burst Mode ends." },
            { number: 3, name: "Rotational Training  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Everyone Get Fired Up!  ", desc: "When Anton uses a Chain Attack or Ultimate, all squad members' CRIT Rate increases by 10% for 12s." },
            { number: 5, name: "Jack of All Trades ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Break the Limit   ", desc: "When Anton's Piledriver Attack triggers a critical hit, his Basic Attack: Enthusiastic Drills (Burst Mode) and Dodge Counter: Overload Drill (Burst Mode) deal 4% more DMG for 30s, stacking up to 6 times. Repeated triggers reset the duration." }
        ]
    },
    {
        id: 41,
        name: "Ben",
        rarity: "A",
        element: "Fire",
        role: "Defense",
        faction: "Belobog Heavy Industries",
        image: "image/бен.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Debt Reconciliation<br>Press Icon_Normal to activate:<br>Unleashes up to 3 strikes, dealing <span class='element-physical'>Physical DMG</span>.",

            "Dodge": "Dodge: Missing Invoice<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Incoming Expense<br>Press Icon_Normal during a Dodge to activate:<br>Strikes enemies in front of him, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Accounts Settled<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Strike enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Joint Account<br>When the active character is launched, press Icon_Switch to activate:<br>Strikes enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable during the attack.<br><br>Defensive Assist: Risk Allocation<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Don't Break Contract<br>Press Icon_Normal after a Defensive Assist to activate:<br>Charges and strikes enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Fiscal Fist<br>Press Icon_Special to activate:<br>Ben lifts his weapon, blocking the enemy's attack before unleashing a forward strike, dealing <span class='element-physical'>Physical DMG</span>. Successfully blocking an attack enhances the power of this skill and triggers Block Counter, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Hold Icon_Special to remain in the Blocking stance.<br>While in the Blocking stance, Ben gains a Shield that weakens over time.<br>After leaving the blocking stance, the Shield is removed and recovers over time.<br>The Shield cannot exceed 16% of Ben's Max HP.<br>Ben is invulnerable when activating Block.<br>Anti-Interrupt level is increased while launching strikes.<br><br>EX Special Attack: Cashflow Counter<br>With enough Energy, press Icon_SpecialReady to activate:<br>Ben lifts his weapon, blocking the enemy's attacks before unleashing a forward strike, dealing <span class='element-fire'>Fire DMG</span>. Successfully blocking an attack enhances the power of this skill and triggers Block Counter, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Hold Icon_SpecialReady to remain in the Blocking stance.<br>While in the Blocking stance, Ben gains a Shield that weakens over time.<br>After leaving the blocking stance, the Shield is removed and recovers over time.<br>The Shield cannot exceed 16% of Ben's Max HP.<br>When this skill is activated, the Shield is restored to its maximum value.<br>After activating the skill, press Icon_SpecialReady again to follow up with a powerful forward strike, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Ben is invulnerable when activating Block.<br>Ben is invulnerable while launching strikes.",

            "Chain Attack": "Chain Attack: Signed and Sealed<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful strike at enemies in front in a large area, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Complete Payback<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a powerful strike at enemies in front in a large area, dealing massive <span class='element-fire'>Fire DMG</span>.<br>When activating the skill, additionally recover 3 Assist Points.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Guardian<br>Ben's initial ATK increases along with his initial DEF. He gains 80% of his initial DEF as ATK.<br>When Ben launches a powerful follow-up strike during his EX Special Attack, all squad members gain a Shield of 30% of his DEF +550, lasting for 30s.<br><br>Additional Ability: Contractual Agreement<br>When another character in your squad shares the same Attribute or Faction:<br>While the Shield from Core Passive: Guardian is in effect, the character's CRIT Rate is increased by 16%."
        },
        mindscapes: [
            { number: 1, name: "Reacting Force  ", desc: "When successfully Blocking an enemy with Ben's Special Attack or EX Special Attack, the DMG dealt by the blocked enemy is reduced by 30% for 15s." },
            { number: 2, name: "Offense Through Defense  ", desc: "When successfully triggering a Block Counter during Ben's Special Attack or EX Special Attack, inflict an additional 300% of Ben's DEF as DMG." },
            { number: 3, name: "Careful Accounting  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Agile Adaptation  ", desc: "When successfully blocking enemy DMG with Ben's invulnerable effect during his Special Attack or EX Special Attack, the following counter deals 30% more DMG." },
            { number: 5, name: "Meticulous Detail ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Wild Spirit  ", desc: "After launching an attack or follow-up attack during Ben's EX Special Attack, Daze inflicted by Basic Attacks, Dash Attack, and Dodge Counter is increased by 20%, lasting 12s." }
        ]
    },
    {
        id: 42,
        name: "Lucy",
        rarity: "A",
        element: "Fire",
        role: "Support",
        faction: "Sons of Calydon",
        image: "image/люсі.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Lady's Bat<br>Press Icon_Normal to activate:<br>Strike forward up to 4 times, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br>When Lucy uses her fourth Basic Attack, the currently on-field guard boars will launch Guard Boars: Spinning Swing! together.<br><br>Guard Boars: To Arms!<br>In combat, the guard boars will randomly use a baseball bat, boxing gloves, or a slingshot to automatically attack enemies, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Guard Boars: Spinning Swing!<br>When Lucy uses the fourth Basic Attack, or when she gains the Cheer On! status, the guard boars will whirl their baseball bats in a continuous motion, dealing <span class='element-physical'>Physical DMG</span> to nearby enemies. If the attack cannot be executed immediately, the guard boars will remember the required number of times to execute it.",

            "Dodge": "Dodge: Foul Ball!<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Fearless Boar!<br>Press Icon_Normal during dodge to activate:<br>Rapidly strikes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Returning Tusk!<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Strike enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Hit By Pitch!<br>When the active character is launched, press Icon_Switch to activate:<br>Strikes enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable during the attack.<br><br>Defensive Assist: Safe on Base!<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Scored a Run!<br>Press Icon_Normal after a Defensive Assist to activate:<br>Strikes enemies in front, dealing <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Solid Hit!<br>Press Icon_Special to activate:<br>Recall a guard boar and launch it as a Line Drive. The guard boar will cause an explosion upon hitting enemies or walls, dealing <span class='element-fire'>Fire DMG</span>.<br>Hold Icon_Special to activate:<br>Recall a guard boar and launch it as a Fly Ball. The guard boar will cause an explosion upon landing, dealing <span class='element-fire'>Fire DMG</span>.<br><br>EX Special Attack: Home Run!<br>With enough Energy, press Icon_SpecialReady to activate:<br>Recall a guard boar and launch it as a Line Drive. The guard boar will cause an explosion upon hitting enemies or walls, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>When the skill hits an enemy, it triggers a Quick Assist.<br>With enough Energy, hold Icon_SpecialReady to activate:<br>Recall a guard boar and launch it as a Fly Ball. The guard boar will cause an explosion upon landing, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>When the skill hits an enemy, it triggers a Quick Assist.<br><br>Cheer On!<br>After using EX Special Attack, when a guard boar triggers an explosion, it will apply the Cheer On! status to all squad members and Bangboo, and the guard boars themselves. While under the Cheer On! status, allies' ATK increases by 22.6% of Lucy's initial ATK + 88, up to a maximum of 600. The Cheer On! status lasts for 10s when a Line Drive is hit, and 15s when a Fly Ball is hit. Repeated triggers reset the duration.",

            "Chain Attack": "Chain Attack: Grand Slam!<br>When a Chain Attack is triggered, select the character to activate:<br>Lucy jumps up and sends a guard boar at enemies in front in a large area, dealing massive <span class='element-fire'>Fire DMG</span>.<br>Character is invulnerable while using this skill.<br>When the skill hits an enemy, it triggers a Quick Assist.<br><br>Ultimate: Walk-Off Home Run!<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Launch all guard boars sequentially, dealing massive <span class='element-fire'>Fire DMG</span> in a large area to enemies ahead.<br>While using this skill, other squad members recover 10 energy, and the next character to switch in gains an additional 20 energy.<br>Character is invulnerable while using this skill.<br>When the skill hits an enemy, it triggers a Quick Assist.",

            "Core Skill": "Core Passive: Crimson Mane Guard<br>When Lucy uses her Special Attack or EX Special Attack, a guard boar will join the battle and call in two other guard boars. The guard boars inherit Lucy's ATK, Impact, and Anomaly Proficiency. The Cheer On! buff for the guard boars is increased to 200% of the original effect, and their attack frequency is increased.<br><br>Additional Ability: Batter Up!<br>When another character in your squad shares the same Attribute or Faction or is a Rupture character:<br>The guard boars inherit Lucy's CRIT Rate and CRIT DMG."
        },
        mindscapes: [
            { number: 1, name: "Drill Formations  ", desc: "When the guard boars launch Guard Boars: Spinning Swing!, Lucy recovers 2 Energy. This effect can trigger once every 15s, with each guard boar having its own separate cooldown." },
            { number: 2, name: "Little Boar Captain  ", desc: "When Lucy uses a Chain Attack or Ultimate, it grants all squad members and Bangboo, and the guard boars themselves the Cheer On! status for 10s." },
            { number: 3, name: "Ironfist Overseer  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Chaos Ball Game  ", desc: "While in the Cheer On! state, allies' CRIT DMG is increased by an additional 10%." },
            { number: 5, name: "Wildland Princess ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Fierce Fangs of Fire  ", desc: "When another squad member in the Cheer On! state hits an enemy with an EX Special Attack, a guard boar will drop from the sky and cause an explosion, dealing <span class='element-fire'>Fire DMG</span> equal to 300% of the guard boar's ATK. This will extend the duration of the Cheer On! buff for all squad members and Bangboo, and for the guard boars themselves by 5s. The duration can increase up to 3 times, with a maximum duration of 30s. Refreshing the Cheer On! state resets the stack count. After the guard boar's explosion, it will launch Guard Boars: Spinning Swing!." }
        ]
    },
    {
        id: 43,
        name: "Piper",
        rarity: "A",
        element: "Physical",
        role: "Anomaly",
        faction: "Sons of Calydon",
        image: "image/пайпер.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Load Up and Roll Out<br>Press Icon_Normal to activate:<br>Unleashes up to 4 slashes, dealing <span class='element-physical'>Physical DMG</span>.",

            "Dodge": "Dodge: Handbrake Drift<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Pedal to the Metal<br>Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Power Drift<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Unleash a downward smash attack in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Brake Tap<br>When the active character is launched, press Icon_Switch to activate:<br>Launches a downward smash attack at enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Emergency Brake<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Overtaking Maneuver<br>Press Icon_Normal after a Defensive Assist to activate:<br>Charge and slash enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Tire Spin<br>Press Icon_Special to activate:<br>Piper spins and launches a sweeping slash around her, dealing <span class='element-physical'>Physical DMG</span>.<br>Hold Icon_Special to extend the skill duration, unleashing increasingly powerful spinning slashes and increasing the charge level of the skill up to 2 times.<br>If the skill is used after the first 3 hits of a Basic Attack, Dash Attack, or Dodge Counter, you can quickly activate Special Attack: Tire Spin of an increased charge level.<br>During the skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br><br>Special Attack: One Trillion Tons<br>While Special Attack: Tire Spin is active, release Icon_Special to trigger a downward smash attack based on the charge level of Special Attack: Tire Spin, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Engine Spin<br>With enough Energy, continue holding Icon_SpecialReady after Special Attack: Tire Spin reaches maximum charge level to activate:<br>Rapidly spins, unleashing powerful spinning slashes around her and dealing massive <span class='element-physical'>Physical DMG</span>.<br>This skill consumes Energy continuously for up to 3s.<br>During the skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br><br>EX Special Attack: Really Heavy<br>During EX Special Attack: Engine Spin, release Icon_SpecialReady to activate:<br>Piper unleashes a downward smash attack, dealing massive <span class='element-physical'>Physical DMG</span>.<br>If the duration of EX Special Attack: Engine Spin reaches its limit or Energy drops to 20, EX Special Attack: Really Heavy will automatically activate.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Buckle Up<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful downward smash at enemies ahead in a large area, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Hold~ On~ Tight~<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Rapidly spins, unleashing powerful spinning slashes at enemies in a large area ahead, followed by a downward smash, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Power Charge<br>When Piper's EX Special Attack: Engine Spin or Ultimate hits an enemy, she gains 1 stack of Power, up to a maximum of 20 stacks, lasting for 12s. Repeated triggers reset the duration. For every stack of Power, Piper's Physical Anomaly Buildup Rate increases by 4%.<br><br>Additional Ability: Synced Acceleration<br>When another character in your squad shares the same Attribute or Faction:<br>When Piper has 20 or more stacks of Power, all squad members' DMG is increased by 18%."
        },
        mindscapes: [
            { number: 1, name: "Leisure Moment ", desc: "When Piper's Special Attack: Tire Spin, EX Special Attack: Engine Spin, or Ultimate hits an enemy with a spinning slash, there is a 50% chance to gain an additional stack of Power. The maximum stack limit of Power is increased to 30." },
            { number: 2, name: "Motivation  ", desc: "During Special Attack: Tire Spin and EX Special Attack: Engine Spin, Piper's movement speed increases. When using Special Attack: One Trillion Tons, EX Special Attack: Really Heavy, or Ultimate to launch a downward smash that hits an enemy, the <span class='element-physical'>Physical DMG</span> dealt by the move is increased by 10%. For each stack of Power, this buff is further increased by 1%." },
            { number: 3, name: "Truck Expert  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Refined Techniques  ", desc: "Whenever a squad member inflicts an Attribute Anomaly on an enemy, Piper recovers 20 Energy. This effect can trigger once every 30s." },
            { number: 5, name: "Personal Hobbies ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Mild Excitement  ", desc: "Increases the duration limit of EX Special Attack: Engine Spin by 2s and extends the duration of Power by 4s." }
        ]
    },
    {
        id: 44,
        name: "Seth",
        rarity: "A",
        element: "Electric",
        role: "Defense",
        faction: "New Eridu Public Security",
        image: "image/сет.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Lightning Strike<br>Press Icon_Normal to activate:<br>Unleashes up to 4 attacks in front, dealing <span class='element-physical'>Physical DMG</span> and <span class='element-electric'>Electric DMG</span>.<br><br>Basic Attack: Lightning Strike - Electrified<br>When <span class='highlight-white'>Resolve</span> is above or equal to 75%, hold Icon_Normal to activate.<br>Consume 75% <span class='highlight-white'>Resolve</span> to launch consecutive attacks in front, followed by a Finishing Move, dealing <span class='element-electric'>Electric DMG</span>.<br>When the Finishing Move hits an enemy, it triggers the <span class='highlight-white'>Quick Assist</span> of the squad member positioned before Seth.<br>Anti-Interrupt level is increased while using this skill.",

            "Dodge": "Dodge: Evasion Maneuver<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Thunder Assault<br>Press Icon_Normal during a Dodge to activate:<br>Charge forward with a shield attack, dealing <span class='element-physical'>Physical DMG</span>.<br>Damage received during the move is decreased by 40%.<br><br>Dodge Counter: Retreat to Advance<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Unleash a quick downward slash on enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>After the move, hold Icon_SpecialReady to chain into EX Special Attack: Thunder Shield Rush - High Voltage, enabling faster charging.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Armed Support<br>When the active character is launched, press Icon_Switch to activate:<br>Unleash a quick downward slash on enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>After the move, hold Icon_SpecialReady to chain into EX Special Attack: Thunder Shield Rush - High Voltage, enabling faster charging.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Thundershield<br>When the on-field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Upon activation, gain 25% <span class='highlight-white'>Resolve</span>.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Public Security Ruling<br>Press Icon_Normal after a Defensive Assist to activate:<br>Launch a forward thrust attack, followed by two horizontal slashes, dealing <span class='element-electric'>Electric DMG</span>.<br>When the skill hits an enemy, it triggers the <span class='highlight-white'>Quick Assist</span> of the squad member positioned before Seth.<br>After activating the move, hold Icon_SpecialReady to transition to EX Special Attack: Thunder Shield Rush - High Voltage and charge faster.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Thunder Shield Rush<br>Press Icon_Special to activate:<br>Launch two shield attacks forward, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Thunder Shield Rush - High Voltage<br>With enough Energy, press Icon_SpecialReady to activate:<br>Unleash a series of slashes in front, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Hold Icon_SpecialReady to charge the move, and Seth will dash forward, unleashing a series of powerful slashes, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Activating the move accumulates 75% <span class='highlight-white'>Resolve</span>.<br>Anti-Interrupt level is increased while charging this skill, and damage taken is reduced by 40%.<br>Seth is invulnerable during the consecutive slashes.",

            "Chain Attack": "Chain Attack: Final Judgment<br>When a Chain Attack is triggered, select the character to activate:<br>Launch a series of slashes in front, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Activating the move accumulates 75% <span class='highlight-white'>Resolve</span>.<br>After the move, hold Icon_SpecialReady to chain into EX Special Attack: Thunder Shield Rush - High Voltage, enabling faster charging.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Justice Prevails<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Launch a series of upward attacks in front, followed by a Finishing Move, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Activating the move accumulates 75% <span class='highlight-white'>Resolve</span>, and grants 3 additional Assist Points.<br>After the move, hold Icon_SpecialReady to chain into EX Special Attack: Thunder Shield Rush - High Voltage, enabling faster charging.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Protector<br>When Seth uses EX Special Attack: Thunder Shield Rush - High Voltage, he gains a <span class='highlight-white'>Shield of Firm Resolve</span> equal to 80% of his initial ATK, up to a max of 3,000 points, and lasting 25s. This effect can trigger once every 10s. When Basic Attack: Lightning Strike - Electrified or Assist Follow-Up: Public Security Ruling triggers a <span class='highlight-white'>Quick Assist</span> or Chain Attack, causing another squad member to enter the field, that squad member gains a <span class='highlight-white'>Shield of Firm Resolve</span> equal to 80% of Seth's initial ATK, up to a max of 3,000 points, and lasting 25s. This effect can trigger once every 10s. Having a <span class='highlight-white'>Shield of Firm Resolve</span> increases Anomaly Proficiency by 100.<br><br>Additional Ability: High Spirit<br>When another character in your squad shares the same Attribute or Faction:<br>When Seth's Chain Attack: Final Judgment or Finishing Move during Basic Attack: Lightning Strike - Electrified hits an enemy, the target's Anomaly Buildup RES to all Attributes is reduced by 20%, lasting 20s."
        },
        mindscapes: [
            { number: 1, name: "Heroism  ", desc: "The shield value provided by Shield of Firm Resolve and its maximum limit is increased by 30%. When Shield of Firm Resolve ends, the Anomaly Proficiency increase provided by Core Passive: Protector lasts an additional 10s." },
            { number: 2, name: "Recklessness of Youth  ", desc: "Upon entering battle, Seth immediately gains 75% Resolve. Hitting an enemy with Basic Attack: Lightning Strike - Electrified increases the move's accumulated Electric Anomaly Buildup by 35%." },
            { number: 3, name: "Slow Reflexes  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Core Aspiration  ", desc: "The Daze caused by Defensive Assist: Thundershield is increased by 25%." },
            { number: 5, name: "Distant Admiration ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Idealist  ", desc: "When Seth lands a Finishing Move on an enemy with Basic Attack: Lightning Strike - Electrified, it deals additional damage equal to 500% of his ATK. The attack is guaranteed to trigger a critical hit, and CRIT DMG is increased by 60%." }
        ]
    },
    {
        id: 45,
        name: "Anby",
        rarity: "A",
        element: "Electric",
        role: "Stun",
        faction: "Cunning Hares",
        image: "image/IconRoleCrop01.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Turbo Volt<br>Press Icon_Normal to activate:<br>Unleashes up to 4 slashes. The first 3 hits deal <span class='element-physical'>Physical DMG</span>, the 4th hit deals <span class='element-electric'>Electric DMG</span>.<br><br>Basic Attack: Thunderbolt<br>After unleashing the 3rd hit of the Basic Attack, hold down or pause for a short while, and then press Icon_Normal to activate:<br>Unleashes a downward strike that deals <span class='element-electric'>Electric DMG</span>.<br>Anti-Interrupt level is increased while using this skill.",

            "Dodge": "Dodge: Slide<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Taser Blast<br>Press Icon_Normal during a dodge to activate:<br>Slashes all nearby enemies, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Thunderclap<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Slashes enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Thunderfall<br>When the active character is launched, press Icon_Switch to activate:<br>Slashes enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Flash<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Lightning Whirl<br>Press Icon_Normal after a Defensive Assist to activate:<br>Perform a spinning slash against enemies in front, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Fork Lightning<br>Press Icon_Special to activate:<br>Unleashes an upward slash that deals <span class='element-electric'>Electric DMG</span>.<br>This attack launches faster when used after the 3rd hit of the Basic Attack or Basic Attack: Thunderbolt.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Lightning Bolt<br>With enough Energy, press Icon_SpecialReady to activate:<br>Unleashes a powerful upward slash that deals massive <span class='element-electric'>Electric DMG</span>.<br>This attack launches faster when used after the 3rd hit of her Basic Attack or Basic Attack: Thunderbolt.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Electro Engine<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful upwards slash at enemies in a small area, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Overdrive Engine<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a powerful upward slash at enemies in a small area followed by several downward strikes, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Fluctuating Voltage<br>Launch a Basic Attack: Thunderbolt, Special Attack, or EX Special Attack after the 3rd hit of Anby's Basic Attack for an extra 64% Daze.<br><br>Additional Ability: Parallel Connection<br>When another character in your squad shares the same Attribute or Faction:<br>When Anby's Dodge Counter hits an enemy, she gains an extra 7.2 Energy. This effect can trigger once every 5s."
        },
        mindscapes: [
            { number: 1, name: "Rapid Charge Mode  ", desc: "When the 4th hit of Anby's Basic Attack hits an enemy, her Energy Generation Rate is increased by 12% for 30s." },
            { number: 2, name: "Precision Discharge  ", desc: "When Basic Attack: Thunderbolt hits a Stunned enemy, its DMG is increased by 30%. When Anby's EX Special Attack hits an enemy that is not Stunned, the Daze inflicted is increased by 10%." },
            { number: 3, name: "Well-Disciplined  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Conducting Charge  ", desc: "When Anby launches a Chain Attack or uses her Ultimate, off-field Electric Agents recover 3 Energy.<br>For every 12% Energy Generation Rate Anby has, recover an additional 2 Energy, up to a maximum of 6." },
            { number: 5, name: "Street Experience ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Charging Field  ", desc: "When Anby uses her EX Special Attack, she gains 8 stacks of Charge (max 8 stacks). When she hits an enemy with her Basic Attack or Dash Attack, 1 stack of Charge is consumed, increasing that attack's DMG by 45%." }
        ]
    },
    {
        id: 46,
        name: "Billy",
        rarity: "A",
        element: "Physical",
        role: "Attack",
        faction: "Cunning Hares",
        image: "image/IconRoleCrop10.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Full Firepower<br>Press Icon_Normal to activate: <br>Unleashes a piercing attack, dealing <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold to enter Crouching Shot to extend the attack duration.<br>Drag the joystick during Crouching Shot to launch Rolling Shot and adjust the character's position, dealing <span class='element-physical'>Physical DMG</span>.<br>Stop pressing or holding during Crouching Shot to launch Finishing Shot at enemies in front, dealing <span class='element-physical'>Physical DMG</span>.",
            "Dodge": "Dodge: Risky Business<br>Press Icon_Evade to activate:<br> A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Starlight Sanction<br>When dragging the joystick during a dodge, press Icon_Normal:<br>Launches a piercing attack at nearby enemies within a large area, dealing <span class='element-physical'>Physical DMG</span>.<br> When not dragging the joystick during a dodge, press Icon_Normal:<br>Launches a piercing attack at enemies in a line, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Fair Fight<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Pierces enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Power of Teamwork<br>When the active character is launched, press Icon_Switch to activate: <br>Launches a piercing attack at enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: Flash Spin<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Dodges the enemy's attack and activates Vital View.<br> Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Fatal Shot<br>Press Icon_Normal after an Evasive Assist to activate:<br>Pierces enemies in a large area in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",
            "Special Attack": "Special Attack: Stand Still<br>Press Icon_Special to activate:<br> Performs up to 3 piercing attacks in a line, dealing <span class='element-physical'>Physical DMG</span>.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Clearance Time<br>With enough Energy, press Icon_SpecialReady to activate:<br>Launches a powerful piercing attack in a line, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Starlight Mirage<br>When a Chain Attack is triggered, select the character to activate: <br>Unleashes a powerful piercing attack at surrounding enemies in a large area, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Starlight, Shine Bright<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br> Unleashes a powerful piercing attack at surrounding enemies in a large area, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Steady Shot<br>Billy's DMG increases by 50% when he enters Crouching Shot during his Basic Attack. The effect ends if he moves, returns to standby, or is knocked back or launched by an attack.<br><br>Additional Ability: Team Starlight<br>When another character in your squad shares the same Attribute or Faction: <br>After Billy uses a Chain Attack, the DMG of his next Ultimate is increased by 50%, stacking up to 2 times.This effect resets whenever an Ultimate is activated."
        },
        mindscapes: [
            { number: 1, name: "Dazzling Entrance  ", desc: "When Billy hits an enemy with a Dash Attack or Dodge Counter, he gains an additional 2.7 Energy. Can trigger once every 5s." },
            { number: 2, name: "Roaming Gunslinger  ", desc: "Billy's Dodge Counter DMG increases by 25%. Rolling Shots during his Basic Attacks count as dodges, making Billy Invulnerable during skill activation and able to trigger Perfect Dodges. When a Rolling Shot triggers a Perfect Dodge, it will automatically follow up with a Dodge Counter." },
            { number: 3, name: "Teachings of the Starlight Knights  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Starlight Ballistics  ", desc: "When Billy hits an enemy with his EX Special Attack, the skill's CRIT Rate increases based on the distance from the enemy. The closer he is to the target, the greater the effect, up to a maximum increase of 32%." },
            { number: 5, name: "Lost Technological Construct ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Starlight Hero  ", desc: "When Billy accumulates 10 hits on enemies or triggers a Perfect Dodge, his DMG increases by 6%, stacking up to 5 times and lasting until he's knocked back or launched by an attack." }
        ]
    },
    {
        id: 47,
        name: "Corin",
        rarity: "A",
        element: "Physical",
        role: "Attack",
        faction: "Victoria Housekeeping",
        image: "image/IconRoleCrop09.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Wipeout<br>Press Icon_Normal to activate:<br>Unleashes up to 5 slashes, dealing <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold the button during the 3rd and 5th hits to extend the chainsaw slash attack.",

            "Dodge": "Dodge: Shoo!<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Oopsy-Daisy!<br>Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold the button to extend the chainsaw attack's duration.<br><br>Dodge Counter: Nope!<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Slashes enemies in front before detonating her chainsaw, dealing <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Emergency Measures<br>When the active character is launched, press Icon_Switch to activate:<br>Slashes enemies in front before detonating her chainsaw, dealing <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: P—Please Allow Me!<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Quick Sweep<br>Press Icon_Normal after a Defensive Assist to activate:<br>Unleash a series of slashes against enemies in front followed by an explosive chainsaw, dealing <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Clean Sweep<br>Press Icon_Special to activate:<br>Unleashes a series of slashes upon enemies in front, before detonating the chainsaw, dealing <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Anti-Interrupt level is increased while using this skill, and DMG taken is reduced by 40%.<br><br>EX Special Attack: Skirt Alert<br>With enough Energy, press Icon_SpecialReady to activate:<br>Unleashes a series of powerful slashes upon enemies in front, before detonating the chainsaw, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold the button to extend the chainsaw slash attack at the cost of Energy if the attack connects.<br>Character is invulnerable during the spinning slash.<br>Anti-Interrupt level is increased during the extended slash, and DMG taken is reduced by 40%.",

            "Chain Attack": "Chain Attack: Sorry...<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful slash at enemies in a small area, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Very, Very Sorry!<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a powerful slash at enemies in a small area, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Hyperfocus<br>After holding or tapping repeatedly, when Corin unleashes a continuous extended slash with her Chainsaw, the skill's DMG increases by 37.5%.<br><br>Additional Ability: Cleanup Assistance<br>When another character in your squad shares the same Attribute or Faction:<br>Corin deals 35% more DMG to Stunned enemies."
        },
        mindscapes: [
            { number: 1, name: "Open Trauma  ", desc: "When Corin's Chain Attack or Ultimate hits an enemy, her DMG against the target increases by 12% for 15s." },
            { number: 2, name: "Atomic Smash  ", desc: "When Corin's EX Special Attack, Chain Attack or Ultimate hits an enemy, the target's Physical RES is reduced by 0.5%, stacking up to 20 times and lasting 5s. The duration of each stack is calculated separately." },
            { number: 3, name: "Amateur Maid  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Battlefield Retainer  ", desc: "When Corin uses a Quick Assist, Defensive Assist, or Chain Attack, she recovers 7.2 Energy. This effect can trigger once every 16s." },
            { number: 5, name: "Special Ops Maid ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Accumulated Release  ", desc: "When Corin's extended slash hits an enemy, she obtains a stack of Charge (max 40 stacks).<br>During a Dodge Counter, Special Attack, EX Special Attack, Quick Assist, or Assist Follow- Up, when her chainsaw detonation hits an enemy, consumes all stacks of Charge.Each stack consumed causes the attack to deal an additional 3 % of ATK as DMG." }
        ]
    },
    {
        id: 48,
        name: "Nicole",
        rarity: "A",
        element: "Ether",
        role: "Support",
        faction: "Cunning Hares",
        image: "image/ніеоль.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Cunning Combo<br>Press Icon_Normal to activate:<br>Unleashes up to 3 strikes, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Basic Attack: Do As I Please<br>After using a Special Attack, EX Special Attack, Chain Attack, or Ultimate, Nicole can reload, and her Basic Attack and Dash Attack are enhanced, increasing the power of her bullets.",

            "Dodge": "Dodge: Speed Demon<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br>Drag the joystick to dodge, then hold Icon_Evade to reload while dodging, enhancing Basic Attacks and Dash Attacks up to 8 times.<br><br>Dash Attack: Jack in the Box<br>When dragging the joystick during a dodge, press Icon_Normal:<br>Dashes in the target direction and strikes nearby enemies, dealing <span class='element-physical'>Physical DMG</span>.<br>When not dragging the joystick during a dodge, press Icon_Normal:<br>Vaults backward and launches a ranged strike against enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Automatically reloads after the attack to enhance her Basic Attack and Dash Attack, up to 8 times.<br><br>Dodge Counter: Diverted Bombard<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Dodge backwards and send a ranged strike at enemies in front, dealing <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.",

            "Assist": "Quick Assist: Emergency Bombard<br>When the active character is launched, press Icon_Switch to activate:<br>Dodge backwards and send a ranged strike at enemies in front, dealing <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.<br><br>Defensive Assist: The Hare Strikes Back!<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Window of Opportunity<br>Press Icon_Normal after a Defensive Assist to activate:<br>Charge forward and bombard enemies, dealing <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.",

            "Special Attack": "Special Attack: Sugarcoated Bullet<br>Press Icon_Special to activate:<br>Unleashes a ranged strike against enemies in front, dealing <span class='element-ether'>Ether DMG</span>.<br>Anti-Interrupt level is increased while using this skill.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.<br><br>EX Special Attack: Stuffed Sugarcoated Bullet<br>With enough Energy, press Icon_SpecialReady to activate:<br>A powerful ranged strike, generating an energy field that pulls enemies towards its center to deal <span class='element-ether'>Ether DMG</span>.<br>Hold Icon_SpecialReady down to charge up this attack, during which a small energy field is generated at the muzzle as Energy is consumed, dealing bonus DMG to enemies nearby.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.",

            "Chain Attack": "Chain Attack: Ether Shellacking<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful ranged strike at enemies in a small area, generating an energy field that pulls enemies towards its center to deal <span class='element-ether'>Ether DMG</span>.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.<br><br>Ultimate: Ether Grenade<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a powerful ranged strike at enemies in a small area, generating an energy field that pulls enemies towards its center to deal <span class='element-ether'>Ether DMG</span>.<br>When using this skill, other squad members recover 10 Energy. The next character to switch in gains an additional 20 Energy.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.",

            "Core Skill": "Core Passive: Mechanical Case<br>After hitting an enemy with a Special Attack, EX Special Attack, Chain Attack, or Ultimate, Nicole can reload, enhancing her Basic Attack and Dash Attack. When her enhanced bullets or Energy Field hits an enemy, the target's DEF is reduced by 40% for 3.5s.<br><br>Additional Ability: Hare of Many Burrows<br>When another character in your squad shares the same Attribute or Faction:<br>When Nicole's Core Passive: Mechanical Case applies a debuff to an enemy, all units deal 25% more <span class='element-ether'>Ether DMG</span> to the target for 3.5s."
        },
        mindscapes: [
            { number: 1, name: "Supercharged Bomb  ", desc: "The DMG and the Anomaly Buildup inflicted by Nicole's EX Special Attack increases by 16%. For each additional 0.1s of charging when Nicole activates her EX Special Attack, the duration of the energy field created at the target location increases by 0.15s" },
            { number: 2, name: "Charging Device  ", desc: "Nicole recovers 5 Energy when Core Passive: Mechanical Case's debuff is triggered. This effect can trigger once every 15s." },
            { number: 3, name: "A Hare's Cunning  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Field Expansion  ", desc: "When Nicole uses her EX Special Attack, Chain Attack, or Ultimate, the diameter of the energy field generated at the target location is increased by 3m." },
            { number: 5, name: "Industry Star ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Corrupting Energy Field  ", desc: "When Nicole's energy fields deal DMG to an enemy, all units' CRIT Rate against that enemy increases by 1.5%, stacking up to 10 times, and lasting 12s. The duration of each stack is calculated separately." }
        ]
    },
    {
        id: 49,
        name: "Soukaku",
        rarity: "A",
        element: "Ice",
        role: "Support",
        faction: "Hollow Special Operations Section 6",
        image: "image/сока.webp",
        stats: {
            "HP": "8025",
            "ATK": "665",
            "DEF": "597",
            "Impact": "86",
            "CRIT Rate": "5%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "93",
            "Anomaly Proficiency": "96",
            "energy regen": "1.56",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Making Rice Cakes<br>Press Icon_Normal to activate:<br>Unleashes up to 3 attacks, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Basic Attack: Making Rice Cakes (Frosted Banner)<br>When Frosted Banner is active, press Icon_Normal to activate:<br>Unleashes up to 3 faster attacks in front, dealing <span class='element-ice'>Ice DMG</span>.",

            "Dodge": "Dodge: Grab a Bite<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: 50/50<br>Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dash Attack: 50/50 (Frosted Banner)<br>When Frosted Banner is active, press Icon_Normal during a Dodge to activate:<br>Slashes enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br><br>Dodge Counter: Away From My Snacks<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Slashes enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: A Set for Two<br>When the active character is launched, press Icon_Switch to activate:<br>Slashes enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Guarding Tactics<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Sweeping Strike<br>Press Icon_Normal after a Defensive Assist to activate:<br>Charges and strikes enemies in front, dealing <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br>Holding Icon_Normal while using this skill allows for a quick transition to Fly the Flag.",

            "Special Attack": "Special Attack: Cooling Bento<br>Press Icon_Special to activate:<br>Soukaku releases a wind current in front of her and unleashes her finishing move, dealing <span class='element-ice'>Ice DMG</span>.<br>During skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br>Holding Icon_Special while using this skill allows for a quick transition to Fly the Flag.<br><br>EX Special Attack: Fanning Mosquitoes<br>With enough Energy, press Icon_SpecialReady to activate:<br>Releases wind currents of extended range in front of her, dealing massive <span class='element-ice'>Ice DMG</span>.<br>This skill can be triggered consecutively by pressing repeatedly. Each use consumes a specified amount of Energy. When Soukaku's Energy is depleted, or you stop pressing the button, she unleashes a powerful finishing move that deals massive <span class='element-ice'>Ice DMG</span>.<br>During skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br>Holding Icon_Special while using this skill allows for a quick transition to Fly the Flag.<br><br>Special Attack: Rally!<br>Hold Icon_Special to activate:<br>Soukaku plunges her weapon into the ground, morphs it into a flag, and launches Fly the Flag, dealing <span class='element-ice'>Ice DMG</span>. Hitting an enemy with Fly the Flag triggers a Quick Assist.<br>Pressing Icon_Normal or Icon_Special after Fly the Flag activates a Special Attack as she retracts the flag, dealing <span class='element-ice'>Ice DMG</span>.<br>If Soukaku owns 3 stacks of Vortex on using Fly the Flag, she consumes all 3 stacks and enters the Frosted Banner state. In the Frosted Banner state, she can unleash an enhanced Basic Attack or an enhanced Dash Attack, dealing massive <span class='element-ice'>Ice DMG</span>. This effect can last up to 45s or stack up to 6 times.<br>Soukaku's weapon gains Vortexes in the following circumstances:<br>Gains 1 stack of Vortex when launching an EX Special Attack,<br>Gains 1 stack of Vortex when launching a Chain Attack,<br>Gains 3 stacks of Vortex when launching an Ultimate.<br>Soukaku can accumulate a maximum of 3 stacks of Vortex.",

            "Chain Attack": "Chain Attack: Pudding Slash<br>When a Chain Attack is triggered, select the character to activate:<br>Soukaku quickly unleashes a series of strikes at enemies in front of her and follows up with Fly the Flag, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Jumbo Pudding Slash<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Soukaku quickly unleashes an extended series of strikes at enemies in front of her and follows up with Fly the Flag, dealing massive <span class='element-ice'>Ice DMG</span>.<br>Upon activating this skill, Soukaku enters the Masked state, increasing her CRIT Rate by 15% for 15s.<br>Upon activating this skill, other squad members recover 10 Energy. The next character to switch in gains an additional 20 Energy.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Blade Banner<br>When Soukaku launches Fly the Flag, her ATK is increased by 20% of her initial ATK, up to 500, for 22s. When consuming Vortex during Fly the Flag, the ATK increase is doubled, up to a max of 1,000. This buff can be passed along to characters switching in via Quick Assists or Chain Attacks triggered by Fly the Flag, and it refreshes the duration of the buff.<br><br>Additional Ability: Group Set Meal<br>When another character in your squad shares the same Attribute or Faction:<br>When Soukaku consumes Vortex to activate Fly the Flag, the <span class='element-ice'>Ice DMG</span> of all squad members is increased by 20% for 22s."
        },
        mindscapes: [
            { number: 1, name: "Uplifting Current  ", desc: "When Soukaku triggers Core Passive: Blade Banner or Additional Ability: Group Set Meal, the buff duration is increased by 8s." },
            { number: 2, name: "Experimental Charging Module  ", desc: "When Soukaku's Basic Attack, Dash Attack, Dodge Counter, or Quick Assist hits an enemy, there's a 15% chance she gains 1 stack of Vortex, triggering up to once per second.When Vortex reaches max stacks, any additional stacks grant Soukaku 1.2 Energy instead." },
            { number: 3, name: "Attendance Meal Allowance  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Hypothermia  ", desc: "If an enemy is hit by Fly the Flag, the target's Ice RES is reduced by 10% for 8s." },
            { number: 5, name: "Late-Night Snacks ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Northern Wind  ", desc: "While in the Frosted Banner state, the number of usable enhanced Basic Attacks and enhanced Dash Attacks is increased to 12, and also deal 45% more DMG." }
        ]
    },
    {
        id: 50,
        name: "Qingyl",
        rarity: "S",
        element: "Electric",
        role: "Stun",
        faction: "New Eridu Public Security",
        image: "image/цинька.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Penultimate<br>Press Icon_Normal to activate:<br> Launch up to four strikes forward, dealing <span class='element-physical'><span class='element-physical'>Physical DMG</span></span> and <span class='element-electric'>Electric DMG</span>.<br>During the 3rd hit, repeatedly press Icon_Normal to continue the attack, continuously striking the enemy.Using Dodge during this period will not interrupt Qingyi's Basic Attack combo count.<br> During the 3rd hit, stop pressing Icon_Normal to interrupt the continuous attack, transitioning automatically to the 4th hit.If the continuous attack lasts for a certain time, the 4th hit will be enhanced.<br>Anti - Interrupt Level is increased and DMG received is reduced by 40% during the 3rd and 4th hit.<br><br> Basic Attack: Enchanted Blossoms<br>Hold Icon_Normal to activate:<br>Launches a forward rush attack, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti - Interrupt level is increased while using this skill.<br><br>Flash Connect<br>When Qingyi deals <span class='element-electric'>Electric DMG</span> with a skill, she accumulates Flash Connect Voltage.When Flash Connect Voltage reaches 75%, she will enter the Flash Connect state.When using her Basic Attack: Enchanted Moonlit Blossoms, Qingyi will consume all Flash Connect Voltage and exit the Flash Connect state.For every 1% of Flash Connect Voltage consumed over 75%, her Damage and Daze inflicted by this skill will be increased by 1%/0.5%. Basic Attack: Enchanted Moonlit Blossoms itself does not accumulate Flash Connect Voltage.<br> <br>Basic Attack: Enchanted Moonlit Blossoms<br>During the Flash Connect state, hold Icon_Normal to activate:<br>Launch five consecutive forward rush attacks, then execute a Finishing Move that inflicts massive <span class='element-electric'>Electric DMG</span>.Release Icon_Normal during the move to trigger the Finishing Move early.<br>Activate the Finishing Move just before the character is attacked to trigger Perfect Dodge.<br> Anti - Interrupt level is increased and DMG received is reduced by 40% during the rush attack.Qingyi is invulnerable during the Finishing Move.",
            "Dodge": "Dodge: Swan Song<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br> Character is invulnerable while using this skill.<br><br>Dash Attack: Breach<br>Press Icon_Normal during a Dodge to activate:<br>Rush forward and then launch an upward attack, dealing <span class='element-physical'>Physical DMG</span>.<br><br>Dodge Counter: Lingering Sentiments<br> Press Icon_Normal during a Perfect Dodge to activate:<br> Leap into the air and then perform a downward attack, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Wind Through the Pines<br>When the active character is launched, press Icon_Switch to activate: <br>Leap into the air and perform a downward attack, dealing <span class='element-electric'>Electric DMG</span>.<br> Character is invulnerable while using this skill.<br><br> Defensive Assist: Graceful Embellishment<br>When the on- field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br> Assist Follow- Up: Song of the Clear River<br>Press Icon_Normal after a Defensive Assist to activate:<br>Rush forward with an attack and inject electrical energy into the ground, then pull back to trigger an explosion, dealing <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",
            "Special Attack": "Special Attack: Sunlit Glory<br>Press Icon_Special to activate: <br>Quickly swings upward, followed by a downward smash, dealing <span class='element-electric'>Electric DMG</span>.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Moonlit Begonia<br>With enough Energy, press Icon_SpecialReady to activate:<br> Quickly swings upward and leaps into the air, turning around to launch a series of attacks, then follows up with a powerful downward smash, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Hold Icon_SpecialReady to consume additional energy to increase the number of hits of the series of attacks.<br>Character is invulnerable while using this skill.<br>After executing the move, you can immediately follow up with the 3rd hit of a Basic Attack.",
            "Ultimate": "Chain Attack: Tranquil Serenade<br>When a Chain Attack is triggered, select the character to activate: <br>Launch a series of powerful strikes over a large area in front, dealing massive <span class='element-electric'>Electric DMG</span><br>When this attack hits an enemy, the skill's DMG increases by 3% for every stack of Subjugation in Core Passive: Eternal Seasons the target has.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Eight Sounds of Ganzhou<br>  When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Launch a series of powerful strikes over a large area in front, followed by a Finishing Move, dealing massive <span class='element-electric'>Electric DMG</span>.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Eternal Seasons<br>When Qingyi lands a Finishing Move on an enemy with her Basic Attack: Enchanted Moonlit Blossoms, it applies 5 stacks of Subjugation to the enemy, stacking up to 20 times.Each stack of Subjugation increases the target's Stun DMG Multiplier by 4%. For each rush attack performed during Basic Attack: Enchanted Moonlit Blossoms, the Finishing Move will apply an extra stack of Subjugation. If Perfect Dodge is triggered when using the Finishing Move, it directly applies 10 stacks of Subjugation. When applying Subjugation to normal and elite enemies, the target receives double the stacks. When the target recovers from being Stunned, the corresponding stacks of Subjugation are reset.<br><br>Additional Ability: Three Verses of Farewell at Yang Pass<br>When another character in your squad is an Attack character or shares the same Faction: <br>Basic Attacks deal 20% increased Daze.If Qingyi's Impact is greater than 120, each point over increases her ATK by 6, up to a maximum of 600."
        },
        mindscapes: [
            { number: 1, name: "Insulation Breakdown  ", desc: "When Qingyi enters combat, Flash Connect Voltage is instantly restored to its maximum, and the accumulation rate is increased by 30%. When using her Basic Attack: Enchanted Moonlit Blossoms, if Flash Connect Voltage is at its maximum, the attack will reduce the DEF of the enemy it hits by 15%, and Qingyi's CRIT Rate against that enemy will increase by 20% for 15s." },
            { number: 2, name: "Minimal Effort, Maximum Impact  ", desc: "The Stun DMG Multiplier increase provided by each stack of Subjugation in Core Passive: Eternal Seasons increases to 135% of its original value. When Qingyi's attack hits an enemy and the stacks of Subjugation she applies reaches its maximum stacks, her Daze dealt to the target increases by 15%." },
            { number: 3, name: "Drink Hot Water  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Youthful Spirit  ", desc: "Upon entering or exiting Flash Connect state, gain a shield equal to 10% of Qingyi's Max HP. If a previous shield is still active when the shield effect refreshes, Qingyi generates 5 Energy. This Energy Generation effect can be triggered once every 10s." },
            { number: 5, name: "Youthful Spirit ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Eight Meridians  ", desc: "The Interrupt Level of Basic Attack: Enchanted Moonlit Blossoms is greatly increased, and the CRIT DMG is increased by an additional 100%. When Qingyi hits an enemy with her Basic Attack: Enchanted Moonlit Blossoms, the target's Attribute DMG RES is reduced by 20% for 15s." }
        ]
    },
    {
        id: 51,
        name: "Caesar",
        rarity: "S",
        element: "Physical",
        role: "Defense",
        faction: "Sons of Calydon",
        image: "image/цезар.webp",
        stats: {
            "HP": "7673",
            "ATK": "938",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93",
            "energy regen": "1.2",
            "PEN": "0"
        },
        skills: {
            "Basic Attack": "Basic Attack: Rampaging Slash<br>Press Icon_Normal to activate:<br> Unleashes up to 6 slashes ahead, dealing <span class='element-physical'>Physical DMG</span>.<br><br> Basic Attack: Dead End<br>When there are sufficient Assist Points, hold Icon_Normal to activate:<br>Consume 1 Assist Point to toss the shield and attack nearby enemies in all directions, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",
            "Dodge": "Dodge: Adrift<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Hog Rush<br>Press Icon_Normal during a dodge to activate:<br> Strikes forward with the shield, dealing <span class='element-physical'>Physical DMG</span>.<br> During skill activation, DMG taken is reduced by 40%, and when attacked by an enemy, Caesar blocks with the shield and gets knocked back.Following that, press Icon_Special or Icon_SpecialReady to trigger Retaliation and activate Special Attack: Roaring Thrust or EX Special Attack: Overpowered Shield Bash.<br><br>Dodge Counter: Eye For an Eye<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Stabs at enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Lane Change<br>When the active character is launched, press Icon_Switch to activate: <br>Thrust at enemies in front, dealing <span class='element-physical'>Physical DMG</span>.<br> Character is invulnerable while using this skill.<br><br>Defensive Assist: Aegis Shield<br> When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Aiding Blade<br>Press Icon_Normal after a Defensive Assist to activate:<br>Tosses the shield forward, unleashing a powerful spinning attack on enemies in front, followed by a slash that deals <span class='element-physical'>Physical DMG</span>.<br>After activating the skill, press Icon_Special or Icon_SpecialReady to trigger a Retaliation, activating Special Attack: Roaring Thrust or EX Special Attack: Overpowered Shield Bash.<br>Character is invulnerable while using this skill.",
            "Special Attack": "Special Attack: Shockwave Shield Bash<br>Press Icon_Special to activate:<br> Strike forward with the shield, dealing <span class='element-physical'>Physical DMG</span>.<br>If Caesar is hit by an enemy at the beginning of the skill's activation, it will trigger a Perfect Block, negating the damage once and automatically following up with a Special Attack: Roaring Thrust.<br>After using the skill, Caesar enters a guard stance, reducing incoming damage by 40%.When attacked by an enemy, Caesar blocks with the shield and gets slightly knocked back.Press Icon_Special or Icon_SpecialReady to trigger Retaliation, activating Special Attack: Roaring Thrust or EX Special Attack: Overpowered Shield Bash<br>When Retaliation is triggered, Caesar is invulnerable while using the skill.<br><br>Special Attack: Roaring Thrust<br>After activating Special Attack: Shockwave Shield Bash, press Icon_Special to activate:<br>Thrusts forward, dealing <span class='element-physical'>Physical DMG</span>.<br>If Perfect Block or Retaliation is not triggered, the Anti- Interrupt level is increased while using this skill.<br>Character is invulnerable while using this skill when Perfect Block or Retaliation is triggered.<br><br>EX Special Attack: Parry Counter<br>With enough Energy, press Icon_SpecialReady to activate:<br> Strikes forward with the shield, followed by a powerful thrust, dealing massive <span class='element-physical'>Physical DMG</span>." +
                "<br>If Caesar is hit by an enemy at the beginning of the skill activation or an Interrupt is triggered with the shield strike, it will trigger Perfect Block, negating incoming damage once and countering with a shield attack.After triggering Perfect Block, press Icon_SpecialReady to activate EX Special Attack: Overpowered Shield Bash without consuming energy.<br>After using the skill, Caesar enters a guard stance, reducing incoming damage by 40%.When attacked by an enemy, Caesar blocks the attack and is knocked back.Press Icon_Special or Icon_SpecialReady to trigger Retaliation and activate Special Attack: Roaring Thrust or EX Special Attack: Overpowered Shield Bash<br>Character is invulnerable while using this skill.<br><br> EX Special Attack: Overpowered Shield Bash<br>After activating EX Special Attack: Parry Counter, with enough energy, press Icon_SpecialReady to activate:<br> Strikes forward with the shield, dealing massive <span class='element-physical'>Physical DMG</span>.<br>If Caesar is hit by an enemy at the beginning of the skill activation or an Interrupt is triggered with the shield strike, it will trigger Perfect Block, negating incoming damage once and recovering the Energy used to activate the skill.<br> When the skill is activated through Perfect Block or Retaliation, it cannot trigger Perfect Block again.<br> Character is invulnerable while using this skill.<br><br>Stance Switch<br>When Caesar triggers a Perfect Block, Retaliation, or Defensive Assist, her impact is increased by 20% for 3s.",
            "Ultimate": "Chain Attack: Road Rage Slam<br>When a Chain Attack is triggered, select the character to activate: <br>Unleashes a powerful downward strike at enemies ahead, dealing massive <span class='element-physical'>Physical DMG</span>.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Savage Smash<br> When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Tosses the shield forward, unleashing a powerful spinning attack on enemies in front, followed by a downward strike, dealing massive <span class='element-physical'>Physical DMG</span>.<br> When hitting shielded enemies, the Daze dealt is increased by 100%.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Barrier of Resilience<br>When Caesar activates EX Special Attack: Parry Counter, Chain Attack, Ultimate, or triggers EX Special Attack: Overpowered Shield Bash through Retaliation, she buffs all squad members with a Radiant Aegis shield equal to 1, 400% of her base Impact + 1, 400. The shield lasts for 60s and is equipped by the active character, with its value shared among all squad members.Any single instance of DMG will not exceed the shield value.<br>While Radiant Aegis is active, the shield bearer's Anti-Interrupt level is increased.<br>While Radiant Aegis is active, the shield bearer's ATK is increased by 1,000. After Radiant Aegis expires, this buff remains for an additional 5s.<br><br>Additional Ability: Battle Spirit<br>When another character in your squad can activate Defensive Assist or shares the same Faction:<br> When Caesar activates Perfect Block, Retaliation, Defensive Assist, or Basic Attack: Dead End, she applies a Debuff effect to enemies within a 7m radius, increasing the damage they take from all squad members by 25% for 30s."
        },
        mindscapes: [
            { number: 1, name: "Spearhead Advance  ", desc: "When Caesar becomes the active character in combat, she instantly buffs all squad members with a Radiant Aegis shield. This effect can trigger once every 300s. While Radiant Aegis is active, enemies within a 5m radius of the shield bearer suffer a 15% All-Attribute RES reduction." },
            { number: 2, name: "Legacy of the Far Lands  ", desc: "While Radiant Aegis from Core Passive: Barrier of Resilience is active, Caesar's Energy Generation Rate increases by 10%, and the shield bearer's ATK boost is increased to 150% of its original value." },
            { number: 3, name: "Absolute Trust ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Aries the Battering-Ram  ", desc: "When Caesar uses a Chain Attack or Ultimate, she gains 3 additional Assist Points. If her Energy is below 20, she can activate EX Special Attack: Overpowered Shield Bash with 1 Assist Point instead. This substitution can trigger once every 5s." },
            { number: 5, name: "Romantic Conquest ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Overlord's Will  ", desc: "EX Special Attack: Overpowered Shield Bash and Assist Follow-Up: Aiding Blade are guaranteed to trigger a critical hit. The skill's DMG is increased by 50% and deals additional 50% DMG to the primary target. When Caesar uses EX Special Attack: Overpowered Shield Bash or Assist Follow-Up: Aiding Blade, her CRIT Rate is increased by 30% and her CRIT DMG is increased by 60% for 15s." }
        ]
    },

];

const wengines = [
    {
        id: 1,
        name: "Deep Sea Visitor",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.32.32.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Lord of Seas ": "Increases <span class='element-ice'>Ice DMG</span> by 25%. Upon hitting an enemy with a Basic Attack, the equipper's CRIT Rate increases by 10% for 8s. When dealing <span class='element-ice'>Ice DMG</span> with a Dash Attack, the equipper's CRIT Rate increases by an additional 10% for 15s. The duration of each effect is calculated separately."

        }
    },
    {
        id: 2,
        name: "Hellfire Gears",
        rarity: "S",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 15.32.44.jpeg",
        stats: {
            "ATK": "684",
            "Impact": "18%"
        },
        skills: {

            "Passionate Construction ": "While off-field, the equipper's Energy Regen increases by 0.6/s.<br>When using an EX Special Attack, the equipper's Impact is increased by 10% for 10s, stacking up to 2 times. The duration of each stack is calculated separately."

        }
    },
    {
        id: 3,
        name: "Steel Cushion",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.33.04.jpeg",
        stats: {
            "ATK": "684",
            "Crit rate": "24%"
        },
        skills: {

            "Metal Cat Claws ": "Increases <span class='element-physical'>Physical DMG</span> by 20%. The equipper's DMG increases by 25% when hitting the enemy from behind."

        }
    },
    {
        id: 4,
        name: "Weeping Cradle",
        rarity: "S",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 15.33.15.jpeg",
        stats: {
            "ATK": "684",
            "PEN%": "24%"
        },
        skills: {

            "Punishment ": "While off-field, the equipper's Energy Regen increases by 0.6/s. Attacks from the equipper increase all units' DMG against a struck target by 10% for 3 seconds. During this period, this effect is further increased by 1.7% every 0.5s, up to a maximum additional increase of 10.2%. Repeated triggers only refresh the duration without refreshing the DMG increase effect. Passive effects of the same name do not stack."

        }
    },
    {
        id: 5,
        name: "The Brimstone",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.33.26.jpeg",
        stats: {
            "ATK": "684",
            "ATK%": "30%"
        },
        skills: {

            "Scorching Breath ": "Upon hitting an enemy with a Basic Attack, Dash Attack, or Dodge Counter, the equipper's ATK increases by 3.5% for 8s, stacking up to 8 times. This effect can trigger once every 0.5s. The duration of each stack is calculated separately."

        }
    },

    {
        id: 6,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 15.33.47.jpeg",
        stats: {
            "ATK": "684",
            "PEN%": "24%"
        },
        skills: {

            "Data Flood ": "Increases ATK by 12%.<br>When using a Special Attack or EX Special Attack, the equipper's Anomaly Proficiency is increased by 25 for 8s, stacking up to 3 times. The duration of each stack is calculated separately."

        }
    },

    {
        id: 7,
        name: "Riot Suppressor Mark VI",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.34.12.jpeg",
        stats: {
            "ATK": "713",
            "Crit DMG": "48%"
        },
        skills: {

            "Security Patrol ": "Increases CRIT Rate by 15%. Launching an EX Special Attack grants the equipper 8 Charge stacks, up to a maximum of 8 stacks. Whenever the equipper's Basic Attack or Dash Attack deals <span class='element-ether'><span class='element-ether'>Ether DMG</span></span> , consumes a Charge stack and increases the skill's DMG by 35%."

        }
    },
    {
        id: 8,
        name: "The Restrained",
        rarity: "S",
        role: "Stun",
        image: "image2/хз.webp",
        stats: {
            "ATK": "684",
            "Impact": "18%"
        },
        skills: {

            "Binding Chains ": "When an attack hits an enemy, DMG and Daze from Basic Attacks increase by 6% for 8s, stacking up to 5 times. This effect can trigger at most once during each skill. The duration of each stack is calculated separately."

        }
    },
    {
        id: 9,
        name: "Sharpened Stinger",
        rarity: "S",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 15.36.50.jpeg",
        stats: {
            "ATK": "713",
            "Anomaly Proficiency": "90"
        },
        skills: {

            "Indulge in the Hunt ": "Upon activating a Dash Attack, gain 1 stack of Predatory Instinct. Each stack of Predatory Instinct increases the equipper's <span class='element-physical'>Physical DMG</span> by 12% for 10s, stacking up to 3 times. This effect can trigger once every 0.5s and repeated triggers reset the duration. When entering combat or triggering Perfect Dodge, gain 3 stacks of Predatory Instinct. While Predatory Instinct is at maximum stacks, the equipper's Anomaly Buildup Rate increases by 40%."

        }
    },
    {
        id: 10,
        name: "Ice-Jade Teapot",
        rarity: "S",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 15.36.56.jpeg",
        stats: {
            "ATK": "713",
            "Impact": "18%"
        },
        skills: {

            "Ringing Melody ": "When a Basic Attack hits an enemy, gain 1 stack of Tea-riffic. Each stack of Tea-riffic increases the user's Impact by 0.7%, stacking up to 30 times, and lasting for 8s. The duration of each stack is calculated separately. Upon acquiring Tea-riffic, if the equipper possesses stacks of Tea-riffic greater than or equal to 15, all squad members' DMG is increased by 20% for 10s. Passive effects of the same name do not stack."

        }
    },
    {
        id: 11,
        name: "Flamemaker Shaker",
        rarity: "S",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 15.37.58.jpeg",
        stats: {
            "ATK": "713",
            "ATK%": "30%"
        },
        skills: {

            "Fuel on the Rocks ": "While off-field, the equipper's Energy Regen increases by 0.6/s. When hitting an enemy with an EX Special Attack or Assist Attack, the equipper's DMG increases by 3.5%, stacking up to 10 times and lasting for 6s. This effect can trigger once every 0.3s. While off-field, the stack effect is doubled. Repeated triggers reset the duration. Upon obtaining the DMG increase effect, if the number of current stacks is greater than or equal to 5, then the equipper's Anomaly Proficiency increases by 50. This Anomaly Proficiency increase does not stack and lasts for 6s."

        }
    },
    {
        id: 12,
        name: "Tusks of Fury",
        rarity: "S",
        role: "Defense",
        image: "image2/WhatsApp Image 2026-05-12 at 15.38.12.jpeg",
        stats: {
            "ATK": "713",
            "Impact": "18%"
        },
        skills: {

            "Invincible Rider ": "The Shield value provided by the equipper increases by 30%. When any squad member triggers Interrupt or Perfect Dodge, all squad members' DMG increases by 18% and Daze dealt increases by 12% for 20s. Passive effects of the same name do not stack."

        }
    },
    {
        id: 13,
        name: "Blazing Laurel",
        rarity: "S",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 15.38.47.jpeg",
        stats: {
            "ATK": "713",
            "Impact": "18%"
        },
        skills: {

            "Flowing Flame ": "Upon launching a Quick Assist or Perfect Assist, the equipper's Impact increases by 25% for 8s. When the equipper launches and hits an enemy with a Basic Attack, apply Wilt to the target for 30s, stacking up to 20 times, repeated triggers reset the duration. When any squad member hits an enemy, for every stack of Wilt applied to the target, the CRIT DMG of the <span class='element-ice'>Ice DMG</span> and <span class='element-fire'>Fire DMG</span> dealt by that attack increases by 1.5%. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 14,
        name: "Timeweaver",
        rarity: "S",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 15.39.07.jpeg",
        stats: {
            "ATK": "713",
            "ATK%": "30%"
        },
        skills: {

            "Time-Devouring Stratagem ": "The equipper's <span class='element-electric'>Electric Anomaly Buildup Rate</span> increases by 30%. When Special Attacks or EX Special Attacks hit enemies suffering an Attribute Anomaly, the equipper's Anomaly Proficiency increases by 75 for 15s.When the equipper's Anomaly Proficiency is greater than or equal to 375, Disorder DMG inflicted by the equipper increases by 25%."

        }
    },
    {
        id: 15,
        name: "Hailstorm Shrine",
        rarity: "S",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 15.39.21.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Frost-Stained Star ": "CRIT DMG increases by 50%. When using an EX Special Attack or when any squad member applies an Attribute Anomaly to an enemy, the equipper's <span class='element-ice'>Ice DMG</span> increases by 20%, stacking up to 2 times and lasting 15s. The duration of each stack is calculated separately."

        }
    },
    {
        id: 16,
        name: "Zanshin Herb Case",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.39.44.jpeg",
        stats: {
            "ATK": "713",
            "Crit DMG": "48%"
        },
        skills: {

            "Growth Through Adversity ": "CRIT Rate increases by 10%. Dash Attack <span class='element-electric'>Electric DMG</span> increases by 40%. When any squad member applies an Attribute Anomaly or Stuns an enemy, the equipper's CRIT Rate increases by an additional 10% for 15s."

        }
    },
    {
        id: 17,
        name: "Heartstring Nocturne",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.40.04.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "String & Melody ": "CRIT DMG increases by 50%. When the equipper enters combat, or activates a Chain Attack or Ultimate, they gain 1 stack of Heartstring. Each stack of Heartstring allows the equipper's Chain Attack and Ultimate to ignore 12.5% of the target's Fire RES, stacking up to 2 times and lasting 30s. Repeated triggers reset the duration."

        }
    },
    {
        id: 18,
        name: "Elegant Vanity",
        rarity: "S",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 15.40.27.jpeg",
        stats: {
            "ATK": "713",
            "ATK%": "30%"
        },
        skills: {

            "Untold Beauty ": "When any squad member enters the field through a Quick Assist, Chain Attack, Defensive Assist, or Evasive Assist, the equipper gains 5 Energy. This effect can trigger once every 5s. When the equipper consumes 25 or more Energy, the DMG dealt by all squad members increases by 10%, stacking up to 2 times, and lasting 20s. Repeated triggers reset the duration. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 19,
        name: "Spectral Gaze",
        rarity: "S",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 15.41.10.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Wind Seeker ": "When the equipper's Aftershock hits an enemy, causing <span class='element-electric'>Electric DMG</span>, the target's DEF is reduced by 25% for 5s. Passive effects of the same name do not stack. When this effect is triggered, if the equipper is not the active character, they gain 1 stack of Spirit Lock, up to a maximum of 3 stacks. This can trigger only once per use of a skill. Each stack of Spirit Lock increases the equipper's Impact by 4%, lasting 12s. The duration of each stack is calculated separately. At full stacks of Spirit Lock, the equipper's Impact increases by an additional 8%."

        }
    },
    {
        id: 20,
        name: "Severed Innocence",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.42.21.jpeg",
        stats: {
            "ATK": "713",
            "Crit DMG": "48%"
        },
        skills: {

            "Tranquil Blossom ": "CRIT DMG is increased by 30%. When the equipper lands a hit with a Basic Attack, Special Attack, or Aftershock, they gain 1 stack of a buff. Each stack increases the equipper's CRIT DMG by an additional 10%, stacking up to 3 times. The effect lasts for 30s, with each stack's duration calculated separately, and can only be triggered once per use of a skill. With all 3 stacks, the equipper's <span class='element-electric'>Electric DMG</span> increases by 20%."

        }
    },
    {
        id: 21,
        name: "Myriad Eclipse",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.42.27.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "False Personas ": "Increases CRIT DMG by 45%. When using an EX Special Attack, Chain Attack, or Ultimate to deal <span class='element-ice'>Ice DMG</span>, the equipper gains the Absolute Zero Death Sentence effect for 3s. While Absolute Zero Death Sentence is active, the character ignores 25% of the enemy's DEF when landing a hit."

        }
    },
    {
        id: 22,
        name: "Flight of Fancy",
        rarity: "S",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 15.42.50.jpeg",
        stats: {
            "ATK": "713",
            "Anomaly Proficiency": "90"
        },
        skills: {

            "Silver Spiked Feathers ": "Increases Anomaly Buildup Rate by 40%. When the equipper deals <span class='element-ether'>Ether DMG</span>, their Anomaly Proficiency increases by 20 for 5s, stacking up to 6 times. This effect can trigger once every 0.5s, and repeated triggers reset the duration."
        }
    },
    {
        id: 23,
        name: "Roaring Fur-nace",
        rarity: "S",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 15.43.18.jpeg",
        stats: {
            "ATK": "713",
            "ATK%": "30%"
        },
        skills: {

            "Tiger Spirit Rising ": "The Daze dealt by the equipper's EX Special Attack, Chain Attack, and Ultimate increases by 28%.When using a Chain Attack or Ultimate to deal <span class='element-fire'>Fire DMG</span>, the DMG dealt by all squad members increases by 10%, stacking up to 2 times and lasting 30s.The duration of each stack is calculated separately.Triggers once per use of a skill.Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 24,
        name: "Qingming Birdcage",
        rarity: "S",
        role: "Rupture",
        image: "image2/WhatsApp Image 2026-05-12 at 15.44.49.jpeg",
        stats: {
            "ATK": "713",
            "HP%": "30%"
        },
        skills: {

            "Cloud Flow": "CRIT Rate increases by 20%. When the equipper launches an EX Special Attack, the character gains 1 stack of Qingming Companion effect, stacking up to 2 times and lasting 15s. On entering combat, immediately gain 2 stacks. Repeated triggers reset the duration. Each stack of the Qingming Companion effect increases the equipper's <span class='element-ether'>Ether DMG</span> by 8%, and increases Ultimate and EX Special Attack Ether Sheer DMG by 10%."

        }
    },
    {
        id: 25,
        name: "Practiced Perfection",
        rarity: "S",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 15.45.09.jpeg",
        stats: {
            "ATK": "713",
            "ATK%": "30%"
        },
        skills: {

            "Gift of Stardust ": "The equipper's Anomaly Mastery increases by 60. When inflicting <span class='element-physical'>Assault</span>, the equipper's <span class='element-physical'>Physical DMG</span> increases by 20% for 20s, stacking up to 2 times. Repeated triggers reset the duration. When the equipper enters combat, immediately gain 2 stacks."

        }
    },
    {
        id: 26,
        name: "Metanukimorphosis",
        rarity: "S",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 15.46.12.jpeg",
        stats: {
            "ATK": "713",
            "Energy Regen": "60%"
        },
        skills: {

            "Exquisitely Ingenious ": "When the equipper's EX Special Attack or Ultimate deals <span class='element-physical'>Physical DMG</span>, their Anomaly Mastery increases by 30 for 40s. When the equipper's Aftershock hits an enemy, all squad members' Anomaly Proficiency increases by 60 for 40s. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 27,
        name: "Bellicose Blaze",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.47.01.jpeg",
        stats: {
            "ATK": "713",
            "Energy Regen": "60%"
        },
        skills: {

            "Flame-Devouring Choir": "Increases CRIT Rate by 20%. When the equipper triggers an Aftershock that deals <span class='element-fire'>Fire DMG</span>, their attacks ignore 15% of the target's DEF for 8s. Can stack once every 3s, up to 2 stacks. Repeated triggers reset the duration."

        }
    },
    {
        id: 28,
        name: "Cordis Germina",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.47.28.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Sprouting Core ": "Increases CRIT Rate by 15%. When the equipper deals DMG with a Basic Attack or EX Special Attack, they gain 1 stack of a buff. Each stack increases the equipper's <span class='element-electric'>Electric DMG</span> by 12.5%, up to 2 stacks. Each stack lasts 40s. The duration of each stack is calculated separately. Can trigger once per use of a skill. At 2 stacks, the wearer's Basic Attack and Ultimate DMG ignore 20% of enemy DEF."

        }
    },
    {
        id: 29,
        name: "Kraken's Cradle",
        rarity: "S",
        role: "Rupture",
        image: "image2/WhatsApp Image 2026-05-12 at 15.47.45.jpeg",
        stats: {
            "ATK": "713",
            "HP%": "30%"
        },
        skills: {

            "Heartfelt Caress ": "When the equipper's HP decreases, their Ice Sheer DMG increases by 6%, stacking up to 3 times and lasting 25s. The duration of each stack is calculated separately. This effect can trigger once every 0.5s. When the equipper's HP falls to 50% of Max HP or below, CRIT Rate increases by 20%."
        }
    },
    {
        id: 30,
        name: "Dreamlit Hearth",
        rarity: "S",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 15.48.08.jpeg",
        stats: {
            "ATK": "713",
            "HP%": "30%"
        },
        skills: {

            "Moontide Epic ": "The equipper's Energy Regen increases by 0.4/s. When the equipper activates Ether Veil or extends its duration, all squad members gain 25% increased DMG and 15% increased Max HP for 45s. Repeated triggers reset the duration. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 31,
        name: "Wrathful Vajra",
        rarity: "S",
        role: "Rupture",
        image: "image2/WhatsApp Image 2026-05-12 at 15.48.29.jpeg",
        stats: {
            "ATK": "713",
            "HP%": "30%"
        },
        skills: {

            "Purging Karmic Fire ": "CRIT Rate increases by 20%. When the equipper launches an EX Special Attack, their <span class='element-fire'>Fire Sheer DMG</span> increases by 9%, stacking up to 2 times and lasting 20s. The duration of each stack is calculated separately."

        }
    },
    {
        id: 32,
        name: "Yesterday Calls",
        rarity: "S",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 15.49.01.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "24/7 ": "While off-field, the equipper's Energy Regen increases by 1.5/s. When the equipper deals <span class='element-physical'>Physical DMG</span> with an EX Special Attack, the Daze dealt by the equipper's attacks increases by 9% for 10s, stacking up to 3 times. At 3 stacks, all squad members gain 30% additional CRIT DMG for 40s. Repeated triggers reset the duration. Only one instance of this CRIT DMG boost effect can exist in the same squad."

        }
    },
    {
        id: 33,
        name: "Half-Sugar Bunny",
        rarity: "S",
        role: "Defense",
        image: "image2/WhatsApp Image 2026-05-12 at 15.49.18.jpeg",
        stats: {
            "ATK": "713",
            "HP%": "30%"
        },
        skills: {

            "Fragile Sweetness ": "The equipper's Energy Regen increases by 0.46/s. All squad members gain 10% ATK and 10% Max HP. Only one instance of this effect can exist in the same squad. When the equipper activates or extends an Ether Veil, all squad members gain 30% CRIT DMG for 60s. Repeated triggers reset the duration."

        }
    },
    {
        id: 34,
        name: "Cloudcleave Radiance",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.49.38.jpeg",
        stats: {
            "ATK": "713",
            "Crit DMG": "48%"
        },
        skills: {

            "Jade Soul, Frozen Heart ": "The equipper's DMG ignores 20% of the target's <span class='element-physical'>Physical RES</span>. When the equipper activates an Ether Veil, the equipper's DMG increases by 25% and CRIT DMG increases by 25% for 40s. Repeated triggers reset the duration."

        }
    },
    {
        id: 35,
        name: "Angel in the Shell ",
        rarity: "S",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 15.50.02.jpeg",
        stats: {
            "ATK": "713",
            "Anomaly Mastery": "30%"
        },
        skills: {

            "Energetic Strike": "Increases the equipper's Anomaly Proficiency by 90. When the equipper is an <span class='element-ether'>Ether</span> character, and comes on-field or uses a Special Attack or EX Special Attack, they gain a buff: DMG dealt to enemies afflicted with Attribute Anomalies increases by 20%, and all Attribute Anomaly DMG they trigger increases by 10%, lasting 15s. Repeated triggers reset the duration, and the effect is removed when switching off-field."

        }
    },
    {
        id: 36,
        name: "Thoughtbop",
        rarity: "S",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 15.50.29.jpeg",
        stats: {
            "ATK": "713",
            "Energy Regen": "60%"
        },
        skills: {

            "Decibel Monologue": "While not the active character, the equipper's Energy Regen increases by 0.6/s. When the equipper uses an EX Special Attack and deals <span class='element-physical'>Physical DMG</span>, all squad members gain a buff that increases DMG dealt by 12.5% for 40s, stacking up to 2 times. Repeated triggers reset the duration. At 2 stacks, characters gain an additional 10% ATK. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 37,
        name: "Serpentine Seeker",
        rarity: "S",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 15.50.51.jpeg",
        stats: {
            "ATK": "713",
            "Energy Regen": "60%"
        },
        skills: {

            "Bioengineered Venom ": "CRIT Rate increases by 25%. When the equipper consumes at least 20 Energy in a single instance, every 20 Energy consumed grants 3s of a buff: when dealing <span class='element-electric'>Electric DMG</span>, ignore 28% of the target's DEF. Repeated triggers extend the duration, up to a maximum of 30s. When entering combat, gain 10s of this buff. While the equipper is not the active character, the duration no longer decreases."

        }
    },
    {
        id: 38,
        name: "Neon Fantasies",
        rarity: "S",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 15.51.22.jpeg",
        stats: {
            "ATK": "713",
            "Anomaly Mastery": "30%"
        },
        skills: {

            "Disco Demon ": "The equipper's Anomaly Proficiency increases by 90. When the equipper's EX Special Attack or Basic Attack deals <span class='element-ether'>Ether DMG</span>, all squad members' DMG dealt increases by 15% for 40s, stacking up to 2 times. This effect can trigger once per use of a skill and repeated triggers reset the duration. With 2 stacks, the equipper's Anomaly Proficiency increases by an additional 60. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 39,
        name: "The Simmering Pot",
        rarity: "A",
        role: "Stun",
        image: "image3/іро.webp",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Red Chili Oil Hot Pot ": "When activating an Assist Follow-Up, the equipper's Daze inflicted on the target increases by 7.2%, and DMG dealt increases by 7.2% for 30s. Repeated triggers reset the duration."

        }
    },
    {
        id: 40,
        name: "Cauldron of Clarity",
        rarity: "A",
        role: "Rupture",
        image: "image3/доф.webp",
        stats: {
            "ATK": "624",
            "HP%": "25%"
        },
        skills: {

            "Summoning Arcanum ": "When the equipper activates an EX Special Attack, they gain 1 stack of a buff. Each stack increases the equipper's DMG by 4%, up to 3 stacks, and lasting 20s. This effect can trigger once every 0.5s, and repeated triggers reset the duration. At 3 stacks, the equipper's CRIT Rate increases by 6.5%."

        }
    },
    {
        id: 41,
        name: "Grill O'Wisp",
        rarity: "A",
        role: "Rupture",
        image: "image3/кам.webp",
        stats: {
            "ATK": "624",
            "HP%": "25%"
        },
        skills: {

            "Caged Fire": "The equipper's <span class='element-fire'>Fire DMG</span> increases by 15%. When the equipper's HP decreases, their CRIT Rate increases by 15% for 5s."

        }
    },
    {
        id: 42,
        name: "Puzzle Sphere",
        rarity: "A",
        role: "Rupture",
        image: "image2/WhatsApp Image 2026-05-12 at 11.50.04.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Ingenious Craft ": "TUpon launching an EX Special Attack, the equipper's CRIT DMG increases by 16% for 12s. Additionally, if the target's current HP is below 50% of their Max HP, EX Special Attack DMG increases by 20%."

        }
    },
    {
        id: 43,
        name: "Radiowave Journey",
        rarity: "A",
        role: "Rupture",
        image: "image2/WhatsApp Image 2026-05-12 at 11.49.58.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Easy Strides ": "When launching a Chain Attack or Ultimate, the equipper gains 1 stack of a buff effect. Each stack increases the equipper's Sheer Force by 80, stacking up to 3 times, and lasting 12s. The duration of each stack is calculated separately."

        }
    },
    {
        id: 44,
        name: "Reel Projector",
        rarity: "A",
        role: "Defense",
        image: "image2/WhatsApp Image 2026-05-12 at 11.49.50.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Flash Engraving ": "When a squad member's HP is greater than or equal to 50%, they take 7.5% less DMG, and 10% less Miasma Contamination. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 45,
        name: "Tremor Trigram Vessel",
        rarity: "A",
        role: "Defense",
        image: "image2/WhatsApp Image 2026-05-12 at 11.49.43.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Meridian Mapping": "The equipper's EX Special Attack and Ultimate DMG increases by 25%. Whenever any squad member takes DMG or recovers HP, the equipper gains 2 Energy. This effect can trigger once every 5s."
        }
    },
    {
        id: 46,
        name: "Box Cutter",
        rarity: "A",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 11.49.32.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Watch Your Fingers": "Upon launching an Aftershock, the equipper's <span class='element-physical'>Physical DMG</span> increases by 15%, and Daze increases by 10%, lasting 10s."

        }
    },
    {
        id: 47,
        name: "Marcato Desire",
        rarity: "A",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 11.49.22.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Get Everyone Fired Up ": "When an EX Special Attack or Chain Attack hits an enemy, the equipper's ATK increases by 6% for 8s. While the target is under an Attribute Anomaly, this effect is increased by an additional 6%."

        }
    },
    {
        id: 48,
        name: "Gilded Blossom",
        rarity: "A",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 11.49.12.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Extraordinary Anti-Theft Measures": "ATK increases by 6%, and DMG dealt by EX Special Attacks increases by 15%."

        }
    },
    {
        id: 49,
        name: "Peacekeeper - Specialized",
        rarity: "A",
        role: "Defense",
        image: "image2/WhatsApp Image 2026-05-12 at 11.49.05.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Standard Blocking Technique ": "While Shielded, the equipper's Energy Regen increases by 0.4/s. The Anomaly Buildup of EX Special Attacks and Assist Follow-Ups increase by 36%."

        }
    },
    {
        id: 50,
        name: "Street Superstar",
        rarity: "A",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 11.48.54.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Flaming Bars ": "Whenever a squad member launches a Chain Attack, the equipper gains 1 Charge stack, stacking up to 3 times. Upon activating their own Ultimate, the equipper consumes all Charge stacks, and each stack increases the skill's DMG by 15%."

        }
    },
    {
        id: 51,
        name: "Slice of Time",
        rarity: "A",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 11.48.43.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Say Cheese ": "Any squad members' Dodge Counter, EX Special Attack, Assist Attack, or Chain Attack respectively generates 20/25/30/35 more Decibels and generates 0.7 Energy for the equipper. This effect can trigger once every 12s. The cooldown for each type of attack is independent of others. Passive effects of the same name do not stack."

        }
    },
    {
        id: 52,
        name: "Rainforest Gourmet",
        rarity: "A",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 11.48.36.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Dinner's Ready!": "For every 10 Energy consumed, the equipper gains a buff that increases ATK by 2.5% for 10s, stacking up to 10 times. The duration of each stack is calculated separately."

        }
    },
    {
        id: 53,
        name: "Starlight Engine",
        rarity: "A",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 11.48.29.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Knight's Combo ": "Launching a Dodge Counter or Quick Assist increases the equipper's ATK by 12% for 12s."

        }
    },
    {
        id: 54,
        name: "Steam Oven",
        rarity: "A",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 11.48.21.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Thick Broth ": "For every 10 Energy accumulated, the equipper's Impact is increased by 2%, stacking up to 8 times. After Energy is consumed, this bonus remains for 8 more seconds. The duration of each stack is calculated separately."

        }
    },
    {
        id: 55,
        name: "Precious Fossilized Core",
        rarity: "A",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 11.48.11.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Behemoth Hunter ": "When the target's HP is no lower than 50%, the equipper inflicts 10% more Daze to the target. When the target's HP is no lower than 75%, this bonus is further increased by 10%."

        }
    },
    {
        id: 56,
        name: "Original Transmorpher",
        rarity: "A",
        role: "Defense",
        image: "image2/WhatsApp Image 2026-05-12 at 11.48.01.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Starlight Knight Flying Kick": "Increases Max HP by 8%. When attacked, the equipper's Impact is increased by 10% for 12s."

        }
    },
    {
        id: 57,
        name: "Weeping Gemini",
        rarity: "A",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 11.47.53.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Lingering Cries ": "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper gains a buff that increases Anomaly Proficiency by 30, stacking up to 4 times. This effect expires when the target recovers from Stun or is defeated. The duration of each stack is calculated separately."

        }
    },
    {
        id: 58,
        name: "Electro-Lip Gloss",
        rarity: "A",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 11.47.46.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Kiss of Death": "When there are enemies inflicted with Attribute Anomaly on the field, the equipper's ATK increases by 10% and they deal an additional 15% more DMG to the target."

        }
    },
    {
        id: 59,
        name: "Bunny Band",
        rarity: "A",
        role: "Defense",
        image: "image2/WhatsApp Image 2026-05-12 at 11.47.11.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Pet the Bunny ": "Increases Max HP by 8%. Increases the equipper's ATK by 10% when they are shielded."

        }
    },
    {
        id: 60,
        name: "Spring Embrace",
        rarity: "A",
        role: "Defense",
        image: "image2/WhatsApp Image 2026-05-12 at 11.46.59.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Hot Spring Soup ": "Reduces DMG taken by 7.5%. When attacked, the equipper's Energy Generation Rate increases by 10% for 12s. When the equipper switches off-field, this buff will be transferred to the new on-field character with its duration refreshed. Passive effects of the same name do not stack."

        }
    },
    {
        id: 61,
        name: "Demara Battery Mark II",
        rarity: "A",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 11.46.51.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "In a Flash of Light ": "Increases <span class='element-electric'>Electric DMG</span> by 15%. When the equipper hits an enemy with a Dodge Counter or Assist Attack, their Energy Generation Rate increases by 18% for 8s."

        }
    },
    {
        id: 62,
        name: "The Vault",
        rarity: "A",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 11.46.44.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Money-Lover ": "Dealing <span class='element-ether'>Ether DMG</span> using an EX Special Attack, Chain Attack, or Ultimate increases all units' DMG against the target by 15% and increases the equipper's Energy Regen by 0.5/s for 2s. Passive effects of the same name do not stack."

        }
    },
    {
        id: 63,
        name: "Housekeeper",
        rarity: "A",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 11.46.36.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Safe Household Saw": "While off-field, the equipper's Energy Regen increases by 0.45/s. When an EX Special Attack hits an enemy, the equipper's <span class='element-physical'>Physical DMG</span> increases by 3%, stacking up to 15 times and lasting 1s. Repeated triggers reset the duration."

        }
    },
    {
        id: 64,
        name: "Starlight Engine Replica",
        rarity: "A",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 11.46.28.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Knight Beam: Change": "Increases the equipper's <span class='element-physical'>Physical DMG</span> against the target by 36% for 8s upon hitting an enemy at least 6 meters away with a Basic Attack or Dash Attack."

        }
    },
    {
        id: 65,
        name: "Drill Rig - Red Axis",
        rarity: "A",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 11.46.21.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Hell's Generator ": "When launching an EX Special Attack or Chain Attack, <span class='element-electric'>Electric DMG</span> from Basic Attacks and Dash Attacks increases by 50% for 10s. This effect can trigger once every 15s."

        }
    },
    {
        id: 66,
        name: "Big Cylinder",
        rarity: "A",
        role: "Defense",
        image: "image2/WhatsApp Image 2026-05-12 at 11.46.13.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Ten Ton Top ": "Reduces DMG taken by 7.5%. After being attacked, the next attack to hit an enemy will trigger a critical hit and deal 600% of the equipper's DEF as additional DMG. This effect can be triggered once every 7.5s."

        }
    },
    {
        id: 67,
        name: "Bashful Demon",
        rarity: "A",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 11.46.03.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Visage of Greed": "Increases <span class='element-ice'>Ice DMG</span> by 15%. When launching an EX Special Attack, all squad members' ATK increases by 2% for 12s, stacking up to 4 times. Repeated triggers reset the duration. Passive effects of the same name do not stack."

        }
    },
    {
        id: 68,
        name: "Kaboom the Cannon",
        rarity: "A",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 11.44.48.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Stampede Accident ": "When any friendly unit in the squad attacks and hits an enemy, all friendly units' ATK increases by 2.5% for 8s, stacking up to 4 times. The duration of each stack is calculated separately, and each friendly unit can provide 1 stack of the buff. Passive effects of the same name do not stack."

        }
    },
    {
        id: 69,
        name: "Roaring Ride",
        rarity: "A",
        role: "Anomaly",
        image: "image2/WhatsApp Image 2026-05-12 at 11.44.40.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Collision Potential ": "When EX Special Attack hits an enemy, one of three possible effects is randomly triggered for 5 seconds. This effect can trigger once every 0.3s. The same types of effects cannot stack. Repeated triggers reset the duration, allowing several effects to be active at once:<br><br>Increases the equipper's ATK by 8%, increases the equipper's Anomaly Proficiency by 40, or increases the equipper's Anomaly Buildup Rate by 25%."

        }
    },
    {
        id: 70,
        name: "Cannon Rotor",
        rarity: "A",
        role: "Attack",
        image: "image2/WhatsApp Image 2026-05-12 at 11.44.32.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Oversized Barrel ": "Increases ATK by 7.5%. Landing a critical hit on an enemy will inflict an additional 200% of ATK as DMG. This effect can trigger once every 8s."

        }
    },
    {
        id: 71,
        name: "Unfettered Game Ball",
        rarity: "A",
        role: "Support",
        image: "image2/WhatsApp Image 2026-05-12 at 11.44.25.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Game Start! ": "Whenever the equipper's attack triggers an Attribute Counter effect, all units' CRIT Rate against the struck enemy increases by 12% for 12s. Passive effects of the same name do not stack."

        }
    },
    {
        id: 72,
        name: "Six Shooter",
        rarity: "A",
        role: "Stun",
        image: "image2/WhatsApp Image 2026-05-12 at 11.44.13.jpeg",
        stats: {
            "ATK": "713",
            "Crit rate": "24%"
        },
        skills: {

            "Fire! ": "The equipper gains 1 Charge stack every 3s, stacking up to 6 times. When launching an EX Special Attack, consumes all Charge stacks and each stack consumed increases the skill's Daze inflicted by 4%."

        }
    },


];

const bangboo = [
    {
        id: 1,
        name: "Amillion",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.25.08.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8863",
            "DEF": "666",
            'impact': "103",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Portable Machine Gun - Debt-Clearer ": "Active Skill<br><br> Builds a machine gun and continuously shoots enemies, dealing massive <span class='element-physical'>Physical DMG</span>.",
            "Street Code ": "Additional Ability<br><br>When there's at least 2 Cunning Hares characters in your squad: Bangboo Chain Attack DMG increases with fewer enemies in combat, up to a max of 45%.",
            "Portable Machine Gun - Gatling Debt-Clearer": "Bangboo Chain Attack<br><br>Uses machine guns and cannons to continuously attack the target, dealing massive <span class='element-physical'>Physical DMG</span>."
        }
    },
    {
        id: 2,
        name: "Sharkboo",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.24.41.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8057",
            "DEF": "723",
            'impact': "99",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "132"
        },
        skills: {
            "Drylands Shark Hunt ": "Active Skill<br><br> Plants a homing trap underfoot which bites, tears, and summons torpedos at triggering enemies, dealing <span class='element-ice'>Ice DMG</span> and accumulating Ice Anomaly Buildup.",
            "Cold Surge": "Additional Ability<br><br>When there's at least 2 Ice Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "Relentless Pursuit": "Bangboo Chain Attack<br><br>Summons a homing trap and leaps toward the target, causing an explosion upon landing that deals <span class='element-ice'>Ice DMG</span> and accumulates massive Ice Anomaly Buildup."
        }
    },
    {
        id: 3,
        name: "Butler",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.24.57.jpeg",
        stats: {
            "HP": "5095",
            "ATK": "7896",
            "DEF": "666",
            'impact': "110",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Tea Break ": "Active Skill<br><br> Creates a heartfelt afternoon snack. The snack will generate Energy for the receiving Agent once made and delivered.",
            "Personal Butler": "When there's at least 2 Victoria Housekeeping Co. characters in your squad: Active Skill generates an additional 20% Energy.",
            "Afternoon Dessert": "Bangboo Chain Attack<br><br>Use a frying pan and pancakes to attack enemies from afar, dealing massive <span class='element-physical'>Physical DMG</span>."
        }
    },
    {
        id: 4,
        name: "Safety",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.24.49.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8863",
            "DEF": "666",
            'impact': "113",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Boring Burst ": "Active Skill<br><br> Enters the driving state and charges enemies, launching a drilling attack upon hit and dealing <span class='element-physical'>Physical DMG</span>.",
            "Drill Team Mobilization ": "Additional Ability<br><br>When there's at least 2 Belobog Heavy Industries characters in your squad: Bangboo Chain Attack DMG increases by 20%. If the target is Burning or Shocked, this buff increases by an additional 20%.",
            "Demolition Drill ": "Bangboo Chain Attack<br><br>Enters the driving state and charges enemies, launching a multi-hit drilling attack upon hit and dealing massive <span class='element-physical'>Physical DMG</span>."
        }
    },
    {
        id: 5,
        name: "Rocketboo",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.25.18.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8541",
            "DEF": "723",
            'impact': "99",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "119"
        },
        skills: {
            "Boom!  ": "Active Skill<br><br> Mounts a rocket and charges at the target. Upon hitting a target, the rocket will explode, dealing <span class='element-fire'>Fire DMG</span> to enemies within range and accumulating Fire Anomaly Buildup.",
            "Refueling": "Additional Ability<br><br>When there's at least 2 Fire Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "Ka-Boom Express Shipping ": "Bangboo Chain Attack<br><br>Mounts a rocket and charges at the target. Upon hitting a target, the rocket will explode, dealing <span class='element-fire'>Fire DMG</span> to enemies in a large area and inflicting massive Fire Anomaly Buildup."
        }
    },
    {
        id: 6,
        name: "Resonaboo",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.25.31.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8057",
            "DEF": "723",
            'impact': "99",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "132"
        },
        skills: {
            "Mini-Black Hole  ": "Active Skill<br><br> Summons an Ether black hole that continuously pulls in enemies, dealing <span class='element-ether'>Ether DMG</span> to enemies struck and accumulating <span class='element-ether'>Ether Anomaly Buildup</span>.",
            "Radiation Effect": "Additional Ability<br><br>When there's at least 2 Ether Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "Primordial Black Hole": "Bangboo Chain Attack<br><br>Throws an Ether bomb at the target, dealing <span class='element-ether'>Ether DMG</span> and accumulating massive <span class='element-ether'>Ether Anomaly Buildup</span>."
        }
    },
    {
        id: 7,
        name: "Plugboo",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.25.25.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8057",
            "DEF": "723",
            'impact': "99",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "132"
        },
        skills: {
            "Shock Sniper ": "Active Skill<br><br>Unleashes an EM cannon attack on the enemy, dealing <span class='element-electric'>Electric DMG</span> and accumulating Electric Anomaly Buildup.",
            "Electromancer": "Additional Ability<br><br>When there's at least 2 Electric Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "High-Voltage Resistance ": "Bangboo Chain Attack<br><br>Unleash a strong electric attack on all nearby enemies in a large area, dealing <span class='element-electric'>Electric DMG</span> and inflicting massive Electric Anomaly Buildup."
        }
    },
    {
        id: 8,
        name: "Officer Cui",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.24.33.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8863",
            "DEF": "666",
            'impact': "103",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Awoo! Woof Woof!  ": "Active Skill<br><br> Launches a two hit attack, tearing and biting enemies ahead and dealing <span class='element-physical'>Physical DMG</span>.",
            "Provisional Security Canine ": "Additional Ability<br><br>When there's at least 2 New Eridu Public Security characters in your squad: When using the Active Skill, there is a 50% chance to follow-up with 1 extra hit of the biting attack, up to a maximum of 3 consecutive triggers.Bangboo Chain Attack DMG increases by 35%.",
            "Woof Woof Woof Woof! ": "Bangboo Chain Attack<br><br>Continuously bites and tears enemies in front, dealing massive <span class='element-physical'>Physical DMG</span>."
        }
    },
    {
        id: 9,
        name: "Red Moccus",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.24.26.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8863",
            "DEF": "666",
            'impact': "103",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Roaring Wheels  ": "Active Skill<br><br> Rides a motorcycle and pushes the farthest enemy towards the Agent, dealing <span class='element-physical'>Physical DMG</span>.",
            "Drifting Technique ": "Additional Ability<br><br>When there's at least 2 Sons of Calydon characters in your squad: Active Skill DMG increases by 36%. After an Active Skill deals DMG to an enemy, when that enemy is defeated, the skill's cooldown is reduced by 4s.",
            "Mad Charge ": "Bangboo Chain Attack<br><br>Run enemies over with a motorcycle and detonate an explosion, dealing massive <span class='element-physical'>Physical DMG</span>."
        }
    },
    {
        id: 10,
        name: "Agent Gulliver",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.24.19.jpeg",
        stats: {
            "HP": "54210",
            "ATK": "8380",
            "DEF": "666",
            'impact': "103",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "123"
        },
        skills: {
            "Emergency Operation  ": "Active Skill<br><br> Shoots 3 piercing attacks, dealing <span class='element-electric'>Electric DMG</span> and accumulating Electric Anomaly Buildup.",
            "Bangboo Assault Squad ": "Additional Ability<br><br>When there's at least 2 Hollow Special Operations Section 6 characters in your squad: When Active Skill or Bangboo Chain Attack hit Shocked enemies, the DMG increases by 30%. When attacking enemies under other non-Electric Attribute Anomalies, attacks accumulate 60% more Anomaly Buildup.",
            "Assault Time": "Bangboo Chain Attack<br><br>Shoots 1 powerful piercing attack, dealing <span class='element-electric'>Electric DMG</span> and inflicting massive Electric Anomaly Buildup."
        }
    },
    {
        id: 11,
        name: "Snap",
        rarity: "S",
        image: "image2/WhatsApp Image 2026-05-12 at 16.23.35.jpeg",
        stats: {
            "HP": "5095",
            "ATK": "7896",
            "DEF": "666",
            'impact': "110",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Snap! Look at the Camera! ": "Active Skill<br><br> Wipes the lens, obtaining 3 Film. While Snap has Film, when an Agent triggers a Dodge Counter, Quick Assist, or Assist Follow-Up, Snap will consume 1 Film to take a snapshot and apply the Superstar status to the Agent, increasing their DMG for 10s.",
            "Superstar Moment ": "Additional Ability<br><br>When there's at least 2 Stars of Lyra characters in the squad: When Snap applies the Superstar status to an Agent, immediately restore the Agent's Health equal to 4% of its Max HP.",
            "Snap! Don't Blink! ": "Bangboo Chain Attack<br><br>Use a powerful flash against the target, dealing <span class='element-ether'>Ether DMG</span> and accumulating <span class='element-ether'>Ether Anomaly Buildup</span>."
        }
    },
    {
        id: 12,
        name: "Robin",
        rarity: "S",
        image: "image2/WhatsApp Image 2026-05-12 at 16.23.29.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8621",
            "DEF": "666",
            'impact': "117",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "117"
        },
        skills: {
            "The Curtain Falls  ": "Active Skill<br><br> Fire a series of random cards using a magic gun, each triggering different effects based on card type:<br><br>Hearts – Deals massive Physical DMG.<br><br>Spades – Deals Physical DMG and inflicts massive Daze.<br><br>Crowns – Deals <span class='element-ether'>Ether DMG</span> and accumulates massive <span class='element-ether'>Ether Anomaly Buildup</span>.",
            "Cold Surge": "Additional Ability<br><br>When there's at least 1 Mockingbird character in the squad: When the on-field Agent in the squad meets the Specialty requirements, the Active Skill fires a fixed card with a buff:<br><br>Attack: Fires only Hearts, increasing the DMG by 45%.<br><br>Stun: Fires only Spades, increasing the Daze buildup by 27%.<br><br>Anomaly: Fires only Crowns, increasing the Anomaly Buildup by 90%.",
            "Relentless Pursuit": "Bangboo Chain Attack<br><br>Throws a magic grenade forward, dealing <span class='element-ether'>Ether DMG</span> and inflicting <span class='element-ether'>Ether Anomaly Buildup</span>."
        }
    },
    {
        id: 13,
        name: "Belion",
        rarity: "S",
        image: "image2/WhatsApp Image 2026-05-12 at 16.23.19.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8863",
            "DEF": "666",
            'impact': "103",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Phoenix Ball Dance ": "Active Skill<br><br> Hurl a stone ball at the enemy, that bounces between them, dealing massive <span class='element-physical'>Physical DMG</span> to all enemies hit.",
            "Way of Clouds ": "Additional Ability<br><br>When there are 2 or more Yunkui Summit characters in your squad: Belion's DMG increases by 25%. When an Agent activates an Ultimate, the cooldown of Belion's Active Skill is reduced by 4s. Can trigger up to 2 times. Belion's Active Skill refreshes the available trigger count.",
            "Silver Lion Crash": "Bangboo Chain Attack<br><br>Performs a spinning, ramming attack on enemies ahead, dealing massive <span class='element-physical'>Physical DMG</span>."
        }
    },
    {
        id: 14,
        name: "Miss Esme",
        rarity: "S",
        image: "image2/WhatsApp Image 2026-05-12 at 16.23.08.jpeg",
        stats: {
            "HP": "5095",
            "ATK": "7896",
            "DEF": "666",
            'impact': "110",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Starbeam Transformation  ": "Active Skill<br><br> Transform and take flight, randomly summoning three Spectral Bubbles or Twinkling Stars in quick succession:<br><br>When a character touches a Spectral Bubble they restore HP.<br><br>When a character touches a Twinkling Star they regain Energy.<br><br>The greater the on- field character's HP percentage, the higher the chance Miss Esme has of summoning a Twinkling Star.",
            "Starshine Shift ": "Additional Ability<br><br>When there's at least 2 Spook Shack character(s) in your squad:<br><br>When a character touches a Spectral Bubble, HP recovered increases by 20%.<br><br>When a character touches a Twinkling Star, Energy generated increases by 20%.",
            "Stellar Bomb ": "Bangboo Chain Attack<br><br>Hurl a magical bomb, dealing <span class='element-physical'>Physical DMG</span> and accumulating massive <span class='element-physical'>Physical Anomaly Buildup</span>."
        }
    },
    {
        id: 15,
        name: "Mercury",
        rarity: "S",
        image: "image2/WhatsApp Image 2026-05-12 at 16.23.00.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8863",
            "DEF": "666",
            'impact': "103",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Tactical Strategy I: Frontline Suppression ": "Active Skill<br><br> Mercury summons a vehicle and drives it, unleashing continuous flames at enemies to deal massive <span class='element-fire'>Fire DMG</span>.",
            "Tactical Strategy II: Combat Synergy ": "Additional Ability<br><br>When there's at least 2 Defense Force characters in your squad: When an Agent deals Aftershock DMG, Mercury's next Active Skill gains 22.5% increased DMG. Can stack once every 5s, up to 2 stacks.",
            "Tactical Strategy III: Explosive Ambush": "Bangboo Chain Attack<br><br>Loads itself into the vehicle as ammunition and fires at enemies, detonating on impact and dealing massive <span class='element-fire'>Fire DMG</span>."
        }
    },
    {
        id: 16,
        name: "Birkblick",
        rarity: "S",
        image: "image2/WhatsApp Image 2026-05-12 at 16.22.54.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "7896",
            "DEF": "666",
            'impact': "123",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "97"
        },
        skills: {
            "Montage Combo ": "Active Skill<br><br> Deploys a floating turret that can fire up to 3 laser volleys at the target, dealing <span class='element-physical'>Physical DMG</span> and accumulating a large amount of Daze.",
            "Observer Effect": "Additional Ability<br><br>When there's at least 2 Krampus Compliance Authority characters in your squad: When an Agent uses an EX Special Attack, Birkblick's Daze inflicted increases by 4%, stacking up to 3 times and lasting 15s. Repeated triggers reset the duration. At 3 stacks, DMG increases by 10%.",
            "Battlefield Close-Up ": "Bangboo Chain Attack<br><br>Fires a powerful laser from the floating turret, dealing massive <span class='element-physical'>Physical DMG</span>."
        }
    },
    {
        id: 17,
        name: "Sprout",
        rarity: "S",
        image: "image2/WhatsApp Image 2026-05-12 at 16.22.47.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8863",
            "DEF": "666",
            'impact': "103",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"
        },
        skills: {
            "Six-Star Flight ": "Active Skill<br><br> When the skill activates, if there's no Sword on the field, Sprout summons six flying swords to attack the target, dealing <span class='element-physical'>Physical DMG</span> and accumulating Physical Anomaly Buildup.<br><br>If a Sword is already on the field, Sprout steps onto it and charges up, unleashing a stronger flurry of slashes that deals massive Physical DMG and accumulates Physical Anomaly Buildup.",
            "Heartbound Bond ": "Additional Ability<br><br>When Ye Shunguang is in the squad: Sprout's DMG increases by 30%. When using its Active Skill while in Ether Veil: Verdict, 1 Sword is summoned to the field.",
            "Sword of Unification ": "Bangboo Chain Attack<br><br>Summons a massive Sword of Unification that stabs enemies, dealing massive <span class='element-physical'>Physical DMG</span> and accumulating <span class='element-physical'>Physical Anomaly Buildup</span>."
        }
    },
    {
        id: 18,
        name: "Bangvolver",
        rarity: "S",
        image: "image3/WhatsApp Image 2026-05-12 at 16.25.37.jpeg",
        stats: {
            "HP": "4210",
            "ATK": "8057",
            "DEF": "781",
            'impact': "103",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "123"
        },
        skills: {
            "Revolver of Fortune ": "Active Skill<br><br> Use a random bullet for different moves:<br><br>Powerful Firework Shell: Fires at the enemy with great force, dealing massive <span class='element-physical'>Physical DMG</span> and accumulating a large amount of Physical Anomaly Buildup.<br><br>Regular Firework Shell: Fires at the enemy, dealing Physical DMG and accumulating Physical Anomaly Buildup.<br><br>Paintball: Fails to fire as flowers leave the muzzle.",
            "Luck is Skill ": "Additional Ability<br><br>When there's at least 2 Physical Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "Lucky Trigger ": "Bangboo Chain Attack<br><br>Fire continuous shots at the target, dealing <span class='element-physical'>Physical DMG</span> and accumulating massive <span class='element-physical'>Physical Anomaly Buildup</span>."
        }
    },
    {
        id: 19,
        name: "Biggest Fan",
        rarity: "S",
        image: "image2/WhatsApp Image 2026-05-12 at 16.22.13.jpeg",
        stats: {
            "HP": "5095",
            "ATK": "7896",
            "DEF": "666",
            'impact': "110",
            "Crit rate": "50",
            "Crit damage": "100",
            "PEN Ration": "0 %",
            "Anomaly Mastery": "110"

        },
        skills: {
            "I Stan My Angels  ": "Active Skill<br><br> Upon activating this skill, Biggest Fan starts cheering, continuously restoring HP to the currently controlled character based on Biggest Fan's Max HP.",
            "Fandom Power Unleashed ": "Additional Ability<br><br>When there's at least 2 Angels of Delusion characters in your squad: When Biggest Fan uses its Active Skill, all Agents in the squad gain 50 ATK for 30s.The Attribute Anomaly Buildup dealt by Bangboo Chain Attack is increased by 15%.",
            "Grab the Merch!": "Bangboo Chain Attack<br><br>Swings glow sticks to attack enemies in front, dealing <span class='element-ether'>Ether DMG</span> and massive Ether Anomaly Buildup."
        }
    },
];

const drivediscs = [
    {
        id: 1,
        name: "Astral Voice",
        image: "image3/астра сет.webp",
        skills: {
            "2-Piece Set": "ATK +10%",
            "4-Piece Set": "Whenever any squad member enters the field using a Quick Assist, all squad members gain 1 stack of Astral, up to a maximum of 3 stacks, and lasting 15s. Repeated triggers reset the duration. Each stack of Astral increases the DMG dealt by the character entering the field using a Quick Assist by 8%. Passive effects of the same name do not stack."

        }
    },
    {
        id: 2,
        name: "Branch & Blade Song",
        image: "image3/міябі сет.webp",
        skills: {
            "2-Piece Set": "CRIT DMG +16%",
            "4-Piece Set": "When Anomaly Mastery exceeds or equals 115 points, the equipper's CRIT DMG increases by 30%. When any squad member applies Freeze or triggers the Shatter effect on an enemy, the equipper's CRIT Rate increases by 12%, lasting 15s."
        }
    },
    {
        id: 3,
        name: "Shadow Harmony",
        image: "image3/деш сет.webp",
        skills: {
            "2-Piece Set": "The DMG of Aftershocks and Dash Attacks is increased by 15%.",
            "4-Piece Set": "Upon hitting an enemy with an Aftershock or Dash Attack, if the DMG dealt aligns with the equipper's attribute, the equipper gains 1 stack of a buff effect, at most once per use of a skill. For each stack, the equipper's ATK increases by 4%, and CRIT Rate increases by 4%. The effect can stack up to 3 times and lasts for 15s. Repeated triggers reset the duration."
        }
    },
    {
        id: 4,
        name: "Phaethon's Melody",
        image: "image3/фаетон сама.webp",
        skills: {
            "2-Piece Set": "Anomaly Mastery +8%.",
            "4-Piece Set": "When any squad member uses an EX Special Attack, the equipper's Anomaly Proficiency increases by 45 for 8s. If the character using the EX Special Attack is not the equipper, the equipper's <span class='element-ether'>Ether DMG</span> is increased by 25%."
        }
    },
    {
        id: 5,
        name: "Yunkui Tales",
        image: "image3/раптор.webp",
        skills: {
            "2-Piece Set": "HP-10%",
            "4-Piece Set": "When using EX Special Attack, Chain Attack, or Ultimate, CRIT Rate increases by 4%, stacking up to 3 times and lasting 15s. Repeated triggers reset the duration. When having 3 stacks of this effect, Sheer DMG increases by 10%."
        }
    },
    {
        id: 6,
        name: "King of the Summit",
        image: "image3/тигр.webp",
        skills: {
            "2-Piece Set": "Increases Daze of attacks by 6%",
            "4-Piece Set": "When the equipper is a Stun character and uses an EX Special Attack or Chain Attack, increases CRIT DMG of all squad members by 15%, and when the equipper's CRIT Rate is more than or equal to 50%, further increases CRIT DMG by 15%, lasting 15s. Repeated triggers reset the duration. Passive effects of the same name do not stack."
        }
    },
    {
        id: 7,
        name: "Dawn's Bloom",
        image: "image3/базік.webp",
        skills: {
            "2-Piece Set": "Increases Basic Attack DMG by 15%.",
            "4-Piece Set": "Increases Basic Attack DMG by 20%. When equipped by an Attack character, using an EX Special Attack or Ultimate will further increase Basic Attack DMG by 20% for 25s. Repeated triggers reset the duration."
        }
    },
    {
        id: 8,
        name: "Moonlight Lullaby",
        image: "image3/мунлайт.webp",
        skills: {
            "2-Piece Set": "Energy Regen +20%",
            "4-Piece Set": "When the equipper is a Support character and uses an EX Special Attack or Ultimate, the DMG dealt by all squad members increases by 18% for 25s. Repeated triggers reset the duration. Passive effects of the same name do not stack."
        }
    },
    {
        id: 9,
        name: "White Water Ballad",
        image: "image3/фіз шунь.webp",
        skills: {
            "2-Piece Set": "<span class='element-physical'>Physical DMG</span> +10%",
            "4-Piece Set": "When the equipper is within any Ether Veil, their CRIT Rate increases by 10%. After leaving the Ether Veil, this buff remains for 15s. If the equipper is an Attack character, activating an Ether Veil or extending an Ether Veil's duration increases their CRIT Rate by 10% and ATK by 10% for 30s. Repeated triggers reset the duration."
        }
    },
    {
        id: 10,
        name: "Shining Aria",
        image: "image3/шінінг.webp",
        skills: {
            "2-Piece Set": "<span class='element-ether'>Ether DMG</span> +10%",
            "4-Piece Set": "When the equipper's Basic Attack hits an enemy, their Anomaly Proficiency increases by 36, lasting 8s. Repeated triggers reset the duration. When any enemy on the field is Stunned, the equipper's DMG increases by 25% for 18s.Repeated triggers reset the duration."
        }
    },
    {
        id: 11,
        name: "Bunny in Wonderland",
        image: "image3/круль.webp",
        skills: {
            "2-Piece Set": "HP-10%",
            "4-Piece Set": "When the equipper is a Defense character: When the equipper launches an EX Special Attack or any squad member triggers a Defensive Assist or Evasive Assist, all squad members' DMG increases by 6%, stacking up to 3 times, lasting 25s. Stacks decay one at a time, and duration refreshes when gained or decayed. Passive effects of the same name do not stack."
        }
    },
    {
        id: 12,
        name: "Notes From the Chained",
        image: "image3/нотес фром.webp",
        skills: {
            "2-Piece Set": "<span class='element-ice'>Ice DMG</span> +10%.",
            "4-Piece Set": "When the equipper triggers Abloom, their Anomaly Proficiency increases by 48 for 30s; repeated triggers reset the duration. When the equipper triggers a Freeze effect, their All-Attribute Anomaly DMG and Disorder DMG increase by 16% for 30s; repeated triggers reset the duration."
        }
    },
    {
        id: 13,
        name: "Chaos Jazz",
        image: "image3/хаос.webp",
        skills: {
            "2-Piece Set": "Anomaly Proficiency +30",
            "4-Piece Set": "<span class='element-fire'>Fire DMG</span> and <span class='element-electric'>Electric DMG</span> increases by 15%. While off-field, EX Special Attack and Assist Attack DMG increases by 20%. When switching on-field, this buff continues for 5s, and this continuation effect can trigger once every 7.5s."
        }
    },
    {
        id: 14,
        name: "Proto Punk",
        image: "image3/протік.webp",
        skills: {
            "2-Piece Set": "Increases Shield effect by 15%.",
            "4-Piece Set": "When any squad member triggers a Defensive Assist or Evasive Assist, all squad members deal 15% increased DMG, lasting 10s. Passive effects of the same name do not stack."
        }
    },
    {
        id: 15,
        name: "Freedom Blues",
        image: "image3/фрідом.webp",
        skills: {
            "2-Piece Set": "Anomaly Proficiency +30",
            "4-Piece Set": "When an EX Special Attack hits an enemy, reduce the target's Anomaly Buildup RES to the equipper's Attribute by 20% for 8s. This effect does not stack with others of the same attribute."
        }
    },
    {
        id: 16,
        name: "Polar Metal",
        image: "image3/полярка.webp",
        skills: {
            "2-Piece Set": "<span class='element-ice'>Ice DMG</span> +10%",
            "4-Piece Set": "Increase the DMG of Basic Attack and Dash Attack by 20%. When any squad member inflicts Freeze or Shatter, this effect increases by an additional 20% for 12s."
        }
    },
    {
        id: 17,
        name: "Puffer Electro",
        image: "image3/фуга.webp",
        skills: {
            "2-Piece Set": "PEN Ratio +8%",
            "4-Piece Set": "Ultimate DMG increases by 20%. Launching an Ultimate increases the equipper's ATK by 15% for 12s."
        }
    },
    {
        id: 18,
        name: "Inferno Metal",
        image: "image3/інферно.webp",
        skills: {
            "2-Piece Set": "<span class='element-fire'>Fire DMG</span> +10%",
            "4-Piece Set": "Upon hitting a Burning enemy, the equipper's CRIT Rate is increased by 28% for 8s."
        }
    },
    {
        id: 19,
        name: "Woodpecker Electro",
        image: "image3/дятел.webp",
        skills: {
            "2-Piece Set": "CRIT Rate +8%",
            "4-Piece Set": "Landing a critical hit on an enemy with a Basic Attack, Dodge Counter, or EX Special Attack increases the equipper's ATK by 9% for 6s. The buff duration for different skills are calculated separately."
        }
    },
    {
        id: 20,
        name: "Soul Rock",
        image: "image3/кал.webp",
        skills: {
            "2-Piece Set": "DEF +16%",
            "4-Piece Set": "Upon receiving an enemy attack and losing HP, the equipper takes 40% less DMG for 2.5s. This effect can trigger once every 15s."
        }
    },
    {
        id: 21,
        name: "Shockstar Disco",
        image: "image3/шок.webp",
        skills: {
            "2-Piece Set": "Impact +6%",
            "4-Piece Set": "Basic Attacks, Dash Attacks, and Dodge Counters inflict 20% more Daze to the main target."
        }
    },
    {
        id: 22,
        name: "Thunder Metal",
        image: "image3/тандер.webp",
        skills: {
            "2-Piece Set": "<span class='element-electric'>Electric DMG</span> +10%",
            "4-Piece Set": "As long as an enemy in combat is Shocked, the equipper's ATK is increased by 28%."
        }
    },
    {
        id: 23,
        name: "Hormone Punk",
        image: "image3/гормон.webp",
        skills: {
            "2-Piece Set": "ATK +10%",
            "4-Piece Set": "Upon becoming the active character in combat, the equipper's ATK increases by 25% for 10s. This effect can trigger once every 20s."
        }
    },
    {
        id: 24,
        name: "Fanged Metal",
        image: "image3/фіз сет.webp",
        skills: {
            "2-Piece Set": "<span class='element-physical'>Physical DMG</span> +10%",
            "4-Piece Set": "Whenever a squad member inflicts Assault on an enemy, the equipper deals 35% additional DMG to the target for 12s."
        }
    },
    {
        id: 25,
        name: "Swing Jazz",
        image: "image3/свінга.webp",
        skills: {
            "2-Piece Set": "Energy Regen +20%",
            "4-Piece Set": "Launching a Chain Attack or Ultimate increases all squad members' DMG by 15% for 12s. Passive effects of the same name do not stack."
        }
    },
    {
        id: 26,
        name: "Chaotic Metal",
        image: "image3/ефірка.webp",
        skills: {
            "2-Piece Set": "<span class='element-ether'>Ether DMG</span> +10%",
            "4-Piece Set": "The equipper's CRIT DMG increases by 20%. When any character in the squad triggers Corruption's additional DMG, this effect further increases by 5.5% for 8s, stacking up to 6 times. Repeated triggers reset the duration."
        }
    },

];

// Функції
let currentSection = 'agents';

document.getElementById('hamburger').onclick = function () {
    document.getElementById('sidebar').style.width = '250px';
};

document.onclick = function (event) {
    if (!event.target.closest('.sidebar') && !event.target.closest('.hamburger')) {
        document.getElementById('sidebar').style.width = '0';
    }
};

function showSection(section) {
    currentSection = section;
    const filtersAgents = document.getElementById('filters-agents');
    const filtersWengines = document.getElementById('filters-wengines');
    if (section === 'agents') {
        if (filtersAgents) filtersAgents.style.display = 'block';
        if (filtersWengines) filtersWengines.style.display = 'none';
    } else if (section === 'wengines') {
        if (filtersAgents) filtersAgents.style.display = 'none';
        if (filtersWengines) filtersWengines.style.display = 'block';
    } else {
        if (filtersAgents) filtersAgents.style.display = 'none';
        if (filtersWengines) filtersWengines.style.display = 'none';
    }
    renderGrid();
    document.getElementById('sidebar').style.width = '0';
}

function renderGrid(data = getData()) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => {
            window.location.href = `detail.html?type=${currentSection}&id=${item.id}`;
        };
        let imgSrc = item.image || 'https://via.placeholder.com/120x160?text=No+Image';
        let html = `<img src="${imgSrc}" alt="${item.name}" class="card-image" style="width:120px;height:160px;object-fit:cover;display:block;margin:0 auto 8px;">`;
        html += `<h3>${item.name}</h3>`;
        let rarityClass = item.rarity === 'S' ? 'rarity-S' : (item.rarity === 'A' ? 'rarity-A' : '');
        let elementClass = '';
        if (item.element) {
            if (item.element === 'Ice') elementClass = 'element-Ice';
            else if (item.element === 'Fire') elementClass = 'element-Fire';
            else if (item.element === 'Electric') elementClass = 'element-Electric';
            else if (item.element === 'Ether') elementClass = 'element-Ether';
            else if (item.element === 'Physical') elementClass = 'element-Physical';
        }
        if (currentSection === 'agents') {
            html += `<p>Ранг: <span class="${rarityClass}">${item.rarity}</span></p>`;

            // Словник іконок елементів
            const elementIcons = {
                "Physical": "image/ршл.webp",
                "Fire": "image/фув.webp",
                "Ice": "image/каку.webp",
                "Electric": "image/кен.webp",
                "Ether": "image/мит.webp",
            };
            const elementIconSrc = elementIcons[item.element];
            html += `<p>Елемент: ${elementIconSrc ? `<img src="${elementIconSrc}" class="element-icon-small" alt="${item.element}">` : item.element}</p>`;

            // Словник іконок ролей
            const roleIcons = {
                "Attack": "image/атака.webp",
                "Stun": "image/стан.webp",
                "Anomaly": "image/аномал.webp",
                "Support": "image/сап.webp",
                "Rupture": "image/рап.webp",
                "Defense": "image/деф.webp"
            };
            const roleIconSrc = roleIcons[item.role];
            html += `<p>Роль: ${roleIconSrc ? `<img src="${roleIconSrc}" class="role-icon-small" alt="${item.role}">` : item.role}</p>`;

        } else if (currentSection === 'wengines') {
            html += `<p>Ранг: <span class="${rarityClass}">${item.rarity}</span></p>`;

            // Мапа іконок для ролей ампліфікаторів
            const roleIcons = {
                "Attack": "image/атака.webp",
                "Stun": "image/стан.webp",
                "Anomaly": "image/аномал.webp",
                "Support": "image/сап.webp",
                "Rupture": "image/рап.webp",
                "Defense": "image/деф.webp"
            };
            const roleIconSrc = roleIcons[item.role];

            if (roleIconSrc) {
                html += `<p>Роль: ${roleIconSrc ? `<img src="${roleIconSrc}" class="role-icon-small" alt="${item.role}">` : item.role}</p>`;
            } else {
                html += `<p>Для ролі: ${item.role}</p>`;
            }
        } else if (currentSection === 'bangboo') {
            html += `<p>Ранг: <span class="${rarityClass}">${item.rarity}</span></p>`;
        }
        card.innerHTML = html;
        content.appendChild(card);
    });
}

function getData() {
    if (currentSection === 'agents') return agents;
    if (currentSection === 'wengines') return wengines;
    if (currentSection === 'bangboo') return bangboo;
    if (currentSection === 'drivediscs') return drivediscs;
}

// ===== Фільтри для агентів =====
let activeFilters = {
    faction: '',
    element: '',
    rarity: '',
    role: ''
};

function applyAgentFilters() {
    if (currentSection !== 'agents') return;
    let data = agents;
    if (activeFilters.faction) data = data.filter(agent => agent.faction === activeFilters.faction);
    if (activeFilters.element) data = data.filter(agent => agent.element === activeFilters.element);
    if (activeFilters.rarity) data = data.filter(agent => agent.rarity === activeFilters.rarity);
    if (activeFilters.role) data = data.filter(agent => agent.role === activeFilters.role);
    renderGrid(data);
}

function resetAgentFilters() {
    activeFilters = { faction: '', element: '', rarity: '', role: '' };
    document.querySelectorAll('#filters-agents .filter-btn, #filters-agents .filter-icon-btn, #filters-agents .faction-option').forEach(btn => btn.classList.remove('active'));
    applyAgentFilters();
}

function initAgentFilters() {
    const btns = document.querySelectorAll('#filters-agents .filter-icon-btn, #filters-agents .faction-option');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const type = btn.getAttribute('data-filter');
            const val = btn.getAttribute('data-value');
            if (activeFilters[type] === val) {
                activeFilters[type] = '';
                btn.classList.remove('active');
            } else {
                document.querySelectorAll(`#filters-agents [data-filter="${type}"]`).forEach(b => b.classList.remove('active'));
                activeFilters[type] = val;
                btn.classList.add('active');
            }
            applyAgentFilters();
        });
    });

    const toggleBtn = document.getElementById('factionsToggle');
    const panel = document.getElementById('factionsPanel');
    if (toggleBtn && panel) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            panel.classList.toggle('open');
        });
        document.addEventListener('click', (e) => {
            if (!toggleBtn.contains(e.target) && !panel.contains(e.target)) panel.classList.remove('open');
        });
    }

    const resetBtn = document.getElementById('resetFiltersGacha');
    if (resetBtn) resetBtn.addEventListener('click', resetAgentFilters);
}

// ===== Фільтри для ампліфікаторів =====
let activeWengineFilters = {
    rarity: '',
    role: ''
};

function applyWengineFilters() {
    if (currentSection !== 'wengines') return;
    let data = wengines;
    if (activeWengineFilters.rarity) data = data.filter(w => w.rarity === activeWengineFilters.rarity);
    if (activeWengineFilters.role) data = data.filter(w => w.role === activeWengineFilters.role);
    renderGrid(data);
}

function resetWengineFilters() {
    activeWengineFilters = { rarity: '', role: '' };
    document.querySelectorAll('.wengine-filter-btn').forEach(btn => btn.classList.remove('active'));
    applyWengineFilters();
}

function initWengineFilters() {
    const btns = document.querySelectorAll('.wengine-filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.getAttribute('data-wfilter');
            const val = btn.getAttribute('data-value');
            if (activeWengineFilters[type] === val) {
                activeWengineFilters[type] = '';
                btn.classList.remove('active');
            } else {
                document.querySelectorAll(`.wengine-filter-btn[data-wfilter="${type}"]`).forEach(b => b.classList.remove('active'));
                activeWengineFilters[type] = val;
                btn.classList.add('active');
            }
            applyWengineFilters();
        });
    });
    const resetBtn = document.getElementById('resetWengineFilters');
    if (resetBtn) resetBtn.addEventListener('click', resetWengineFilters);
}

// Загальна функція applyFilters (використовується в інших місцях, але залишена для сумісності)
function applyFilters() {
    if (currentSection === 'agents') applyAgentFilters();
    else if (currentSection === 'wengines') applyWengineFilters();
    else renderGrid(getData());
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {
    initAgentFilters();
    initWengineFilters();
});

// ===== Функції openModal та closeModal (залишаються без змін) =====
function openModal(item) {
    document.getElementById('modal').style.display = 'block';
    let type = '';
    if (item.faction !== undefined) type = 'agent';
    else if (item.element !== undefined && item.role === undefined) type = 'bangboo';
    else if (item.role !== undefined && item.element === undefined && item.faction === undefined) type = 'wengines';
    else if (item.stats === undefined && item.element === undefined && item.role === undefined && item.faction === undefined) type = 'drivediscs';
    else if (item.role !== undefined && item.element !== undefined) type = 'agent';
    else type = 'agent';

    document.getElementById('modalRarity').textContent = '';
    document.getElementById('modalElement').textContent = '';
    document.getElementById('modalRole').textContent = '';
    document.getElementById('modalFaction').textContent = '';
    document.getElementById('modalRarity').parentElement.style.display = 'none';
    document.getElementById('modalElement').parentElement.style.display = 'none';
    document.getElementById('modalRole').parentElement.style.display = 'none';
    document.getElementById('modalFaction').parentElement.style.display = 'none';
    document.getElementById('modalName').textContent = item.name;

    const statsContainer = document.getElementById('modalBaseStats');
    if (statsContainer) statsContainer.innerHTML = '';

    if (type === 'agent') {
        document.getElementById('modalRarity').textContent = item.rarity || '—';
        document.getElementById('modalElement').textContent = item.element || '—';
        document.getElementById('modalRole').textContent = item.role || '—';
        document.getElementById('modalFaction').textContent = item.faction || '—';
        if (item.stats && Object.keys(item.stats).length > 0) {
            let statsHtml = '<h4 style="color:#00ffff; margin: 20px 0 12px 0; text-align:center;">Характеристики</h4>';
            for (const [key, value] of Object.entries(item.stats)) {
                statsHtml += `<p style="margin: 8px 0;"><strong>${key}:</strong> <span style="color:#ffd700;">${value}</span></p>`;
            }
            statsContainer.innerHTML = statsHtml;
        }
        document.getElementById('modalRarity').parentElement.style.display = '';
        document.getElementById('modalElement').parentElement.style.display = '';
        document.getElementById('modalRole').parentElement.style.display = '';
        document.getElementById('modalFaction').parentElement.style.display = '';
    } else if (type === 'bangboo') {
        document.getElementById('modalRarity').textContent = item.rarity || '—';
        document.getElementById('modalRarity').parentElement.style.display = '';
        if (item.stats && Object.keys(item.stats).length > 0) {
            let statsHtml = '<h4 style="color:#00ffff; margin: 20px 0 12px 0; text-align:center;">Характеристики</h4>';
            for (const [key, value] of Object.entries(item.stats)) {
                statsHtml += `<p style="margin: 8px 0;"><strong>${key}:</strong> <span style="color:#ffd700;">${value}</span></p>`;
            }
            statsContainer.innerHTML = statsHtml;
        }
    } else if (type === 'wengines') {
        document.getElementById('modalRarity').textContent = item.rarity || '—';
        document.getElementById('modalRole').textContent = item.role || '—';
        document.getElementById('modalRarity').parentElement.style.display = '';
        document.getElementById('modalRole').parentElement.style.display = '';
    }

    const img = document.getElementById('modalImage');
    img.src = item.image || 'https://via.placeholder.com/320x480?text=' + encodeURIComponent(item.name);
    img.alt = item.name;

    const modalRight = document.querySelector('.modal-right');
    let skillsHeader = modalRight ? modalRight.querySelector('h2') : null;
    if (!skillsHeader) skillsHeader = document.querySelector('#modalSkills')?.previousElementSibling;
    if (type === 'wengines') {
        if (skillsHeader) skillsHeader.textContent = ' W-Engine Effect';
    } else if (type === 'drivediscs') {
        if (skillsHeader) skillsHeader.textContent = ' ЕФЕКТИ';
    } else {
        if (skillsHeader) skillsHeader.textContent = ' НАВИЧКИ';
    }

    const skillsDiv = document.getElementById('modalSkills');
    skillsDiv.innerHTML = '';

    if (type === 'wengines' && item.stats) {
        for (const [key, value] of Object.entries(item.stats)) {
            const statBlock = document.createElement('div');
            statBlock.className = 'wengine-stat-item';
            statBlock.innerHTML = `<span class="wengine-stat-name">${key}</span><span class="wengine-stat-value">${value}</span>`;
            skillsDiv.appendChild(statBlock);
        }
    } else if (type === 'drivediscs' && item.effects) {
        if (typeof item.effects === 'object') {
            for (const [name, desc] of Object.entries(item.effects)) {
                const effectBlock = document.createElement('div');
                effectBlock.className = 'skill';
                effectBlock.innerHTML = `<h4>${name}</h4><p>${desc}</p>`;
                skillsDiv.appendChild(effectBlock);
            }
        } else if (typeof item.effects === 'string') {
            const effectBlock = document.createElement('div');
            effectBlock.className = 'skill';
            effectBlock.innerHTML = `<p>${item.effects}</p>`;
            skillsDiv.appendChild(effectBlock);
        }
    } else if (item.skills) {
        if (typeof item.skills === 'object' && !Array.isArray(item.skills)) {
            for (const [name, desc] of Object.entries(item.skills)) {
                const skillBlock = document.createElement('div');
                skillBlock.className = 'skill';
                skillBlock.innerHTML = `<h4>${name}</h4><p>${desc}</p>`;
                skillsDiv.appendChild(skillBlock);
            }
        } else if (typeof item.skills === 'string') {
            item.skills.split('\n').filter(line => line.trim()).forEach(line => {
                const skillBlock = document.createElement('div');
                skillBlock.className = 'skill';
                skillBlock.innerHTML = `<p>${line.trim()}</p>`;
                skillsDiv.appendChild(skillBlock);
            });
        }
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Ініціалізація сітки
renderGrid();