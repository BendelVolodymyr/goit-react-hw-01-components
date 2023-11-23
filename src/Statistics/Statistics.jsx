const Statistics = (object) => {
    return object.stats.map(({id, label, percentage }) => (
        <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    ))
}

export default Statistics;