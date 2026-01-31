export default {
    template: `
        <main v-if="loading">
            <Changelog></Changelog>
        </main>
        <div v-else class="page-changelog">
            <div class="change">
                <h2>31/01/2026</h2>
                <h3>Major changes</h3>
                <p>The roulette tab has been temporarily removed, I will try to rework it to work with platformer levels as percentage doesn't quite make sense.</p>
                <h3>Placements</h3>
                <p>"The Agony Tower" has been placed at #7, below "Two Steps Ahead".</p>
                <p>This pushes "7" out of the top 10.</p>
            </div>
            <div class="change">
                <h2>30/01/2026</h2>
                <p>Added changelog tab. Older changelogs are not available.</p>
                <p>This page will show all future changes to list rankings aswell as changes to the list format or rules.</p>
            </div>
        </div>
    `,
};
