const Footer = () => {
  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>0</strong> item left
      </span>
      <ul class="filters">
        <li>
          <a class="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>
      <button class="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
