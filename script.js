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
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Basic Attack": "Basic Attack: Saw Teeth Trimming<br><br>Press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br><br>Unleashes up to 3 attacks, dealing <span class='element-physical'>Physical DMG</span>.Press repeatedly or hold <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> during the 3rd attack to extend the skill duration.<br><br>Basic Attack: Flash Freeze Trimming<br><br>While Flash Freeze is active, press Icon_Normal to activate:<br><br>Launch up to 3 attacks at enemies in front, dealing <span class='element-ice'>Ice DMG</span>.Each attack consumes 1 Flash Freeze Charge.Press repeatedly or hold Icon_Normal during the 3rd attack to extend the skill duration.<br><br>Basic Attack: Glacial Blade Wave<br><br>After the 3rd hit of Basic Attack: Flash Freeze Trimming, Dash Attack: Arctic Ambush's charged scissor strike, Dodge Counter: Reef Rock, and Quick Assist, if Ellen has Flash Freeze Charges, pressing Icon_Normal will launch Basic Attack: Glacial Blade Wave, dealing <span class='element-ice'>Ice DMG</span>.This skill consumes 2 points of Flash Freeze Charge.After use, it can be directly followed up with the 3rd hit of her Basic Attack.Character is invulnerable while using this skill.<br><br>Basic Attack: Icy Blade<br><br>After the 3rd hit of Basic Attack: Flash Freeze Trimming, EX Special Attack: Sharknami, Dodge Counter: Reef Rock, and Assist Follow-Up, automatically launch Basic Attack: Icy Blade, dealing multiple instances of <span class='element-ice'>Ice DMG</span> to all enemies in a large area ahead. It inflicts additional instances of <span class='element-ice'>Ice DMG</span> against Medium and Large foes.After the skill, Ellen gains the Quick Charge effect.Basic Attack: Icy Blade does not affect the branch or form of the original skill.Character is invulnerable while using this skill.",
            "Dodge": "Dodge: Vortex<br><br>Press Icon_Evade to activate:<br><br>A rapid dash dodge.Character is invulnerable while using this skill.When Perfect Dodge is triggered, Ellen gains the Quick Charge effect, reducing the charge time of Dash Attack: Arctic Ambush, lasting up to 5 seconds or until it triggers.<br><br>Dash: Roaming Hunt<br><br>Hold or double-press Icon_Evade to activate:<br><br>Enter the Roaming state, allowing dashing movement.In the Roaming state, drag the joystick to control Ellen's direction, and release to stop.Ellen is invulnerable for a brief time after activation.<br><br>Dash Attack: Arctic Ambush<br><br>While in the Roaming state, press Icon_Normal to activate:<br><br>Delivers a spinning slash to enemies before opening her scissors for a Swift Scissors strike, dealing <span class='element-ice'>Ice DMG</span>.Gain 1 point of Flash Freeze Charge when the Swift Scissors strike hits.<br><br>While in the Roaming state, hold Icon_Normal to activate:<br><br>Perform a spinning slash against the enemy, then pull apart the scissors to unleash a Charged Scissor strike, dealing massive <span class='element-ice'>Ice DMG</span>." +
                "Gain 3 points of Flash Freeze Charge when the Charged Scissor strike hits.If the enemy is Frozen, it always triggers Shatter.Anti - Interrupt level is increased while charging the skill, and DMG taken is reduced by 40%.When taking DMG from enemies while the skill is charging, that instance of DMG is nullified, and charging instantly completes.Character is invulnerable while using this skill.<br><br>Flash Freeze<br><br>When Ellen has Flash Freeze Charges, the Flash Freeze effect is activated.Once Flash Freeze activates, Basic Attacks and Dash Attacks expend Flash Freeze Charges, dealing massive <span class='element-ice'>Ice DMG</span>.Ellen can have up to a maximum of 6 Flash Freeze Charges.<br><br>Dash Attack: Monstrous Wave<br><br>Press Icon_Normal during a dodge to activate:<br><br>Launches a dashing slash attack at enemies in front, dealing Physical DMG.<br><br>Dash Attack: Cold Snap<br><br>While Flash Freeze is active, press Icon_Normal during dodge to activate:<br><br>Launches a dashing slash attack at enemies in front, dealing <span class='element-ice'>Ice DMG</span>.Consumes 1 Flash Freeze Charge.<br><br>Dodge Counter: Reef Rock<br><br>Press  during a Perfect Dodge to activate:<br><br>Rapidly move through enemies with open scissors for a cutting strike, dealing <span class='element-ice'>Ice DMG</span>.Character is invulnerable while using this skill.",
            "Assist": "Quick Assist: Shark Sentinel<br><br>When the active character is launched, press Icon_Switch to activate:<br><br>Speedily move through the enemy with open scissors for a cutting strike, dealing <span class='element-ice'>Ice DMG</span>.Character is invulnerable while using this skill.When the character on the field is launched, drag the joystick and press Icon_Switch to activate:Enter the Roaming state, enabling dashing movement.While in the Roaming state, use the joystick to change directions and release to stop.Character is invulnerable briefly when triggering the skill.Upon triggering a Quick Assist, Ellen gains the Quick Charge effect, shortening the charging time of Dash Attack: Arctic Ambush, lasting up to 5s or until it triggers once.<br><br>Defensive Assist: Wavefront Impact<br><br>When the character on field is about to be attacked, press Icon_Switch to activate:<br><br>Parries the enemy's attack, dealing massive Daze.Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Shark Cruiser<br><br>Press Icon_Normal after a Defensive Assist to activate:<br><br>Charge and slash enemies in front, dealing <span class='element-ice'>Ice DMG</span>.Press repeatedly or hold Icon_Normal during the attack to extend the skill duration.Character is invulnerable while using this skill.",
            "Special Attack": "Special Attack: Drift<br><br>Press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> to activate:<br><br>Use a quick tail sweep attack in front, dealing <span class='element-ice'>Ice DMG</span>.Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Tail Swipe<br><br>With enough Energy, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> Ready to activate:<br><br>Perform a forceful tail whip attack that deals massive <span class='element-ice'>Ice DMG</span>.Gain 1 Flash Freeze Charge upon striking an enemy.Character is invulnerable while using this skill.After executing the move, you can immediately follow up with the 3rd hit of a Basic Attack.<br><br>EX Special Attack: Sharknami<br><br>With enough Energy and after executing EX Special Attack: Tail Swipe, press <img src='image/ex.webp' style='width:24px;height:24px;vertical-align:middle;'> Ready to activate:<br><br>Perform a powerful series of slashes ahead that deal massive <span class='element-ice'>Ice DMG</span>.Gain 1 Flash Freeze Charge upon striking an enemy.Character is invulnerable while using this skill.After executing the move, you can immediately follow up with the 3rd hit of a Basic Attack.",
            "Chain Attack": "Chain Attack: Avalanche<br><br>When a Chain Attack is triggered, select the character to activate:<br><br>Crash down from above and unleash an ice storm, dealing massive <span class='element-ice'>Ice DMG</span>.Character is invulnerable while using this skill.<br><br>Ultimate: Endless Winter<br><br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br><br>Crash down from above and unleash an ice storm before a powerful scissor strike, dealing massive <span class='element-ice'>Ice DMG</span>.Character is invulnerable while using this skill.",
            "Core Skill": "Core Passive: Sharp-Toothed<br><br>When Ellen launches a Charged Scissor strike during Dash Attack: Arctic Ambush, or consumes Flash Freeze Charge to activate Basic Attack: Flash Freeze Trimming, the skill's CRIT DMG increases by 100%.The above effect also applies to Chain Attacks, Ultimates, Basic Attack: Icy Blade, and Basic Attack: Glacial Blade Wave.<br><br>Additional Ability: Rising Storm<br><br>When another character in your squad is a Stun character or shares the same Attribute or Faction:When Ellen deals <span class='element-ice'>Ice DMG</span>, subsequent <span class='element-ice'>Ice DMG</span> increases by 3% for 10s.This effect can stack up to 10 times, and repeated triggers reset the duration."

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
        faction: "Victoria Housekeeping",
        image: "image/кошка_1021_272_14050658.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Kitty Slash<br>Press Icon_Normal to activate:<br>Unleashes up to 5 slashes, dealing Physical DMG.<br>On the last hit, there is a 33.33% chance to repeat this hit 3 times.<br><br>Basic Attack: Crimson Blade<br>Hold Icon_Normal during the first 3 hits of Nekomata's Basic Attack to activate:<br>Slashes enemies in front and passes through them, dealing Physical DMG.<br>Upon activation, there is a 33.33% chance to repeat this attack 3 times.",
            "Ухилення + Атака": "Dodge: Can't Touch Me-ow~<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br> Character is invulnerable while using this skill.<br><br>Dash Attack: Over Here!<br>Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing Physical DMG.<br><br>Dodge Counter: Phantom Claws<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Slashes enemies in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Cat's Paw<br>When the active character is launched, press Icon_Switch to activate:<br>Slashes enemies in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Desperate Defense<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Shadow Strike<br>Press Icon_Normal after a Defensive Assist to activate:<br>Charge and slash enemies in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Surprise Attack<br>Press Icon_Special to activate:<br> Unleashes a downward strike, dealing Physical DMG.<br> Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Super Surprise Attack!<br>With enough Energy, press Icon_SpecialReady to activate:<br>Unleashes a powerful falling slash that deals massive Physical DMG.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Claw Swipe<br>When a Chain Attack is triggered, select the character to activate:<br> Unleashes a powerful slash at enemies ahead in a large area, dealing massive Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Claw Smash<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes powerful slashes at enemies ahead in a large area, dealing massive Physical DMG.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Stealthy Paws<br>When Nekomata's Dodge Counter or Quick Assist hits an enemy, her DMG increases by 60% for 6s.<br><br>Additional Ability: Catwalk <br>When another character in your squad shares the same Attribute or Faction: <br>After any character inflicts Assault, increases the DMG of Nekomata's next EX Special Attack by 35%, stacking up to 2 times."
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
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Whack the Dimwit<br>Press Icon_Normal to activate:<br> Order Drusilla and Anastella to attack up to 4 times, dealing Physical DMG and Electric DMG.<br>Performing other actions with Rina during Drusilla and Anastella's attacks will not interrupt Rina's Basic Attack combo count.<br><br>Basic Attack: Shoo the Fool<br>Hold Icon_Normal or Icon_Special to activate:<br>Calls back Drusilla and Anastella to swing them around for a ranged attack, dealing Electric DMG.<br>Anti - Interrupt level is increased while using this skill.",
            "Ухилення + Атака": "Dodge: Dress Adjustment<br>Press Icon_Evade to activate:<br> A quick dash dodge.<br> Character is invulnerable while using this skill.<br><br>Dash Attack: Sudden Surprise<br>Press Icon_Normal during a dodge to activate:<br></br>Order Drusilla and Anastella to execute a piercing attack, dealing Physical DMG.<br><br> Dodge Counter: Bangboo Callback<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Order Drusilla and Anastella to spin forward and trigger an explosion, dealing Electric DMG.<br>Character is invulnerable while using this skill.",
            "Assist": "Quick Assist: Duple Meter Allemande<br>When the active character is launched, press Icon_Switch to activate:<br> Order Drusilla and Anastella to spin forward and trigger an explosion, dealing Electric DMG.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: Triple Meter Courante<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Dodges the enemy's attack and activates Vital View.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Quadruple Meter Gavotte<br> Press Icon_Normal after an Evasive Assist to activate:<br>Order Drusilla and Anastella to push forward and generate an electrical vortex, dealing Electric DMG.<br> Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Beat the Blockhead<br>Press Icon_Special to activate: <br>Order Anastella to execute a downward smash, dealing Electric DMG<br>Anti- Interrupt level is increased while using this skill.<br><br>EX Special Attack: Dimwit Disappearing Trick<br> With enough Energy, press Icon_SpecialReady to activate:<br>Order Drusilla and Anastella to execute multiple downward smashes, dealing massive Electric DMG.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.",
            "Ultimate": "Chain Attack: Code of Conduct<br>When a Chain Attack is triggered, select the character to activate: <br>Order Drusilla and Anastella to push forward and generate a ball- shaped electrical field that deals massive Electric DMG.<br>During this skill, Drusilla and Anastella are unable to perform Basic Attacks, Dash Attacks, Special Attacks, and EX Special Attacks, but can be recalled to Rina's side through Basic Attack: Shoo the Fool.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br><br>Ultimate: The Queen's Attendants<br> Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Order Drusilla and Anastella to spin forward, dealing massive Electric DMG.<br></br>During this skill, Drusilla and Anastella are unable to respond to Basic Attack, Dash Attack, Special Attack, or EX Special Attack commands, but can be recalled to Rina's side through Basic Attack: Shoo the Fool.<br>Upon activating this skill, the other squad members recover 10 Energy.The next character to switch in recovers an additional 20 Energy.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.",
            "Core Passive": "Core Passive: Mini Destruction Partner<br>When ordering Drusilla or Anastella to attack, other squad members' PEN Ratio increases together with Rina's, by 25% of Rina's PEN Ratio + 12%, up to 30%. The effect ends when both Drusilla and Anastella return to Rina.<br><br>Additional Ability: Banquet of Perfection<br>When another character in your squad shares the same Attribute or Faction: <br>Increases the duration of Shock inflicted on enemies by any character by 3s.When Shocked enemies are on the field, all squad members' Electric DMG increases by 10%."
        },
        mindscapes: [
            { number: 1, name: "Dance Duet ", desc: "After being sent out to launch an attack, Drusilla and Anastella stay in place for an additional 5.5s before returning to Rina.The effect gained from Core Passive: Mini Destruction Partner by characters within 10m is increased to 130% of the original value." },
            { number: 2, name: "Master's Paragon ", desc: "Upon becoming the active character in combat, Rina's DMG increases by 15% for 12s. This effect can trigger once every 18s." },
            { number: 3, name: "Head Maid's Specialty  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Needle and Hammer ", desc: "Rina's Energy Regen increases by 0.5/s when both Drusilla and Anastella are deployed. The effect ends when Drusilla or Anastella returns to Rina." },
            { number: 5, name: "Head Maid Perfectionist ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Stormy Night's Fright ", desc: "When an EX Special Attack, Chain Attack or Ultimate hits an enemy, the entire squad's Electric DMG is increased by 15% for 8s." }
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
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Moon Hunter<br>Press Icon_Normal to activate:<br>Unleashes up to 5 strikes in front, dealing Physical DMG.<br>Hold down Icon_Normal to charge up, increasing the power of the attack and dealing Ice DMG.",
            "Ухилення + Атака": "Dodge: Suitable Positioning<br>Press Icon_Evade to activate:<br> quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Keep it Clean<br>Press Icon_Normal during a dodge to activate:<br>Slides forward, launching a series of strikes in front, dealing Physical DMG.<br><br>Dodge Counter: Etiquette Manual</br>Press Icon_Normal during a Perfect Dodge to activate:<br>Strikes enemies in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Wolf Pack<br>When the active character is launched, press Icon_Switch to activate:<br>Strikes enemies in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Disrupted Hunt<br>When the on- field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Vengeful Counterattack<br>Press Icon_Normal after a Defensive Assist to activate:<br>Creates an icicle in front, which strikes all enemies within range, dealing Ice DMG.<br>Character is invulnerable while using this skill.<br><br>Assist Follow - Up: Vengeful Counterattack - Glacial Waltz<br>Hold Icon_Normal after a Defensive Assist to activate:<br>Quickly launch multiple strikes against enemies in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Time to Hunt<br>Press Icon_Special to activate: <br>Unleashes a series of strikes in front, dealing Ice DMG.<br>Hold down Icon_Special to charge up, increasing its power.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Thrill of the Hunt<br>With enough Energy, press Icon_SpecialReady to activate:<br>Unleashes a series of powerful strikes in front, dealing massive Ice DMG.<br>Hold down Icon_SpecialReady to charge up, consuming Energy and enhancing the power of the attack.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: As You Wish<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a series of powerful strikes at enemies in a small area in front of him, dealing massive Ice DMG.<br>Character is invulnerable while using this skill.< br > <br>Ultimate: Mission Complete<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br></br>Unleashes multiple powerful strikes at enemies in a large area, dealing massive Ice DMG.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Chain Attack: Core Passive: Metallic Paws<br>When Lycaon completes charging during a Basic Attack, or activates a Dodge Counter or Dash Attack, the Daze inflicted by the skill increases by 80%.<br>When EX Special Attack: Thrill of the Hunt, Assist Follow- Up: Vengeful Counterattack, or Assist Follow- Up: Vengeful Counterattack - Glacial Waltz hits an enemy, the target's Ice RES is reduced by 25%, and it increases the DMG to the target from other attributes by 30% for 30s.<br>" +
                "Upon entering the battlefield, Lycaon gains one Encircle Prey activation chance.<br>When Encircle Prey has available activations, hitting an enemy with Assist Follow - Up: Vengeful Counterattack - Glacial Waltz triggers the Quick Assist of the previous character in the squad.During this skill, when other squad members enter via Quick Assist, Lycaon enters the Encircle Prey state for 8s.<br>When an elite or boss enemy becomes Stunned, 1 Encircle Prey activation chance is gained.Up to 1 Encircle Prey activation can be stored.<br>When the Encircle Prey state ends, Lycaon automatically activates Assist Follow - Up: Vengeful Counterattack - Glacial Waltz.If the Encircle Prey state ends early, for every 1s of remaining duration, the Daze dealt by the next Assist Follow - Up: Vengeful Counterattack - Glacial Waltz increases by 6 %.<br>When the currently active character stops attacking or uses a Chain Attack or Ultimate, Lycaon will end the Encircle Prey state early.<br>When Lycaon manually uses Assist Follow - Up: Vengeful Counterattack - Glacial Waltz, the Encircle Prey state also ends early, but Assist Follow - Up: Vengeful Counterattack - Glacial Waltz will not be automatically triggered.<br>While the Encircle Prey state is active, Lycaon will activate Basic Attack, Dodge, Dash Attack, and Dodge Counter based on the skills used by the currently active character.<br>When the currently active character uses a Basic Attack or EX Special Attack, Lycaon will simultaneously perform the 1st through 3rd hits of his Basic Attack.<br>When the active character performs a Dodge or Dodge Counter, Lycaon will simultaneously perform a Dodge or Dodge Counter.After performing a Dodge Counter while in the Encircle Prey state, Lycaon can immediately follow up with the 3rd hit of his Basic Attack.<br>While the Encircle Prey state is active, when Lycaon is not the currently active Agent, his attacks only deal DMG and Daze.While Lycaon is the currently active character, the Encircle Prey duration does not decrease.<br><br>Additional Ability: Elegant Predator <br>When another character in your squad is an Anomaly character or shares the same Attribute or Faction:<br>When Lycaon hits a Stunned enemy, the target's Stun DMG Multiplier increases by 35%."
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
        faction: "Victoria Housekeeping",
        image: "image/солд_1041_272_14050658.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Warmup Sparks<br>Press Icon_Normal to activate: <br>Unleashes up to 4 slashes, dealing Physical DMG.<br><br> Basic Attack: Fire Suppression<br>Press Icon_Normal at the right moment to activate:<br>Launches a stronger slash, dealing Fire DMG.<br> When Fire Suppression is guaranteed to trigger, pressing Icon_Normal when the attack is about to end speeds up the transition into the next hit of Basic Attack.<br> When Fire Suppression is guaranteed to trigger, the 5th hit of the Basic Attack string unlocks.Activating a Chain Attack or Ultimate powers up her next Basic Attack 5th hit.A strengthened Basic Attack 5th hit will consume all remaining guaranteed Fire Suppression activations to deal additional Fire DMG per activation spent.<br> After triggering a Perfect Dodge, the current Basic Attack hit count is retained for 5s.After performing a Dodge Counter, pressing Icon_Normal resumes the Basic Attack from the retained hit count.<br><br>Basic Attack: Fire Assault<br>Hold Icon_Normal to activate: Basic Attack: Fire Charge<br>Release Icon_Normal while Basic Attack: Fire Charge is activated to launch Basic Attack: Fire Assault.<br>If attacked by an enemy during Basic Attack: Fire Assault or the moment Basic Attack: Fire Charge is activated, a Block Counter can be triggered, negating that instance of DMG and granting 3 guaranteed triggers of Fire Suppression.Press Icon_Normal to follow up with the 3rd hit of a Basic Attack, up to 8 times.<br> While charging, tilting the joystick launches Basic Attack: Blazing Rush.",
            "Ухилення + Атака": "Dodge: Tempered Fire<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Blazing Fire<br> Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing Physical DMG.<br><br>Dash Attack: Fire Suppression<br>Press Icon_Normal during a dodge to activate:<br> Slashes enemies in front, dealing Fire DMG.<br><br>Dodge Counter: Backdraft<br> Press Icon_Normal during a Perfect Dodge to activate:<br> Executes a powerful slash against enemies in front, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Covering Fire<br>When the active character is launched, press Icon_Switch to activate: <br>Slashes enemies in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Hold the Line<br> When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Reignition<br> Press Icon_Normal after a Defensive Assist to activate:<br>Charge and cross slash enemies in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Raging Fire<br>Press Icon_Special to activate: <br>Slashes enemies nearby, dealing Fire DMG.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Fervent Fire<br> With enough Energy, press Icon_SpecialReady to activate:<br>Executes a powerful slash against enemies nearby, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.<br>After using this skill, Soldier 11's Basic Attacks and Dash Attacks are guaranteed to trigger Fire Suppression for up to 30s or 8 times.<br> After using this skill, press Icon_Normal to immediately follow up with the 4th hit of a Basic Attack.<br>Soldier 11 enters the Alert Stance after using this skill.While in Alert Stance, if hit during a Basic Attack, triggers Basic Attack: Fire Charge to block the attack, followed by Basic Attack: Fire Assault.After Basic Attack: Fire Assault is performed, press Icon_Normal to resume Basic Attack from the retained Basic Attack hit count.",
            "Ultimate": "Chain Attack: Uplifting Flame<br>When a Chain Attack is triggered, select the character to activate:<br> Slashes enemies in a small area ahead, then executes a powerful upwards slash, dealing massive Fire DMG.<br> Character is invulnerable while using this skill.<br>After using this skill, Soldier 11's Basic Attacks and Dash Attacks are guaranteed to trigger Fire Suppression for up to 30s or 8 times.<br>After using this skill, press Icon_Normal to immediately follow up with the 4th hit of a Basic Attack.<br>Soldier 11 enters the Alert Stance after using this skill.While in Alert Stance, if hit during a Basic Attack, triggers Basic Attack: Fire Charge to block the attack, followed by Basic Attack: Fire Assault.After Basic Attack: Fire Assault is performed, press Icon_Normal to resume Basic Attack from the retained Basic Attack hit count.<br><br>Ultimate: Bellowing Flame<br> When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br> Slashes enemies nearby, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.<br> After using this skill, Soldier 11's Basic Attacks and Dash Attacks are guaranteed to trigger Fire Suppression for up to 30s or 8 times.<br>After using this skill, press Icon_Normal to immediately follow up with the 4th hit of a Basic Attack.<br>Soldier 11 enters the Alert Stance after using this skill.While in Alert Stance, if hit during a Basic Attack, triggers Basic Attack: Fire Charge to block the attack, followed by Basic Attack: Fire Assault.After Basic Attack: Fire Assault is performed, press Icon_Normal to resume Basic Attack from the retained Basic Attack hit count.",
            "Core Passive": "Core Passive: Heatwave<br>When triggering Fire Suppression during a Basic Attack or Dash Attack, increase that attack's DMG by 70%.<br><br>Additional Ability: Fields of Fire<br>When another character in your squad shares the same Attribute or Faction: <br>Soldier 11 deals 10% more Fire DMG.When attacking Stunned enemies, this effect is further enhanced by an additional 22.5%."
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
        faction: "Victoria Housekeeping",
        image: "image/грейс.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: High-Pressure Spike<br>Press Icon_Normal to activate:<br>Unleashes up to 4 attacks, dealing Physical DMG and Electric DMG.<br>While launching Basic Attacks, drag the joystick to move while attacking.This allows Grace to reposition herself and deal Physical DMG.If used after the 1st or 2nd hit of a Basic Attack, pressing Icon_Normal again resumes the combo from the 3rd or 4th hit of the Basic Attack.<br>While Grace is launching Basic Attacks, her Basic Attack combo will not be interrupted by her Special Attacks, EX Special Attacks, Dodge, Dash Attacks, or Dodge Counter.",
            "Ухилення + Атака": "Dodge: Safety Regulation<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br> Dash Attack: Quick Inspection<br>Press Icon_Normal during a dodge to activate:<br>Slide forward while shooting, dealing Physical DMG.<br><br>Dodge Counter: Violation Penalty<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Throws a grenade at enemies, dealing Electric DMG, then automatically triggers the Basic Attack's 4th hit.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Incident Management<br>When the active character is launched in the air, press Icon_Switch to activate:<br> Throws a grenade at the enemy, dealing Electric DMG.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: Rapid Risk Response<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Dodges the enemy's attack and activates Vital View.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Counter Volt Needle<br>Press Icon_Normal after an Evasive Assist to activate:<br> Unleashes a spinning hail of bullets against enemies in front and throws a grenade, dealing Electric DMG.<br> Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Obstruction Removal<br>Press Icon_Special to activate:<br>Throws a grenade forward, dealing Electric DMG.<br> During the skill, drag the joystick to reposition in that direction.<br>When activated via consuming Zap, dodge incoming enemy attacks.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Supercharged Obstruction Removal<br>With enough Energy, press Icon_SpecialReady to activate:<br>Leaps into the air and throws two grenades forward, dealing massive Electric DMG.<br>During the skill, drag the joystick to change directions.<br> If Zap reaches max stacks, throws an additional Vortex Cluster Grenade, generating an electromagnetic field at the point of detonation that pulls in enemies and deals Electric DMG.<br>Character is invulnerable while using this skill.<br><br>Pulse<br>Activating an Ultimate grants 25 stacks of Pulse(max 25 stacks).When gaining Zap, consumes 1 stack of Pulse.<br>After consuming Pulse to obtain 8 stacks of Zap, the next grenade throw includes an additional Pulse Grenade." +
                "If it hits an enemy suffering <span class='element-ether'>Ether</span>, <span class='element-electric'>Electric</span>, <span class='element-fire'>Fire</span>, <span class='element-physical'>Physical</span>, <span class='element-ice'>Ice</span>, or <span class='element-wind'>Wind</span> Anomaly, it triggers Abloom: deals an additional instance of DMG equal to <span class='element-ether'>560%</span> /<span class='element-electric'>280%</span>/<span class='element-fire'>700%</span> /<span class='element-physical'>50%</span>/<span class='element-ice'>70%</span>/<span class='element-wind'>28%</span> of the original Anomaly's DMG.<br>While in the Pulse state, Special Attack: Obstruction Removal - Cycle is unlocked.<br><br>Special Attack: Obstruction Removal - Cycle<br>While in the Pulse state, hold Icon_Special to activate:<br>Repeatedly hurls grenades forward during the skill, dealing Electric DMG and granting 1 Zap stack each time grenades are thrown.<br>During the skill, tilt the joystick to reposition and dodge enemy attacks.<br>Anti - Interrupt level is increased while using this skill.",
            "Ultimate": "Chain Attack: Collaborative Construction<br>When a Chain Attack is triggered, select the character to activate:<br></br>Throws three grenades into the air then strafes to detonate them, dealing massive Electric DMG.< br >Character is invulnerable while using this skill.<br><br>Ultimate: Demolition Blast - Beware<br> When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Throws a custom grenade which explodes in the air and splits into four smaller grenades, dealing massive Electric DMG.<br> Gains 8 stacks of Zap and 25 stacks of Pulse(max 25 stacks).<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Pre-Driven Needle<br>When Grace's Basic Attack or Dash Attack hits an enemy and deals Physical DMG, she gains 1 stack of Zap (up to 8 stacks). Upon reaching maximum stacks, using a Special Attack or EX Special Attack will consume all stacks of Zap, increasing the accumulated Electric Anomaly Buildup by 130%.<br><br>Additional Ability: Tech Support Dept.<br>When another character in your squad shares the same Attribute or Faction, or is an Anomaly character:<br>When Grace's EX Special Attack hits an enemy, the next time that target is afflicted with Shock, that instance of Shock DMG is increased by 18%, stacking up to 2 times. This effect can trigger on each enemy only once per skill use, and all stacks reset when the Shock state ends."
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
        faction: "Victoria Housekeeping",
        image: "image/коляда_1101_272_14050658.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Smash 'n' Bash<br>Press Icon_Normal to activate:<br> Unleashes up to 4 strikes, dealing Physical DMG.<br>When Koleda has the Furnace Fire effect, she can launch an enhanced Basic Attack after the 2nd hit, consuming the Furnace Fire effect and dealing massive Fire DMG.<br>When Koleda and Ben are deployed together, executing an enhanced Basic Attack will trigger a coordinated attack from both, further increasing the move's power;<br>Koleda is invulnerable during the Basic Attack's 4th hit and enhanced Basic Attack.",
            "Ухилення + Атака": "Dodge: Wait 'n' See<br>Press Icon_Evade to activate:<br> A quick dash dodge.<br> Character is invulnerable while using this skill.<br><br>Dash Attack: Tremble!<br> Press Icon_Normal during a Dodge to activate:<br>Strikes enemies in front, dealing Physical DMG.<br><br>Dodge Counter: Don't Look Down on Me<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Strikes enemies in front and creates an explosion, dealing Fire DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Coming Thru!<br>When the active character is launched, press Icon_Switch to activate: <br>Strikes enemies in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Protective Hammer<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Hammer Bell<br>Press Icon_Normal after a Defensive Assist to activate:<br> Koleda charges and strikes enemies in front, dealing Fire DMG and obtaining Furnace Fire effect.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Hammer Time<br>Press Icon_Special to activate: <br>Strikes enemies in front and triggers an explosion, dealing Fire DMG.<br>This skill launches faster and triggers an explosion when used after the 2nd or 4th hit of Koleda's Basic Attack or enhanced Basic Attack.<br>When Koleda and Ben are both in your squad, and this skill is quickly launched after an enhanced Basic Attack, they team up to launch a coordinated attack, further increasing the power of the skill.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Boiling Furnace<br>With enough Energy, press Icon_SpecialReady to activate:<br>Strikes enemies in front and triggers a powerful explosion, dealing massive Fire DMG.Koleda also gains the Furnace Fire effect.<br>This skill activates faster and triggers an explosion when used after the 2nd or 4th hit of Koleda's Basic Attack or enhanced Basic Attack.<br>When Koleda and Ben are both in your squad and this skill is quickly launched after an enhanced Basic Attack, they team up to launch a coordinated attack, further increasing the power of the skill.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Natural Disaster<br>When a Chain Attack is triggered, select the character to activate: <br>Unleashes a powerful explosion on enemies in a large area, dealing massive Fire DMG while also obtaining the Furnace Fire effect.<br></br>Character is invulnerable while using this skill.<br><br>Ultimate: Hammerquake<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a powerful explosion on enemies in a large area in front, dealing massive Fire DMG while also obtaining the Furnace Fire effect.<br></br>Koleda and Ben can team up when fighting together to launch a coordinated attack, further increasing the power of the attack.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Demolition Hammer<br>When Koleda uses her EX Special Attack or consumes Furnace Fire to use an enhanced Basic Attack, the Daze she deals increases by 60%.<br><br>Additional Ability: Belobog Management<br>When another character in your squad shares the same Attribute or Faction or is a Rupture character:<br>When the explosion from Koleda's EX Special Attack hits an enemy, it applies a debuff to the target. While the target is Stunned, Chain Attacks deal 35% more DMG to the target. This effect can stack up to 2 times and resets when the Stunned effect ends."
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
        faction: "Victoria Housekeeping",
        image: "image/джу.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Don't Move!<br> [Assault Mode]<br>Press Icon_Normal to activate.<br>Unleash a flurry of martial arts, bullets, and Ether Buckshots in a series of up to 5 attacks, dealing Physical DMG and Ether DMG.<br>When the 4th or 5th hit strikes an enemy, obtain 1 Enhanced Shotshell per hit.A max of 1 can be obtained per activation of this Basic Attack.<br>While using this skill, drag the joystick and press Icon_Normal to activate Dash Attack: Firepower Offensive and readjust to face the selected direction.<br>While under Assault Mode, hold Icon_Normal to switch to Suppressive Mode.<br><br>Basic Attack: Please Do Not Resist<br>[Suppressive Mode]<br>Hold Icon_Normal to activate:<br>Unleash up to 3 Shotshell piercing attacks, dealing Physical DMG.If Zhu Yuan has Enhanced Shotshells upon firing, 1 Enhanced Shotshell will be consumed, dealing massive Ether DMG.<br> While using this skill, drag the joystick to activate her Dash Attack: Overwhelming Firepower and readjust to face the selected direction.<br>While in Suppressive Mode, release Icon_Normal to return to Assault Mode.",
            "Ухилення + Атака": "Dodge: Tactical Detour<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Firepower Offensive<br>Assault Mode<br> Press Icon_Normal during a dodge to activate:<br>Uses handgun to attack, dealing Ether DMG.<br><br> Dash Attack: Overwhelming Firepower<br>Suppressive Mode<br>Drag the joystick during Basic Attack: Please Do Not Resist to activate:<br>Unleashes a Shotshell piercing attack, dealing Physical DMG.If Zhu Yuan has Enhanced Shotshells when firing, 1 Enhanced Shotshell will be consumed, dealing massive Ether DMG.<br><br>Dodge Counter: Fire Blast<br>Press Icon_Normal during a Perfect Dodge to activate.<br>Shoots enemies in front with an Ether Buckshot, dealing Ether DMG.<br>Gain 1 Enhanced Shotshell on skill use.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Covering Shot<br>When the active character is launched, press Icon_Switch to activate:<br>Shoots enemies in front with an Ether Buckshot, dealing Ether DMG.<br>Gain 1 Enhanced Shotshell on skill use.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: Guarded Backup<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Dodges the enemy's attack and activates Vital View.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Defensive Counter<br>Press Icon_Normal after an Evasive Assist to activate:<br>Attack with a combination of martial arts and shotshells, dealing Physical DMG and Ether DMG.<br>Upon activation, gain 3 Enhanced Shotshells.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Buckshot Blast<br>Press Icon_Special to activate: <br>Shoots Ether Buckshots that deal Ether DMG.This can be repeated 3 times by repeatedly pressing Icon_Special.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Full Barrage<br>With enough Energy, press Icon_SpecialReady to activate:<br>Shoots a series of Ether Buckshots, that explode and deal massive Ether DMG.<br>Upon activation, gain 3 Enhanced Shotshells.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Eradication Mode<br>When a Chain Attack is triggered, select the character to activate: <br>Uses Modified Master Firearm to execute a saturated attack, firing lasers and seeking missiles to deal massive Ether DMG.<br>Upon activation, gain 3 Enhanced Shotshells.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Max Eradication Mode<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Uses Modified Master Firearm to execute a saturated attack, firing lasers and seeking missiles to deal massive Ether DMG.<br>Upon activation, gain 3 Enhanced Shotshells.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Special Ops Ammunition<br>When Zhu Yuan is under Suppressive Mode, using Enhanced Shotshells increases her DMG by 40%.When attacking Stunned enemies, this DMG buff is increased by an additional 40%.When Zhu Yuan enters the battlefield, she immediately gains 6 Enhanced Shotshells.<br><br>Additional Ability: Tactical Coordination<br>When another character in your squad is a Support character or shares the same Faction:<br>Zhu Yuan's CRIT Rate is increased by 30% for 10s after using an EX Special Attack, Chain Attack, or Ultimate."
        },
        mindscapes: [
            { number: 1, name: "Quick Reload  ", desc: "When Zhu Yuan activates Chain Attacks/Ultimates, gain the Quick Reload effect. When Zhu Yuan has the Quick Reload effect and uses up all Enhanced Shotshells, the Quick Reload effect will be consumed to instantly gain 6/9 Enhanced Shotshells." },
            { number: 2, name: "Ether Ember  ", desc: "In Suppressive Mode, Zhu Yuan's Anti-Interrupt level is increased and DMG taken reduced by 10%. When Zhu Yuan hits an enemy with Enhanced Shotshells, deal 10% more Basic Attack: Please Do Not Resist and Dash Attack: Overwhelming Firepower Ether DMG, stacking up to 5 times and lasting for 5s. Each shot adds one stack of this effect, and repeated triggers reset the duration." },
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
        faction: "Victoria Housekeeping",
        image: "image/яна.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Tsukuyomi Kagura<br>Yanagi has two stances: Jougen and Kagen.<br>Press Icon_Normal to activate: <br>Execute up to five forward slashes based on the current stance, causing Physical DMG and Electric DMG.<br>During combat, Yanagi gains the corresponding stance buff based on her current stance:<br>Jougen stance buff: Electric DMG increases by 10%.Anti - Interrupt Level increases during Basic Attacks.<br>Kagen stance buff: PEN Ratio increases by 10%.Interrupt Level increases for Basic Attacks.<br>For 8s after switching stances, Yanagi retains the bonus from the previous stance.",
            "Dodge": "Dodge: Wandering Breeze<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Fleeting Flight<br> Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing Physical DMG.<br><br>Dodge Counter: Rapid Retaliation<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Slashes enemies in front, dealing Electric DMG.<br>Character is invulnerable while using this skill.<br>After using this skill, you can immediately follow up with the 3rd hit of the current stance's Basic Attack.",
            "Assist ": "Quick Assist: Blade of Elegance<br>When the active character is launched, press Icon_Switch to activate:<br> Slashes enemies in front, dealing Electric DMG.<br> Character is invulnerable while using this skill.<br>After using this skill, you can immediately follow up with the 3rd hit of the current stance's Basic Attack.<br></br>Defensive Assist: Radiant Reversal<br>When the on- field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Weeping Willow Stab<br>Press Icon_Normal after a Defensive Assist to activate:<br>Switch stances, and quickly deliver multiple slashes to enemies in front, dealing Electric DMG.<br>Character is invulnerable while using this skill.<br>After using this skill, you can immediately follow up with the 3rd hit of the current stance's Basic Attack.",
            "Спеціальна атака": "Special Attack: Ruten<br>Press Icon_Special to activate:<br> Perform a forward slash, dealing Electric DMG, and switch the current stance.<br>Anti - Interrupt level is increased while using this skill.<br>If activated after the 3rd, 4th, or 5th hit of a Basic Attack, it activates Swift Ruten, speeding up the slashes while switching her current stance.<br>Block enemy attacks while Swift Ruten is active.<br> Upon activating Swift Ruten, Yanagi can immediately follow up with the 3rd hit of the current stance's Basic Attack.<br><br>EX Special Attack: Gekka Ruten<br> With enough Energy, hold Icon_SpecialReady to activate:<br>Charge up power for a quick forward thrust, followed by a downward attack, dealing massive Electric DMG.<br>Upon executing the thrust, Yanagi switches stances and enters the Shinrabanshou state, lasting 15s.For the duration of this state, when following up with a subsequent Basic Attack from the 5th hit of a Basic Attack or other skills, the combo will begin directly from the 3rd hit of the Basic Attack.<br>If the downward attack hits an enemy suffering an Anomaly, it triggers a special Disorder effect, Polarity Disorder, dealing 15% of the original Disorder effect's DMG to the target, plus an additional 3200% of Yanagi's Anomaly Proficiency.Polarity Disorder will not remove the target's Anomaly.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Celestial Harmony<br>When a Chain Attack is triggered, select the character to activate:<br> Switch stances and unleash a powerful slash on enemies in front, dealing massive Electric DMG.<br>Character is invulnerable while using this skill.<br> fter using this skill, you can immediately follow up with the 3rd hit of the current stance's Basic Attack.<br><br>Ultimate: Raiei Tenge<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br> Yanagi unleashes her potential and delivers a powerful slash to a large area of enemies in front in a very short time, followed by an additional lightning strike, dealing massive Electric DMG.<br>When the lightning strike hits an enemy affected by an Attribute Anomaly, it triggers a special Disorder effect called Polarity Disorder.This deals DMG equal to 15% of the original Disorder effect plus an additional 3200% of Yanagi's Anomaly Proficiency. Polarity Disorder will not remove the target's Anomaly.<br>Character is invulnerable while using this skill.<br>After using this skill, Yanagi can immediately follow up with the 3rd hit of the current stance's Basic Attack.",
            "Core Passive": "Core Passive: Lunar Eclipse<br>After Yanagi activates her EX Special Attack, the DMG multiplier of Disorder is increased by 250% when any squad member applies the Disorder effect to an enemy, lasting 15s.<br>When her EX Special Attack hits an enemy, Yanagi's Electric DMG against the target is increased by 20% for 15s.<br><br>Additional Ability: Gessou <br>When another character in your squad is an Anomaly character or shares the same attribute: <br>After switching stances, when Yanagi hits an enemy with Basic Attack: Tsukuyomi Kagura, Electric Anomaly Buildup increases by 45% for 8s."
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
        faction: "Victoria Housekeeping",
        image: "image/берн.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Direct Flame Blend<br>Press Icon_Normal to activate: <br>Unleashes up to 5 attacks in front, dealing Physical DMG and Fire DMG.<br><br>Basic Attack: Mixed Flame Blend<br> In the Nitro- Fuel Cocktail state, hold Icon_Normal to activate:<br>Spins continuously while spraying flames around, followed by a Finishing Move, then triggers an extra instance of Afterburn that doesn't cost Heat and deals Fire DMG. Continuing to hold extends the flame-spraying duration.<br>The DMG dealt by this skill also counts as Assist Attack DMG.<br>Upon activation, it consumes 20 Heat.<br>Anti - Interrupt level is increased while using this skill.<br>After executing the Finishing Move, press Icon_SpecialReady to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.",
            "Ухилення + Атака": "Dodge: Fiery Phantom Dash<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Dangerous Fermentation<br>Press Icon_Normal during a dodge to activate:<br>Perform a forward rush attack with the flamethrower, dealing Fire DMG.<br><br>Dodge Counter: Fluttering Steps<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Launch a series of attacks on enemies in front while spraying flames, dealing Physical DMG and Fire DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Energizing Specialty Drink<br>When the active character is launched, press Icon_Switch to activate:<br>Launches a series of attacks at enemies ahead and sprays flames, dealing Physical DMG and Fire DMG.<br>Character is invulnerable while using this skill.<br>  using this skill, press Icon_SpecialReady to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.<br><br> Defensive Assist: Smoky Cauldron<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br> Assist Follow- Up: Scorching Dew<br>Press Icon_Normal after a Defensive Assist to activate:<br>Leap into the air and quickly spin forward while spraying flames in all directions, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br>After using the skill, press Icon_SpecialReady to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.",
            "Спеціальна атака": "Special Attack: Intense Heat Aging Method<br>Press Icon_Special to activate: <br>Unleash a fire blast forward, inflicting <span class='element-fire'>Fire DMG</span>;<br>Press and hold Icon_Special to charge, boosting the move's power.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Intense Heat Stirring Method<br>With enough energy, press Icon_SpecialReady to activate:<br>Continuously spray flames with a one- handed flamethrower, then release a fire blast in a straight line ahead, dealing massive <span class='element-fire'>Fire DMG</span>.Continue holding to steadily consume energy and extend the spray's duration.<br>While continuously spraying, drag the joystick to execute a sidestep dodge, adjusting your position in the corresponding direction.<br>Anti - Interrupt Level is increased while continuously spraying, and DMG taken is reduced by 60%.<br>Character is invulnerable during sidestep dodge and fire blast.<br><br>EX Special Attack: Intense Heat Stirring Method - Double Shot<br>While using EX Special Attack: Intense Heat Stirring Method, with enough Energy, press Icon_SpecialReady to activate:<br>Use both flamethrowers to continuously spray flames, followed by a fire blast in a front line, dealing massive <span class='element-fire'>Fire DMG</span>.Keep holding to continue consuming Energy and extend the spray's duration.<br>" +
                "Character is invulnerable during the moment the spray is activated and during the activation of the fire blast.<br> Anti - Interrupt Level is increased while spraying, and DMG received is reduced by 60 %.<br><br>EX Special Attack: Intense Heat Tossing Method<br>If Burnice has Emberflow, coming on - field activates this skill.<br>After squadmates trigger Afterburn 12 times, Burnice gains 1 point of Emberflow.With Emberflow, Burnice's next entry onto the field consumes 1 stack to automatically activate this skill. This entry is considered a Quick Assist. When Afterburn triggered by Basic Attack: Mixed Flame Blend hits an enemy, it counts for 2 times. While possessing Emberflow, the counter no longer increases. Consuming Emberflow clears the counter.<br>Quickly dashes forward and passes through the enemy, unleashing a fiery impact that deals <span class='element-physical'>Physical DMG</span> and <span class='element-fire'>Fire DMG</span>.<br> When the skill's heavy attack hits a target suffering <span class='element-ether'>Ether</span>, <span class='element-electric'>Electric</span>, <span class='element-fire'>Fire</span>, <span class='element-physical'>Physical</span>, <span class='element-ice'>Ice</span>, " +
                "or <span class='element-wind'>Wind</span> Anomaly, it triggers Abloom: deals an additional instance of DMG equal to <span class='element-ether'>480%</span>/<span class='element-electric'>240%</span>/<span class='element-fire'>600%</span>/<span class='element-physical'>40%</span>/<span class='element-ice'>60%</span>/<span class='element-wind'>0.24%</span> of the original Anomaly's DMG.<br>The Fire Anomaly Buildup increase from Additional Ability: Fire Kindling applies to this skill.<br>Character is invulnerable while using this skill.<br>After using this skill, press Icon_SpecialReady to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.",
            "Ultimate": "Chain Attack: Fuel-Fed Flame<br>When a Chain Attack is triggered, select the character to activate: <br>Quickly dash forward while spraying flames in all directions, then launch a fire blast in a fan- shaped area ahead, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.<br>After using the skill, press Icon_SpecialReady to immediately follow up with EX Special Attack: Intense Heat Stirring Method - Double Shot.<br><br>Ultimate: Glorious Inferno<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br> Dash forward quickly, then leap into the air and continuously spray flames over a wide area ahead, dealing massive Fire DMG.<br>When leaping into the air, a Quick Assist will be triggered.If the Quick Assist is activated, Burnice will extend the duration of her flame spray.<br>Upon activation, recover 50 Heat.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Nitro-Fuel Cocktail<br>When Burnice expends Energy, she accumulates Heat, up to a max of 100. She gains 1.4 Heat for each 1 point of Energy consumed.At 50 Heat, she enters the Nitro- Fuel Cocktail state until all Heat is expended.Upon entering the battlefield, Burnice instantly accumulates 100 Heat.<br>While in the Nitro- Fuel Cocktail state, when Burnice hits an enemy with a Basic Attack: Mixed Flame Blend, EX Special Attack: Intense Heat Stirring Method, EX Special Attack: Intense Heat Stirring Method - Double Shot, Chain Attack: Fuel - Fed Flame, or Ultimate: Glorious Inferno, she applies the Scorched effect to the target until she exits the Nitro - Fuel Cocktail state.When other squad members hit enemies under the Scorched status, it triggers the Afterburn effect, expending 8 Heat to deal Fire DMG equal to 350 % of Burnice's ATK and accumulate Fire Anomaly Buildup. This effect can trigger once every 1.5s. For every 10 Anomaly Proficiency, Afterburn DMG increases by 1%, up to a max of 30%. DMG from the Afterburn effect is considered Assist Attack DMG.<br><br>Additional Ability: Fire Kindling <br> When another character in your squad is an Anomaly character or shares the same Faction: <br>When Burnice's Basic Attack: Mixed Flame Blend, EX Special Attack: Intense Heat Stirring Method or EX Special Attack: Intense Heat Stirring Method - Double Shot hits an enemy, or when the Afterburn effect is triggered, the move's accumulated Fire Anomaly Buildup increases by 65 %.When any squad member applies the Burn effect to an enemy, the duration of that effect is extended by 3s."
        },
        mindscapes: [
            { number: 1, name: "Kindred Flames  ", desc: "Increases the limit of Heat from 100 to 140. Upon entering the battlefield, Burnice accumulates an additional 40 Heat. Increases the DMG Multiplier of the Afterburn effect by 100% of Burnice's ATK. Additionally, the accumulated Fire Anomaly Buildup from the Afterburn effect is increased by 25%." },
            { number: 2, name: "Extra at No Additional Charge  ", desc: "When triggering the Afterburn effect, Thermal Penetration is applied to the enemy, stacking up to 5 times and lasting 6s. Repeated triggers reset the duration. When any allied unit in the squad hits the enemy, the attack's PEN Ratio is increased by 4% for each stack of Thermal Penetration, up to a max of 20%." },
            { number: 3, name: "Optimistic by Nature  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Ultimate Fuel Supply  ", desc: "When an EX Special Attack or Assist Attack hits an enemy, the move's CRIT Rate increases by 30%. The max flame spray duration of EX Special Attack: Intense Heat Stirring Method - Double Shot is increased by 1s." },
            { number: 5, name: "Dance of Fire and Ice ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Burning Invitation  ", desc: "When Burnice hits an enemy with EX Special Attack: Intense Heat Stirring Method - Double Shot, it triggers an additional special Afterburn effect, dealing 60% of Burnice's ATK as Fire DMG to the target. This effect can trigger once every 0.5s and does not consume Heat. After hitting an enemy with EX Special Attack: Intense Heat Stirring Method - Double Shot, while the move is active, EX Special Attack: Intense Heat Stirring Method - Double Shot, special Afterburn effects, and Burn DMG will ignore 25% of the target's Fire RES. When EX Special Attack: Intense Heat Stirring Method - Double Shot's fire blast hits an enemy, if that enemy is Burned, trigger an additional instance of Burn DMG equal to 1,800% of the original DMG. This effect can trigger once every 20s for each target." }
        ]
    },
    {
        id: 11,
        name: "Cissia",
        rarity: "S",
        element: "Electric",
        role: "Attack",
        faction: "Victoria Housekeeping",
        image: "image/цис.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Tongue Flick<br>Press Icon_Normal to activate:<br>Launch up to four attacks forward, dealing Electric DMG.<br>When the 4th hit lands, gain 2 points of Venom.Hitting a Stunned enemy grants an additional 1 point of Venom.<br> <br>Basic Attack: Serpent's Kiss<br>With Serpentine Shadow, hold Icon_Normal to launch:<br> Cissia leaps into the air and locks onto a target, then slams down, dealing Electric DMG to enemies in the area.<br>While locking on, continue to hold Icon_Normal and drag the joystick to extend the lock- on duration and freely control the landing position.<br>For every 6 points of Venom gained, gain 1 stack of Serpentine Shadow, stacking up to 3 times.<br>Upon entering the battlefield, gain 1 stack of Serpentine Shadow.<br>Using this skill consumes 1 stack of Serpentine Shadow.<br>Upon hitting an enemy, all Venom is consumed to trigger Corrode Bone.<br>Upon activating this skill, a Quick Assist is triggered.<br>Character is invulnerable while using this skill.<br><br>Corrode Bone<br>Deal Electric DMG to nearby enemies.<br>Each trigger increases CRIT Rate by 6% for 15s, stacking up to 3 times.Repeated triggers refresh the duration.",
            "Ухилення + Атака": "Dodge: Slither<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Bite Mark<br>Press Icon_Normal during a dodge to activate:<br>Dash forward with a swift slash, dealing Electric DMG.<br><br>Dodge Counter: Bite Back<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Leap forward and perform a sweeping attack upon landing, dealing Electric DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Alarm System<br>When the active character is launched, press Icon_Switch to activate: <br>Leaps forward and performs a sweeping attack upon landing, dealing Electric DMG.<br>During this skill, you can quickly chain into Special Attack: Bared Fangs, EX Special Attack: Venomous Bite, and Basic Attack: Serpent's Kiss.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Extra Prison Rations<br>When the on- field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br> Character is invulnerable while using this skill.<br><br> Assist Follow- Up: Partners in Crime<br>Press Icon_Normal after a Defensive Assist to activate:<br> Unleash a series of attacks, dealing Electric DMG.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Bared Fangs<br>Press Icon_Special to activate: <br>Launches a long- range snake bite forward, dealing Electric DMG.<br> Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Venomous Bite<br>With enough energy, press or hold Icon_SpecialReady to activate:<br> Unleash multiple long- range snake bites forward, dealing Electric DMG.<br>Grants 5 Energy when the move is used.<br>When activating by holding, consumes additional Energy.For every 20 additional Energy consumed, unleash 1 extra strike that deals Electric DMG, up to a maximum of 60 additional Energy.<br>After activation, gain 3 Venom.For every additional 20 Energy consumed while holding, gain 1 more Venom.<br>After using this skill, it can be immediately followed up with the 4th hit of Basic Attack: Tongue Flick.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Gang Operation<br>When a Chain Attack is triggered, select the character to activate:<br> Launch multiple attacks ahead, dealing massive Electric DMG.<br>After using this skill, gain 3 Venom.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Ophidiophobia<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br> Deliver a thunderbolt attack in front, dealing massive Electric DMG.<br>After using this skill, obtain 3 Venom.<br>After using this skill, activate Ether Veil: Cold - Blooded, lasting 30s.All squad members' CRIT DMG increases by 5% for the duration.<br> Re - activating Ether Veil: Cold - Blooded a second time will first deactivate the active Ether Veil: Cold - Blooded.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Fatal Concoction<br>Upon entering the battlefield, gain 3 Venom.In Investigation Zone mode, this effect can trigger once every 180s.<br>While possessing Venom, consume 1 Venom every 5s while in combat to trigger Corrode Bone, dealing Electric DMG.<br>With Venom, all squad memebrs' Electric DMG ignores 6% of enemy DEF. If initial Energy Regen is higher than 1.4, for every additional 0.12 above that threshold, an additional 1% of the enemy's DEF is ignored, up to a maximum of 25% of enemy DEF.This effect lasts until 30s after Venom is depleted.<br>Corrode Bone deals additional Electric DMG equal to 335% of ATK.<br>When there are 1/2 Electric characters in the squad, the Daze dealt by Corrode Bone increases by 40%/60 %.<br>When gaining Venom, every 1 excess point of Venom triggers Corrode Bone once.<br><br>Additional Ability: Festering Venom<br>When another character in your squad is a Stun character or shares the same attribute:<br>While possessing Venom, increases all squad members' CRIT DMG by 40%, with Cissia gaining an additional 10%. The effect lasts until 30s after Venom is depleted."
        },
        mindscapes: [
            { number: 1, name: "Traveler and Prey  ", desc: "The Venom gained upon entering the battlefield increases to 6. The DEF ignore from the Core Passive increases to 140% of its original value, and all squad members ignore 5% of the target's Electric RES. Corrode Bone DMG ignores 10% of the target's Electric RES." },
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
        faction: "Victoria Housekeeping",
        image: "image/аря.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Sweet Melody<br>Press Icon_Normal to activate:<br> Launches up to four consecutive attacks forward, dealing Ether DMG.<br>After hitting an enemy with the fourth hit, 1 Fandom Power is generated on the field after the attack ends.<br><br>Basic Attack: Perfect Pitch<br>Hold Icon_Normal to activate:<br> Aria enters a charging state and can reach three levels of charge.Releasing Icon_Normal or reaching the maximum charge time causes Aria to unleash a powerful downward attack forward based on the current charge level, dealing massive Ether DMG.<br>If there is Fandom Power nearby while Aria is charging, she will absorb the Fandom Power, with each absorbed Fandom Power instantly increasing charge level by 1 and granting 1 stack of a buff that increases the next Basic Attack: Perfect Pitch's Ether Anomaly Buildup by 10%. This buff can stack up to 2 times and is removed after the attack ends.<br>After the 4th hit of Basic Attack: Sweet Melody, Special Attack: Full - Sugar Electronica - No Ice, an EX Special Attack, a level three charged Basic Attack: Perfect Pitch, a Quick Assist, a Chain Attack, or an Ultimate, if there are at least 2 Fandom Power nearby, hold Icon_Normal to consume 2 Fandom Power and quickly activate a level three charged Basic Attack: Perfect Pitch.After a level three charged Basic Attack: Perfect Pitch, a Chain Attack, or an Ultimate, if there are at least 2 Fandom Power nearby, a level three charged Basic Attack: Perfect Pitch can also be quickly activated by pressing Icon_Normal within a short window, consuming 2 Fandom Power.<br>Anti - Interrupt Level is increased while charging, and received DMG is reduced by 40%.Character is invulnerable while using this attack.",
            "Ухилення + Атака": "Dodge: On-Beat Precision<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br>If activated during a Basic Attack: Sweet Melody chain, this action does not reset the Basic Attack count.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Silky - Smooth Combo<br>Press Icon_Normal during a dodge to activate:<br>Launches a swift slashing attack forward, dealing Ether DMG.<br>If activated during a Basic Attack: Sweet Melody chain, this action does not reset the Basic Attack count.<br><br>Dodge Counter: Slide - Shift Variation<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Unleashes a powerful slash against the target, dealing Ether DMG.<br>After using this skill, it can be immediately followed up with the 3rd hit of Basic Attack: Sweet Melody.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Shatter Fantasy<br>When the active character is launched, press Icon_Switch to activate: <br>Delivers a powerful slash to the target, dealing Ether DMG.<br>After using this skill, it can be immediately followed up with the 3rd hit of Basic Attack: Sweet Melody.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Clutch Save<br>When the on- field character is about to be attacked, press Icon_Switch to activate:<br> Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Encore Song<br>Press Icon_Normal after a Defensive Assist to activate:<br>Unleashes a powerful series of slashes on the target, dealing massive Ether DMG.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Full-Sugar Electronica<br>Press Icon_Special to activate: <br>Delivers a forward kick, dealing Ether DMG.<br>Anti - Interrupt level is increased while using this skill.<br><br>Special Attack: Full - Sugar Electronica - No Ice<br>After the 4th hit of Basic Attack: Sweet Melody, an Assist Follow- Up, a Chain Attack, or an Ultimate, press Icon_Special to activate:<br>Delivers a quicker forward kick, dealing Ether DMG.If the attack hits an enemy, 1 Fandom Power is generated on the field after the attack ends.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Fall Into Delusion<br>With enough energy, press Icon_SpecialReady to activate:<br>Delivers a powerful forward kick followed by a sonic wave attack, dealing Ether DMG.If the attack hits an enemy, 3 Fandom Power are generated on the field after the attack ends.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Instantly Hooked<br>After launching EX Special Attack: Fall Into Delusion, and with enough Energy, press Icon_SpecialReady to activate:<br>Performs a powerful downward attack in front, dealing Ether DMG.If the attack hits an enemy, 3 Fandom Power are generated on the field after the attack ends.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Dream Collab<br>When a Chain Attack is triggered, select the character to activate:<br> Launches a series of attacks forward, dealing massive Ether DMG. 4 Fandom Power are generated on the field on skill activation.<br>Character is invulnerable while using this skill.<br><br>Ultimate: 100% Energy<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Releases all her power, entering Moment of Delusion, and fires multiple powerful shots at the target, dealing massive Ether DMG.<br>Upon entering Moment of Delusion, Aria gains 3 stacks of All- Out Cheering and activates Ether Veil: Delusion Reprise.While Ether Veil: Delusion Reprise is active, all squad members gain an additional 50 ATK for 30s.Re - activating Ether Veil: Delusion Reprise will first cancel any existing instance of Ether Veil: Delusion Reprise.<br>While Aria is charging, if she has All- Out Cheering, stacks of All - Out Cheering are consumed first to charge.Each stack of All - Out Cheering consumed increases the charge level by 2.<br>Upon entering Moment of Delusion, if Aria already has All - Out Cheering, all remaining stacks of All - Out Cheering are first converted into Fandom Power and generated on the field.Each stack of All - Out Cheering is converted into 2 Fandom Power.<br>Moment of Delusion lasts for up to 15s.During Moment of Delusion, Aria's Basic Attack: Perfect Pitch 3rd attack is upgraded to an enhanced version.<br>When exiting Moment of Delusion, if Aria has All - Out Cheering, all remaining stacks of All - Out Cheering are converted into Fandom Power and generated on the field.<br>Each stack of All - Out Cheering is converted into 2 Fandom Power.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Innate Stage Presence<br>Aria's Anomaly Proficiency increases by 90.<br>If Aria's 3rd hit of Basic Attack: Perfect Pitch lands a heavy attack on an enemy suffering an Ether, Electric, Fire, Physical, Ice, or Wind Anomaly, it will trigger Abloom, which resolves an additional instance of Attribute Anomaly DMG equal to 27.5%/14.3%/35.7%/2.5%/3.6%/1.4% per 10 points of initial Anomaly Mastery of the original Anomaly DMG. If the target is Stunned, the DMG ratio is further increased by 50%.<br><br>Additional Ability: Collaborative Stage<br>When another character in your squad is a Stun or Support character, or shares the same Faction: <br>When Ether Veil is activated, 4 Fandom Power are generated on the field.This can trigger once every 1s.<br>When any squad member applies Corruption to an enemy, its duration is extended by 3s."
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
        faction: "Victoria Housekeeping",
        image: "image/кроль.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Glacial Judgment<br>Press Icon_Normal to activate: <br>Launches up to five slashes forward, the first dealing Physical DMG, and the following four Ice DMG.<br><br>Basic Attack: Final Verdict<br>Hold Icon_Normal to activate:<br>After getting ready, Zhao starts charging up, then launches a forward slash on release, dealing massive Ice DMG.<br>While charging, Zhao accumulates up to 5s of charge time.When the Finishing Move of Basic Attack: Final Verdict, Chain Attack, or Assist Follow- Up hits, the stored charge time is consumed to deal additional DMG.For every 1 second of charge time, Zhao deals 24% of Max HP as additional DMG.<br>When Zhao is in any Ether Veil, if she gets switched out while charging, the charge can continue.<br>If Frostbite Points are maxed out when the skill activates, all Frostbite Points are consumed to trigger Ether Veil: Wellspring and a Quick Assist.If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>During skill activation, Anti- Interrupt level increases, and DMG taken is reduced by 40 %.<br>While not the currently controlled character, the character is invulnerable while using this skill.",
            "Ухилення + Атака": "Dodge: Bunny Hop<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br> Character is invulnerable while using this skill.<br><br>Dash Attack: Bouncing Dash<br>Press Icon_Normal during a dodge to activate:<br>Slashes forward, dealing Physical DMG and Ice DMG.<br><br>Dodge Counter: Swift Blink<br>Press Icon_Normal during a Perfect Dodge to activate:<br> Performs a falling slash ahead, dealing Ice DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Entry Skill: Burst of Frost<br>When Zhao has maximum Frostbite Points, and is in combat, press Icon_Switch to activate: <br>Launches consecutive attacks forward, followed by a slash, dealing massive Ice DMG.<br>Upon activating this skill, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill, a Quick Assist is triggered.If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Activating this skill is considered as activating a Quick Assist.<br>Character is invulnerable while using this skill.<br><br>Quick Assist: Patch the Gaps<br>When the active character is launched, press Icon_Switch to activate:<br>Launches a falling slash in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Frostveil Suppression<br>When the on- field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Frostlight Reflection<br>Press Icon_Normal after a Defensive Assist to activate:<br>Launch multiple slashes in front, dealing massive Ice DMG.<br></br>Upon activating this skill, if Frostbite Points are maxed out, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill while in any Ether Veil, a Quick Assist is triggered.If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Shatterfrost Surge<br>Press Icon_Special to activate: <br>Launches a forward slash, dealing Ice DMG.<br>Upon activating this skill, consumes 5% of current HP to grant all squad members HP regeneration equal to 1.72% of Zhao's Max HP per second for 5s. The HP-consuming effects of Special Attack: Shatterfrost Surge and EX Special Attack: Frostflow Tundra can trigger at most once every 30s.<br><br>EX Special Attack: Frostflow Tundra<br> With enough energy, press Icon_SpecialReady to activate:<br>Launches multiple forward slashes, dealing massive Ice DMG.<br>Upon activating this skill, consumes 5% of current HP to grant all squad members HP regeneration equal to 1.72% of Zhao's Max HP per second for 5s. The HP-consuming effects of Special Attack: Shatterfrost Surge and EX Special Attack: Frostflow Tundra can trigger at most once every 30s.<br>Upon activating this skill, gain 20 Frostbite Points.If Frostbite Points are maxed out, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill while in any Ether Veil, a Quick Assist is triggered.If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Temporary Alliance<br>When a Chain Attack is triggered, select the character to activate: <br>Launches multiple slashes in front, dealing massive Ice DMG.<br>After using this skill, gains 5 Frostbite Points.If Frostbite Points are maxed out, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill while in any Ether Veil, a Quick Assist is triggered.If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Bunny Barrage<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Launches consecutive attacks in front, followed by a falling slash, dealing massive Ice DMG.<br>After using this skill, gains 20 Frostbite Points.If Frostbite Points are maxed out, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>Upon activating this skill while in any Ether Veil, a Quick Assist is triggered.If a squadmate is then switched in via Quick Assist, Zhao automatically follows up with Basic Attack: Final Verdict and begins charging.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Ideal Colleague<br>Zhao gains bonus CRIT Rate based on her initial Max HP, gaining 1.4% CRIT Rate for every 1,000 initial Max HP.< br >Upon entering the battlefield, Zhao gains 100 Frostbite Points.This effect can trigger once every 180s in Investigation Zone mode.The maximum amount of Frostbite Points is 100.<br>When the currently active character's attacks hit an enemy, Zhao gains 6 Frostbite Points. This can be triggered once every 3s.<br>When Frostbite Points are maxed out, switching Zhao to the field while in combat will activate her Entry Skill.<br>When Zhao activates her Entry Skill, all Frostbite Points are consumed to activate Ether Veil: Wellspring.<br>While Ether Veil: Wellspring is active, all squad members gain 5% Max HP for 40s.Re - activating Ether Veil: Wellspring ends the existing instance before applying a new Ether Veil: Wellspring.<br>When Zhao activates Ether Veil: Wellspring, all squad members' ATK increase by 1,000 for 50s. Repeated triggers reset the duration.<br><br>Additional Ability: Crystallization <br>When another character in your squad is an Attack, Anomaly, or Support character: <br>When Zhao is within any Ether Veil, the whole squad's DMG increases by 10%. If Zhao's initial Max HP exceeds 15,000, every additional 400 initial Max HP increases this DMG bonus by an additional 1%, up to a total maximum increase of 40%.This bonus reaches its maximum when Zhao's initial Max HP reaches 27,000."
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
        faction: "Victoria Housekeeping",
        image: "image/дінька.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Happy to Be of Service<br>Press Icon_Normal to activate: <br>Unleashes up to four attacks, dealing Physical DMG.<br><br>Basic Attack: Rock, Paper, Scissors<br>After EX Special Attack: Rock or EX Special Attack: Scissors, press Icon_Normal to activate:<br>Performs up to two attacks, dealing Physical DMG.<br> During skill activation, Anti- Interrupt level increases, and DMG taken is reduced by 40%.",
            "Ухилення + Атака": "Dodge: Line Busy<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Sudden Call<br>Press Icon_Normal during a dodge to activate:<br>Launches a dashing attack at enemies in front, dealing Physical DMG.<br><br>Dodge Counter: Number Unavailable<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Launches consecutive attacks against enemies in front, dealing Physical DMG.<br> After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br> Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Forward Call<br>When the active character is launched, press Icon_Switch to activate: <br>Launches consecutive attacks against enemies in front, dealing Physical DMG.<br>After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Decline Call<br>When the on- field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Back - to - Back Calls<br>Press Icon_Normal after a Defensive Assist to activate:<br>Performs a rapid dash followed by a slash attack, dealing Physical DMG.<br>After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "EX Special Attack: Get Lost!<br>With Customer Complaint, hold Icon_Normal to activate: <br>Delivers a forward martial salute attack.On activation, it consumes 1 Customer Complaint and deals Physical DMG.<br>After activation, the previous character's Quick Assist is triggered.<br>Character is invulnerable while using this skill.<br><br>Special Attack: Welcome Gesture<br>Press Icon_Special to activate:<br>Throws dual rings to slash enemies, dealing Physical DMG.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Rock<br>With enough Energy, press Icon_SpecialReady to activate:<br> Launches a fist attack, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Scissors<br>With enough Energy, press Icon_SpecialReady to activate:<br> a scissors attack, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Paper!<br>With enough Energy, press Icon_SpecialReady to activate:<br>Launches a paper attack, dealing Physical DMG.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Welcome Mat<br>When a Chain Attack is triggered, select the character to activate: <br>Launches consecutive kicks against enemies in front, dealing massive Physical DMG.<br>After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Service Stopped for Number Dialed<br> When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Rushes forward and performs a finger flick attack, dealing massive Physical DMG.<br>After using this skill, can immediately follow up with the 4th hit of Basic Attack: Happy to Be of Service.<br>Character is invulnerable while using this skill.",
            "Core Passive": "Core Passive: Five-Star Service Hotline<br>Upon entering the battlefield, Dialyn starts with 60 Positive Reviews.If her initial CRIT Rate surpasses 50%, her Impact increases by 2 for each additional 1%, up to a maximum increase of 100.<br>After using EX Special Attack: Rock, the next EX Special Attack becomes EX Special Attack: Scissors for 8s.<br>After using EX Special Attack: Scissors, the next EX Special Attack becomes EX Special Attack: Paper! for 8s.<br>When EX Special Attack: Paper! hits an enemy, it applies the Malicious Complaint effect.While under Malicious Complaint, if the enemy becomes Stunned, the Stun duration is extended by 2s, and Stun DMG Multiplier increases by 30%.Before recovering from Stun, Malicious Complaint can trigger on the same target only once.The Stun duration bonus does not stack with similar effects.When an enemy with Malicious Complaint recovers from being Stunned, the effect ends.<br>While in combat, Dialyn gains 0.6 Positive Reviews per second.When a heavy attack of EX Special Attack: Rock, EX Special Attack: Scissors, or EX Special Attack: Paper! hits enemies, she gains 7.5 Positive Reviews.Each use of a skill can grant this bonus only once, up to a maximum of 120.<br>With at least 90 Positive Reviews, when Dialyn triggers the Chain Attack window using Chain Attack: Welcome Mat, EX Special Attack: Get Lost!, or Quick Assist: Forward Call, the next character to switch in will have their Chain Attack upgraded to an Ultimate." +
                "When an ally launches an Ultimate this way, Dialyn consumes 60 Positive Reviews.<br>With at least 90 Positive Reviews, when Dialyn hits an enemy with EX Special Attack: Get Lost! and doesn't trigger a Chain Attack window, she consumes 90 Positive Reviews to forcibly trigger a Chain Attack window. The next character to switch in will have their Chain Attack upgraded to an Ultimate.<br>Each time Positive Reviews reaches 90 or an Ultimate is activated, Dialyn obtains 1 Customer Complaint.A maximum of 1 Customer Complaint can be held at a time.<br><br>Additional Ability: External Line<br>When another character in your squad is an Attack or Rupture character: <br>Dialyn's EX Special Attack CRIT DMG is increased by 50%.<br>When an EX Special Attack or Ultimate is activated, all squad members gain the Overwhelmingly Positive effect.While Overwhelmingly Positive is active, DMG dealt is increased by 40% for 15s.When Dialyn uses an EX Special Attack or Ultimate while Overwhelmingly Positive is active, if the remaining duration of Overwhelmingly Positive is less than 35s, its duration is extended by 10s.<br>When a heavy attack from EX Special Attack: Rock, EX Special Attack: Scissors, or EX Special Attack: Paper! hits, additional DMG is dealt based on the previous squad member's Specialty:<br>If the squad member is an Attack Agent, EX Special Attack: Rock, EX Special Attack: Scissors, and EX Special Attack: Paper! deal additional DMG equal to 320% of that Attack Agent's ATK.<br>If the squad member is a Rupture Agent, EX Special Attack: Rock, EX Special Attack: Scissors, and EX Special Attack: Paper! deal additional DMG equal to 400% of that Rupture Agent's Sheer Force."
        },
        mindscapes: [
            { number: 1, name: "Boundless Hospitality  ", desc: "The amount of Positive Reviews accumulated each second and gained when EX Special Attack: Rock, EX Special Attack: Scissors, or EX Special Attack: Paper! hits an enemy increase by 16%. While the Overwhelmingly Positive effect is active, characters ignore 15% of enemy All-Attribute RES." },
            { number: 2, name: "24/7 Hotline  ", desc: "Enemies affected by Malicious Complaint gain an additional 20% Stun DMG Multiplier when Stunned, and all units deal 15% increased DMG to targets affected by Malicious Complaint." },
            { number: 3, name: "Call From the Hollow  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "The Past Never Fades  ", desc: "Upon entering combat, Dialyn recovers 20 Energy. This effect can trigger once every 180s in Investigation Zone Mode. While the Overwhelmingly Positive effect is active, Dialyn's ATK increases by 500." },
            { number: 5, name: "Lies ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Truth  ", desc: "When an ally enters the field with an Ultimate through the Core Passive's effect, that ally gains the Aftertone effect. With this effect, landing an attack causes Dialyn to deal an additional instance of Physical DMG equal to 480% of Dialyn's ATK. This DMG is treated as EX Special Attack DMG, and can trigger once every second, up to 12 times. Gaining Aftertone again refreshes its trigger count. Only one ally can have Aftertone at a time." }
        ]
    },
    {
        id: 15,
        name: "Nangong",
        rarity: "S",
        element: "Ether",
        role: "Stun",
        faction: "Victoria Housekeeping",
        image: "image/нань.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Shooting Star Step<br>Press Icon_Normal to activate:<br>Perform up to three attacks forward, dealing Ether DMG.<br><br>Basic Attack: Adorable Explosive Impact<br>Hold Icon_Normal to launch a charged attack, dealing Ether DMG. Release the button at the right moment to trigger precise charging, increasing the Daze dealt by the skill by 20%.<br>Nangong Yu can perform up to three hits. The second and third hits each must consume 50 Downbeats.<br>After using a Chain Attack, Ultimate, or EX Special Attack, if enough Downbeats are available, hold Icon_Normal to skip the first hit and directly perform the second and third hits, which always trigger precise charging.<br>When Nangong Yu is the active character, Chain Attacks, Ultimates, and EX Special Attacks do not interrupt the combo count of Basic Attack: Adorable Explosive Impact.<br>While charging the first hit, Anti-Interrupt Level increases and DMG taken decreases by 60%.<br>While charging the second and third hits, the character is Invulnerable.<br>During the dash phase of the first hit, enemy attacks can be Blocked. On a successful Block, the attack is treated as a precise charging attack.<br>Character is invulnerable during all attacks.",

            "Ухилення + Атака": "Dodge: Natural Dancer<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Spinning Meteor<br>Press Icon_Normal during a dodge to activate:<br>Deliver a quick attack forward, dealing Ether DMG.<br><br>Dodge Counter: Asteroid Waltz<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Launch a series of attacks on the target, dealing Ether DMG.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Emergency Save<br>When the active character is launched, press Icon_Switch to activate:<br>Launches a series of attacks on the target, dealing Ether DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Perfected Choreography<br>When the on-field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Improvised Performance<br>Press Icon_Normal after a Defensive Assist to activate:<br>Launches a series of attacks on the target, dealing massive Ether DMG.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: The Weight of Love<br>Press Icon_Special to activate:<br>Delivers a morning star attack, dealing Ether DMG.<br><br>EX Special Attack: The Unbearable Weight of Love<br>With enough Energy, press Icon_SpecialReady to activate:<br>Delivers a morning star attack, dealing Ether DMG.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Comet Gravity<br>When a Chain Attack is triggered, select the character to activate:<br>Launch a series of attacks forward, dealing massive Ether DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Meteor Shower<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Launch multiple attacks forward, dealing massive Ether DMG.<br>Upon activating this skill, Nangong Yu activates Ether Veil: Delusion Reprise. While Ether Veil: Delusion Reprise is active, all squad members gain an additional 50 ATK for 30s. If Nangong Yu activates Ether Veil: Delusion Reprise again, the current Ether Veil: Delusion Reprise will first deactivate.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Prodigious Idol<br>Nangong Yu's Anomaly Proficiency increases by 120.<br>When Nangong Yu's initial Anomaly Mastery exceeds 110, each point of initial Anomaly Mastery above that increases her Impact by 1.<br>When an enemy is Stunned, each time any character triggers Abloom DMG, Disorder DMG, or inflicts an Attribute Anomaly on the enemy, the enemy gains 1 stack of Vibrato.<br>A single enemy can have up to 4 stacks of Vibrato.<br>If Vibrato reaches the maximum stacks and the enemy is afflicted with an Ether, Electric, Fire, Physical, Ice, or Wind Anomaly, or if the enemy has Vibrato and recovers from being Stunned, all Vibrato stacks will be cleared.<br>When Vibrato is cleared, if the enemy is suffering an aforementioned Attribute Anomaly, Nangong Yu triggers an instance of Abloom DMG on the target, dealing an additional instance of Attribute Anomaly DMG equal to 720%/360%/900%/63%/90%/36% of the original Attribute Anomaly DMG. Each stack of Vibrato on the enemy increases this Abloom DMG ratio by an additional 25%. During the same Stun period, once Vibrato has been cleared, the enemy cannot gain Vibrato again.<br>When Nangong Yu's Basic Attack: Adorable Explosive Impact or EX Special Attack: The Unbearable Weight of Love hits an enemy, her Anomaly Buildup Rate increases by 35%, and her Daze dealt increases by 20%, and the whole squad's DMG dealt increases by 25% for 30s. Repeated triggers reset the duration.<br>While in combat, Nangong Yu restores 3.8 Downbeats/s. When any squad member inflicts an Attribute Anomaly on an enemy, Nangong Yu restores an additional 12 Downbeats. This effect can trigger once every 6s." +
                "<br>Nangong Yu can have up to 100 Downbeats, and starts with 30 Downbeats upon entering the battlefield.<br><br>Additional Ability: Angel Captain<br>When another character in your squad is an Anomaly character or shares the same Faction:<br>Any squad member's attack against a Stunned enemy has 30% increased Anomaly Buildup. Chain Attacks against a Stunned enemy have an additional 30% increased Anomaly Buildup.<br>When any squad member Stuns an enemy, Nangong Yu gains 2 stacks of Dance Prowess, up to a maximum of 2 stacks, lasting 15s, repeated triggers reset the duration. With Dance Prowess, when a heavy attack from Nangong Yu's EX Special Attack: The Unbearable Weight of Love, Basic Attack: Adorable Explosive Impact, or Quick Assist: Emergency Save hits an enemy that is both Stunned and affected by an Attribute Anomaly, 1 stack of Dance Prowess is consumed to trigger the special Disorder effect Polarity Disorder against all enemies who meet the conditions. This deals DMG equal to 25% of the original Disorder DMG, and triggers the previous squad member's Quick Assist. Polarity Disorder does not clear the target's Attribute Anomaly. If the skill fails to trigger Polarity Disorder, Dance Prowess will not be consumed. When Nangong Yu has Dance Prowess, the next time she switches to the field, she will immediately perform the first charged hit of Basic Attack: Adorable Explosive Impact, which will always trigger precise charging.<br>When any squad member Stuns an enemy, Nangong Yu's next EX Special Attack will not consume Energy. This effect lasts 15s and can trigger once every 15s.<br>When Nangong Yu and Aria are in the same squad, if Aria's Basic Attack: Perfect Pitch heavy attack hits an enemy that is both Stunned and affected by an Attribute Anomaly, and Nangong Yu fully participates in the attack, 1 stack of Dance Prowess will also be consumed to trigger Polarity Disorder on all enemies who meet the conditions.<br>When the third hit of Nangong Yu's Basic Attack: Adorable Explosive Impact or Ultimate: Meteor Shower hits an enemy, the enemy suffers Misstep. Under this effect, Stun DMG Multiplier increases by 30% and when an enemy becomes Stunned, their Stun duration increases by 3s. Before recovering from Stun, Misstep can only trigger once on the same target. The increased Stun duration cannot stack with similar effects. When an enemy with Misstep recovers from Stun, the Misstep effect ends."
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
        faction: "Victoria Housekeeping",
        image: "image/сана.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Mischief Meteor Hammer<br>Press Icon_Normal to activate:<br>Unleashes up to four attacks ahead, dealing Physical DMG.<br><br>Basic Attack: Naughty Cat Spotted<br>During combat, when Sunna is off-field and there are no enemies with Cat's Gaze, Bubblegum consumes 1 Claw Sharpener to automatically launch an attack, dealing Physical DMG.<br>When any squad member activates Ether Veil, Sunna gains 2 Claw Sharpeners.<br>When any squad member applies an Attribute Anomaly to an enemy, Sunna gains 1 Claw Sharpener. This effect can trigger at most once every 10s.<br>Bubblegum inherits Sunna's initial ATK. Sunna can hold up to 6 Claw Sharpeners.",

            "Ухилення + Атака": "Dodge: Can't Hit Me<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Skyward Hammer<br>Press Icon_Normal during a dodge to activate:<br>Launches enemies in front into the air, dealing Physical DMG.<br><br>Dodge Counter: Delusion Strikeout<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Strikes enemies in front with a series of hammer blows, dealing Physical DMG.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Sonic Beatdown<br>When the active character is launched, press Icon_Switch to activate:<br>Unleashes a series of hammer attacks against enemies in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Stage Fright<br>When the on-field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Jump Training<br>Press Icon_Normal after a Defensive Assist to activate:<br>Continuously jumps forward on the inflatable hammer, dealing massive Physical DMG to enemies in front.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Star Shooter<br>Press Icon_Special to activate:<br>Shoots Bubblegum to attack enemies in front using an air gun, dealing Physical DMG. After activation, Bubblegum enters combat.<br><br>EX Special Attack: Bubblegum Barrage<br>With enough energy, press Icon_SpecialReady to activate:<br>Hurls Bubblegum at the target, dealing Physical DMG. After activation, Bubblegum enters combat.<br>Upon activating this skill, all Agents in the squad gain Angelic Chord-ination for 40s.<br>Landing a heavy attack with this skill triggers a Quick Assist.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Special Photography Technique<br>While in the Angelic Chord-ination state, press Icon_SpecialReady to activate, or during EX Special Attack: Bubblegum Barrage, keep holding Icon_SpecialReady to quickly activate:<br>Attacks the target enemy in coordination with Bubblegum, dealing Physical DMG. After activation, Bubblegum enters combat.<br>Before the heavy attack is executed, activates Ether Veil: Delusion Reprise. While Ether Veil: Delusion Reprise is active, all squad members gain an additional 50 ATK for 40s. Re-activating Ether Veil: Delusion Reprise will cancel the existing instance of Ether Veil: Delusion Reprise.<br>Landing a heavy attack with this skill triggers a Quick Assist.<br>Character is invulnerable while using this skill. EX Special Attack: Special Photography Technique can be used once each time Sunna enters the Angelic Chord-ination state.",

            "Chain Attack": "Chain Attack: Don't Mess With the Cat<br>When a Chain Attack is triggered, select the character to activate:<br>Charges forward on Bubblegum, dealing massive Physical DMG.<br>Landing a heavy attack with this skill triggers a Quick Assist.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Smash It All!<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>After a series of hammer attacks, launches Bubblegum to cause an explosion, dealing massive Physical DMG to enemies in an area.<br>On activating the heavy attack, gains 6 Claw Sharpeners.<br>Upon landing the downward attack from above on an enemy, triggers a Quick Assist and restores 2950 HP to all squad members.<br>Character is invulnerable while using this skill.",

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
        faction: "Victoria Housekeeping",
        image: "image/Е.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Swiftedge<br>Press Icon_Normal to activate:<br>Launches up to four forward slashes, dealing Physical DMG.<br>Can be chained into Dash Attack: Phantasm Dash after the 4th hit.<br><br>Basic Attack: Cloudstream Sword Will<br>Hold Icon_Normal to activate:<br>Launches a flurry of blade shockwaves, dealing Physical DMG. Hold to extend the attack.<br>Anti-Interrupt Level is increased during this skill.<br><br>Basic Attack: Enlightened Mind - Splitting Currents<br>While in the Enlightened Mind state and on the ground, press Icon_Normal to activate:<br>Performs up to three forward slashes, dealing Physical DMG.<br>If struck by an enemy attack during the 3rd hit, triggers a block, negating that instance of DMG.<br>If she possesses Qingming Sword Force, the 3rd hit is replaced with Basic Attack: Enlightened Mind - Skyward Ascent.<br><br>Basic Attack: Enlightened Mind - Skyward Ascent<br>While in the Enlightened Mind state and with Qingming Sword Force, after the 2nd hit of Basic Attack: Enlightened Mind - Splitting Currents, press Icon_Normal to activate:<br>Launches a swift rising attack, dealing Physical DMG and entering an airborne state.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Enlightened Mind - Sunderlight Maximum<br>After activating Basic Attack: Enlightened Mind - Sunderlight Annihilation, and with Qingming Sword Force, press Icon_Normal to activate:<br>Launches a wide sweeping slash forward, dealing massive Physical DMG. On hit, 1 point of Qingming Sword Force is consumed.<br>If struck by an enemy during the skill, triggers a block, negating that instance of DMG and increasing the skill's Interrupt Level." +
                "<br>After using this skill and with Qingming Sword Force, press Icon_SpecialReady to consume 1 point of Qingming Sword Force and launch a hit of EX Special Attack: Enlightened Mind - Soaring Light. This skill is automatically followed up with Basic Attack: Enlightened Mind - Skyward Ascent, and Ye Shunguang enters an airborne state.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Enlightened Mind - Sunderlight<br>In the Enlightened Mind state, and while airborne, press Icon_Normal to activate:<br>Launches up to two downward slashes in front, dealing Physical DMG.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>Press Icon_SpecialReady or Icon_Evade to follow up with Basic Attack: Enlightened Mind - Sunderlight Annihilation.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Enlightened Mind - Sunderlight Annihilation<br>After the 2nd hit of Basic Attack: Enlightened Mind - Sunderlight, press Icon_Normal to activate:<br>Performs a falling attack in front, entering a grounded state, and dealing Physical DMG.<br>When launching this skill with 2 or more points of Qingming Sword Force, Ye Shunguang will perform a downward falling strike across a large area in front instead, dealing massive Physical DMG. On hit, 2 points of Qingming Sword Force are consumed, granting the Culmination effect. After using this skill, if Ye Shunguang possesses Qingming Sword Force, press Icon_SpecialReady to consume 1 point of Qingming Sword Force and launch a hit of EX Special Attack: Enlightened Mind - Soaring Light, which can be quickly followed up with Basic Attack: Enlightened Mind - Sunderlight Maximum.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>During this skill, if attacked by enemies, triggers a block, negating that instance of DMG.<br>Character is invulnerable while using this skill.<br><br>Culmination<br>During EX Special Attack: Enlightened Mind - Soaring Light, each time Qingming Sword Force is consumed while Culmination is active, the Qingming Sword Force cost is replaced by consuming Culmination instead. This effect does not stack, and lasts until the current Enlightened Mind ends.",

            "Ухилення + Атака": "Dodge: Leave No Trace<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br>During the Enlightened Mind state, and if a Perfect Dodge is triggered, press Icon_Normal to activate Basic Attack: Enlightened Mind - Skyward Ascent.<br><br>Dodge: Wandering Cloud<br>While tilting the joystick, hold Icon_Evade to activate:<br>Enters a high-speed movement state. Steer with the joystick, and release the joystick to stop.<br><br>Dash Attack: Phantasm Dash<br>Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing Physical DMG.<br><br>Dodge Counter: Swallow Strike<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Leaps into the air and thrusts forward, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Entry Skill: Illuminating Darkness<br>With 6 Qingming Sword Force and while not in the Enlightened Mind state, hold Icon_Normal to activate, or press Icon_Switch while in combat and switch on-field from off-field to activate:<br>Enters the Enlightened Mind state and activates Ether Veil: Verdict.<br>Deals Physical DMG to enemies in a large area in front.<br>Activating this skill is considered as activating a Quick Assist.<br>Enters the airborne state after using this skill.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Support Guard<br>When the active character is launched, press Icon_Switch to activate:<br>Leaps into the air and thrusts forward, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: When I Return<br>When the on-field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Cease Hostility<br>Press Icon_Normal after a Defensive Assist to activate:<br>Deals massive Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Quick Assist: Enlightened Mind - Tactical Support<br>While in the Enlightened Mind state, when the active character is launched, press Icon_Switch to activate:<br>Launches a forward slash, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Enlightened Mind - Unification<br>While in the Enlightened Mind state and after a Defensive Assist, press Icon_Normal to activate:<br>Deals massive Physical DMG.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Guiding Tides<br>Press Icon_Special to activate:<br>If a dodge is available, 1 dodge chance is consumed, and the action is counted as activating a Dodge.<br>If no dodge is available or a Perfect Dodge is not triggered, launches a quick sword energy attack that deals Physical DMG.<br>If a Perfect Dodge is triggered at this time, launches a flying sword attack, dealing Physical DMG, and immediately follow up with the 2nd hit of Basic Attack: Swiftedge.<br>Character is briefly invulnerable during the skill.<br><br>EX Special Attack: Gale Suppression<br>With enough Energy, press Icon_SpecialReady to activate:<br>Launches a rushing slash and a flying sword attack at the enemy, dealing massive Physical DMG.<br>Enemy attacks can be dodged during this skill.<br>After this skill is used, gain 1 point of Qingming Sword Force.<br>Character is invulnerable while using this skill.<br><br>Special Attack: Enlightened Mind - Clean Exit<br>While in the Enlightened Mind state and grounded, press Icon_SpecialReady to activate:<br>Performs a swift backstep slash, dealing Physical DMG.<br>If a dodge is available, 1 dodge chance is consumed, and the action is counted as activating a Dodge.<br>If a Perfect Dodge is triggered at this time, press Icon_Normal to quickly activate Enlightened Mind - Sunderlight Maximum and enter Vital View.<br>After this Enlightened Mind - Sunderlight Maximum activates, it can be immediately followed up with Basic Attack: Enlightened Mind - Skyward Ascent." +
                "<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Enlightened Mind - Soaring Light<br>In the Enlightened Mind state and with Qingming Sword Force, hold Icon_SpecialReady to activate:<br>Performs quick consecutive slashes, dealing massive Physical DMG while rapidly consuming Qingming Sword Force until none remains.<br>The skill ends early if Qingming Sword Force is insufficient or if Icon_SpecialReady is released.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Enlightened Mind - Return to Dust<br>In the Enlightened Mind state, press Icon_UltimateReady or hold Icon_SpecialReady when all Qingming Sword Force is expended to activate:<br>Deals massive Physical DMG to enemies in a large area.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>After using this skill, Ether Veil: Verdict is removed and the Enlightened Mind state ends.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Smite the Wicked<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful slash at enemies ahead in a large area, dealing massive Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Chasing Storms<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Summons a sword formation and enter the Enlightened Mind state, activating an Ether Veil: Verdict while also gaining 6 Qingming Sword Force. This skill deals massive Physical DMG.<br>Upon activating this skill, if Decibels are consumed, press Icon_UltimateReady while in this Enlightened Mind state to launch an Ultimate: Cleaving Heavens that doesn't consume Decibels.<br>Enter the airborne state after using this skill.<br>Character is invulnerable while using this skill.<br><br>Chain Attack: Enlightened Mind - Lure Thunder<br>While in the Enlightened Mind state, and when a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful slash at enemies ahead in a large area, dealing massive Physical DMG.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>Enter the airborne state after using this skill.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Cleaving Heavens<br>After consuming Decibels to launch Ultimate: Chasing Storms and while in the Enlightened Mind state, press Icon_UltimateReady or hold Icon_SpecialReady when all Qingming Sword Force is expended to activate:<br>Summons a massive blade, dealing massive Physical DMG to enemies.<br>Ye Shunguang will not exit the Enlightened Mind state during this skill.<br>After using this skill, the Enlightened Mind state ends, and Ether Veil: Verdict is removed.<br>This skill doesn't consume Decibels.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Burning Clarity<br>When not in the Enlightened Mind state and with fewer than 6 points of Qingming Sword Force, certain attacks slowly build Qingming Sword Force. Whenever Qingming Sword Force is gained by any means, each 1 point of Qingming Sword Force that exceeds the limit is converted into 1 stack of Bearer, stacking up to 3 times. Upon leaving the Enlightened Mind state, all Bearer stacks are consumed to grant the same number of Qingming Sword Force stacks.<br>Upon entering the battlefield, gain Unity, increasing CRIT Rate by 30% and DMG by 25%.<br>When Ultimate: Chasing Storms or Entry Skill: Illuminating Darkness is unleashed, Ye Shunguang enters the Enlightened Mind state and activates Ether Veil: Verdict. Ether Veil: Verdict has the same duration as Enlightened Mind. The duration lasts 16s, and the duration timer pauses while she is off-field. During the Enlightened Mind state, Ye Shunguang's skills are enhanced, all Physical DMG dealt by her skills becomes Honed Edge DMG.<br>While Ether Veil: Verdict is active, when an enemy enters Ether Veil: Verdict, they gain a Veil Vulnerability effect based on their current Stun DMG Multiplier. During this, when Ye Shunguang deals DMG to enemies with her skills, enemy Stun DMG Multiplier is ignored and replaced with the Veil Vulnerability bonus. Veil Vulnerability caps at 110%. The effect is removed when Ether Veil: Verdict ends.<br><br>Additional Ability: Shadowtrace Flight<br>When another character in your squad is a Support or Defense character:<br>When a squadmate activates any Ether Veil, gain 3 points of Qingming Sword Force. If already in the Enlightened Mind state, this is instead converted into 3 stacks of Bearer."
        },
        mindscapes: [
            { number: 1, name: "Dreambound Self  ", desc: "Upon entering the battlefield, gains 6 Qingming Sword Force. This effect can trigger once every 180s in Investigation Zone mode.The Unity effect from Core Passive: Burning Clarity increases DMG dealt by an additional 10%, and they ignore 20% of the target's DEF." },
            { number: 2, name: "Light & Shadow  ", desc: "The max stack count of Bearer increases to 6, and Culmination can stack up to 9 times. While in the Enlightened Mind state, each point of Qingming Sword Force consumed grants 1 stack of Culmination. EX Special Attack: Enlightened Mind - Soaring Light and Ultimate: Cleaving Heavens's DMG ignore 40% of the target's DEF." },
            { number: 3, name: "Swordswoman  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Together into the Dust  ", desc: "Upon entering the battlefield, gains 1,000 Decibels. In Investigation Zone mode, this effect can trigger once every 180s. The Vulnerability bonus provided by Ether Veil: Verdict is increased to a maximum of 200%." },
            { number: 5, name: "Guiding Glimmer ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Lantern Wish  ", desc: "Upon entering the battlefield, gains 2 stacks of Lantern Wish. When entering the Enlightened Mind state, gains 1 stack of Lantern Wish, stacking up to 4 times. With 3 stacks of Lantern Wish, EX Special Attack: Enlightened Mind - Return to Dust is replaced with Ultimate: Cleaving Heavens. When this Ultimate: Cleaving Heavens is activated, it consumes 3 stacks of Lantern Wish. The last hit of Enlightened Mind - Return to Dust and Ultimate: Cleaving Heavens deal 1,500% of ATK as additional Physical DMG." }
        ]
    },
    {
        id: 18,
        name: "Banyue",
        rarity: "S",
        element: "Fire",
        role: "Rupture",
        faction: "Victoria Housekeeping",
        image: "image/бан.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Towering Peaks<br>Press Icon_Normal to activate:<br>Launches up to four attacks in front, dealing Fire DMG.<br>Interrupt Level is increased during this skill.<br><br>Basic Attack: Majestic Summit<br>Press Icon_Special to activate:<br>Launches up to four attacks in front, dealing Fire DMG.<br>Anti-Interrupt Level is increased during this skill.<br><br>Basic Attack: Immolate<br>While not in the Visage of Wrath state and with at least 120 Wrathful Fires, hold Icon_Normal to activate:<br>Deals Fire DMG to nearby enemies, then enters the Visage of Wrath state.<br><br>Basic Attack: Inflame<br>While not in combat and with more than 50% HP and less than 120 Wrathful Fires, hold Icon_Normal to activate:<br>Banyue consumes HP to recover Wrathful Fires. Upon reaching 120 Wrathful Fires, Banyue immediately enters the Visage of Wrath state.<br>Upon entering the battlefield, gain one chance to use this skill. In Investigation Zone mode, this effect can trigger once per 180s.<br>HP consumption will at most reduce Banyue's HP to 50% of Max HP.<br><br>Basic Attack: Toppling Mountain<br>When Banyue is in the Visage of Wrath state, hold Icon_Normal to consume 120 Wrathful Fires and activate:<br>Banyue hurls a massive mountain at the enemy, dealing massive Fire DMG.<br>After using this move, Banyue exits the Visage of Wrath state.<br>Character is invulnerable while using this skill.<br><br>Basic Attack: Crushing Peaks<br>While Banyue is in the Visage of Wrath state and after performing two different EX Special Attacks through Basic Attack branches or quick input commands, hold Icon_Normal to activate:<br>Banyue launches his beads forward to imprison enemies, dealing massive Fire DMG.<br>Banyue automatically follows up with Basic Attack: Toppling Mountain.<br>Character is invulnerable while using this skill.",

            "Ухилення + Атака": "Dodge: Immovable Mountain<br>While attacking, press Icon_Evade without moving the joystick to activate:<br>Banyue enters a defensive stance. If attacked during this time, he parries the enemy's attack and accumulates Daze.<br>If attacked at the exact moment the skill is activated, a Perfect Block occurs.<br>Character is invulnerable during a successful parry.<br><br>Dodge: Overcome Peaks<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dodge: Battle Cry<br>Rotate the joystick in a half-circle and press Icon_Evade to activate:<br>Dodges backward and taunts enemies.<br>After any EX Special Attack, follow up with Dodge: Battle Cry and quickly execute the required inputs during Dodge: Battle Cry to then follow up with the corresponding EX Special Attack.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Scattering Sands<br>During a dodge, press Icon_Normal, or during Dodge: Battle Cry, hold Icon_Normal to activate:<br>Launches beads forward, dealing Fire DMG.<br>After using this skill, can be followed up with the 2nd hit of Basic Attack: Towering Peaks or the 2nd hit of Basic Attack: Majestic Summit.<br><br>Dodge Counter: Stoneburst<br>After a Perfect Dodge is triggered through Dodge: Overcome Peaks, press Icon_Normal, or after a Perfect Dodge is triggered though Dodge: Battle Cry, hold Icon_Normal to activate:<br>Launches a forward attack that deals Fire DMG.<br>After using this skill, can be chained into the 3rd hit of Basic Attack: Towering Peaks or the 3rd hit of Basic Attack: Majestic Summit.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Batholith<br>When the active character is launched, press Icon_Switch to activate:<br>Executes a series of attacks against enemies in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Iron Bastion<br>When the on-field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Lofty Ascent<br>Press Icon_Normal after a Defensive Assist to activate:<br>Quickly dash forward and attack, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Pierce Heavens<br>After successfully parrying an enemy attack with Dodge: Immovable Mountain, press Icon_Normal to activate:<br>Quickly dash forward and attack, dealing Fire DMG.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "EX Special Attack: Earth Shaker<br>With enough Adrenaline, can be activated in one of three ways:<br>After the 3rd or 4th hit of Basic Attack: Towering Peaks, press Icon_SpecialReady_Rp to activate:<br>After an Assist Follow-Up, Dodge Counter, or Quick Assist, hold Icon_SpecialReady_Rp to activate:<br>During an EX Special Attack, Basic Attack: Immolate, Chain Attack, Ultimate, Assist Follow-Up, Dodge Counter, or Quick Assist, quickly input Icon_Normal Icon_SpecialReady_Rp Icon_Normal in sequence to activate:<br>Banyue slams the ground repeatedly, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Mountain Tremor<br>With enough Adrenaline, can be activated in one of two ways:<br>After the 1st or 2nd hit of Basic Attack: Majestic Summit, press Icon_Normal to activate:<br>During an EX Special Attack, Basic Attack: Immolate, Chain Attack, Ultimate, Assist Follow-Up, Dodge Counter, or Quick Assist, quickly input Icon_SpecialReady_Rp Icon_SpecialReady_Rp Icon_Normal in sequence to activate:<br>Banyue throws a mountain, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: One's Path<br>With enough Adrenaline, can be activated in one of three ways:<br>After the 3rd or 4th hit of Basic Attack: Majestic Summit, press Icon_Normal to activate:<br>After an Assist Follow-Up, Dodge Counter, or Quick Assist, hold Icon_Normal to activate:<br>During an EX Special Attack, Basic Attack:" +
                " Immolate, Chain Attack, Ultimate, Assist Follow-Up, Dodge Counter, or Quick Assist, quickly input Icon_SpecialReady_Rp Icon_Normal Icon_SpecialReady_Rp in sequence to activate:<br>Banyue throws out his beads, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Lion's Roar<br>With enough Adrenaline, can be activated in one of two ways:<br>After the 1st or 2nd hit of Basic Attack: Towering Peaks, press Icon_SpecialReady_Rp to activate:<br>During an EX Special Attack, Basic Attack: Immolate, Chain Attack, Ultimate, Assist Follow-Up, Dodge Counter, or Quick Assist, quickly input Icon_Normal Icon_Normal Icon_SpecialReady_Rp in sequence to activate:<br>Banyue sends out a sonic wave forward, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Mountain Tremor - Wrath<br>With enough Adrenaline when using EX Special Attack: Earth Shaker, quickly input Icon_SpecialReady_Rp Icon_SpecialReady_Rp Icon_Normal in sequence to activate:<br>Banyue throws out an even larger mountain, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Lion's Roar - Wrath<br>With enough Adrenaline when using EX Special Attack: One's Path, quickly input Icon_Normal Icon_Normal Icon_SpecialReady_Rp in sequence to activate:<br>Banyue releases a powerful sonic wave in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>Cancel<br>When Banyue activates an EX Special Attack ALT through quick input commands, the currently activating EX Special Attack can be interrupted. Each EX Special Attack has its own Perfect Interrupt window. Interrupting an EX Special Attack after its Perfect Interrupt window will not affect the interrupted EX Special Attack's effect. Interrupting an EX Special Attack during the Perfect Interrupt window is equal to triggering a Perfect Cancel.<br>While in the Visage of Wrath state and with Mountain's Might, Perfect Cancel is easier to trigger.",

            "Chain Attack": "Chain Attack: Blazing Wrath<br>When a Chain Attack is triggered, select the character to activate:<br>Launches a large area attack in front, dealing massive Fire DMG.<br>If Banyue has more than 120 Wrathful Fires, he automatically enters the Visage of Wrath state after the attack.<br>Character is invulnerable while using this skill.<br><br>Ultimate: The World Trembles<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Launches a large area attack in front, dealing massive Fire DMG.<br>If Banyue has more than 120 Wrathful Fires, he automatically enters the Visage of Wrath state after the attack.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: One With the Mountains<br>Banyue gains extra Sheer Force based on his Max HP, with every 1 point of Max HP increasing his Sheer Force by 0.1.<br>All Fire DMG Banyue deals is Sheer DMG, ignoring enemy DEF and using his Sheer Force stat as the DMG Multiplier.<br>When Banyue enters the battlefield, he immediately recovers 60 Adrenaline. In Investigation Zone Mode, this effect can trigger once every 180s.<br>Banyue can recover Wrathful Fires through the following methods:<br>Recover 0.5 Wrathful Fires for every point of Adrenaline consumed;<br>Recover 4 Wrathful Fires upon activating Defensive Assist;<br>Recover 4 Wrathful Fires when parrying an enemy with Dodge: Immovable Mountain, and recover 6 Wrathful Fires instead upon triggering a Perfect Block, up to once every 1s;<br>Recover 4 Wrathful Fires upon triggering a Perfect Dodge, up to once every 1s.<br>Banyue can have up to 150 Wrathful Fires. When he possesses at least 120 Wrathful Fires, Banyue can enter the Visage of Wrath state by using Basic Attack: Immolate. While in Visage of Wrath state, Banyue can no longer gain Wrathful Fires. After Banyue uses Basic Attack: Toppling Mountain, he exits the Visage of Wrath state.<br>When entering the Visage of Wrath state, Banyue gains 4 Mountain's Might. If Banyue has Mountain's Might, launching an EX Special Attack no longer consumes Adrenaline, instead consuming 1 Mountain's Might and restoring 10 Adrenaline. Upon exiting the Visage of Wrath state, remove all Mountain's Might.<br>When possessing Mountain's Might in Visage of Wrath state, hold Icon_Special to launch four different EX Special Attacks and Basic Attack: Toppling Mountain in a fixed sequence.<br>When Banyue uses an EX Special Attack or Assist Follow-Up, he increases his Sheer Force by 300, Fire DMG by 36%, and CRIT DMG by 36% for 30s. Repeated triggers reset the duration.<br><br>Additional Ability: Mountain's Zenith<br>When another character in your squad is a Support or Stun character:<br>While in the Visage of Wrath state, when Banyue consumes Mountain's Might to unleash an EX Special Attack through a Basic Attack branch or quick input commands, he gains one stack of Vidyaraja. Each stack of Vidyaraja increases his Fire DMG by 5%, stacking up to 3 times and lasting 8s. Repeated triggers reset the duration."
        },
        mindscapes: [
            { number: 1, name: "Greed Burns Like Fire  ", desc: "When Banyue hits an enemy with EX Special Attack: One's Path or EX Special Attack: Earth Shaker, he inflicts the Tremor state. In this state, enemies' Fire RES is reduced by 10%, lasting 30s. When EX Special Attack: Lion's Roar, EX Special Attack: Lion's Roar - Wrath, EX Special Attack: Mountain Tremor, EX Special Attack: Mountain Tremor - Wrath, Basic Attack: Toppling Mountain, and Basic Attack: Crushing Peaks hits an enemy in the Tremor state, the Sheer DMG dealt is increased by 10%. When Basic Attack: Crushing Peaks hits a Stunned enemy, the current Stun duration is extended by 2s. This effect can only trigger once per Stun and does not stack with similar effects." },
            { number: 2, name: "Anger Cuts Like a Blade  ", desc: "The CRIT DMG bonus from the Core Passive is increased by an additional 15%, and the Fire DMG bonus is increased by an additional 15%. While in the Visage of Wrath state, Banyue restores an additional 5 Adrenaline when consuming Mountain's Might to unleash an EX Special Attack." },
            { number: 3, name: "Ignorance Binds Like Chains  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Purge Unit - Type Zero  ", desc: "EX Special Attack: Lion's Roar - Wrath, EX Special Attack: Mountain Tremor - Wrath, Basic Attack: Toppling Mountain, and Basic Attack: Crushing Peaks DMG increase by 30%." },
            { number: 5, name: "Student ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Descended Vidyaraja  ", desc: "At any time, when Banyue uses an EX Special Attack, he also gains Vidyaraja. The Fire DMG bonus from Vidyaraja is increased by an additional 8%, and its duration is extended to 30s. When activating Basic Attack: Crushing Peaks, Banyue deals Fire DMG equal to 600% of his Sheer Force to nearby enemies. Using Dodge: Battle Cry immediately after an EX Special Attack also grants Vidyaraja." }
        ]
    },
    {
        id: 19,
        name: "Lucia",
        rarity: "S",
        element: "Ether",
        role: "Support",
        faction: "Victoria Housekeeping",
        image: "image/лююс.webp",
        skills: {
            "Основна атака": "Basic Attack: Orbital Combo<br>Press Icon_Normal to activate:<br>Perform up to five forward strikes, dealing Ether DMG.<br>The fifth attack is a Whim, conjuring an Ethereal figure that inflicts Ether DMG on enemies in a circular area ahead.<br>When in combat and not in the Dream state, Lucia gains 40 Dream Points upon using this Whim.",

            "Ухилення + Атака": "Dodge: Fading Silhouette<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Refraction<br>Press Icon_Normal during a dodge to activate:<br>Deliver a quick strike forward, dealing Ether DMG.<br><br>Dodge Counter: Stardust Echo<br>Press Icon_Normal during a Perfect Dodge to activate:<br>This Dodge Counter is a Whim. When activated, summons an Ethereal figure that delivers a downward attack in a circular area ahead, dealing Ether DMG.<br>If not in the Dream state, Lucia gains 20 Dream Points upon using this Whim. This effect can trigger once every 5s.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Crushing Mist<br>When the active character is launched, press Icon_Switch to activate:<br>This Quick Assist is a Whim. When activated, it summons an Ethereal figure that delivers a downward attack in a circular area ahead, dealing Ether DMG.<br>If not in the Dream state, Lucia gains 20 Dream Points upon using this Whim. This effect can trigger once every 5s.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Voice of Illusory Dreams<br>When the on-field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Harmony of Painted Dreams<br>Press Icon_Normal after a Defensive Assist to activate:<br>This Assist Follow-Up is a Harmony. When activated, it summons an Ethereal figure that delivers a downward attack in a circular area ahead, dealing Ether DMG.<br>If not in the Dream state, Lucia gains 40 Dream Points upon using this Harmony.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Symphony of the Reaper - Storm<br>Press Icon_Special to activate:<br>This Special Attack is a Whim. When activated, it recreates an Ethereal figure that slashes forward in a line, dealing Ether DMG.<br>When in combat and not in the Dream state, Lucia gains 20 Dream Points upon using this Whim. This effect can trigger once every 5s.<br><br>EX Special Attack: Symphony of the Reaper - Daybreak<br>With enough Energy, press Icon_SpecialReady to activate:<br>This EX Special Attack is a Harmony. When activated, it summons an Ethereal figure that delivers a powerful forward slash in a line, dealing Ether DMG.<br>When Lucia uses any Harmony, all squad members gain the Darkbreaker state. While in Darkbreaker state, Sheer Force increases by 12. Every 200 points of Lucia's initial Max HP grants an additional 7.4 Sheer Force. The Darkbreaker state can increase Sheer Force by up to a maximum of 900, lasting 20s and repeated triggers reset the duration. When Lucia's initial Max HP reaches 24,000, the above bonus effect reaches its maximum value.<br>When any Harmony deals DMG, Lucia increases the final attack's DMG by an additional 70% of her Max HP.<br>If she activates this EX Special Attack while in the Dream state and under the effect of Ether Veil: Wellspring, Ether Veil: Wellspring duration is extended by 16s.<br>After activating her EX Special Attack, Lucia can immediately follow up with the 5th hit of her Basic Attack.<br>If not in the Dream state, Lucia gains 60 Dream Points upon using this Harmony.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Stage of Brilliance<br>When a Chain Attack is triggered, select the character to activate:<br>This Chain Attack is a Harmony. When activated, it summons an Ethereal figure that pulls in enemies in a circular area ahead and deals Ether DMG.<br>If not in the Dream state, Lucia gains 40 Dream Points upon using this Harmony.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Charge, Great Armor!<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>This Ultimate is a Harmony. When activated, Lucia summons an Ethereal figure and rides it forward in a charge. Holding a directional button allows her to steer and extend the charge, up to 3s. During the charge, Anti-Interrupt Level is increased, DMG taken is reduced by 40%, and when Lucia takes fatal DMG, she remains in battle with HP not dropping below 1.<br>When the charge ends, Lucia unleashes a powerful strike in a large area around her, dealing Ether DMG. A Quick Assist is triggered when this skill hits an enemy, and after the skill is used, it leaves behind a Starlight Convergence. Starlight Convergence lasts 8s. While inside Starlight Convergence, the currently active character gains HP regeneration equal to 1.6% of Lucia's Max HP per second. This effect ends 4s after leaving the Starlight Convergence or immediately when switching out.<br>After activation, if Lucia is in the Dream state and Ether Veil: Wellspring is active, Ether Veil: Wellspring duration is extended by 32s.<br>If not in the Dream state, Lucia gains 100 Dream Points upon using this Harmony. If she is in the Dream state when activating this Harmony, she will gain 100 Dream Points and re-enter Dream state the next time she exits it. This effect cannot be stacked.<br>Character is invulnerable while performing the powerful strike.",

            "Core Skill": "Core Passive: Lost Nocturne<br>When entering the battlefield, Lucia immediately gains 60 Dream Points. If her Dream Points reaches 100 upon activating a Whim or Harmony, she enters the Dream state.<br>When entering the Dream state, it triggers a Quick Assist and simultaneously activates Ether Veil: Wellspring. While Ether Veil: Wellspring is active, all squad members' Max HP increase by 5%, lasting 40s. Repeated triggers extend the duration, up to a max of 300s.<br>While Lucia is in the Dream state, using any Whim consumes 25 Dream Points and upgrades it to Harmony. Whenever another active character's attack hits an enemy, Lucia consumes 25 Dream Points to unleash an Aftershock. This Aftershock is a Harmony. After Lucia triggers a skill upgrade or Aftershock, Aftershock cannot be triggered for 8s.<br>When Lucia triggers a skill upgrade or an Aftershock, all squad members gain the Dreamer's Nursery Rhyme state. While in Dreamer's Nursery Rhyme state, DMG dealt increases by 20% for 12s. Repeated triggers reset the duration.<br>If Lucia runs out of Dream Points or she leaves the Ether Veil, she exits the Dream state.<br><br>Additional Ability: Ballad of the Long Night<br>When another character in your squad is a Rupture or Stun character:<br>When applying Darkbreaker, additionally applies a 30% CRIT DMG increase effect."
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/ідха.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Crushing Strike<br>Press Icon_Normal to activate:<br>Unleashes up to 3 strikes, dealing Ice DMG.<br>On the 3rd hit, Yidhari recovers 10% HP.<br><br>Basic Attack: Frostbite Embrace<br>Hold Icon_Normal to activate:<br>Yidhari begins charging, continuously consuming HP to reach up to three levels of charge. When Icon_Normal is released, Yidhari unleashes a powerful charged hammer attack in front based on the current charge level, dealing massive Ice DMG.<br>The higher Yidhari's HP, the faster charging consumes it. HP consumption will at most reduce Yidhari's HP to 25% of Max HP.<br>At 2 charge levels, after using the skill, press Icon_Normal to immediately follow up with the 3rd hit of Basic Attack: Crushing Strike. The DMG of a Basic Attack: Crushing Strike triggered this way increases based on the current charge level, up to 30%.<br>At 3 charge levels, Yidhari gains increased Anti-Interrupt level during the charged skill. Press Icon_Normal to chain early into the finishing smash.<br><br>Frost's Crushing Weight<br>While charging or spinning during Basic Attack: Frostbite Embrace, if hit by an enemy, Yidhari can block with her tentacles, reducing the DMG taken by 25%.<br>If charging or not yet at full charge, Yidhari counterattacks with her tentacles, returning to the charging stance and instantly gaining 1 charge level, while also dealing Ice DMG to enemies ahead.<br>While Frost's Crushing Weight is active, pressing Icon_Normal makes Yidhari immediately unleash the finishing slam of Basic Attack: Frostbite Embrace based on her current charge level.<br>While Frost's Crushing Weight is active, pressing Icon_Special or Icon_SpecialReady_Rp makes Yidhari unleash a Special Attack: Surging Cold, Crushing Pursuit that is guaranteed to trigger Surging Cold.",

            "Ухилення + Атака": "Dodge: Dreamshift<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Frostbloom Impact<br>Press Icon_Normal during a dodge to activate:<br>Strike forward, dealing Ice DMG.<br><br>Dodge Counter: Icehaul Reverb<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Strikes enemies in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Frostshock Reinforcement<br>When the active character is launched, press Icon_Switch to activate:<br>Strikes enemies in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Flashquake Rejection<br>When the on-field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Glacial Onslaught<br>Press Icon_Normal after a Defensive Assist to activate:<br>Execute an ice shard hammer attack against enemies in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Cease Thoughts<br>Press Icon_Special to activate:<br>Launches enemies in front into the air, dealing Ice DMG.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Frost Coil<br>With enough Adrenaline, press Icon_SpecialReady_Rp to activate:<br>Perform two consecutive upward strikes, then release an icy mist, dealing massive Ice DMG.<br>If EX Special Attack: Frost Coil hits an enemy, Yidhari recovers HP at the end of the skill equal to 33% of her missing HP.<br>Character is invulnerable while using this skill.<br><br>Special Attack: Surging Cold, Crushing Pursuit<br>Press Icon_Special or Icon_SpecialReady_Rp while charging or spinning during Basic Attack: Frostbite Embrace, or press Icon_Evade while holding Icon_Normal to activate:<br>Launches enemies in front into the air, dealing Ice DMG.<br>When the skill's attack collides with an enemy's attack, it triggers Surging Cold.<br>If the skill hits a Stunned enemy, and with sufficient Adrenaline, it triggers Crushing Pursuit.<br>Triggering Surging Cold or Crushing Pursuit instantly raises the charge level to maximum.<br>During this skill, press Icon_Normal and Yidhari will immediately unleash the finishing slam of Basic Attack: Frostbite Embrace based on the current charge level.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Glacial Crush<br>When triggering Surging Cold or Crushing Pursuit, and with enough Adrenaline, press Icon_SpecialReady_Rp or Icon_Normal to activate:<br>Dash forward with an upward attack, then leap into the air before delivering a powerful downward smash, dealing massive Ice DMG.<br>If EX Special Attack: Glacial Crush hits an enemy, Yidhari heals at the end of the skill for 33% of her missing HP.<br>If the skill is used after Surging Cold, it grants an additional 15 Adrenaline. This effect can trigger once every 1s.<br>After using this skill, press Icon_Normal to immediately unleash the finishing slam of Basic Attack: Frostbite Embrace based on the current charge level.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Frostbound Oath<br>When a Chain Attack is triggered, select the character to activate:<br>Unleash a powerful strike against enemies in a small area ahead, dealing massive Ice DMG.<br>If inside Ether Veil: Wellspring, tentacles join in the assault, further enhancing the skill's power.<br>Character is invulnerable while using this skill.<br><br>Ether Veil: Wellspring<br>When Decibel Rating is at Maximum, the final hit of Basic Attack: Frostbite Embrace, EX Special Attack: Frost Coil, EX Special Attack: Glacial Crush, and Chain Attack: Frostbound Oath will consume 3,000 Decibels to activate an Ether Veil: Wellspring. While Ether Veil: Wellspring is active, all squad members' Max HP increase by 5% for 30s. Repeated triggers extend the duration, up to a maximum of 300s.<br>While Yidhari is within Ether Veil: Wellspring, the charge speed of Basic Attack: Frostbite Embrace increases, and HP is consumed faster during charging.<br><br>Ultimate: Final Act - Crossing the River of Regret<br>After Yidhari expends Decibels to activate Ether Veil: Wellspring, press Icon_UltimateReady within 30s to activate:<br>Deliver a powerful strike to enemies in a large area ahead, dealing massive Ice DMG.<br>Character is invulnerable while using this skill.<br>Each time Yidhari expends Decibels to activate an Ether Veil: Wellspring, she can use Ultimate: Final Act - Crossing the River of Regret once.",

            "Core Skill": "Core Passive: Dreamscape Collection<br>Yidhari gains extra Sheer Force based on her Max HP, with every 1 point of Max HP increasing Sheer Force by 0.1.<br>All Ice DMG dealt by Yidhari deals is Sheer DMG, ignoring enemy DEF and using her Sheer Force stat as the DMG Multiplier. When Yidhari enters battle, she immediately gains 60 Adrenaline. In Investigation Zone Mode, this effect can trigger once every 180s.<br>Yidhari's skill DMG increases as her current HP percentage decreases.<br>When her HP falls below 50%, the buff reaches its maximum value, increasing her DMG by up to 100%. Once her HP is restored to 50%, the maximum bonus remains for 5s thereafter.<br>Yidhari gains fewer Decibels from landing skills. Instead, she gains Decibels as her HP decreases, with every 1% HP lost granting 10 Decibels.<br><br>Additional Ability: Narrative Completion<br>When another character in your squad is a Stun or Support character:<br>When Yidhari's HP falls below 50%, CRIT DMG increases by 30% and DMG taken is reduced by 25%.<br>While Yidhari is within Ether Veil: Wellspring, she gains the following additional effect:<br>After the level 3 charged attack of Yidhari's Basic Attack: Frostbite Embrace or EX Special Attack: Glacial Crush, an icy tentacle is summoned to attack, dealing extra damage. This effect can trigger once every 12s.<br>The above skill is considered an EX Special Attack, the DMG multiplier increases based on the EX Special Attack's level."
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
        faction: "Victoria Housekeeping",
        image: "image/манато.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Blazing Wind Slash<br>Press Icon_Normal to activate:<br>Perform up to three forward slashes, dealing Physical DMG.<br>During each slash, pressing Icon_Special triggers Scorchwind, causing the attack to deal increased Fire DMG.<br><br>Basic Attack: Blazing Wind - Misty Slash<br>While in the Molten Edge state, press Icon_Normal to activate:<br>Unleash up to four forward slashes, dealing Fire DMG.<br>If Manato's HP is above 30% when the skill is activated, 3.5% of his Max HP will be consumed.",

            "Ухилення + Атака": "Dodge: Radiant Blade<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Radiant Blade - Zanshin<br>Press Icon_Normal during a dodge to activate:<br>Perform a shoulder slam forward, dealing Physical DMG.<br><br>Dodge Counter: Radiant Blade - Battle Sweep<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Perform a slash followed by a punch at enemies ahead, dealing Fire DMG.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Lone Shadow - Regroup<br>When the active character is launched, press Icon_Switch to activate:<br>Slashes and punches enemies in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Lone Shadow - Mountain Stand<br>When the on-field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, inflicting massive Daze and dealing Fire DMG.<br>Gain 75 Blazing Heart upon activating this skill.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Lone Shadow - Breaking Fang<br>Press Icon_Normal after a Defensive Assist to activate:<br>Unleash multiple slashes at enemies ahead, dealing Fire DMG.<br>Repeated presses allow up to 7 extra consecutive slashes.<br>While chaining slashes, if Manato's HP is above 30%, 2% of Max HP is consumed.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Return to Ashes<br>Press Icon_Special to activate:<br>Slash forward at enemies, dealing Fire DMG.<br>If hit by an enemy during the skill, restore 20% of missing HP when unleashing the slash. The healing effects of Special Attack: Return to Ashes and Special Attack: Return to Ashes - Sacrifice have a shared cooldown and can trigger once every 20s.<br>If hit by an enemy during the skill, the slash is enhanced.<br>DMG taken is reduced by 40% while using this skill.<br>Anti-Interrupt level is increased while using this skill.<br><br>Special Attack: Return to Ashes - Sacrifice<br>Hold Icon_Special to activate:<br>Enter a charging state, consuming up to 10% of Max HP and gaining 100 Blazing Heart. HP consumption will at most reduce Manato's HP to 30% of Max HP.<br>Release the button to activate Special Attack: Return to Ashes. If struck during the skill, the slash heals 20% of missing HP. The healing effects of Special Attack: Return to Ashes and Special Attack: Return to Ashes - Sacrifice have a shared cooldown and can trigger once every 20s.<br>If hit by an enemy during the skill or if charging reaches a certain duration, the slash is enhanced.<br>DMG taken is reduced by 40% while using this skill.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Return to Ashes - Fall<br>While in the Molten Edge state and with sufficient Adrenaline, press Icon_SpecialReady_Rp to activate:<br>Jump up and unleash a falling slash on enemies in front, dealing massive Fire DMG.<br>Upon activating the skill, restore 33% of Max HP.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Blazing Eruption<br>When a Chain Attack is triggered, select the character to activate:<br>Hurls his sword forward, then charges the enemy to trigger an explosion, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Musou Aratama<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Jump into the air and deliver a falling slash at enemies in front, followed by an explosion, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Mighty Molten Edge<br>Manato gains extra Sheer Force based on his Max HP, with every 1 point of Max HP increasing Sheer Force by 0.1.<br>All Fire DMG Manato deals is Sheer DMG, ignoring enemy DEF and using his Sheer Force stat as the DMG Multiplier.<br>When Manato uses Special Attack: Return to Ashes - Sacrifice or a Defensive Assist, he accumulates Blazing Heart, up to a maximum of 100 points. At 75 Blazing Heart, Manato enters the Molten Edge state. While in the Molten Edge state, Manato consumes 3.3 Blazing Heart per second. When Blazing Heart is fully depleted, he exits Molten Edge.<br>While in the Molten Edge state, Manato's Basic Attacks are enhanced, and he can use EX Special Attack: Return to Ashes - Fall.<br>When consuming HP during Basic Attack: Blazing Wind - Misty Slash or during the consecutive slashes from an Assist Follow-Up, that attack's CRIT DMG increases by 50%, and the Adrenaline Generation Rate increases by 100%.<br>While in the Molten Edge state, Manato's CRIT Rate increases by 10%, and his Fire DMG increases by 20%.<br><br>Additional Ability: Rekindled Heart<br>When another character in your squad is a Support or Stun character:<br>When Manato uses his Ultimate, he gains 8 stacks of Remnant Flame, and when using a Chain Attack, he gains 4 stacks of Remnant Flame, lasting 60s, stacking up to 20 times. Repeated triggers reset the duration. While launching Basic Attack: Blazing Wind - Misty Slash or during the consecutive slashes of an Assist Follow-Up, if his HP is below 100% of Max HP, one stack of Remnant Flame is consumed to restore 2% of his Max HP."
        },
        mindscapes: [
            { number: 1, name: "Drifter's Rules of Survival  ", desc: "Whenever Manato loses HP, the amount of HP lost is tallied. Each 1% of his Max HP tallied increases the Fire DMG of Assist Follow-Ups and Basic Attacks by 0.4%, up to a max of 20%." },
            { number: 2, name: "Day & Night, Kitchen & Love ", desc: "While in the Molten Edge state, Manato ignores 8% of a target's Fire RES. After being hit by an enemy while using Special Attack: Return to Ashes or Special Attack: Return to Ashes - Sacrifice, press Icon_Normal to trigger an Assist Follow-Up." },
            { number: 3, name: "Enter the Realm of Urban Legends  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Childhood Oath  ", desc: "Max HP increases by 8%. During Special Attack: Return to Ashes and Special Attack: Return to Ashes - Sacrifice, when Manato takes fatal DMG, he remains in battle, with his HP not dropping below 1. This effect can trigger once every 10s." },
            { number: 5, name: "Lone Shadow Returns to the Pack ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Beyond Dreams of the Past  ", desc: "When Special Attack: Return to Ashes hits a Stunned enemy, Manato gains 75 Blazing Heart and 4 stacks of Remnant Flame, and pressing Icon_Normal will launch an Assist Follow-Up. This Remnant Flame effect can trigger once every 20s. When his Assist Follow-Up hits an enemy, Manato's Fire DMG increases by 3% for 8s, stacking up to 5 times. Repeated triggers reset the duration." }
        ]
    },
    {
        id: 22,
        name: "Orphie",
        rarity: "S",
        element: "Fire",
        role: "Attack",
        faction: "Victoria Housekeeping",
        image: "image/орфі.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
        },
        mindscapes: [
            { number: 1, name: "Luxurious Cat House  ", desc: "Orphie & Magus' Special Attack: Corrosive Flash, EX Special Attack: Crimson Vortex, EX Special Attack: Heat Charge, and EX Special Attack: Fiery Eruption ignore 15% of target's Fire RES, and Agents with Zeroed In deal 20% increased DMG." },
            { number: 2, name: "Weird Food List  ", desc: "When Orphie & Magus launch an Aftershock, restore 65 Decibels. This effect can trigger once every 4s. After Orphie & Magus use their Ultimate, their ATK increases by 20% for up to 45s." },
            { number: 3, name: "'Tactics Manual'  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Pink Holster  ", desc: "Initial duration of Zeroed In increases to 16s, and Orphie & Magus's EX Special Attack: Heat Charge and Ultimate: Dance With Fire DMG increases by 40%." },
            { number: 5, name: "Ferry Toll ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Magic Seed  ", desc: "With enough energy, after the fire blade attack of Basic Attack: High-Pressure Flamethrower, press Icon_SpecialReady to immediately follow up with EX Special Attack: Crimson Vortex. When the fire blade attack of Basic Attack: High-Pressure Flamethrower is activated, recover 10 Bottled Heat, and the Interrupt Level during the low firepower phase of EX Special Attack: Heat Charge will also increase. When the laser from EX Special Attack: Heat Charge or Ultimate hits enemies, it deals additional Fire DMG equal to 250% of Orphie & Magus's ATK. This effect can trigger once every 0.5s and is counted as EX Special Attack and Aftershock DMG" }
        ]
    },
    {
        id: 23,
        name: "Seed",
        rarity: "S",
        element: "Electric",
        role: "Attack",
        faction: "Victoria Housekeeping",
        image: "image/сід.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/аліса.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
        },
        mindscapes: [
            { number: 1, name: "Palmful of Cilantro  ", desc: "When Alice triggers a Polarity Assault, she gains 25 Blade Etiquette. When she triggers Assault against an enemy, the target's DEF is reduced by 20% for 30s." },
            { number: 2, name: "Sage at the Sword's Tip  ", desc: "When Ultimate: Starfall Finale's Finishing Move hits an enemy, it triggers Polarity Assault. All squad members' Assault DMG increases by 15%. Disorder DMG against enemies suffering from Physical Anomaly increases by 15%. Upon entering the battlefield, Alice immediately gains 1,000 Decibels. Triggers once per 180s in Investigation Zone mode." },
            { number: 3, name: "Sage at the Sword's Tip  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Rosemary on Her Lips  ", desc: "Alice ignores 10% of the target's Physical RES. Enhanced Basic Attack: Celestial Overture accumulates 25% more Physical Anomaly Buildup." },
            { number: 5, name: "Passion for the Supernatural ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "A Heart of Thyme  ", desc: "When Alice uses a third-stage charged Basic Attack: Starshine Waltz or Ultimate: Starfall Finale, she enters the Victory State for 30s. During this time, whenever any squad member lands a hit on a target, Alice will follow up with an extra attack against the target, dealing Physical DMG equal to 3,300% of her Anomaly Proficiency. This effect can trigger once every 1s and is guaranteed to CRIT. This effect can trigger up to 6 times. Gaining the Victory State again refreshes the available trigger count." }
        ]
    },
    {
        id: 25,
        name: "Yuzuha",
        rarity: "S",
        element: "Physical",
        role: "Support",
        faction: "Victoria Housekeeping",
        image: "image/юдза.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
        },
        mindscapes: [
            { number: 1, name: "Lucky Constitution  ", desc: "Yuzuha regains 30 Energy when she enters the battlefield. In Investigation Zone Mode, this effect can trigger at most once every 180s. Enemies in the Sweet Scare state have their All-Attribute RES reduced by 10%. The Attribute Anomaly DMG and Disorder DMG buff from her Additional Ability is increased to 130% of its original value." },
            { number: 2, name: "Full of Colorful Company  ", desc: "When Yuzuha's EX Special Attack: Cavity Alert, EX Special Attack: Cavity Alert, Right Now!, or Ultimate: Surrender or Suffer the Mischief hits an enemy, all squad members' DMG increases by 15% and Anomaly Buildup Rate by 15%, lasting 40s and repeated triggers reset the duration. When a heavy attack hits an enemy that is not Stunned, it will trigger a forced Chain Attack. Chain Attacks triggered this way have reduced Interrupt Level and forced Chain Attacks can only occur once every 20s. Whenever another character enters through a Chain Attack, Yuzuha gains 1 Sugar Points. Yuzuha's Basic Attack: Hard Candy Shot cooldown is reduced by 25%." },
            { number: 3, name: "Fairytale of the Haunted City  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Falling Magic  ", desc: "The DMG of Yuzuha's Assist Follow-Up: Stuffed Hard Candy Shot and Assist Follow-Up: We Have Cookies increases by 30%, Anomaly Buildup Rate by 20%, and triggers a Quick Assist when it hits an enemy." },
            { number: 5, name: "Dreams of a Fading Winter ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Put Down Roots  ", desc: "Gain 1 additional Sugar Points when successfully parrying an enemy attack using a Defensive Assist or Basic Attack: Tanuki Cloak. When using Assist Follow-Up: Stuffed Hard Candy Shot, hold Icon_Normal to charge for up to 0.8 seconds. Releasing Icon_Normal or reaching full charge fires an extra powerful shell at the enemy. For every 0.4s charged, Yuzuha consumes 1 Sugar Point to fire an additional powerful shell, each dealing 300% of her ATK as Physical DMG. If any powerful shell from Assist Follow-Up: Stuffed Hard Candy Shot hits an enemy, all squad members' Disorder DMG Multiplier increases by 105% for 40s, and stacking up to 3 times, with each stack duration being calculated separately. In addition, if the powerful shell hits an enemy under Sweet Scare, it'll trigger 1 Basic Attack: Sugarburst Sparkles - Max attack. If Yuzuha is attacked while charging, she will automatically dodge the attack and immediately unleash the max-charged attack." }
        ]
    },
    {
        id: 26,
        name: "Ju Fufu",
        rarity: "S",
        element: "Fire",
        role: "Stun",
        faction: "Victoria Housekeeping",
        image: "image/фуфу.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/іся.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
        },
        mindscapes: [
            { number: 1, name: "Spiritual Path  ", desc: "Upon entering combat, CRIT Rate increases by 10% and immediately gain 120 Technique Points. In Investigation Zone Mode, this effect can only trigger once every 180s. When any squad member lands a hit on an enemy, Yixuan automatically summons an extra lightning strike, dealing DMG equal to 50% of her Sheer Force and restoring 5 additional Adrenaline. This can trigger once every 6s." },
            { number: 2, name: "Ward Off Misfortune  ", desc: "When an Ultimate or EX Special Attack deals DMG, it ignores 15% of the target's Ether RES. Triggering Ultimate: Qingming Skyshade extends all enemies' Stunned state by 3s. In a single Stun state duration, enemies can only have this effect applied once, and it does not stack with similar effects. Additionally, when using Ultimate: Endless Talisman Suppression, gain one stack of the Condensed Ink effect. After Basic Attack: Qingming Eruption or EX Special Attack: Ashen Ink Becomes Shadows, press the Basic Attack button, or after EX Special Attack: Qingming Eruption - Break, press the Special Attack button to consume one stack of Condensed Ink and launch EX Special Attack: Endless Talisman Suppression - Break, dealing DMG up to 1,200% of Sheer Force. Only one stack of Condensed Ink can be held at a time." },
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
        faction: "Victoria Housekeeping",
        image: "image/панда.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/хуго.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/віва.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
        },
        mindscapes: [
            { number: 1, name: "'Walking Into the Orchard in Spring'  ", desc: "When a total of 4 Guard Feathers are consumed, gain 1 Flight Feather. All Attribute Anomaly DMG and Disorder DMG received by targets under Vivian's Prophecy increases by 16%." },
            { number: 2, name: "'Stormy Night, Stormy Night'  ", desc: "Vivian's Ether Anomaly Buildup Rate increases by 25%. The benefits of Abloom from Anomaly Proficiency are raised to 130% of the original value, and 15% of the target's All-Attribute RES is ignored." },
            { number: 3, name: "'Another and the Same'  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "'The Wind Between the Reeds'  ", desc: "Basic Attack: Fluttering Frock - Suspension and Basic Attack: Featherbloom will always CRIT on hit, and they will also increase Vivian's ATK by 12% for 12s. Repeated triggers reset the duration.When entering the battlefield, Vivian immediately gains 5 Guard Feathers." },
            { number: 5, name: "'Sonnet' ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "'Vivian'  ", desc: "Vivian's Ether DMG increases by 40%. When triggering a Perfect Dodge during Basic Attack: Noblewoman - Waltz's dash, or using EX Special Attack: Violet Requiem, gain 1 additional Flight Feather. Launching Basic Attack: Fluttering Frock - Suspension consumes all Guard Feathers, the downward attack's area of effect increases, and upon hit, triggers a special instance of Abloom. Each additional Guard Feather consumed will increase the proportion of additional Anomaly DMG dealt by that instance of Abloom, consuming a maximum of 5 Guard Feathers to increase the DMG up to a maximum of 5 times the original." }
        ]
    },
    {
        id: 31,
        name: "Trigger",
        rarity: "S",
        element: "Electric",
        role: "Stun",
        faction: "Victoria Housekeeping",
        image: "image/трігер.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/0.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/пудька.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/IconRoleCrop37.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
        },
        mindscapes: [
            { number: 1, name: "Dreamweave  ", desc: "Upon entering the battlefield, Evelyn immediately gains 1,500 Decibels. Enemies affected by Binding Seal will be Bound. When Evelyn attacks Bound enemies, she ignores 12% of their DEF. When Evelyn uses Special Attack: Binding Sunder - First Form or EX Special Attack: Binding Sunder - Final Form, the Bound effect spreads to all enemies hit by the skill. This spread Bound effect lasts for 10s." },
            { number: 2, name: "Dance of Fire  ", desc: "Evelyn's ATK increases by 15%. When Evelyn uses Basic Attack: Garrote - First Form or Basic Attack: Garrote - Second Form, the Burning Embers consumed will be returned. This effect can trigger once every 25s. When Evelyn consumes Burning Tether Point to trigger Chain Attack: Lunalux - Snare, the skill's Interrupt Level increases." },
            { number: 3, name: "Metamorphosis  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Fate's Melody  ", desc: "Upon activating a Chain Attack or Ultimate, Evelyn immediately gains a shield equal to 10% of her Max HP. While this shield exists, Evelyn's CRIT DMG increases by 40%." },
            { number: 5, name: "Crimson Threads Like the Dawn ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Bond of Light and Shadow  ", desc: "Upon launching a Chain Attack or Ultimate, Evelyn gains Shadowstring Edge for 20s. During Shadowstring Edge, when Evelyn hits her primary target with a Basic Attack, Dash Attack, Special Attack, or EX Special Attack, she additionally executes a Lunalux Garrote follow-up attack, dealing Fire DMG equal to 375% of her ATK to enemies in the area. This DMG is considered Chain Attack DMG and can trigger up to 16 times. Gaining another Shadowstring Edge will refresh the trigger count." }
        ]
    },
    {
        id: 35,
        name: "Astra Yao",
        rarity: "S",
        element: "Ether",
        role: "Support",
        faction: "Victoria Housekeeping",
        image: "image/астра.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/каламаса.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/IconRoleCrop13.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/лайт.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
        },
        mindscapes: [
            { number: 1, name: "The Champion  ", desc: "Among the debuffs imposed by Core Passive: Accelerant, the Collapse effect increases Stun duration by 5s, while further reducing Ice RES and Fire RES by 10%. The more powerful Finishing Move that follows when Lighter's Morale is completely exhausted during a startup light punch or jab combo deals 30% increased DMG." },
            { number: 2, name: "Red Scarf  ", desc: "When applying Collapse via Core Passive: Accelerant to enemies, the target's Stun DMG Multiplier increases by 25%. The increase to Ice DMG and Fire DMG provided by Elation from Additional Ability: Fighting Spirit increases to 120% of the original." },
            { number: 3, name: "Mercenary Leader  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Sunglasses  ", desc: "When Lighter is off-field, the Energy Regen for the on-field character is increased by 10%. Upon entering the Morale Burst state, Lighter restores 4 Energy for off-field characters. This effect can trigger once every 18s." },
            { number: 5, name: "Decision Maker ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Survivor  ", desc: "Lighter's Morale recovery efficiency is increased to 200% of its original value. When Lighter lands a heavy strike on enemies during a Basic Attack, Dodge Counter, Special Attack, EX Special Attack, Quick Assist, Assist Follow-Up, Chain Attack, or Ultimate, it will trigger the Blazing Impact effect, dealing 250% of ATK as Fire DMG. This effect can trigger once every 8s on each enemy. If Lighter's Impact exceeds 170 points, each additional point will further increase the multiplier of Blazing Impact by 5%, up to a maximum increase of 500%. The more powerful Finishing Move that follows when Lighter's Morale is completely exhausted during a light punch or jab combo will trigger an additional activation of Blazing Impact when hitting an enemy, ignoring the effect's cooldown." }
        ]
    },
    {
        id: 39,
        name: "Jane Doe",
        rarity: "S",
        element: "Physical",
        role: "Anomaly",
        faction: "Victoria Housekeeping",
        image: "image/криса.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
        },
        mindscapes: [
            { number: 1, name: "Crime Counsel  ", desc: "The maximum uses of Basic Attack: Salchow Jump are increased by one. While in the Passion state, Jane's Physical Anomaly Buildup Rate increases by an extra 15% and each point of Jane's Anomaly Proficiency increases her DMG by 0.1%, up to a maximum increase of 30%." },
            { number: 2, name: "Adapt to the Environment  ", desc: "When Jane's attack hits an enemy in the Gnawed state, or when any squad member triggers Assault on an enemy in the Gnawed state, 15% of the enemy's DEF is ignored. Additionally, when Assault DMG triggers a critical hit, the CRIT DMG dealt is increased by an additional 50%." },
            { number: 3, name: "Anonymity  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Adapt and Thrive  ", desc: "When any squad member triggers the Assault or Disorder effects, all squad members' Attribute Anomaly DMG is increased by 18%, lasting 15s." },
            { number: 5, name: "Compulsive Hoarder ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "\"Shady\"\ Technique  ", desc: "While in the Passion state, Jane's CRIT Rate increases by 20%, and CRIT DMG by 40%. After any squad member inflicts Assault, Jane instantly enters the Passion state, and gains max Passion Stream. When that instance of Assault triggers a critical hit, Jane performs an additional attack on the target, dealing Physical DMG equal to 1,600% of her Anomaly Proficiency." }
        ]
    },
    {
        id: 40,
        name: "Anton",
        rarity: "A",
        element: "Electric",
        role: "Attack",
        faction: "Victoria Housekeeping",
        image: "image/антон.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        faction: "Victoria Housekeeping",
        image: "image/бен.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Debt Reconciliation<br>Press Icon_Normal to activate:<br>Unleashes up to 3 strikes, dealing Physical DMG.",

            "Ухилення + Атака": "Dodge: Missing Invoice<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Incoming Expense<br>Press Icon_Normal during a Dodge to activate:<br>Strikes enemies in front of him, dealing Physical DMG.<br><br>Dodge Counter: Accounts Settled<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Strike enemies in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Joint Account<br>When the active character is launched, press Icon_Switch to activate:<br>Strikes enemies in front, dealing Fire DMG.<br>Character is invulnerable during the attack.<br><br>Defensive Assist: Risk Allocation<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Don't Break Contract<br>Press Icon_Normal after a Defensive Assist to activate:<br>Charges and strikes enemies in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Fiscal Fist<br>Press Icon_Special to activate:<br>Ben lifts his weapon, blocking the enemy's attack before unleashing a forward strike, dealing Physical DMG. Successfully blocking an attack enhances the power of this skill and triggers Block Counter, dealing massive Physical DMG.<br>Hold Icon_Special to remain in the Blocking stance.<br>While in the Blocking stance, Ben gains a Shield that weakens over time.<br>After leaving the blocking stance, the Shield is removed and recovers over time.<br>The Shield cannot exceed 16% of Ben's Max HP.<br>Ben is invulnerable when activating Block.<br>Anti-Interrupt level is increased while launching strikes.<br><br>EX Special Attack: Cashflow Counter<br>With enough Energy, press Icon_SpecialReady to activate:<br>Ben lifts his weapon, blocking the enemy's attacks before unleashing a forward strike, dealing Fire DMG. Successfully blocking an attack enhances the power of this skill and triggers Block Counter, dealing massive Fire DMG.<br>Hold Icon_SpecialReady to remain in the Blocking stance.<br>While in the Blocking stance, Ben gains a Shield that weakens over time.<br>After leaving the blocking stance, the Shield is removed and recovers over time.<br>The Shield cannot exceed 16% of Ben's Max HP.<br>When this skill is activated, the Shield is restored to its maximum value.<br>After activating the skill, press Icon_SpecialReady again to follow up with a powerful forward strike, dealing massive Fire DMG.<br>Ben is invulnerable when activating Block.<br>Ben is invulnerable while launching strikes.",

            "Chain Attack": "Chain Attack: Signed and Sealed<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful strike at enemies in front in a large area, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Complete Payback<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a powerful strike at enemies in front in a large area, dealing massive Fire DMG.<br>When activating the skill, additionally recover 3 Assist Points.<br>Character is invulnerable while using this skill.",

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
        faction: "Victoria Housekeeping",
        image: "image/люсі.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Lady's Bat<br>Press Icon_Normal to activate:<br>Strike forward up to 4 times, dealing Physical DMG and Fire DMG.<br>When Lucy uses her fourth Basic Attack, the currently on-field guard boars will launch Guard Boars: Spinning Swing! together.<br><br>Guard Boars: To Arms!<br>In combat, the guard boars will randomly use a baseball bat, boxing gloves, or a slingshot to automatically attack enemies, dealing Physical DMG.<br><br>Guard Boars: Spinning Swing!<br>When Lucy uses the fourth Basic Attack, or when she gains the Cheer On! status, the guard boars will whirl their baseball bats in a continuous motion, dealing Physical DMG to nearby enemies. If the attack cannot be executed immediately, the guard boars will remember the required number of times to execute it.",

            "Ухилення + Атака": "Dodge: Foul Ball!<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Fearless Boar!<br>Press Icon_Normal during dodge to activate:<br>Rapidly strikes enemies in front, dealing Physical DMG.<br><br>Dodge Counter: Returning Tusk!<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Strike enemies in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Hit By Pitch!<br>When the active character is launched, press Icon_Switch to activate:<br>Strikes enemies in front, dealing Fire DMG.<br>Character is invulnerable during the attack.<br><br>Defensive Assist: Safe on Base!<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Scored a Run!<br>Press Icon_Normal after a Defensive Assist to activate:<br>Strikes enemies in front, dealing Fire DMG.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Solid Hit!<br>Press Icon_Special to activate:<br>Recall a guard boar and launch it as a Line Drive. The guard boar will cause an explosion upon hitting enemies or walls, dealing Fire DMG.<br>Hold Icon_Special to activate:<br>Recall a guard boar and launch it as a Fly Ball. The guard boar will cause an explosion upon landing, dealing Fire DMG.<br><br>EX Special Attack: Home Run!<br>With enough Energy, press Icon_SpecialReady to activate:<br>Recall a guard boar and launch it as a Line Drive. The guard boar will cause an explosion upon hitting enemies or walls, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.<br>When the skill hits an enemy, it triggers a Quick Assist.<br>With enough Energy, hold Icon_SpecialReady to activate:<br>Recall a guard boar and launch it as a Fly Ball. The guard boar will cause an explosion upon landing, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.<br>When the skill hits an enemy, it triggers a Quick Assist.<br><br>Cheer On!<br>After using EX Special Attack, when a guard boar triggers an explosion, it will apply the Cheer On! status to all squad members and Bangboo, and the guard boars themselves. While under the Cheer On! status, allies' ATK increases by 22.6% of Lucy's initial ATK + 88, up to a maximum of 600. The Cheer On! status lasts for 10s when a Line Drive is hit, and 15s when a Fly Ball is hit. Repeated triggers reset the duration.",

            "Chain Attack": "Chain Attack: Grand Slam!<br>When a Chain Attack is triggered, select the character to activate:<br>Lucy jumps up and sends a guard boar at enemies in front in a large area, dealing massive Fire DMG.<br>Character is invulnerable while using this skill.<br>When the skill hits an enemy, it triggers a Quick Assist.<br><br>Ultimate: Walk-Off Home Run!<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Launch all guard boars sequentially, dealing massive Fire DMG in a large area to enemies ahead.<br>While using this skill, other squad members recover 10 energy, and the next character to switch in gains an additional 20 energy.<br>Character is invulnerable while using this skill.<br>When the skill hits an enemy, it triggers a Quick Assist.",

            "Core Skill": "Core Passive: Crimson Mane Guard<br>When Lucy uses her Special Attack or EX Special Attack, a guard boar will join the battle and call in two other guard boars. The guard boars inherit Lucy's ATK, Impact, and Anomaly Proficiency. The Cheer On! buff for the guard boars is increased to 200% of the original effect, and their attack frequency is increased.<br><br>Additional Ability: Batter Up!<br>When another character in your squad shares the same Attribute or Faction or is a Rupture character:<br>The guard boars inherit Lucy's CRIT Rate and CRIT DMG."
        },
        mindscapes: [
            { number: 1, name: "Drill Formations  ", desc: "When the guard boars launch Guard Boars: Spinning Swing!, Lucy recovers 2 Energy. This effect can trigger once every 15s, with each guard boar having its own separate cooldown." },
            { number: 2, name: "Little Boar Captain  ", desc: "When Lucy uses a Chain Attack or Ultimate, it grants all squad members and Bangboo, and the guard boars themselves the Cheer On! status for 10s." },
            { number: 3, name: "Ironfist Overseer  ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 4, name: "Chaos Ball Game  ", desc: "While in the Cheer On! state, allies' CRIT DMG is increased by an additional 10%." },
            { number: 5, name: "Wildland Princess ", desc: "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2" },
            { number: 6, name: "Fierce Fangs of Fire  ", desc: "When another squad member in the Cheer On! state hits an enemy with an EX Special Attack, a guard boar will drop from the sky and cause an explosion, dealing Fire DMG equal to 300% of the guard boar's ATK. This will extend the duration of the Cheer On! buff for all squad members and Bangboo, and for the guard boars themselves by 5s. The duration can increase up to 3 times, with a maximum duration of 30s. Refreshing the Cheer On! state resets the stack count. After the guard boar's explosion, it will launch Guard Boars: Spinning Swing!." }
        ]
    },
    {
        id: 43,
        name: "Piper",
        rarity: "A",
        element: "Physical",
        role: "Anomaly",
        faction: "Victoria Housekeeping",
        image: "image/пайпер.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Load Up and Roll Out<br>Press Icon_Normal to activate:<br>Unleashes up to 4 slashes, dealing Physical DMG.",

            "Ухилення + Атака": "Dodge: Handbrake Drift<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Pedal to the Metal<br>Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing Physical DMG.<br><br>Dodge Counter: Power Drift<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Unleash a downward smash attack in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Brake Tap<br>When the active character is launched, press Icon_Switch to activate:<br>Launches a downward smash attack at enemies in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Emergency Brake<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Overtaking Maneuver<br>Press Icon_Normal after a Defensive Assist to activate:<br>Charge and slash enemies in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Tire Spin<br>Press Icon_Special to activate:<br>Piper spins and launches a sweeping slash around her, dealing Physical DMG.<br>Hold Icon_Special to extend the skill duration, unleashing increasingly powerful spinning slashes and increasing the charge level of the skill up to 2 times.<br>If the skill is used after the first 3 hits of a Basic Attack, Dash Attack, or Dodge Counter, you can quickly activate Special Attack: Tire Spin of an increased charge level.<br>During the skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br><br>Special Attack: One Trillion Tons<br>While Special Attack: Tire Spin is active, release Icon_Special to trigger a downward smash attack based on the charge level of Special Attack: Tire Spin, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>EX Special Attack: Engine Spin<br>With enough Energy, continue holding Icon_SpecialReady after Special Attack: Tire Spin reaches maximum charge level to activate:<br>Rapidly spins, unleashing powerful spinning slashes around her and dealing massive Physical DMG.<br>This skill consumes Energy continuously for up to 3s.<br>During the skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br><br>EX Special Attack: Really Heavy<br>During EX Special Attack: Engine Spin, release Icon_SpecialReady to activate:<br>Piper unleashes a downward smash attack, dealing massive Physical DMG.<br>If the duration of EX Special Attack: Engine Spin reaches its limit or Energy drops to 20, EX Special Attack: Really Heavy will automatically activate.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Buckle Up<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful downward smash at enemies ahead in a large area, dealing massive Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Hold~ On~ Tight~<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Rapidly spins, unleashing powerful spinning slashes at enemies in a large area ahead, followed by a downward smash, dealing massive Physical DMG.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Power Charge<br>When Piper's EX Special Attack: Engine Spin or Ultimate hits an enemy, she gains 1 stack of Power, up to a maximum of 20 stacks, lasting for 12s. Repeated triggers reset the duration. For every stack of Power, Piper's Physical Anomaly Buildup Rate increases by 4%.<br><br>Additional Ability: Synced Acceleration<br>When another character in your squad shares the same Attribute or Faction:<br>When Piper has 20 or more stacks of Power, all squad members' DMG is increased by 18%."
        },
        mindscapes: [
            { number: 1, name: "Leisure Moment ", desc: "When Piper's Special Attack: Tire Spin, EX Special Attack: Engine Spin, or Ultimate hits an enemy with a spinning slash, there is a 50% chance to gain an additional stack of Power. The maximum stack limit of Power is increased to 30." },
            { number: 2, name: "Motivation  ", desc: "During Special Attack: Tire Spin and EX Special Attack: Engine Spin, Piper's movement speed increases. When using Special Attack: One Trillion Tons, EX Special Attack: Really Heavy, or Ultimate to launch a downward smash that hits an enemy, the Physical DMG dealt by the move is increased by 10%. For each stack of Power, this buff is further increased by 1%." },
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
        faction: "Victoria Housekeeping",
        image: "image/сет.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Lightning Strike<br>Press Icon_Normal to activate:<br>Unleashes up to 4 attacks in front, dealing Physical DMG and Electric DMG.<br><br>Basic Attack: Lightning Strike - Electrified<br>When Resolve is above or equal to 75%, hold Icon_Normal to activate.<br>Consume 75% Resolve to launch consecutive attacks in front, followed by a Finishing Move, dealing Electric DMG.<br>When the Finishing Move hits an enemy, it triggers the Quick Assist of the squad member positioned before Seth.<br>Anti-Interrupt level is increased while using this skill.",

            "Ухилення + Атака": "Dodge: Evasion Maneuver<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Thunder Assault<br>Press Icon_Normal during a Dodge to activate:<br>Charge forward with a shield attack, dealing Physical DMG.<br>Damage received during the move is decreased by 40%.<br><br>Dodge Counter: Retreat to Advance<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Unleash a quick downward slash on enemies in front, dealing Electric DMG.<br>After the move, hold Icon_SpecialReady to chain into EX Special Attack: Thunder Shield Rush - High Voltage, enabling faster charging.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Armed Support<br>When the active character is launched, press Icon_Switch to activate:<br>Unleash a quick downward slash on enemies in front, dealing Electric DMG.<br>After the move, hold Icon_SpecialReady to chain into EX Special Attack: Thunder Shield Rush - High Voltage, enabling faster charging.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Thundershield<br>When the on-field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Upon activation, gain 25% Resolve.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Public Security Ruling<br>Press Icon_Normal after a Defensive Assist to activate:<br>Launch a forward thrust attack, followed by two horizontal slashes, dealing Electric DMG.<br>When the skill hits an enemy, it triggers the Quick Assist of the squad member positioned before Seth.<br>After activating the move, hold Icon_SpecialReady to transition to EX Special Attack: Thunder Shield Rush - High Voltage and charge faster.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Thunder Shield Rush<br>Press Icon_Special to activate:<br>Launch two shield attacks forward, dealing Electric DMG.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Thunder Shield Rush - High Voltage<br>With enough Energy, press Icon_SpecialReady to activate:<br>Unleash a series of slashes in front, dealing massive Electric DMG.<br>Hold Icon_SpecialReady to charge the move, and Seth will dash forward, unleashing a series of powerful slashes, dealing massive Electric DMG.<br>Activating the move accumulates 75% Resolve.<br>Anti-Interrupt level is increased while charging this skill, and damage taken is reduced by 40%.<br>Seth is invulnerable during the consecutive slashes.",

            "Chain Attack": "Chain Attack: Final Judgment<br>When a Chain Attack is triggered, select the character to activate:<br>Launch a series of slashes in front, dealing massive Electric DMG.<br>Activating the move accumulates 75% Resolve.<br>After the move, hold Icon_SpecialReady to chain into EX Special Attack: Thunder Shield Rush - High Voltage, enabling faster charging.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Justice Prevails<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Launch a series of upward attacks in front, followed by a Finishing Move, dealing massive Electric DMG.<br>Activating the move accumulates 75% Resolve, and grants 3 additional Assist Points.<br>After the move, hold Icon_SpecialReady to chain into EX Special Attack: Thunder Shield Rush - High Voltage, enabling faster charging.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Protector<br>When Seth uses EX Special Attack: Thunder Shield Rush - High Voltage, he gains a Shield of Firm Resolve equal to 80% of his initial ATK, up to a max of 3,000 points, and lasting 25s. This effect can trigger once every 10s. When Basic Attack: Lightning Strike - Electrified or Assist Follow-Up: Public Security Ruling triggers a Quick Assist or Chain Attack, causing another squad member to enter the field, that squad member gains a Shield of Firm Resolve equal to 80% of Seth's initial ATK, up to a max of 3,000 points, and lasting 25s. This effect can trigger once every 10s. Having a Shield of Firm Resolve increases Anomaly Proficiency by 100.<br><br>Additional Ability: High Spirit<br>When another character in your squad shares the same Attribute or Faction:<br>When Seth's Chain Attack: Final Judgment or Finishing Move during Basic Attack: Lightning Strike - Electrified hits an enemy, the target's Anomaly Buildup RES to all Attributes is reduced by 20%, lasting 20s."
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
        faction: "Victoria Housekeeping",
        image: "image/IconRoleCrop01.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Turbo Volt<br>Press Icon_Normal to activate:<br>Unleashes up to 4 slashes. The first 3 hits deal Physical DMG, the 4th hit deals Electric DMG.<br><br>Basic Attack: Thunderbolt<br>After unleashing the 3rd hit of the Basic Attack, hold down or pause for a short while, and then press Icon_Normal to activate:<br>Unleashes a downward strike that deals Electric DMG.<br>Anti-Interrupt level is increased while using this skill.",

            "Ухилення + Атака": "Dodge: Slide<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Taser Blast<br>Press Icon_Normal during a dodge to activate:<br>Slashes all nearby enemies, dealing Physical DMG.<br><br>Dodge Counter: Thunderclap<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Slashes enemies in front, dealing Electric DMG.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Thunderfall<br>When the active character is launched, press Icon_Switch to activate:<br>Slashes enemies in front, dealing Electric DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Flash<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Lightning Whirl<br>Press Icon_Normal after a Defensive Assist to activate:<br>Perform a spinning slash against enemies in front, dealing Electric DMG.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Fork Lightning<br>Press Icon_Special to activate:<br>Unleashes an upward slash that deals Electric DMG.<br>This attack launches faster when used after the 3rd hit of the Basic Attack or Basic Attack: Thunderbolt.<br>Anti-Interrupt level is increased while using this skill.<br><br>EX Special Attack: Lightning Bolt<br>With enough Energy, press Icon_SpecialReady to activate:<br>Unleashes a powerful upward slash that deals massive Electric DMG.<br>This attack launches faster when used after the 3rd hit of Anton's Basic Attack or Basic Attack: Thunderbolt.<br>Character is invulnerable while using this skill.",

            "Chain Attack": "Chain Attack: Electro Engine<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful upwards slash at enemies in a small area, dealing massive Electric DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Overdrive Engine<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a powerful upward slash at enemies in a small area followed by several downward strikes, dealing massive Electric DMG.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Fluctuating Voltage<br>Launch a Basic Attack: Thunderbolt, Special Attack, or EX Special Attack after the 3rd hit of Anton's Basic Attack for an extra 64% Daze.<br><br>Additional Ability: Parallel Connection<br>When another character in your squad shares the same Attribute or Faction:<br>When Anton's Dodge Counter hits an enemy, he gains an extra 7.2 Energy. This effect can trigger once every 5s."
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
        faction: "Victoria Housekeeping",
        image: "image/IconRoleCrop10.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Full Firepower<br>Press Icon_Normal to activate: <br>Unleashes a piercing attack, dealing Physical DMG.<br>Repeatedly press or hold to enter Crouching Shot to extend the attack duration.<br>Drag the joystick during Crouching Shot to launch Rolling Shot and adjust the character's position, dealing Physical DMG.<br>Stop pressing or holding during Crouching Shot to launch Finishing Shot at enemies in front, dealing Physical DMG.",
            "Ухилення + Атака": "Dodge: Risky Business<br>Press Icon_Evade to activate:<br> A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Starlight Sanction<br>When dragging the joystick during a dodge, press Icon_Normal:<br>Launches a piercing attack at nearby enemies within a large area, dealing Physical DMG.<br> When not dragging the joystick during a dodge, press Icon_Normal:<br>Launches a piercing attack at enemies in a line, dealing Physical DMG.<br><br>Dodge Counter: Fair Fight<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Pierces enemies in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Power of Teamwork<br>When the active character is launched, press Icon_Switch to activate: <br>Launches a piercing attack at enemies in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Evasive Assist: Flash Spin<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Dodges the enemy's attack and activates Vital View.<br> Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Fatal Shot<br>Press Icon_Normal after an Evasive Assist to activate:<br>Pierces enemies in a large area in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Stand Still<br>Press Icon_Special to activate:<br> Performs up to 3 piercing attacks in a line, dealing Physical DMG.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Clearance Time<br>With enough Energy, press Icon_SpecialReady to activate:<br>Launches a powerful piercing attack in a line, dealing massive Physical DMG.<br>Character is invulnerable while using this skill.",
            "Ultimate": "Chain Attack: Starlight Mirage<br>When a Chain Attack is triggered, select the character to activate: <br>Unleashes a powerful piercing attack at surrounding enemies in a large area, dealing massive Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Starlight, Shine Bright<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br> Unleashes a powerful piercing attack at surrounding enemies in a large area, dealing massive Physical DMG.<br>Character is invulnerable while using this skill.",
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
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Wipeout<br>Press Icon_Normal to activate:<br>Unleashes up to 5 slashes, dealing Physical DMG.<br>Repeatedly press or hold the button during the 3rd and 5th hits to extend the chainsaw slash attack.",

            "Ухилення + Атака": "Dodge: Shoo!<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Oopsy-Daisy!<br>Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing Physical DMG.<br>Repeatedly press or hold the button to extend the chainsaw attack's duration.<br><br>Dodge Counter: Nope!<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Slashes enemies in front before detonating her chainsaw, dealing Physical DMG.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: Emergency Measures<br>When the active character is launched, press Icon_Switch to activate:<br>Slashes enemies in front before detonating her chainsaw, dealing Physical DMG.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: P—Please Allow Me!<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Quick Sweep<br>Press Icon_Normal after a Defensive Assist to activate:<br>Unleash a series of slashes against enemies in front followed by an explosive chainsaw, dealing Physical DMG.<br>Repeatedly press or hold to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Clean Sweep<br>Press Icon_Special to activate:<br>Unleashes a series of slashes upon enemies in front, before detonating the chainsaw, dealing Physical DMG.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Anti-Interrupt level is increased while using this skill, and DMG taken is reduced by 40%.<br><br>EX Special Attack: Skirt Alert<br>With enough Energy, press Icon_SpecialReady to activate:<br>Unleashes a series of powerful slashes upon enemies in front, before detonating the chainsaw, dealing massive Physical DMG.<br>Repeatedly press or hold the button to extend the chainsaw slash attack at the cost of Energy if the attack connects.<br>Character is invulnerable during the spinning slash.<br>Anti-Interrupt level is increased during the extended slash, and DMG taken is reduced by 40%.",

            "Chain Attack": "Chain Attack: Sorry...<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful slash at enemies in a small area, dealing massive Physical DMG.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Very, Very Sorry!<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a powerful slash at enemies in a small area, dealing massive Physical DMG.<br>Repeatedly press or hold the button to extend the chainsaw slash attack.<br>Character is invulnerable while using this skill.",

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
        faction: "Victoria Housekeeping",
        image: "image/ніеоль.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Cunning Combo<br>Press Icon_Normal to activate:<br>Unleashes up to 3 strikes, dealing Physical DMG.<br><br>Basic Attack: Do As I Please<br>After using a Special Attack, EX Special Attack, Chain Attack, or Ultimate, Nicole can reload, and her Basic Attack and Dash Attack are enhanced, increasing the power of her bullets.",

            "Ухилення + Атака": "Dodge: Speed Demon<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br>Drag the joystick to dodge, then hold Icon_Evade to reload while dodging, enhancing Basic Attacks and Dash Attacks up to 8 times.<br><br>Dash Attack: Jack in the Box<br>When dragging the joystick during a dodge, press Icon_Normal:<br>Dashes in the target direction and strikes nearby enemies, dealing Physical DMG.<br>When not dragging the joystick during a dodge, press Icon_Normal:<br>Vaults backward and launches a ranged strike against enemies in front, dealing Physical DMG.<br>Automatically reloads after the attack to enhance her Basic Attack and Dash Attack, up to 8 times.<br><br>Dodge Counter: Diverted Bombard<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Dodge backwards and send a ranged strike at enemies in front, dealing Ether DMG.<br>Character is invulnerable while using this skill.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.",

            "Assist": "Quick Assist: Emergency Bombard<br>When the active character is launched, press Icon_Switch to activate:<br>Dodge backwards and send a ranged strike at enemies in front, dealing Ether DMG.<br>Character is invulnerable while using this skill.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.<br><br>Defensive Assist: The Hare Strikes Back!<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Window of Opportunity<br>Press Icon_Normal after a Defensive Assist to activate:<br>Charge forward and bombard enemies, dealing Ether DMG.<br>Character is invulnerable while using this skill.",

            "Спеціальна атака": "Special Attack: Sugarcoated Bullet<br>Press Icon_Special to activate:<br>Unleashes a ranged strike against enemies in front, dealing Ether DMG.<br>Anti-Interrupt level is increased while using this skill.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.<br><br>EX Special Attack: Stuffed Sugarcoated Bullet<br>With enough Energy, press Icon_SpecialReady to activate:<br>A powerful ranged strike, generating an energy field that pulls enemies towards its center to deal Ether DMG.<br>Hold Icon_SpecialReady down to charge up this attack, during which a small energy field is generated at the muzzle as Energy is consumed, dealing bonus DMG to enemies nearby.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.",

            "Chain Attack": "Chain Attack: Ether Shellacking<br>When a Chain Attack is triggered, select the character to activate:<br>Unleashes a powerful ranged strike at enemies in a small area, generating an energy field that pulls enemies towards its center to deal Ether DMG.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.<br><br>Ultimate: Ether Grenade<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Unleashes a powerful ranged strike at enemies in a small area, generating an energy field that pulls enemies towards its center to deal Ether DMG.<br>When using this skill, other squad members recover 10 Energy. The next character to switch in gains an additional 20 Energy.<br>Character is invulnerable while using this skill.<br>A Quick Assist is triggered when this skill hits an enemy.<br>Automatically reloads after the attack to enhance Basic Attack and Dash Attack up to 8 times.",

            "Core Skill": "Core Passive: Mechanical Case<br>After hitting an enemy with a Special Attack, EX Special Attack, Chain Attack, or Ultimate, Nicole can reload, enhancing her Basic Attack and Dash Attack. When her enhanced bullets or Energy Field hits an enemy, the target's DEF is reduced by 40% for 3.5s.<br><br>Additional Ability: Hare of Many Burrows<br>When another character in your squad shares the same Attribute or Faction:<br>When Nicole's Core Passive: Mechanical Case applies a debuff to an enemy, all units deal 25% more Ether DMG to the target for 3.5s."
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
        faction: "Victoria Housekeeping",
        image: "image/сока.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Making Rice Cakes<br>Press Icon_Normal to activate:<br>Unleashes up to 3 attacks, dealing Physical DMG.<br><br>Basic Attack: Making Rice Cakes (Frosted Banner)<br>When Frosted Banner is active, press Icon_Normal to activate:<br>Unleashes up to 3 faster attacks in front, dealing Ice DMG.",

            "Ухилення + Атака": "Dodge: Grab a Bite<br>Press Icon_Evade to activate:<br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: 50/50<br>Press Icon_Normal during a dodge to activate:<br>Slashes enemies in front, dealing Physical DMG.<br><br>Dash Attack: 50/50 (Frosted Banner)<br>When Frosted Banner is active, press Icon_Normal during a Dodge to activate:<br>Slashes enemies in front, dealing Ice DMG.<br><br>Dodge Counter: Away From My Snacks<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Slashes enemies in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.",

            "Assist": "Quick Assist: A Set for Two<br>When the active character is launched, press Icon_Switch to activate:<br>Slashes enemies in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.<br><br>Defensive Assist: Guarding Tactics<br>When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow-Up: Sweeping Strike<br>Press Icon_Normal after a Defensive Assist to activate:<br>Charges and strikes enemies in front, dealing Ice DMG.<br>Character is invulnerable while using this skill.<br>Holding Icon_Normal while using this skill allows for a quick transition to Fly the Flag.",

            "Спеціальна атака": "Special Attack: Cooling Bento<br>Press Icon_Special to activate:<br>Soukaku releases a wind current in front of her and unleashes her finishing move, dealing Ice DMG.<br>During skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br>Holding Icon_Special while using this skill allows for a quick transition to Fly the Flag.<br><br>EX Special Attack: Fanning Mosquitoes<br>With enough Energy, press Icon_SpecialReady to activate:<br>Releases wind currents of extended range in front of her, dealing massive Ice DMG.<br>This skill can be triggered consecutively by pressing repeatedly. Each use consumes a specified amount of Energy. When Soukaku's Energy is depleted, or you stop pressing the button, she unleashes a powerful finishing move that deals massive Ice DMG.<br>During skill activation, Anti-Interrupt level increases, and DMG taken is reduced by 40%.<br>Holding Icon_Special while using this skill allows for a quick transition to Fly the Flag.<br><br>Special Attack: Rally!<br>Hold Icon_Special to activate:<br>Soukaku plunges her weapon into the ground, morphs it into a flag, and launches Fly the Flag, dealing Ice DMG. Hitting an enemy with Fly the Flag triggers a Quick Assist.<br>Pressing Icon_Normal or Icon_Special after Fly the Flag activates a Special Attack as she retracts the flag, dealing Ice DMG.<br>If Soukaku owns 3 stacks of Vortex on using Fly the Flag, she consumes all 3 stacks and enters the Frosted Banner state. In the Frosted Banner state, she can unleash an enhanced Basic Attack or an enhanced Dash Attack, dealing massive Ice DMG. This effect can last up to 45s or stack up to 6 times.<br>Soukaku's weapon gains Vortexes in the following circumstances:<br>Gains 1 stack of Vortex when launching an EX Special Attack,<br>Gains 1 stack of Vortex when launching a Chain Attack,<br>Gains 3 stacks of Vortex when launching an Ultimate.<br>Soukaku can accumulate a maximum of 3 stacks of Vortex.",

            "Chain Attack": "Chain Attack: Pudding Slash<br>When a Chain Attack is triggered, select the character to activate:<br>Soukaku quickly unleashes a series of strikes at enemies in front of her and follows up with Fly the Flag, dealing massive Ice DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Jumbo Pudding Slash<br>When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Soukaku quickly unleashes an extended series of strikes at enemies in front of her and follows up with Fly the Flag, dealing massive Ice DMG.<br>Upon activating this skill, Soukaku enters the Masked state, increasing her CRIT Rate by 15% for 15s.<br>Upon activating this skill, other squad members recover 10 Energy. The next character to switch in gains an additional 20 Energy.<br>Character is invulnerable while using this skill.",

            "Core Skill": "Core Passive: Blade Banner<br>When Soukaku launches Fly the Flag, her ATK is increased by 20% of her initial ATK, up to 500, for 22s. When consuming Vortex during Fly the Flag, the ATK increase is doubled, up to a max of 1,000. This buff can be passed along to characters switching in via Quick Assists or Chain Attacks triggered by Fly the Flag, and it refreshes the duration of the buff.<br><br>Additional Ability: Group Set Meal<br>When another character in your squad shares the same Attribute or Faction:<br>When Soukaku consumes Vortex to activate Fly the Flag, the Ice DMG of all squad members is increased by 20% for 22s."
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
        faction: "Victoria Housekeeping",
        image: "image/цинька.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Penultimate<br>Press Icon_Normal to activate:<br> Launch up to four strikes forward, dealing Physical DMG and Electric DMG.<br>During the 3rd hit, repeatedly press Icon_Normal to continue the attack, continuously striking the enemy.Using Dodge during this period will not interrupt Qingyi's Basic Attack combo count.<br> During the 3rd hit, stop pressing Icon_Normal to interrupt the continuous attack, transitioning automatically to the 4th hit.If the continuous attack lasts for a certain time, the 4th hit will be enhanced.<br>Anti - Interrupt Level is increased and DMG received is reduced by 40% during the 3rd and 4th hit.<br><br> Basic Attack: Enchanted Blossoms<br>Hold Icon_Normal to activate:<br>Launches a forward rush attack, dealing Electric DMG.<br>Anti - Interrupt level is increased while using this skill.<br><br>Flash Connect<br>When Qingyi deals Electric DMG with a skill, she accumulates Flash Connect Voltage.When Flash Connect Voltage reaches 75%, she will enter the Flash Connect state.When using her Basic Attack: Enchanted Moonlit Blossoms, Qingyi will consume all Flash Connect Voltage and exit the Flash Connect state.For every 1% of Flash Connect Voltage consumed over 75%, her Damage and Daze inflicted by this skill will be increased by 1%/0.5%. Basic Attack: Enchanted Moonlit Blossoms itself does not accumulate Flash Connect Voltage.<br> <br>Basic Attack: Enchanted Moonlit Blossoms<br>During the Flash Connect state, hold Icon_Normal to activate:<br>Launch five consecutive forward rush attacks, then execute a Finishing Move that inflicts massive Electric DMG.Release Icon_Normal during the move to trigger the Finishing Move early.<br>Activate the Finishing Move just before the character is attacked to trigger Perfect Dodge.<br> Anti - Interrupt level is increased and DMG received is reduced by 40% during the rush attack.Qingyi is invulnerable during the Finishing Move.",
            "Ухилення + Атака": "Dodge: Swan Song<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br> Character is invulnerable while using this skill.<br><br>Dash Attack: Breach<br>Press Icon_Normal during a Dodge to activate:<br>Rush forward and then launch an upward attack, dealing Physical DMG.<br><br>Dodge Counter: Lingering Sentiments<br> Press Icon_Normal during a Perfect Dodge to activate:<br> Leap into the air and then perform a downward attack, dealing Electric DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Wind Through the Pines<br>When the active character is launched, press Icon_Switch to activate: <br>Leap into the air and perform a downward attack, dealing Electric DMG.<br> Character is invulnerable while using this skill.<br><br> Defensive Assist: Graceful Embellishment<br>When the on- field character is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br> Assist Follow- Up: Song of the Clear River<br>Press Icon_Normal after a Defensive Assist to activate:<br>Rush forward with an attack and inject electrical energy into the ground, then pull back to trigger an explosion, dealing Electric DMG.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Sunlit Glory<br>Press Icon_Special to activate: <br>Quickly swings upward, followed by a downward smash, dealing Electric DMG.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Moonlit Begonia<br>With enough Energy, press Icon_SpecialReady to activate:<br> Quickly swings upward and leaps into the air, turning around to launch a series of attacks, then follows up with a powerful downward smash, dealing massive Electric DMG.<br>Hold Icon_SpecialReady to consume additional energy to increase the number of hits of the series of attacks.<br>Character is invulnerable while using this skill.<br>After executing the move, you can immediately follow up with the 3rd hit of a Basic Attack.",
            "Ultimate": "Chain Attack: Tranquil Serenade<br>When a Chain Attack is triggered, select the character to activate: <br>Launch a series of powerful strikes over a large area in front, dealing massive Electric DMG<br>When this attack hits an enemy, the skill's DMG increases by 3% for every stack of Subjugation in Core Passive: Eternal Seasons the target has.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Eight Sounds of Ganzhou<br>  When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Launch a series of powerful strikes over a large area in front, followed by a Finishing Move, dealing massive Electric DMG.<br>Character is invulnerable while using this skill.",
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
        faction: "Victoria Housekeeping",
        image: "image/цезар.webp",
        stats: {
            "HP": "7673",
            "ATK": "863",
            "DEF": "606",
            "Impact": "93",
            "CRIT Rate": "19.4%",
            "CRIT DMG": "50%",
            "Anomaly Mastery": "94",
            "Anomaly Proficiency": "93"
        },
        skills: {
            "Основна атака": "Basic Attack: Rampaging Slash<br>Press Icon_Normal to activate:<br> Unleashes up to 6 slashes ahead, dealing Physical DMG.<br><br> Basic Attack: Dead End<br>When there are sufficient Assist Points, hold Icon_Normal to activate:<br>Consume 1 Assist Point to toss the shield and attack nearby enemies in all directions, dealing Physical DMG.<br>Character is invulnerable while using this skill.",
            "Ухилення + Атака": "Dodge: Adrift<br>Press Icon_Evade to activate: <br>A quick dash dodge.<br>Character is invulnerable while using this skill.<br><br>Dash Attack: Hog Rush<br>Press Icon_Normal during a dodge to activate:<br> Strikes forward with the shield, dealing Physical DMG.<br> During skill activation, DMG taken is reduced by 40%, and when attacked by an enemy, Caesar blocks with the shield and gets knocked back.Following that, press Icon_Special or Icon_SpecialReady to trigger Retaliation and activate Special Attack: Roaring Thrust or EX Special Attack: Overpowered Shield Bash.<br><br>Dodge Counter: Eye For an Eye<br>Press Icon_Normal during a Perfect Dodge to activate:<br>Stabs at enemies in front, dealing Physical DMG.<br>Character is invulnerable while using this skill.",
            "Assist ": "Quick Assist: Lane Change<br>When the active character is launched, press Icon_Switch to activate: <br>Thrust at enemies in front, dealing Physical DMG.<br> Character is invulnerable while using this skill.<br><br>Defensive Assist: Aegis Shield<br> When the character on field is about to be attacked, press Icon_Switch to activate:<br>Parries the enemy's attack, dealing massive Daze.<br>This skill excels at parrying enemy attacks and reduces the consumption of Assist Points when the character is under intense attacks.<br>Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Aiding Blade<br>Press Icon_Normal after a Defensive Assist to activate:<br>Tosses the shield forward, unleashing a powerful spinning attack on enemies in front, followed by a slash that deals Physical DMG.<br>After activating the skill, press Icon_Special or Icon_SpecialReady to trigger a Retaliation, activating Special Attack: Roaring Thrust or EX Special Attack: Overpowered Shield Bash.<br>Character is invulnerable while using this skill.",
            "Спеціальна атака": "Special Attack: Shockwave Shield Bash<br>Press Icon_Special to activate:<br> Strike forward with the shield, dealing Physical DMG.<br>If Caesar is hit by an enemy at the beginning of the skill's activation, it will trigger a Perfect Block, negating the damage once and automatically following up with a Special Attack: Roaring Thrust.<br>After using the skill, Caesar enters a guard stance, reducing incoming damage by 40%.When attacked by an enemy, Caesar blocks with the shield and gets slightly knocked back.Press Icon_Special or Icon_SpecialReady to trigger Retaliation, activating Special Attack: Roaring Thrust or EX Special Attack: Overpowered Shield Bash<br>When Retaliation is triggered, Caesar is invulnerable while using the skill.<br><br>Special Attack: Roaring Thrust<br>After activating Special Attack: Shockwave Shield Bash, press Icon_Special to activate:<br>Thrusts forward, dealing Physical DMG.<br>If Perfect Block or Retaliation is not triggered, the Anti- Interrupt level is increased while using this skill.<br>Character is invulnerable while using this skill when Perfect Block or Retaliation is triggered.<br><br>EX Special Attack: Parry Counter<br>With enough Energy, press Icon_SpecialReady to activate:<br> Strikes forward with the shield, followed by a powerful thrust, dealing massive Physical DMG." +
                "<br>If Caesar is hit by an enemy at the beginning of the skill activation or an Interrupt is triggered with the shield strike, it will trigger Perfect Block, negating incoming damage once and countering with a shield attack.After triggering Perfect Block, press Icon_SpecialReady to activate EX Special Attack: Overpowered Shield Bash without consuming energy.<br>After using the skill, Caesar enters a guard stance, reducing incoming damage by 40%.When attacked by an enemy, Caesar blocks the attack and is knocked back.Press Icon_Special or Icon_SpecialReady to trigger Retaliation and activate Special Attack: Roaring Thrust or EX Special Attack: Overpowered Shield Bash<br>Character is invulnerable while using this skill.<br><br> EX Special Attack: Overpowered Shield Bash<br>After activating EX Special Attack: Parry Counter, with enough energy, press Icon_SpecialReady to activate:<br> Strikes forward with the shield, dealing massive Physical DMG.<br>If Caesar is hit by an enemy at the beginning of the skill activation or an Interrupt is triggered with the shield strike, it will trigger Perfect Block, negating incoming damage once and recovering the Energy used to activate the skill.<br> When the skill is activated through Perfect Block or Retaliation, it cannot trigger Perfect Block again.<br> Character is invulnerable while using this skill.<br><br>Stance Switch<br>When Caesar triggers a Perfect Block, Retaliation, or Defensive Assist, her impact is increased by 20% for 3s.",
            "Ultimate": "Chain Attack: Road Rage Slam<br>When a Chain Attack is triggered, select the character to activate: <br>Unleashes a powerful downward strike at enemies ahead, dealing massive Physical DMG.<br>Character is invulnerable while using this skill.<br><br>Ultimate: Savage Smash<br> When Decibel Rating is at Maximum, press Icon_UltimateReady to activate:<br>Tosses the shield forward, unleashing a powerful spinning attack on enemies in front, followed by a downward strike, dealing massive Physical DMG.<br> When hitting shielded enemies, the Daze dealt is increased by 100%.<br>Character is invulnerable while using this skill.",
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
        image: "image/deepseavisitor.webp",
        stats: {
            "Base ATK": "713",
        },
        skills: {

            "W-Engine Effect": "Increases Ice DMG by 25%. Upon hitting an enemy with a Basic Attack, the equipper's CRIT Rate increases by 10% for 8s. When dealing Ice DMG with a Dash Attack, the equipper's CRIT Rate increases by an additional 10% for 15s. The duration of each effect is calculated separately."

        }
    },
    {
        id: 2,
        name: "Hellfire Gears",
        rarity: "S",
        role: "Stun",
        image: "image/hellfiregears.webp",
        skills: {

            "W-Engine Effect": "While off-field, the equipper's Energy Regen increases by 0.6/s.<br>When using an EX Special Attack, the equipper's Impact is increased by 10% for 10s, stacking up to 2 times. The duration of each stack is calculated separately."

        }
    },
    {
        id: 3,
        name: "Steel Cushion",
        rarity: "S",
        role: "Attack",
        image: "image/steelcushion.webp",
        skills: {

            "W-Engine Effect": "Increases Physical DMG by 20%. The equipper's DMG increases by 25% when hitting the enemy from behind."

        }
    },
    {
        id: 4,
        name: "Weeping Cradle",
        rarity: "S",
        role: "Support",
        image: "image/weepingcradle.webp",
        skills: {

            "W-Engine Effect": "While off-field, the equipper's Energy Regen increases by 0.6/s. Attacks from the equipper increase all units' DMG against a struck target by 10% for 3 seconds. During this period, this effect is further increased by 1.7% every 0.5s, up to a maximum additional increase of 10.2%. Repeated triggers only refresh the duration without refreshing the DMG increase effect. Passive effects of the same name do not stack."

        }
    },
    {
        id: 5,
        name: "The Brimstone",
        rarity: "S",
        role: "Attack",
        image: "image/brimstone.webp",
        skills: {

            "W-Engine Effect": "Upon hitting an enemy with a Basic Attack, Dash Attack, or Dodge Counter, the equipper's ATK increases by 3.5% for 8s, stacking up to 8 times. This effect can trigger once every 0.5s. The duration of each stack is calculated separately."

        }
    },

    {
        id: 6,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Increases ATK by 12%.<br>When using a Special Attack or EX Special Attack, the equipper's Anomaly Proficiency is increased by 25 for 8s, stacking up to 3 times. The duration of each stack is calculated separately."

        }
    },

    {
        id: 7,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Increases CRIT Rate by 15%. Launching an EX Special Attack grants the equipper 8 Charge stacks, up to a maximum of 8 stacks. Whenever the equipper's Basic Attack or Dash Attack deals <span class='element-ether'>Ether DMG</span> , consumes a Charge stack and increases the skill's DMG by 35%."

        }
    },
    {
        id: 8,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Increases Physical DMG by 20%. The equipper's DMG increases by 25% when hitting the enemy from behind."

        }
    },
    {
        id: 9,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Upon activating a Dash Attack, gain 1 stack of Predatory Instinct. Each stack of Predatory Instinct increases the equipper's Physical DMG by 12% for 10s, stacking up to 3 times. This effect can trigger once every 0.5s and repeated triggers reset the duration. When entering combat or triggering Perfect Dodge, gain 3 stacks of Predatory Instinct. While Predatory Instinct is at maximum stacks, the equipper's Anomaly Buildup Rate increases by 40%."

        }
    },
    {
        id: 10,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "When a Basic Attack hits an enemy, gain 1 stack of Tea-riffic. Each stack of Tea-riffic increases the user's Impact by 0.7%, stacking up to 30 times, and lasting for 8s. The duration of each stack is calculated separately. Upon acquiring Tea-riffic, if the equipper possesses stacks of Tea-riffic greater than or equal to 15, all squad members' DMG is increased by 20% for 10s. Passive effects of the same name do not stack."

        }
    },
    {
        id: 11,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "While off-field, the equipper's Energy Regen increases by 0.6/s. When hitting an enemy with an EX Special Attack or Assist Attack, the equipper's DMG increases by 3.5%, stacking up to 10 times and lasting for 6s. This effect can trigger once every 0.3s. While off-field, the stack effect is doubled. Repeated triggers reset the duration. Upon obtaining the DMG increase effect, if the number of current stacks is greater than or equal to 5, then the equipper's Anomaly Proficiency increases by 50. This Anomaly Proficiency increase does not stack and lasts for 6s."

        }
    },
    {
        id: 12,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "The Shield value provided by the equipper increases by 30%. When any squad member triggers Interrupt or Perfect Dodge, all squad members' DMG increases by 18% and Daze dealt increases by 12% for 20s. Passive effects of the same name do not stack."

        }
    },
    {
        id: 13,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Upon launching a Quick Assist or Perfect Assist, the equipper's Impact increases by 25% for 8s. When the equipper launches and hits an enemy with a Basic Attack, apply Wilt to the target for 30s, stacking up to 20 times, repeated triggers reset the duration. When any squad member hits an enemy, for every stack of Wilt applied to the target, the CRIT DMG of the Ice DMG and Fire DMG dealt by that attack increases by 1.5%. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 14,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "The equipper's Electric Anomaly Buildup Rate increases by 30%. When Special Attacks or EX Special Attacks hit enemies suffering an Attribute Anomaly, the equipper's Anomaly Proficiency increases by 75 for 15s.When the equipper's Anomaly Proficiency is greater than or equal to 375, Disorder DMG inflicted by the equipper increases by 25%."

        }
    },
    {
        id: 15,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "CRIT DMG increases by 50%. When using an EX Special Attack or when any squad member applies an Attribute Anomaly to an enemy, the equipper's Ice DMG increases by 20%, stacking up to 2 times and lasting 15s. The duration of each stack is calculated separately."

        }
    },
    {
        id: 16,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "CRIT Rate increases by 10%. Dash Attack Electric DMG increases by 40%. When any squad member applies an Attribute Anomaly or Stuns an enemy, the equipper's CRIT Rate increases by an additional 10% for 15s."

        }
    },
    {
        id: 17,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "CRIT DMG increases by 50%. When the equipper enters combat, or activates a Chain Attack or Ultimate, they gain 1 stack of Heartstring. Each stack of Heartstring allows the equipper's Chain Attack and Ultimate to ignore 12.5% of the target's Fire RES, stacking up to 2 times and lasting 30s. Repeated triggers reset the duration."

        }
    },
    {
        id: 18,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "When any squad member enters the field through a Quick Assist, Chain Attack, Defensive Assist, or Evasive Assist, the equipper gains 5 Energy. This effect can trigger once every 5s. When the equipper consumes 25 or more Energy, the DMG dealt by all squad members increases by 10%, stacking up to 2 times, and lasting 20s. Repeated triggers reset the duration. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 19,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "When the equipper's Aftershock hits an enemy, causing Electric DMG, the target's DEF is reduced by 25% for 5s. Passive effects of the same name do not stack. When this effect is triggered, if the equipper is not the active character, they gain 1 stack of Spirit Lock, up to a maximum of 3 stacks. This can trigger only once per use of a skill. Each stack of Spirit Lock increases the equipper's Impact by 4%, lasting 12s. The duration of each stack is calculated separately. At full stacks of Spirit Lock, the equipper's Impact increases by an additional 8%."

        }
    },
    {
        id: 20,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "CRIT DMG is increased by 30%. When the equipper lands a hit with a Basic Attack, Special Attack, or Aftershock, they gain 1 stack of a buff. Each stack increases the equipper's CRIT DMG by an additional 10%, stacking up to 3 times. The effect lasts for 30s, with each stack's duration calculated separately, and can only be triggered once per use of a skill. With all 3 stacks, the equipper's Electric DMG increases by 20%."

        }
    },
    {
        id: 21,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Increases CRIT DMG by 45%. When using an EX Special Attack, Chain Attack, or Ultimate to deal Ice DMG, the equipper gains the Absolute Zero Death Sentence effect for 3s. While Absolute Zero Death Sentence is active, the character ignores 25% of the enemy's DEF when landing a hit."

        }
    },
    {
        id: 22,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Increases Anomaly Buildup Rate by 40%. When the equipper deals Ether DMG, their Anomaly Proficiency increases by 20 for 5s, stacking up to 6 times. This effect can trigger once every 0.5s, and repeated triggers reset the duration."
        }
    },
    {
        id: 23,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "The Daze dealt by the equipper's EX Special Attack, Chain Attack, and Ultimate increases by 28%.When using a Chain Attack or Ultimate to deal Fire DMG, the DMG dealt by all squad members increases by 10%, stacking up to 2 times and lasting 30s.The duration of each stack is calculated separately.Triggers once per use of a skill.Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 24,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "CRIT Rate increases by 20%. When the equipper launches an EX Special Attack, the character gains 1 stack of Qingming Companion effect, stacking up to 2 times and lasting 15s. On entering combat, immediately gain 2 stacks. Repeated triggers reset the duration. Each stack of the Qingming Companion effect increases the equipper's Ether DMG by 8%, and increases Ultimate and EX Special Attack Ether Sheer DMG by 10%."

        }
    },
    {
        id: 25,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "The equipper's Anomaly Mastery increases by 60. When inflicting Assault, the equipper's Physical DMG increases by 20% for 20s, stacking up to 2 times. Repeated triggers reset the duration. When the equipper enters combat, immediately gain 2 stacks."

        }
    },
    {
        id: 26,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "When the equipper's EX Special Attack or Ultimate deals Physical DMG, their Anomaly Mastery increases by 30 for 40s. When the equipper's Aftershock hits an enemy, all squad members' Anomaly Proficiency increases by 60 for 40s. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 27,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Increases CRIT Rate by 20%. When the equipper triggers an Aftershock that deals Fire DMG, their attacks ignore 15% of the target's DEF for 8s. Can stack once every 3s, up to 2 stacks. Repeated triggers reset the duration."

        }
    },
    {
        id: 28,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Increases CRIT Rate by 15%. When the equipper deals DMG with a Basic Attack or EX Special Attack, they gain 1 stack of a buff. Each stack increases the equipper's Electric DMG by 12.5%, up to 2 stacks. Each stack lasts 40s. The duration of each stack is calculated separately. Can trigger once per use of a skill. At 2 stacks, the wearer's Basic Attack and Ultimate DMG ignore 20% of enemy DEF."

        }
    },
    {
        id: 29,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "When the equipper's HP decreases, their Ice Sheer DMG increases by 6%, stacking up to 3 times and lasting 25s. The duration of each stack is calculated separately. This effect can trigger once every 0.5s. When the equipper's HP falls to 50% of Max HP or below, CRIT Rate increases by 20%."
        }
    },
    {
        id: 30,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "The equipper's Energy Regen increases by 0.4/s. When the equipper activates Ether Veil or extends its duration, all squad members gain 25% increased DMG and 15% increased Max HP for 45s. Repeated triggers reset the duration. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 31,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "CRIT Rate increases by 20%. When the equipper launches an EX Special Attack, their Fire Sheer DMG increases by 9%, stacking up to 2 times and lasting 20s. The duration of each stack is calculated separately."

        }
    },
    {
        id: 32,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "While off-field, the equipper's Energy Regen increases by 1.5/s. When the equipper deals Physical DMG with an EX Special Attack, the Daze dealt by the equipper's attacks increases by 9% for 10s, stacking up to 3 times. At 3 stacks, all squad members gain 30% additional CRIT DMG for 40s. Repeated triggers reset the duration. Only one instance of this CRIT DMG boost effect can exist in the same squad."

        }
    },
    {
        id: 33,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "The equipper's Energy Regen increases by 0.46/s. All squad members gain 10% ATK and 10% Max HP. Only one instance of this effect can exist in the same squad. When the equipper activates or extends an Ether Veil, all squad members gain 30% CRIT DMG for 60s. Repeated triggers reset the duration."

        }
    },
    {
        id: 34,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "The equipper's DMG ignores 20% of the target's Physical RES. When the equipper activates an Ether Veil, the equipper's DMG increases by 25% and CRIT DMG increases by 25% for 40s. Repeated triggers reset the duration."

        }
    },
    {
        id: 35,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "Increases the equipper's Anomaly Proficiency by 90. When the equipper is an Ether character, and comes on-field or uses a Special Attack or EX Special Attack, they gain a buff: DMG dealt to enemies afflicted with Attribute Anomalies increases by 20%, and all Attribute Anomaly DMG they trigger increases by 10%, lasting 15s. Repeated triggers reset the duration, and the effect is removed when switching off-field."

        }
    },
    {
        id: 36,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "While not the active character, the equipper's Energy Regen increases by 0.6/s. When the equipper uses an EX Special Attack and deals Physical DMG, all squad members gain a buff that increases DMG dealt by 12.5% for 40s, stacking up to 2 times. Repeated triggers reset the duration. At 2 stacks, characters gain an additional 10% ATK. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 37,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "CRIT Rate increases by 25%. When the equipper consumes at least 20 Energy in a single instance, every 20 Energy consumed grants 3s of a buff: when dealing Electric DMG, ignore 28% of the target's DEF. Repeated triggers extend the duration, up to a maximum of 30s. When entering combat, gain 10s of this buff. While the equipper is not the active character, the duration no longer decreases."

        }
    },
    {
        id: 38,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "W-Engine Effect": "The equipper's Anomaly Proficiency increases by 90. When the equipper's EX Special Attack or Basic Attack deals Ether DMG, all squad members' DMG dealt increases by 15% for 40s, stacking up to 2 times. This effect can trigger once per use of a skill and repeated triggers reset the duration. With 2 stacks, the equipper's Anomaly Proficiency increases by an additional 60. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 39,
        name: "The Simmering Pot",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Red Chili Oil Hot Pot ": "When activating an Assist Follow-Up, the equipper's Daze inflicted on the target increases by 7.2%, and DMG dealt increases by 7.2% for 30s. Repeated triggers reset the duration."

        }
    },
    {
        id: 40,
        name: "Cauldron of Clarity",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Summoning Arcanum ": "When the equipper activates an EX Special Attack, they gain 1 stack of a buff. Each stack increases the equipper's DMG by 4%, up to 3 stacks, and lasting 20s. This effect can trigger once every 0.5s, and repeated triggers reset the duration. At 3 stacks, the equipper's CRIT Rate increases by 6.5%."

        }
    },
    {
        id: 41,
        name: "Grill O'Wisp",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Caged Fire": "The equipper's Fire DMG increases by 15%. When the equipper's HP decreases, their CRIT Rate increases by 15% for 5s."

        }
    },
    {
        id: 42,
        name: "Puzzle Sphere",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Ingenious Craft ": "TUpon launching an EX Special Attack, the equipper's CRIT DMG increases by 16% for 12s. Additionally, if the target's current HP is below 50% of their Max HP, EX Special Attack DMG increases by 20%."

        }
    },
    {
        id: 43,
        name: "Radiowave Journey",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Easy Strides ": "When launching a Chain Attack or Ultimate, the equipper gains 1 stack of a buff effect. Each stack increases the equipper's Sheer Force by 80, stacking up to 3 times, and lasting 12s. The duration of each stack is calculated separately."

        }
    },
    {
        id: 44,
        name: "Reel Projector",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Flash Engraving ": "When a squad member's HP is greater than or equal to 50%, they take 7.5% less DMG, and 10% less Miasma Contamination. Only one instance of this effect can exist in the same squad."

        }
    },
    {
        id: 45,
        name: "Tremor Trigram Vessel",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Meridian Mapping": "The equipper's EX Special Attack and Ultimate DMG increases by 25%. Whenever any squad member takes DMG or recovers HP, the equipper gains 2 Energy. This effect can trigger once every 5s."
        }
    },
    {
        id: 46,
        name: "Box Cutter",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Watch Your Fingers": "Upon launching an Aftershock, the equipper's Physical DMG increases by 15%, and Daze increases by 10%, lasting 10s."

        }
    },
    {
        id: 47,
        name: "Marcato Desire",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Get Everyone Fired Up ": "When an EX Special Attack or Chain Attack hits an enemy, the equipper's ATK increases by 6% for 8s. While the target is under an Attribute Anomaly, this effect is increased by an additional 6%."

        }
    },
    {
        id: 48,
        name: "Gilded Blossom",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Extraordinary Anti-Theft Measures": "ATK increases by 6%, and DMG dealt by EX Special Attacks increases by 15%."

        }
    },
    {
        id: 49,
        name: "Peacekeeper - Specialized",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Standard Blocking Technique ": "While Shielded, the equipper's Energy Regen increases by 0.4/s. The Anomaly Buildup of EX Special Attacks and Assist Follow-Ups increase by 36%."

        }
    },
    {
        id: 50,
        name: "Street Superstar",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Flaming Bars ": "Whenever a squad member launches a Chain Attack, the equipper gains 1 Charge stack, stacking up to 3 times. Upon activating their own Ultimate, the equipper consumes all Charge stacks, and each stack increases the skill's DMG by 15%."

        }
    },
    {
        id: 51,
        name: "Slice of Time",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Say Cheese ": "Any squad members' Dodge Counter, EX Special Attack, Assist Attack, or Chain Attack respectively generates 20/25/30/35 more Decibels and generates 0.7 Energy for the equipper. This effect can trigger once every 12s. The cooldown for each type of attack is independent of others. Passive effects of the same name do not stack."

        }
    },
    {
        id: 52,
        name: "Rainforest Gourmet",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Dinner's Ready!": "For every 10 Energy consumed, the equipper gains a buff that increases ATK by 2.5% for 10s, stacking up to 10 times. The duration of each stack is calculated separately."

        }
    },
    {
        id: 53,
        name: "Starlight Engine",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Knight's Combo ": "Launching a Dodge Counter or Quick Assist increases the equipper's ATK by 12% for 12s."

        }
    },
    {
        id: 54,
        name: "Steam Oven",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Thick Broth ": "For every 10 Energy accumulated, the equipper's Impact is increased by 2%, stacking up to 8 times. After Energy is consumed, this bonus remains for 8 more seconds. The duration of each stack is calculated separately."

        }
    },
    {
        id: 55,
        name: "Precious Fossilized Core",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Behemoth Hunter ": "When the target's HP is no lower than 50%, the equipper inflicts 10% more Daze to the target. When the target's HP is no lower than 75%, this bonus is further increased by 10%."

        }
    },
    {
        id: 56,
        name: "Original Transmorpher",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Starlight Knight Flying Kick": "Increases Max HP by 8%. When attacked, the equipper's Impact is increased by 10% for 12s."

        }
    },
    {
        id: 57,
        name: "Weeping Gemini",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Lingering Cries ": "Whenever a squad member inflicts an Attribute Anomaly on an enemy, the equipper gains a buff that increases Anomaly Proficiency by 30, stacking up to 4 times. This effect expires when the target recovers from Stun or is defeated. The duration of each stack is calculated separately."

        }
    },
    {
        id: 58,
        name: "Electro-Lip Gloss",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Kiss of Death": "When there are enemies inflicted with Attribute Anomaly on the field, the equipper's ATK increases by 10% and they deal an additional 15% more DMG to the target."

        }
    },
    {
        id: 59,
        name: "Bunny Band",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Pet the Bunny ": "Increases Max HP by 8%. Increases the equipper's ATK by 10% when they are shielded."

        }
    },
    {
        id: 60,
        name: "Spring Embrace",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Hot Spring Soup ": "Reduces DMG taken by 7.5%. When attacked, the equipper's Energy Generation Rate increases by 10% for 12s. When the equipper switches off-field, this buff will be transferred to the new on-field character with its duration refreshed. Passive effects of the same name do not stack."

        }
    },
    {
        id: 61,
        name: "Demara Battery Mark II",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "In a Flash of Light ": "Increases Electric DMG by 15%. When the equipper hits an enemy with a Dodge Counter or Assist Attack, their Energy Generation Rate increases by 18% for 8s."

        }
    },
    {
        id: 62,
        name: "The Vault",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Money-Lover ": "Dealing Ether DMG using an EX Special Attack, Chain Attack, or Ultimate increases all units' DMG against the target by 15% and increases the equipper's Energy Regen by 0.5/s for 2s. Passive effects of the same name do not stack."

        }
    },
    {
        id: 63,
        name: "Housekeeper",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Safe Household Saw": "While off-field, the equipper's Energy Regen increases by 0.45/s. When an EX Special Attack hits an enemy, the equipper's Physical DMG increases by 3%, stacking up to 15 times and lasting 1s. Repeated triggers reset the duration."

        }
    },
    {
        id: 64,
        name: "Starlight Engine Replica",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Knight Beam: Change": "Increases the equipper's Physical DMG against the target by 36% for 8s upon hitting an enemy at least 6 meters away with a Basic Attack or Dash Attack."

        }
    },
    {
        id: 65,
        name: "Drill Rig - Red Axis",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Hell's Generator ": "When launching an EX Special Attack or Chain Attack, Electric DMG from Basic Attacks and Dash Attacks increases by 50% for 10s. This effect can trigger once every 15s."

        }
    },
    {
        id: 66,
        name: "Big Cylinder",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Ten Ton Top ": "Reduces DMG taken by 7.5%. After being attacked, the next attack to hit an enemy will trigger a critical hit and deal 600% of the equipper's DEF as additional DMG. This effect can be triggered once every 7.5s."

        }
    },
    {
        id: 67,
        name: "Bashful Demon",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Visage of Greed": "Increases Ice DMG by 15%. When launching an EX Special Attack, all squad members' ATK increases by 2% for 12s, stacking up to 4 times. Repeated triggers reset the duration. Passive effects of the same name do not stack."

        }
    },
    {
        id: 68,
        name: "Kaboom the Cannon",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Stampede Accident ": "When any friendly unit in the squad attacks and hits an enemy, all friendly units' ATK increases by 2.5% for 8s, stacking up to 4 times. The duration of each stack is calculated separately, and each friendly unit can provide 1 stack of the buff. Passive effects of the same name do not stack."

        }
    },
    {
        id: 69,
        name: "Roaring Ride",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Collision Potential ": "When EX Special Attack hits an enemy, one of three possible effects is randomly triggered for 5 seconds. This effect can trigger once every 0.3s. The same types of effects cannot stack. Repeated triggers reset the duration, allowing several effects to be active at once:<br><br>Increases the equipper's ATK by 8%, increases the equipper's Anomaly Proficiency by 40, or increases the equipper's Anomaly Buildup Rate by 25%."

        }
    },
    {
        id: 70,
        name: "Cannon Rotor",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Oversized Barrel ": "Increases ATK by 7.5%. Landing a critical hit on an enemy will inflict an additional 200% of ATK as DMG. This effect can trigger once every 8s."

        }
    },
    {
        id: 71,
        name: "Unfettered Game Ball",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {

            "Game Start! ": "Whenever the equipper's attack triggers an Attribute Counter effect, all units' CRIT Rate against the struck enemy increases by 12% for 12s. Passive effects of the same name do not stack."

        }
    },
    {
        id: 72,
        name: "Six Shooter",
        rarity: "A",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
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
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Portable Machine Gun - Debt-Clearer ": "Active Skill<br><br> Builds a machine gun and continuously shoots enemies, dealing massive Physical DMG.",
            "Street Code ": "Additional Ability<br><br>When there's at least 2 Cunning Hares characters in your squad: Bangboo Chain Attack DMG increases with fewer enemies in combat, up to a max of 45%.",
            "Portable Machine Gun - Gatling Debt-Clearer": "Bangboo Chain Attack<br><br>Uses machine guns and cannons to continuously attack the target, dealing massive Physical DMG."
        }
    },
    {
        id: 2,
        name: "Sharkboo",
        rarity: "S",
        element: "Ice",
        image: "image/sharkboo.webp",
        stats: {
            "HP": 900,
            "ATK": 180,
            "DEF": 160
        },
        skills: {
            "Drylands Shark Hunt ": "Active Skill<br><br> Plants a homing trap underfoot which bites, tears, and summons torpedos at triggering enemies, dealing Ice DMG and accumulating Ice Anomaly Buildup.",
            "Cold Surge": "Additional Ability<br><br>When there's at least 2 Ice Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "Relentless Pursuit": "Bangboo Chain Attack<br><br>Summons a homing trap and leaps toward the target, causing an explosion upon landing that deals Ice DMG and accumulates massive Ice Anomaly Buildup."
        }
    },
    {
        id: 3,
        name: "Butler",
        rarity: "S",
        element: "Physical",
        image: "image/butler.webp",
        stats: {
            "HP": 950,
            "ATK": 170,
            "DEF": 170
        },
        skills: {
            "Tea Break ": "Active Skill<br><br> Creates a heartfelt afternoon snack. The snack will generate Energy for the receiving Agent once made and delivered.",
            "Personal Butler": "When there's at least 2 Victoria Housekeeping Co. characters in your squad: Active Skill generates an additional 20% Energy.",
            "Afternoon Dessert": "Bangboo Chain Attack<br><br>Use a frying pan and pancakes to attack enemies from afar, dealing massive Physical DMG."
        }
    },
    {
        id: 4,
        name: "Safety",
        rarity: "S",
        element: "Physical",
        image: "image/safety.webp",
        stats: {
            "HP": 1100,
            "ATK": 160,
            "DEF": 180
        },
        skills: {
            "Boring Burst ": "Active Skill<br><br> Enters the driving state and charges enemies, launching a drilling attack upon hit and dealing Physical DMG.",
            "Drill Team Mobilization ": "Additional Ability<br><br>When there's at least 2 Belobog Heavy Industries characters in your squad: Bangboo Chain Attack DMG increases by 20%. If the target is Burning or Shocked, this buff increases by an additional 20%.",
            "Demolition Drill ": "Bangboo Chain Attack<br><br>Enters the driving state and charges enemies, launching a multi-hit drilling attack upon hit and dealing massive Physical DMG."
        }
    },
    {
        id: 5,
        name: "Rocketboo",
        rarity: "S",
        element: "Fire",
        image: "image/rocketboo.webp",
        stats: {
            "HP": 980,
            "ATK": 210,
            "DEF": 140
        },
        skills: {
            "Boom!  ": "Active Skill<br><br> Mounts a rocket and charges at the target. Upon hitting a target, the rocket will explode, dealing Fire DMG to enemies within range and accumulating Fire Anomaly Buildup.",
            "Refueling": "Additional Ability<br><br>When there's at least 2 Fire Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "Ka-Boom Express Shipping ": "Bangboo Chain Attack<br><br>Mounts a rocket and charges at the target. Upon hitting a target, the rocket will explode, dealing Fire DMG to enemies in a large area and inflicting massive Fire Anomaly Buildup."
        }
    },
    {
        id: 6,
        name: "Resonaboo",
        rarity: "S",
        element: "Ice",
        image: "image/penguinboo.webp",
        stats: {
            "HP": 920,
            "ATK": 160,
            "DEF": 150
        },
        skills: {
            "Mini-Black Hole  ": "Active Skill<br><br> Summons an Ether black hole that continuously pulls in enemies, dealing Ether DMG to enemies struck and accumulating Ether Anomaly Buildup.",
            "Radiation Effect": "Additional Ability<br><br>When there's at least 2 Ether Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "Primordial Black Hole": "Bangboo Chain Attack<br><br>Throws an Ether bomb at the target, dealing Ether DMG and accumulating massive Ether Anomaly Buildup."
        }
    },
    {
        id: 7,
        name: "Plugboo",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Shock Sniper ": "Active Skill<br><br>Unleashes an EM cannon attack on the enemy, dealing Electric DMG and accumulating Electric Anomaly Buildup.",
            "Electromancer": "Additional Ability<br><br>When there's at least 2 Electric Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "High-Voltage Resistance ": "Bangboo Chain Attack<br><br>Unleash a strong electric attack on all nearby enemies in a large area, dealing Electric DMG and inflicting massive Electric Anomaly Buildup."
        }
    },
    {
        id: 8,
        name: "Officer Cui",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Awoo! Woof Woof!  ": "Active Skill<br><br> Launches a two hit attack, tearing and biting enemies ahead and dealing Physical DMG.",
            "Provisional Security Canine ": "Additional Ability<br><br>When there's at least 2 New Eridu Public Security characters in your squad: When using the Active Skill, there is a 50% chance to follow-up with 1 extra hit of the biting attack, up to a maximum of 3 consecutive triggers.Bangboo Chain Attack DMG increases by 35%.",
            "Woof Woof Woof Woof! ": "Bangboo Chain Attack<br><br>Continuously bites and tears enemies in front, dealing massive Physical DMG."
        }
    },
    {
        id: 9,
        name: "Red Moccus",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Roaring Wheels  ": "Active Skill<br><br> Rides a motorcycle and pushes the farthest enemy towards the Agent, dealing Physical DMG.",
            "Drifting Technique ": "Additional Ability<br><br>When there's at least 2 Sons of Calydon characters in your squad: Active Skill DMG increases by 36%. After an Active Skill deals DMG to an enemy, when that enemy is defeated, the skill's cooldown is reduced by 4s.",
            "Mad Charge ": "Bangboo Chain Attack<br><br>Run enemies over with a motorcycle and detonate an explosion, dealing massive Physical DMG."
        }
    },
    {
        id: 10,
        name: "Agent Gulliver",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Emergency Operation  ": "Active Skill<br><br> Shoots 3 piercing attacks, dealing Electric DMG and accumulating Electric Anomaly Buildup.",
            "Bangboo Assault Squad ": "Additional Ability<br><br>When there's at least 2 Hollow Special Operations Section 6 characters in your squad: When Active Skill or Bangboo Chain Attack hit Shocked enemies, the DMG increases by 30%. When attacking enemies under other non-Electric Attribute Anomalies, attacks accumulate 60% more Anomaly Buildup.",
            "Assault Time": "Bangboo Chain Attack<br><br>Shoots 1 powerful piercing attack, dealing Electric DMG and inflicting massive Electric Anomaly Buildup."
        }
    },
    {
        id: 11,
        name: "Snap",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Snap! Look at the Camera! ": "Active Skill<br><br> Wipes the lens, obtaining 3 Film. While Snap has Film, when an Agent triggers a Dodge Counter, Quick Assist, or Assist Follow-Up, Snap will consume 1 Film to take a snapshot and apply the Superstar status to the Agent, increasing their DMG for 10s.",
            "Superstar Moment ": "Additional Ability<br><br>When there's at least 2 Stars of Lyra characters in the squad: When Snap applies the Superstar status to an Agent, immediately restore the Agent's Health equal to 4% of its Max HP.",
            "Snap! Don't Blink! ": "Bangboo Chain Attack<br><br>Use a powerful flash against the target, dealing Ether DMG and accumulating Ether Anomaly Buildup."
        }
    },
    {
        id: 12,
        name: "Robin",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "The Curtain Falls  ": "Active Skill<br><br> Fire a series of random cards using a magic gun, each triggering different effects based on card type:<br><br>Hearts – Deals massive Physical DMG.<br><br>Spades – Deals Physical DMG and inflicts massive Daze.<br><br>Crowns – Deals Ether DMG and accumulates massive Ether Anomaly Buildup.",
            "Cold Surge": "Additional Ability<br><br>When there's at least 1 Mockingbird character in the squad: When the on-field Agent in the squad meets the Specialty requirements, the Active Skill fires a fixed card with a buff:<br><br>Attack: Fires only Hearts, increasing the DMG by 45%.<br><br>Stun: Fires only Spades, increasing the Daze buildup by 27%.<br><br>Anomaly: Fires only Crowns, increasing the Anomaly Buildup by 90%.",
            "Relentless Pursuit": "Bangboo Chain Attack<br><br>Throws a magic grenade forward, dealing Ether DMG and inflicting Ether Anomaly Buildup."
        }
    },
    {
        id: 13,
        name: "Belion",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Phoenix Ball Dance ": "Active Skill<br><br> Hurl a stone ball at the enemy, that bounces between them, dealing massive Physical DMG to all enemies hit.",
            "Way of Clouds ": "Additional Ability<br><br>When there are 2 or more Yunkui Summit characters in your squad: Belion's DMG increases by 25%. When an Agent activates an Ultimate, the cooldown of Belion's Active Skill is reduced by 4s. Can trigger up to 2 times. Belion's Active Skill refreshes the available trigger count.",
            "Silver Lion Crash": "Bangboo Chain Attack<br><br>Performs a spinning, ramming attack on enemies ahead, dealing massive Physical DMG."
        }
    },
    {
        id: 14,
        name: "Miss Esme",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Starbeam Transformation  ": "Active Skill<br><br> Transform and take flight, randomly summoning three Spectral Bubbles or Twinkling Stars in quick succession:<br><br>When a character touches a Spectral Bubble they restore HP.<br><br>When a character touches a Twinkling Star they regain Energy.<br><br>The greater the on- field character's HP percentage, the higher the chance Miss Esme has of summoning a Twinkling Star.",
            "Starshine Shift ": "Additional Ability<br><br>When there's at least 2 Spook Shack character(s) in your squad:<br><br>When a character touches a Spectral Bubble, HP recovered increases by 20%.<br><br>When a character touches a Twinkling Star, Energy generated increases by 20%.",
            "Stellar Bomb ": "Bangboo Chain Attack<br><br>Hurl a magical bomb, dealing Physical DMG and accumulating massive Physical Anomaly Buildup."
        }
    },
    {
        id: 15,
        name: "Mercury",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Tactical Strategy I: Frontline Suppression ": "Active Skill<br><br> Mercury summons a vehicle and drives it, unleashing continuous flames at enemies to deal massive Fire DMG.",
            "Tactical Strategy II: Combat Synergy ": "Additional Ability<br><br>When there's at least 2 Defense Force characters in your squad: When an Agent deals Aftershock DMG, Mercury's next Active Skill gains 22.5% increased DMG. Can stack once every 5s, up to 2 stacks.",
            "Tactical Strategy III: Explosive Ambush": "Bangboo Chain Attack<br><br>Loads itself into the vehicle as ammunition and fires at enemies, detonating on impact and dealing massive Fire DMG."
        }
    },
    {
        id: 16,
        name: "Birkblick",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Montage Combo ": "Active Skill<br><br> Deploys a floating turret that can fire up to 3 laser volleys at the target, dealing Physical DMG and accumulating a large amount of Daze.",
            "Observer Effect": "Additional Ability<br><br>When there's at least 2 Krampus Compliance Authority characters in your squad: When an Agent uses an EX Special Attack, Birkblick's Daze inflicted increases by 4%, stacking up to 3 times and lasting 15s. Repeated triggers reset the duration. At 3 stacks, DMG increases by 10%.",
            "Battlefield Close-Up ": "Bangboo Chain Attack<br><br>Fires a powerful laser from the floating turret, dealing massive Physical DMG."
        }
    },
    {
        id: 17,
        name: "Sprout",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Six-Star Flight ": "Active Skill<br><br> When the skill activates, if there's no Sword on the field, Sprout summons six flying swords to attack the target, dealing Physical DMG and accumulating Physical Anomaly Buildup.<br><br>If a Sword is already on the field, Sprout steps onto it and charges up, unleashing a stronger flurry of slashes that deals massive Physical DMG and accumulates Physical Anomaly Buildup.",
            "Heartbound Bond ": "Additional Ability<br><br>When Ye Shunguang is in the squad: Sprout's DMG increases by 30%. When using its Active Skill while in Ether Veil: Verdict, 1 Sword is summoned to the field.",
            "Sword of Unification ": "Bangboo Chain Attack<br><br>Summons a massive Sword of Unification that stabs enemies, dealing massive Physical DMG and accumulating Physical Anomaly Buildup."
        }
    },
    {
        id: 18,
        name: "Bangvolver",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "Revolver of Fortune ": "Active Skill<br><br> Use a random bullet for different moves:<br><br>Powerful Firework Shell: Fires at the enemy with great force, dealing massive Physical DMG and accumulating a large amount of Physical Anomaly Buildup.<br><br>Regular Firework Shell: Fires at the enemy, dealing Physical DMG and accumulating Physical Anomaly Buildup.<br><br>Paintball: Fails to fire as flowers leave the muzzle.",
            "Luck is Skill ": "Additional Ability<br><br>When there's at least 2 Physical Attribute characters in your squad: Bangboo Chain Attack inflicts 100% more Anomaly Buildup.",
            "Lucky Trigger ": "Bangboo Chain Attack<br><br>Fire continuous shots at the target, dealing Physical DMG and accumulating massive Physical Anomaly Buildup."
        }
    },
    {
        id: 19,
        name: "Biggest Fan",
        rarity: "S",
        element: "Physical",
        image: "image/amillion.webp",
        stats: {
            "HP": 1000,
            "ATK": 200,
            "DEF": 150
        },
        skills: {
            "I Stan My Angels  ": "Active Skill<br><br> Upon activating this skill, Biggest Fan starts cheering, continuously restoring HP to the currently controlled character based on Biggest Fan's Max HP.",
            "Fandom Power Unleashed ": "Additional Ability<br><br>When there's at least 2 Angels of Delusion characters in your squad: When Biggest Fan uses its Active Skill, all Agents in the squad gain 50 ATK for 30s.The Attribute Anomaly Buildup dealt by Bangboo Chain Attack is increased by 15%.",
            "Grab the Merch!": "Bangboo Chain Attack<br><br>Swings glow sticks to attack enemies in front, dealing Ether DMG and massive Ether Anomaly Buildup."
        }
    },
];

