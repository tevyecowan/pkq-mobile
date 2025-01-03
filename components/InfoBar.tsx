import { View, StyleSheet } from 'react-native';
import * as React from 'react';


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <div id="infoPage" className="page" style={{"flex":"1","marginLeft":"0.5em"}}>
          <div id="challengeTitle" className="challenge-title" hidden="hidden">
            In challenge: <span id="challengeName"></span>
            <div style={{"paddingTop":"0.3em"}}>
              <div className="sidebarChallengeReward an_unhappy_life hidden"><span className="color-happiness">Happiness</span> x<span id="sidebarCurrentChallengeBuff1"></span> / x<span id="sidebarChallengeBuff1"></span></div>
              <div className="sidebarChallengeReward rich_and_the_poor hidden"><span className="color-income">Income</span> x<span id="sidebarCurrentChallengeBuff2"></span> / x<span id="sidebarChallengeBuff2"></span></div>
              <div className="sidebarChallengeReward time_does_not_fly hidden"><span className="color-time-warping">Time Warping</span> x<span id="sidebarCurrentChallengeBuff3"></span> / x<span id="sidebarChallengeBuff3"></span></div>
              <div className="sidebarChallengeReward dance_with_the_devil hidden"><span className="color-essence">Essence</span> x<span id="sidebarCurrentChallengeBuff4"></span> / x<span id="sidebarChallengeBuff4"></span></div>
              <div className="sidebarChallengeReward legends_never_die hidden"><span className="color-evil">Evil</span> x<span id="sidebarCurrentChallengeBuff5"></span> / x<span id="sidebarChallengeBuff5"></span></div>
              <div className="sidebarChallengeReward the_darkest_time hidden"><span className="color-dark-matter">Dark Matter</span> x<span id="sidebarCurrentChallengeBuff6"></span> / x<span id="sidebarChallengeBuff6"></span></div>
            </div>
          </div>
          <div className="text-caption" id="errorInfo" hidden="hidden">
            <div>⚠️ Oh no! It looks like something on the site broke.. If this issue persists, feel free to contact the developers.</div>
            <br/>
          </div>
          <div id="deathText" className="hidden">
            <div className="text-caption" style={{"color":"red"}}>Age has caught up to you</div>
            <div className="sidebar-element" style={{"color":"gray"}}>Your age has met your lifespan; use the amulet to rebirth before you pass away</div>
          </div>
          <div className="text-caption"><span id="ageDisplay">Age 14 Day 0</span></div>
          <div className="sidebar-element" style={{"color":"gray"}}>
            Lifespan: <span id="lifespanDisplay">70</span> years
            <br/>Real Time: <span id="realtimeDisplay">00:00:00</span>
            <div id="fps"></div>
          </div>
          <button id="pauseButton" className="w3-button button" onClick="togglePause()">Pause</button>
          <div id="boostPanel" className="sidebar-element" style={{"color":"gray"}}>
            <button id="boostButton" className="perk metaperk perk-boost" onClick="applyBoost()">Boost</button>
            <span style={{"paddingLeft":"0.4em"}} id="boostCooldownDisplay">00:00</span>
          </div>
          <div className="text-caption" id="coinDisplay">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div style={{"color":"gray"}}>Balance</div>
          <ul className="sidebar-element" style="padding-left: 1em;">
            <li>
              <span className="color-hypercubes">Net: </span><b id="signDisplay"></b>
              <div id="netDisplay" style="display: inline;">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
            <li>
              <span className="color-income">Income: </span>
              <div id="incomeDisplay" style="display: inline;">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
            <li>
              <span style="color: red">Expense: </span>
              <div id="expenseDisplay" style="display: inline;">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          </ul>
          <div id="quickTaskDisplay" className="hidden">
            <div className="small-margin inline job progress-bar progressBar">
              <div className="progress-fill progressFill current"></div>
              <div className="progress-text name">Task</div>
            </div>
          </div>
          <div className="text-caption" style="padding-top: 0.2em"><span className="color-happiness">Happiness: </span><span id="happinessDisplay"></span></div>
          <div style={{"color":"gray"}} className="sidebar-element">Affects all XP gain</div>
          <div id="evilInfo" className="hidden">
            <div className="text-caption"><span className="color-evil">Evil: </span><span id="evilDisplay"></span></div>
            <div style={{"color":"gray"}} className="sidebar-element">Affects Dark Magic XP gain</div>
          </div>
          <div id="essenceInfo" className="hidden">
            <div className="text-caption"><span className="color-essence">Essence: </span><span id="essenceDisplay"></span></div>
            <div style={{"color":"gray"}} className="sidebar-element">Affects Almightiness XP gain</div>
          </div>
          <div id="darkMatterInfo" className="hidden">
            <div className="text-caption"><span className="color-dark-matter">Dark Matter: </span><span id="darkMatterDisplay"></span></div>
            <div style={{"color":"gray"}} className="sidebar-element">Affects all XP gain</div>
          </div>
          <div id="darkOrbsInfo" className="hidden">
            <div className="text-caption"><span className="color-dark-orbs">Dark Orbs: </span><span id="darkOrbsDisplay"></span></div>
            <div style={{"color":"gray"}} className="sidebar-element">Used to buy items in the Dark Matter shop</div>
          </div>
          <div id="timeWarping">
            <div className="text-caption"><span className="color-time-warping">Time Warping: </span><span id="timeWarpingDisplay"></span></div>
            <div style={{"color":"gray"}} className="sidebar-element">Affects game speed</div>
          </div>
          <div id="hypercubesInfo">
            <div className="text-caption"><span className="color-hypercubes">Hypercubes: </span><span id="hypercubesDisplay"></span></div>
            <div style={{"color":"gray"}} className="sidebar-element">for Metaverse sacrifices</div>
          </div>
          <div id="rebirthButton1" className="hidden">
            <button className="w3-button button" style="margin-bottom: 0.1em; margin-top: 0.8em; width: 100%" onClick="rebirthOne()">Touch the eye</button>
          </div>
          <div id="rebirthButton2" className="hidden">
            <button className="w3-button button" style="margin-bottom: 0.1em; margin-top: 0.8em; width: 100% " onClick="rebirthTwo()">Embrace evil: <span className="color-evil" id="evilGainButtonDisplay"></span></button>
          </div>
          <div id="rebirthButton3" className="hidden">
            <button className="w3-button button" style="margin-bottom: 0.1em; margin-top: 0.8em; width: 100% " onClick="rebirthThree()">Transcend: <span className="color-essence" id="essenceGainButtonDisplay"></span></button>
          </div>
          <div id="rebirthButton4" className="hidden">
            <button className="w3-button button" style="margin-bottom: 0.1em; margin-top: 0.8em; width: 100% " onClick="rebirthFour()">Collapse the universe: <span className="color-dark-matter" id="darkMatterGainButtonDisplay"></span></button>
          </div>
          <div id="rebirthButton5" className="hidden">
            <button className="w3-button button" style="margin-bottom: 0.1em; margin-top: 0.8em; width: 100% " onClick="rebirthFive()">Metaverse: <span id="metaversePerkPointsGainButtonDisplay"></span></button>
          </div>
        </div>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
