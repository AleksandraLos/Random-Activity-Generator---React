const Activity = () => {
    return (
        <article>
            <p className="random">Här kommer aktivitet</p>
                <div className="category-section">
                    <label htmlFor="activity-type">Välj antal deltagare(Valfrit): </label>
                    <select id="activity-type">
                        <option value="one">1 deltagare</option>
                        <option value="två">2 deltagare</option>
                        <option value="four">4 deltagare</option>
                    </select>
                </div>
        </article>
    );
};

export default Activity;
