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
            "Basic Attack": "Basic Attack: Saw Teeth Trimming<br><br>Press Icon_Normal to activate:<br><br>Unleashes up to 3 attacks, dealing <span class='element-physical'>Physical DMG</span>.Press repeatedly or hold Icon_Normal during the 3rd attack to extend the skill duration.<br><br>Basic Attack: Flash Freeze Trimming<br><br>While Flash Freeze is active, press Icon_Normal to activate:<br><br>Launch up to 3 attacks at enemies in front, dealing <span class='element-ice'>Ice DMG</span>.Each attack consumes 1 Flash Freeze Charge.Press repeatedly or hold Icon_Normal during the 3rd attack to extend the skill duration.<br><br>Basic Attack: Glacial Blade Wave<br><br>After the 3rd hit of Basic Attack: Flash Freeze Trimming, Dash Attack: Arctic Ambush's charged scissor strike, Dodge Counter: Reef Rock, and Quick Assist, if Ellen has Flash Freeze Charges, pressing Icon_Normal will launch Basic Attack: Glacial Blade Wave, dealing <span class='element-ice'>Ice DMG</span>.This skill consumes 2 points of Flash Freeze Charge.After use, it can be directly followed up with the 3rd hit of her Basic Attack.Character is invulnerable while using this skill.<br><br>Basic Attack: Icy Blade<br><br>After the 3rd hit of Basic Attack: Flash Freeze Trimming, EX Special Attack: Sharknami, Dodge Counter: Reef Rock, and Assist Follow-Up, automatically launch Basic Attack: Icy Blade, dealing multiple instances of <span class='element-ice'>Ice DMG</span> to all enemies in a large area ahead. It inflicts additional instances of <span class='element-ice'>Ice DMG</span> against Medium and Large foes.After the skill, Ellen gains the Quick Charge effect.Basic Attack: Icy Blade does not affect the branch or form of the original skill.Character is invulnerable while using this skill.",
            "Dodge": "Dodge: Vortex<br><br>Press Icon_Evade to activate:<br><br>A rapid dash dodge.Character is invulnerable while using this skill.When Perfect Dodge is triggered, Ellen gains the Quick Charge effect, reducing the charge time of Dash Attack: Arctic Ambush, lasting up to 5 seconds or until it triggers.<br><br>Dash: Roaming Hunt<br><br>Hold or double-press Icon_Evade to activate:<br><br>Enter the Roaming state, allowing dashing movement.In the Roaming state, drag the joystick to control Ellen's direction, and release to stop.Ellen is invulnerable for a brief time after activation.<br><br>Dash Attack: Arctic Ambush<br><br>While in the Roaming state, press Icon_Normal to activate:<br><br>Delivers a spinning slash to enemies before opening her scissors for a Swift Scissors strike, dealing <span class='element-ice'>Ice DMG</span>.Gain 1 point of Flash Freeze Charge when the Swift Scissors strike hits.<br><br>While in the Roaming state, hold Icon_Normal to activate:<br><br>Perform a spinning slash against the enemy, then pull apart the scissors to unleash a Charged Scissor strike, dealing massive <span class='element-ice'>Ice DMG</span>." +
                "Gain 3 points of Flash Freeze Charge when the Charged Scissor strike hits.If the enemy is Frozen, it always triggers Shatter.Anti - Interrupt level is increased while charging the skill, and DMG taken is reduced by 40%.When taking DMG from enemies while the skill is charging, that instance of DMG is nullified, and charging instantly completes.Character is invulnerable while using this skill.<br><br>Flash Freeze<br><br>When Ellen has Flash Freeze Charges, the Flash Freeze effect is activated.Once Flash Freeze activates, Basic Attacks and Dash Attacks expend Flash Freeze Charges, dealing massive <span class='element-ice'>Ice DMG</span>.Ellen can have up to a maximum of 6 Flash Freeze Charges.<br><br>Dash Attack: Monstrous Wave<br><br>Press Icon_Normal during a dodge to activate:<br><br>Launches a dashing slash attack at enemies in front, dealing Physical DMG.<br><br>Dash Attack: Cold Snap<br><br>While Flash Freeze is active, press Icon_Normal during dodge to activate:<br><br>Launches a dashing slash attack at enemies in front, dealing <span class='element-ice'>Ice DMG</span>.Consumes 1 Flash Freeze Charge.<br><br>Dodge Counter: Reef Rock<br><br>Press  during a Perfect Dodge to activate:<br><br>Rapidly move through enemies with open scissors for a cutting strike, dealing <span class='element-ice'>Ice DMG</span>.Character is invulnerable while using this skill.",
            "Assist": "Quick Assist: Shark Sentinel<br><br>When the active character is launched, press Icon_Switch to activate:<br><br>Speedily move through the enemy with open scissors for a cutting strike, dealing <span class='element-ice'>Ice DMG</span>.Character is invulnerable while using this skill.When the character on the field is launched, drag the joystick and press Icon_Switch to activate:Enter the Roaming state, enabling dashing movement.While in the Roaming state, use the joystick to change directions and release to stop.Character is invulnerable briefly when triggering the skill.Upon triggering a Quick Assist, Ellen gains the Quick Charge effect, shortening the charging time of Dash Attack: Arctic Ambush, lasting up to 5s or until it triggers once.<br><br>Defensive Assist: Wavefront Impact<br><br>When the character on field is about to be attacked, press Icon_Switch to activate:<br><br>Parries the enemy's attack, dealing massive Daze.Character is invulnerable while using this skill.<br><br>Assist Follow- Up: Shark Cruiser<br><br>Press Icon_Normal after a Defensive Assist to activate:<br><br>Charge and slash enemies in front, dealing <span class='element-ice'>Ice DMG</span>.Press repeatedly or hold Icon_Normal during the attack to extend the skill duration.Character is invulnerable while using this skill.",
            "Special Attack": "Special Attack: Drift<br><br>Press Icon_Special to activate:<br><br>Use a quick tail sweep attack in front, dealing <span class='element-ice'>Ice DMG</span>.Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Tail Swipe<br><br>With enough Energy, press Icon_SpecialReady to activate:<br><br>Perform a forceful tail whip attack that deals massive <span class='element-ice'>Ice DMG</span>.Gain 1 Flash Freeze Charge upon striking an enemy.Character is invulnerable while using this skill.After executing the move, you can immediately follow up with the 3rd hit of a Basic Attack.<br><br>EX Special Attack: Sharknami<br><br>With enough Energy and after executing EX Special Attack: Tail Swipe, press Icon_SpecialReady to activate:<br><br>Perform a powerful series of slashes ahead that deal massive <span class='element-ice'>Ice DMG</span>.Gain 1 Flash Freeze Charge upon striking an enemy.Character is invulnerable while using this skill.After executing the move, you can immediately follow up with the 3rd hit of a Basic Attack.",
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Special Attack: Obstruction Removal<br>Press Icon_Special to activate:<br>Throws a grenade forward, dealing Electric DMG.<br> During the skill, drag the joystick to reposition in that direction.<br>When activated via consuming Zap, dodge incoming enemy attacks.<br>Anti - Interrupt level is increased while using this skill.<br><br>EX Special Attack: Supercharged Obstruction Removal<br>With enough Energy, press Icon_SpecialReady to activate:<br>Leaps into the air and throws two grenades forward, dealing massive Electric DMG.<br>During the skill, drag the joystick to change directions.<br> If Zap reaches max stacks, throws an additional Vortex Cluster Grenade, generating an electromagnetic field at the point of detonation that pulls in enemies and deals Electric DMG.<br>Character is invulnerable while using this skill.<br><br>Pulse<br>Activating an Ultimate grants 25 stacks of Pulse(max 25 stacks).When gaining Zap, consumes 1 stack of Pulse.<br>After consuming Pulse to obtain 8 stacks of Zap, the next grenade throw includes an additional Pulse Grenade." +
                "If it hits an enemy suffering <span class='element-ether'>Ether</span>, <span class='element-electric'>Electric</span>, <span class='element-fire'>Fire</span>, <span class='element-physical'>Physical</span>, <span class='element-ice'>Ice</span>, or <span class='element-wind'>Wind</span> Anomaly, it triggers Abloom: deals an additional instance of DMG equal to <span class='element-ether'>560%</span> /<span class='element-electric'>280%</span>/<span class='element-fire'>700%</span> /<span class='element-physical'>50%</span>/<span class='element-ice'>70%</span>/<span class='element-wind'>28%</span> of the original Anomaly's DMG.<br>While in the Pulse state, Special Attack: Obstruction Removal - Cycle is unlocked.<br><br>Special Attack: Obstruction Removal - Cycle<br>While in the Pulse state, hold Icon_Special to activate:<br>Repeatedly hurls grenades forward during the skill, dealing Electric DMG and granting 1 Zap stack each time grenades are thrown.<br>During the skill, tilt the joystick to reposition and dodge enemy attacks.<br>Anti - Interrupt level is increased while using this skill.",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        rarity: "А",
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
            "Основна атака": "Швидкі удари з акулою, Ice DMG",
            "Ухилення + Атака": "Dash з льодовим ефектом",
            "Assist ": "",
            "Спеціальна атака": "Greatest Desire — потужний удар",
            "Ultimate": "Flash Freeze — замороження зони",
            "Core Passive": "Roaming Charges — заряди для криту"
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
        skills: {
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
            "W-Engine Effect": "While off-field, the equipper's Energy Regen increases by 0.6/s. Attacks from the equipper increase all units' DMG against a struck target by 10% for 3 seconds. During this period, this effect is further increased by 1.7% every 0.5s, up to a maximum additional increase of 10.2%. Repeated triggers only refresh the duration without refreshing the DMG increase effect. Passive effects of the same name do not stack"

        }
    },
    {
        id: 2,
        name: "Hellfire Gears",
        rarity: "S",
        role: "Stun",
        image: "image/hellfiregears.webp",
        skills: {
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
            "W-Engine Effect": "Increases Ice DMG by 25%. Upon hitting an enemy with a Basic Attack, the equipper's CRIT Rate increases by 10% for 8s. When dealing Ice DMG with a Dash Attack, the equipper's CRIT Rate increases by an additional 10% for 15s. The duration of each effect is calculated separately."

        }
    },
    {
        id: 3,
        name: "Steel Cushion",
        rarity: "S",
        role: "Attack",
        image: "image/steelcushion.webp",
        skills: {
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
            "W-Engine Effect": "Increases ATK by 12%.When using a Special Attack or EX Special Attack, the equipper's Anomaly Proficiency is increased by 25 for 8s, stacking up to 3 times. The duration of each stack is calculated separately."

        }
    },
    {
        id: 4,
        name: "Weeping Cradle",
        rarity: "S",
        role: "Support",
        image: "image/weepingcradle.webp",
        skills: {
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
            "W-Engine Effect": "When an attack hits an enemy, DMG and Daze from Basic Attacks increase by 6% for 8s, stacking up to 5 times. This effect can trigger at most once during each skill. The duration of each stack is calculated separately."

        }
    },
    {
        id: 5,
        name: "The Brimstone",
        rarity: "S",
        role: "Attack",
        image: "image/brimstone.webp",
        skills: {
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
            "W-Engine Effect": "While off-field, the equipper's Energy Regen increases by 0.6/s.When using an EX Special Attack, the equipper's Impact is increased by 10% for 10s, stacking up to 2 times. The duration of each stack is calculated separately."

        }
    },

    {
        id: 7,
        name: "Fusion Compiler",
        rarity: "S",
        role: "Anomaly",
        image: "image/fusioncompiler.webp",
        skills: {
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
            "Stats": " Base ATK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;684 <br><br> PEN Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 % ",
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
        image: "image/цезар.webp",
        skills: {
            "2-Piece Set": "ATK +10%",
            "4-Piece Set": "Whenever any squad member enters the field using a Quick Assist, all squad members gain 1 stack of Astral, up to a maximum of 3 stacks, and lasting 15s. Repeated triggers reset the duration. Each stack of Astral increases the DMG dealt by the character entering the field using a Quick Assist by 8%. Passive effects of the same name do not stack."

        }
    },
    {
        id: 2,
        name: "Branch & Blade Song",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "CRIT DMG +16%",
            "4-Piece Set": "When Anomaly Mastery exceeds or equals 115 points, the equipper's CRIT DMG increases by 30%. When any squad member applies Freeze or triggers the Shatter effect on an enemy, the equipper's CRIT Rate increases by 12%, lasting 15s."
        }
    },
    {
        id: 3,
        name: "Shadow Harmony",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "The DMG of Aftershocks and Dash Attacks is increased by 15%.",
            "4-Piece Set": "Upon hitting an enemy with an Aftershock or Dash Attack, if the DMG dealt aligns with the equipper's attribute, the equipper gains 1 stack of a buff effect, at most once per use of a skill. For each stack, the equipper's ATK increases by 4%, and CRIT Rate increases by 4%. The effect can stack up to 3 times and lasts for 15s. Repeated triggers reset the duration."
        }
    },
    {
        id: 4,
        name: "Phaethon's Melody",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Anomaly Mastery +8%.",
            "4-Piece Set": "When any squad member uses an EX Special Attack, the equipper's Anomaly Proficiency increases by 45 for 8s. If the character using the EX Special Attack is not the equipper, the equipper's Ether DMG is increased by 25%."
        }
    },
    {
        id: 5,
        name: "Yunkui Tales",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "HP-10%",
            "4-Piece Set": "When using EX Special Attack, Chain Attack, or Ultimate, CRIT Rate increases by 4%, stacking up to 3 times and lasting 15s. Repeated triggers reset the duration. When having 3 stacks of this effect, Sheer DMG increases by 10%."
        }
    },
    {
        id: 6,
        name: "King of the Summit",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Increases Daze of attacks by 6%",
            "4-Piece Set": "When the equipper is a Stun character and uses an EX Special Attack or Chain Attack, increases CRIT DMG of all squad members by 15%, and when the equipper's CRIT Rate is more than or equal to 50%, further increases CRIT DMG by 15%, lasting 15s. Repeated triggers reset the duration. Passive effects of the same name do not stack."
        }
    },
    {
        id: 7,
        name: "Dawn's Bloom",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Increases Basic Attack DMG by 15%.",
            "4-Piece Set": "Increases Basic Attack DMG by 20%. When equipped by an Attack character, using an EX Special Attack or Ultimate will further increase Basic Attack DMG by 20% for 25s. Repeated triggers reset the duration."
        }
    },
    {
        id: 8,
        name: "Moonlight Lullaby",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Energy Regen +20%",
            "4-Piece Set": "When the equipper is a Support character and uses an EX Special Attack or Ultimate, the DMG dealt by all squad members increases by 18% for 25s. Repeated triggers reset the duration. Passive effects of the same name do not stack."
        }
    },
    {
        id: 9,
        name: "White Water Ballad",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Physical DMG +10%",
            "4-Piece Set": "When the equipper is within any Ether Veil, their CRIT Rate increases by 10%. After leaving the Ether Veil, this buff remains for 15s. If the equipper is an Attack character, activating an Ether Veil or extending an Ether Veil's duration increases their CRIT Rate by 10% and ATK by 10% for 30s. Repeated triggers reset the duration."
        }
    },
    {
        id: 10,
        name: "Shining Aria",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Ether DMG +10%",
            "4-Piece Set": "When the equipper's Basic Attack hits an enemy, their Anomaly Proficiency increases by 36, lasting 8s. Repeated triggers reset the duration. When any enemy on the field is Stunned, the equipper's DMG increases by 25% for 18s.Repeated triggers reset the duration."
        }
    },
    {
        id: 11,
        name: "Bunny in Wonderland",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "HP-10%",
            "4-Piece Set": "When the equipper is a Defense character: When the equipper launches an EX Special Attack or any squad member triggers a Defensive Assist or Evasive Assist, all squad members' DMG increases by 6%, stacking up to 3 times, lasting 25s. Stacks decay one at a time, and duration refreshes when gained or decayed. Passive effects of the same name do not stack."
        }
    },
    {
        id: 12,
        name: "Notes From the Chained",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Ice DMG +10%.",
            "4-Piece Set": "When the equipper triggers Abloom, their Anomaly Proficiency increases by 48 for 30s; repeated triggers reset the duration. When the equipper triggers a Freeze effect, their All-Attribute Anomaly DMG and Disorder DMG increase by 16% for 30s; repeated triggers reset the duration."
        }
    },
    {
        id: 13,
        name: "Chaos Jazz",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Anomaly Proficiency +30",
            "4-Piece Set": "Fire DMG and Electric DMG increases by 15%. While off-field, EX Special Attack and Assist Attack DMG increases by 20%. When switching on-field, this buff continues for 5s, and this continuation effect can trigger once every 7.5s."
        }
    },
    {
        id: 14,
        name: "Proto Punk",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Increases Shield effect by 15%.",
            "4-Piece Set": "When any squad member triggers a Defensive Assist or Evasive Assist, all squad members deal 15% increased DMG, lasting 10s. Passive effects of the same name do not stack."
        }
    },
    {
        id: 15,
        name: "Freedom Blues",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Anomaly Proficiency +30",
            "4-Piece Set": "When an EX Special Attack hits an enemy, reduce the target's Anomaly Buildup RES to the equipper's Attribute by 20% for 8s. This effect does not stack with others of the same attribute."
        }
    },
    {
        id: 16,
        name: "Polar Metal",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Ice DMG +10%",
            "4-Piece Set": "Increase the DMG of Basic Attack and Dash Attack by 20%. When any squad member inflicts Freeze or Shatter, this effect increases by an additional 20% for 12s."
        }
    },
    {
        id: 17,
        name: "Puffer Electro",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "PEN Ratio +8%",
            "4-Piece Set": "Ultimate DMG increases by 20%. Launching an Ultimate increases the equipper's ATK by 15% for 12s."
        }
    },
    {
        id: 18,
        name: "Inferno Metal",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Fire DMG +10%",
            "4-Piece Set": "Upon hitting a Burning enemy, the equipper's CRIT Rate is increased by 28% for 8s."
        }
    },
    {
        id: 19,
        name: "Woodpecker Electro",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "CRIT Rate +8%",
            "4-Piece Set": "Landing a critical hit on an enemy with a Basic Attack, Dodge Counter, or EX Special Attack increases the equipper's ATK by 9% for 6s. The buff duration for different skills are calculated separately."
        }
    },
    {
        id: 20,
        name: "Soul Rock",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "DEF +16%",
            "4-Piece Set": "Upon receiving an enemy attack and losing HP, the equipper takes 40% less DMG for 2.5s. This effect can trigger once every 15s."
        }
    },
    {
        id: 21,
        name: "Shockstar Disco",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Impact +6%",
            "4-Piece Set": "Basic Attacks, Dash Attacks, and Dodge Counters inflict 20% more Daze to the main target."
        }
    },
    {
        id: 22,
        name: "Thunder Metal",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Electric DMG +10%",
            "4-Piece Set": "As long as an enemy in combat is Shocked, the equipper's ATK is increased by 28%."
        }
    },
    {
        id: 23,
        name: "Hormone Punk",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "ATK +10%",
            "4-Piece Set": "Upon becoming the active character in combat, the equipper's ATK increases by 25% for 10s. This effect can trigger once every 20s."
        }
    },
    {
        id: 24,
        name: "Fanged Metal",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Physical DMG +10%",
            "4-Piece Set": "Whenever a squad member inflicts Assault on an enemy, the equipper deals 35% additional DMG to the target for 12s."
        }
    },
    {
        id: 25,
        name: "Swing Jazz",
        image: "image/hellfiregears.webp",
        skills: {
            "2-Piece Set": "Energy Regen +20%",
            "4-Piece Set": "Launching a Chain Attack or Ultimate increases all squad members' DMG by 15% for 12s. Passive effects of the same name do not stack."
        }
    },
    {
        id: 26,
        name: "Chaotic Metal",
        image: "image/hellfiregears.webp",
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

    const filtersDiv = document.getElementById('filters');
    if (section === 'agents') {
        filtersDiv.style.display = 'block';
        // Скидаємо фільтри при переході на агентів
        document.getElementById('elementFilter').value = '';
        document.getElementById('roleFilter').value = '';
    } else {
        filtersDiv.style.display = 'none';
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
        // Додаємо фото (іконку) для всіх типів
        let imgSrc = item.image || 'https://via.placeholder.com/120x160?text=No+Image';
        let html = `<img src="${imgSrc}" alt="${item.name}" class="card-image" style="width:120px;height:160px;object-fit:cover;display:block;margin:0 auto 8px;">`;
        html += `<h3>${item.name}</h3>`;
        // Відображення рангу з кольором
        let rarityClass = item.rarity === 'S' ? 'rarity-S' : (item.rarity === 'A' ? 'rarity-A' : '');
        // Відображення елемента з кольором (для агентів і банбу)
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
            html += `<p>Елемент: <span class="${elementClass}">${item.element}</span></p>`;
            html += `<p>Роль: ${item.role}</p>`;
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

function applyFilters() {
    const element = document.getElementById('elementFilter').value;
    const role = document.getElementById('roleFilter').value;
    let data = getData();
    if (element) data = data.filter(item => item.element === element);
    if (role) data = data.filter(item => item.role === role || (currentSection === 'wengines' && item.role === role));
    renderGrid(data);
}

// Додаємо автозастосування фільтрів при зміні select
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('elementFilter').addEventListener('change', applyFilters);
    document.getElementById('roleFilter').addEventListener('change', applyFilters);
});


