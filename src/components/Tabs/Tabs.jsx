export const Tabs = ({ tabs, activeTab, onTabSelected }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === activeTab ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              role="tab"
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={e => {
                e.preventDefault();
                onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
