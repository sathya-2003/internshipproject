window.onload = () => {
  const header = document.querySelector('header');
  header.style.opacity = 1;
  header.style.transform = 'translateX(0)'; /* Or translateY(0) for vertical sliding */
};
const tables = document.querySelectorAll('.pricing-table');
let maxHeight = 0;

tables.forEach(table => {
  const tableHeight = table.offsetHeight;
  maxHeight = Math.max(maxHeight, tableHeight);
});

tables.forEach(table => {
  table.style.height = maxHeight + 'px';
});