function openModal(item) {
    document.getElementById('modal').style.display = 'block';

    // ВИЗНАЧЕННЯ ТИПУ
    let type = '';
    if (item.faction !== undefined) {
        type = 'agent';
    } else if (item.element !== undefined && item.role === undefined) {
        type = 'bangboo';
    } else if (item.role !== undefined && item.element === undefined && item.faction === undefined) {
        type = 'wengines';
    } else if (item.stats === undefined && item.element === undefined && item.role === undefined && item.faction === undefined) {
        type = 'drivediscs';
    } else if (item.role !== undefined && item.element !== undefined) {
        type = 'agent';
    } else {
        type = 'agent';
    }

    // Очищаємо всі рядки
    document.getElementById('modalRarity').textContent = '';
    document.getElementById('modalElement').textContent = '';
    document.getElementById('modalRole').textContent = '';
    document.getElementById('modalFaction').textContent = '';

    // Ховаємо всі підписи
    document.getElementById('modalRarity').parentElement.style.display = 'none';
    document.getElementById('modalElement').parentElement.style.display = 'none';
    document.getElementById('modalRole').parentElement.style.display = 'none';
    document.getElementById('modalFaction').parentElement.style.display = 'none';

    document.getElementById('modalName').textContent = item.name;

    // ОЧИЩУЄМО характеристики
    const statsContainer = document.getElementById('modalBaseStats');
    if (statsContainer) statsContainer.innerHTML = '';

    // ========== АГЕНТИ (ПОКАЗУЄМО ХАРАКТЕРИСТИКИ) ==========
    if (type === 'agent') {
        document.getElementById('modalRarity').textContent = item.rarity || '—';
        document.getElementById('modalElement').textContent = item.element || '—';
        document.getElementById('modalRole').textContent = item.role || '—';
        document.getElementById('modalFaction').textContent = item.faction || '—';

        // ХАРАКТЕРИСТИКИ ДЛЯ АГЕНТІВ
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
    }

    // ========== БАНБУ (ТЕЖ ПОКАЗУЄМО ХАРАКТЕРИСТИКИ) ==========
    else if (type === 'bangboo') {
        document.getElementById('modalRarity').textContent = item.rarity || '—';
        document.getElementById('modalRarity').parentElement.style.display = '';

        // ХАРАКТЕРИСТИКИ ДЛЯ БАНБУ
        if (item.stats && Object.keys(item.stats).length > 0) {
            let statsHtml = '<h4 style="color:#00ffff; margin: 20px 0 12px 0; text-align:center;">Характеристики</h4>';
            for (const [key, value] of Object.entries(item.stats)) {
                statsHtml += `<p style="margin: 8px 0;"><strong>${key}:</strong> <span style="color:#ffd700;">${value}</span></p>`;
            }
            statsContainer.innerHTML = statsHtml;
        }
    }

    // ========== АМПЛІФІКАТОРИ (wengines) - БЕЗ ХАРАКТЕРИСТИК ==========
    else if (type === 'wengines') {
        document.getElementById('modalRarity').textContent = item.rarity || '—';
        document.getElementById('modalRole').textContent = item.role || '—';
        document.getElementById('modalRarity').parentElement.style.display = '';
        document.getElementById('modalRole').parentElement.style.display = '';
        // statsContainer вже порожній
    }

    // ========== ДРАЙВ-ДИСКИ (drivediscs) - БЕЗ ХАРАКТЕРИСТИК ==========
    else if (type === 'drivediscs') {
        // statsContainer вже порожній
    }

    // Фото
    const img = document.getElementById('modalImage');
    img.src = item.image || 'https://via.placeholder.com/320x480?text=' + encodeURIComponent(item.name);
    img.alt = item.name;

    // Навички (skills)
    // Змінюємо заголовок "Навички" залежно від типу
    const modalRight = document.querySelector('.modal-right');
    let skillsHeader = modalRight ? modalRight.querySelector('h2') : null;

    if (!skillsHeader) {
        skillsHeader = document.querySelector('#modalSkills')?.previousElementSibling;
    }

    if (type === 'wengines') {
        if (skillsHeader) skillsHeader.textContent = ' W-Engine Effect';
    }
    else if (type === 'drivediscs') {
        if (skillsHeader) skillsHeader.textContent = ' ЕФЕКТИ';
    }
    else {
        if (skillsHeader) skillsHeader.textContent = ' НАВИЧКИ';
    }

    // Навички (skills) або стати/ефекти
    const skillsDiv = document.getElementById('modalSkills');
    skillsDiv.innerHTML = '';

    // Для ампліфікаторів показуємо стати замість навичок
    // Для ампліфікаторів показуємо стати замість навичок
    if (type === 'wengines' && item.stats) {
        for (const [key, value] of Object.entries(item.stats)) {
            const statBlock = document.createElement('div');
            statBlock.className = 'wengine-stat-item';  // новий клас
            statBlock.innerHTML = `
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <span class="wengine-stat-name">${key}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <span class="wengine-stat-value">${value}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    `;
            skillsDiv.appendChild(statBlock);
        }
    }
    // Для драйв-дисків показуємо ефекти замість навичок
    else if (type === 'drivediscs' && item.effects) {
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
    }
    // Для всіх інших - звичайні навички
    else if (item.skills) {
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
// Ініціалізація
renderGrid();
