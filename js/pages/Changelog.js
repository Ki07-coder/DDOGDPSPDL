export default {
    template: `
        <main v-if="loading">
            <Changelog></Changelog>
        </main>
        <main v-else class="page-changelog">
            <div class="change">
                <h2>30/01/2026</h2>
                <p>Added changelog tab. Older changelogs are not available.</p>
                <p>Below will show all future changes to list rankings aswell as changes to the list format or rules.</p>
            </div>
        </main>
    `,
};