const drivediscs = [
    {
        id: 1,
        name: "Astral Voice",
        image: "image/астра сет.webp",
        skills: {
            "2-Piece Set": "ATK +10%",
            "4-Piece Set": "Whenever any squad member enters the field using a Quick Assist, all squad members gain 1 stack of Astral, up to a maximum of 3 stacks, and lasting 15s. Repeated triggers reset the duration. Each stack of Astral increases the DMG dealt by the character entering the field using a Quick Assist by 8%. Passive effects of the same name do not stack."

        }
    },
    {
        id: 2,
        name: "Branch & Blade Song",
        image: "image/міябі сет.webp",
        skills: {
            "2-Piece Set": "CRIT DMG +16%",
            "4-Piece Set": "When Anomaly Mastery exceeds or equals 115 points, the equipper's CRIT DMG increases by 30%. When any squad member applies Freeze or triggers the Shatter effect on an enemy, the equipper's CRIT Rate increases by 12%, lasting 15s."
        }
    },
    {
        id: 3,
        name: "Shadow Harmony",
        image: "image/деш сет.webp",
        skills: {
            "2-Piece Set": "The DMG of Aftershocks and Dash Attacks is increased by 15%.",
            "4-Piece Set": "Upon hitting an enemy with an Aftershock or Dash Attack, if the DMG dealt aligns with the equipper's attribute, the equipper gains 1 stack of a buff effect, at most once per use of a skill. For each stack, the equipper's ATK increases by 4%, and CRIT Rate increases by 4%. The effect can stack up to 3 times and lasts for 15s. Repeated triggers reset the duration."
        }
    },
    {
        id: 4,
        name: "Phaethon's Melody",
        image: "image/фаетон сама.webp",
        skills: {
            "2-Piece Set": "Anomaly Mastery +8%.",
            "4-Piece Set": "When any squad member uses an EX Special Attack, the equipper's Anomaly Proficiency increases by 45 for 8s. If the character using the EX Special Attack is not the equipper, the equipper's Ether DMG is increased by 25%."
        }
    },
    {
        id: 5,
        name: "Yunkui Tales",
        image: "image/раптор.webp",
        skills: {
            "2-Piece Set": "HP-10%",
            "4-Piece Set": "When using EX Special Attack, Chain Attack, or Ultimate, CRIT Rate increases by 4%, stacking up to 3 times and lasting 15s. Repeated triggers reset the duration. When having 3 stacks of this effect, Sheer DMG increases by 10%."
        }
    },
    {
        id: 6,
        name: "King of the Summit",
        image: "image/тигр.webp",
        skills: {
            "2-Piece Set": "Increases Daze of attacks by 6%",
            "4-Piece Set": "When the equipper is a Stun character and uses an EX Special Attack or Chain Attack, increases CRIT DMG of all squad members by 15%, and when the equipper's CRIT Rate is more than or equal to 50%, further increases CRIT DMG by 15%, lasting 15s. Repeated triggers reset the duration. Passive effects of the same name do not stack."
        }
    },
    {
        id: 7,
        name: "Dawn's Bloom",
        image: "image/базік.webp",
        skills: {
            "2-Piece Set": "Increases Basic Attack DMG by 15%.",
            "4-Piece Set": "Increases Basic Attack DMG by 20%. When equipped by an Attack character, using an EX Special Attack or Ultimate will further increase Basic Attack DMG by 20% for 25s. Repeated triggers reset the duration."
        }
    },
    {
        id: 8,
        name: "Moonlight Lullaby",
        image: "image/мунлайт.webp",
        skills: {
            "2-Piece Set": "Energy Regen +20%",
            "4-Piece Set": "When the equipper is a Support character and uses an EX Special Attack or Ultimate, the DMG dealt by all squad members increases by 18% for 25s. Repeated triggers reset the duration. Passive effects of the same name do not stack."
        }
    },
    {
        id: 9,
        name: "White Water Ballad",
        image: "image/фіз шунь.webp",
        skills: {
            "2-Piece Set": "Physical DMG +10%",
            "4-Piece Set": "When the equipper is within any Ether Veil, their CRIT Rate increases by 10%. After leaving the Ether Veil, this buff remains for 15s. If the equipper is an Attack character, activating an Ether Veil or extending an Ether Veil's duration increases their CRIT Rate by 10% and ATK by 10% for 30s. Repeated triggers reset the duration."
        }
    },
    {
        id: 10,
        name: "Shining Aria",
        image: "image/шінінг.webp",
        skills: {
            "2-Piece Set": "Ether DMG +10%",
            "4-Piece Set": "When the equipper's Basic Attack hits an enemy, their Anomaly Proficiency increases by 36, lasting 8s. Repeated triggers reset the duration. When any enemy on the field is Stunned, the equipper's DMG increases by 25% for 18s.Repeated triggers reset the duration."
        }
    },
    {
        id: 11,
        name: "Bunny in Wonderland",
        image: "image/круль.webp",
        skills: {
            "2-Piece Set": "HP-10%",
            "4-Piece Set": "When the equipper is a Defense character: When the equipper launches an EX Special Attack or any squad member triggers a Defensive Assist or Evasive Assist, all squad members' DMG increases by 6%, stacking up to 3 times, lasting 25s. Stacks decay one at a time, and duration refreshes when gained or decayed. Passive effects of the same name do not stack."
        }
    },
    {
        id: 12,
        name: "Notes From the Chained",
        image: "image/нотес фром.webp",
        skills: {
            "2-Piece Set": "Ice DMG +10%.",
            "4-Piece Set": "When the equipper triggers Abloom, their Anomaly Proficiency increases by 48 for 30s; repeated triggers reset the duration. When the equipper triggers a Freeze effect, their All-Attribute Anomaly DMG and Disorder DMG increase by 16% for 30s; repeated triggers reset the duration."
        }
    },
    {
        id: 13,
        name: "Chaos Jazz",
        image: "image/хаос.webp",
        skills: {
            "2-Piece Set": "Anomaly Proficiency +30",
            "4-Piece Set": "Fire DMG and Electric DMG increases by 15%. While off-field, EX Special Attack and Assist Attack DMG increases by 20%. When switching on-field, this buff continues for 5s, and this continuation effect can trigger once every 7.5s."
        }
    },
    {
        id: 14,
        name: "Proto Punk",
        image: "image/протік.webp",
        skills: {
            "2-Piece Set": "Increases Shield effect by 15%.",
            "4-Piece Set": "When any squad member triggers a Defensive Assist or Evasive Assist, all squad members deal 15% increased DMG, lasting 10s. Passive effects of the same name do not stack."
        }
    },
    {
        id: 15,
        name: "Freedom Blues",
        image: "image/фрідом.webp",
        skills: {
            "2-Piece Set": "Anomaly Proficiency +30",
            "4-Piece Set": "When an EX Special Attack hits an enemy, reduce the target's Anomaly Buildup RES to the equipper's Attribute by 20% for 8s. This effect does not stack with others of the same attribute."
        }
    },
    {
        id: 16,
        name: "Polar Metal",
        image: "image/полярка.webp",
        skills: {
            "2-Piece Set": "Ice DMG +10%",
            "4-Piece Set": "Increase the DMG of Basic Attack and Dash Attack by 20%. When any squad member inflicts Freeze or Shatter, this effect increases by an additional 20% for 12s."
        }
    },
    {
        id: 17,
        name: "Puffer Electro",
        image: "image/фуга.webp",
        skills: {
            "2-Piece Set": "PEN Ratio +8%",
            "4-Piece Set": "Ultimate DMG increases by 20%. Launching an Ultimate increases the equipper's ATK by 15% for 12s."
        }
    },
    {
        id: 18,
        name: "Inferno Metal",
        image: "image/інферно.webp",
        skills: {
            "2-Piece Set": "Fire DMG +10%",
            "4-Piece Set": "Upon hitting a Burning enemy, the equipper's CRIT Rate is increased by 28% for 8s."
        }
    },
    {
        id: 19,
        name: "Woodpecker Electro",
        image: "image/дятел.webp",
        skills: {
            "2-Piece Set": "CRIT Rate +8%",
            "4-Piece Set": "Landing a critical hit on an enemy with a Basic Attack, Dodge Counter, or EX Special Attack increases the equipper's ATK by 9% for 6s. The buff duration for different skills are calculated separately."
        }
    },
    {
        id: 20,
        name: "Soul Rock",
        image: "image/кал.webp",
        skills: {
            "2-Piece Set": "DEF +16%",
            "4-Piece Set": "Upon receiving an enemy attack and losing HP, the equipper takes 40% less DMG for 2.5s. This effect can trigger once every 15s."
        }
    },
    {
        id: 21,
        name: "Shockstar Disco",
        image: "image/шок.webp",
        skills: {
            "2-Piece Set": "Impact +6%",
            "4-Piece Set": "Basic Attacks, Dash Attacks, and Dodge Counters inflict 20% more Daze to the main target."
        }
    },
    {
        id: 22,
        name: "Thunder Metal",
        image: "image/тандер.webp",
        skills: {
            "2-Piece Set": "Electric DMG +10%",
            "4-Piece Set": "As long as an enemy in combat is Shocked, the equipper's ATK is increased by 28%."
        }
    },
    {
        id: 23,
        name: "Hormone Punk",
        image: "image/гормон.webp",
        skills: {
            "2-Piece Set": "ATK +10%",
            "4-Piece Set": "Upon becoming the active character in combat, the equipper's ATK increases by 25% for 10s. This effect can trigger once every 20s."
        }
    },
    {
        id: 24,
        name: "Fanged Metal",
        image: "image/фіз сет.webp",
        skills: {
            "2-Piece Set": "Physical DMG +10%",
            "4-Piece Set": "Whenever a squad member inflicts Assault on an enemy, the equipper deals 35% additional DMG to the target for 12s."
        }
    },
    {
        id: 25,
        name: "Swing Jazz",
        image: "image/свінга.webp",
        skills: {
            "2-Piece Set": "Energy Regen +20%",
            "4-Piece Set": "Launching a Chain Attack or Ultimate increases all squad members' DMG by 15% for 12s. Passive effects of the same name do not stack."
        }
    },
    {
        id: 26,
        name: "Chaotic Metal",
        image: "image/ефірка.webp",
        skills: {
            "2-Piece Set": "Ether DMG +10%",
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
            html += `<p>Для ролі: ${item.role}</p>`;
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