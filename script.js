document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { company: 'Apple', market_cap: 2740 },
        { company: 'Microsoft', market_cap: 2230 },
        { company: 'Amazon', market_cap: 1630 },
        { company: 'Google', market_cap: 1540 },
        { company: 'Facebook', market_cap: 870 }
    ];

    const chartContainer = document.getElementById('chart-container');

    data.forEach(item => {
        const bar = document.createElement('div');
        bar.style.width = `${item.market_cap / 30}px`;
        bar.style.height = '30px';
        bar.style.backgroundColor = '#4caf50';
        bar.style.margin = '5px 0';
        bar.textContent = `${item.company} (${item.market_cap}B)`;
        bar.style.color = '#fff';
        bar.style.textAlign = 'center';
        bar.style.lineHeight = '30px';
        chartContainer.appendChild(bar);
    });
});