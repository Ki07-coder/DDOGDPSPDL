export default {
    template: `
        <main v-if="loading">
            <Changelog></Changelog>
        </main>
        <div v-else class="page-changelog">
            <div class="change">
                <h2>06/02/2026</h2>
                <p>"ChromaLightJugBacon" has been placed at #24.</p>
                <p>"Switch" has been placed at #25.</p>
                <p>"Oxogen" has been placed at #27.</p>
                <p>"50roomsOfDifficulty" has been placed at #29.</p>
                <p>"ten plat" has been placed at #30.</p>
                <p>"MindSet" has been placed at #31.</p>
                <p>"NEW PLACE" has been placed at #33.</p>
                <p>"Dark And Light" has been placed at #34.</p>
                <p>"Mindset II" has been placed at #35.</p>
                <p>"the shelf" has been placed at #36.</p>
                <p>"Jam Heights" has been placed at #37.</p>
                <p>"Thermometer" has been placed at #38.</p>
                <p>"wait what a plat lvl" has been placed at #39.</p>
                <p>"MESMERIZER" has been placed at #40.</p>
                <p>"Atone the HtP" has been placed at #41.</p>
                <p>"hollow cube" has been placed at #42.</p>
                <p>"Before New Year" has been placed at #43.</p>
                <p>"Winter Storm" has been placed at #44.</p>
                <p>"Thisishowyoueataburger" has been placed at #45.</p>
                <p>"I Wanna Slope Boost" has been placed at #46.</p>
                <p>"ultra dash" has been placed at #47.</p>
            </div>
            <div class="change">
                <h2>03/02/2026</h2>
                <p>"5 rooms of" has been placed at #22.</p>
                <p>"john pork at 3AM" has been placed at #23.</p>
                <p>"C i r c l e s" has been placed at #24.</p>
                <p>"HYPER dash" has been placed at #25.</p>
                <p>"iwannabethesigma" has been placed at #26.</p>
            </div>
            <div class="change">
                <h2>31/01/2026</h2>
                <h3>Major changes</h3>
                <p>The roulette tab has been temporarily removed, I will try to rework it to work with platformer levels as percentage doesn't quite make sense.</p>
                <h3>Placements</h3>
                <p>"The Agony Tower" has been placed at #7, below "Two Steps Ahead". This pushes "7" out of the top 10.</p>
            </div>
            <div class="change">
                <h2>30/01/2026</h2>
                <p>Added changelog tab. Older changelogs are not available.</p>
                <p>This page will show all future changes to list rankings aswell as changes to the list format or rules.</p>
            </div>
        </div>
    `,
};
