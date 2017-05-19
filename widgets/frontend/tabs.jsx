import React from 'react';

class Header extends React.Component {
  render(){

    let tabs = this.props.tabs.map((tab, idx) => {
      let selected = this.props.selectedTab;
      let tabClass = 'tab-header';

      if (idx === selected) tabClass = 'tab-header-selected';

      return (
        <li key={idx}
          onClick={this.props.onTabClick.bind(null, idx)}
          className={tabClass}>
          {tab.title}{' '}
        </li>
      );
    });

    return(
      <ul className='tab-headers'>
        {tabs}
      </ul>
    );
  }
}

class Tabs extends React.Component {
  constructor(props){
    super(props);

    this.state = {selectedTab: 0};

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tabIdx){
    this.setState({selectedTab: tabIdx});
  }

  render(){

    let selectedTab = this.props.tabs[this.state.selectedTab];

    return (
      <div className='tabs'>
        <Header
          selectedTab={selectedTab}
          onTabClick={this.selectTab}
          tabs={this.props.tabs}
        />
        <div className='tab-content'>
          <article>
            {selectedTab.content}
          </article>
        </div>
      </div>
    );
  }
}

export default Tabs;
