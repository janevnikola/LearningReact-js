import DisplayTabs from "./custom_tabs/DisplayTabs.jsx";
import CreatedTab from "./CreatedTab/CreatedTab.jsx";
function TabsDefinition() {
  const tabs = [
    {
      label: "Tab1",
      content: 
        <div>
          <h1>This is content for tab 1</h1>
          <p>How are you?</p>
        </div>
      
    },
    {
      label: "Tab2",
      content: 
        <div>
          <h1>This is content for tab2</h1>
          <p>Whats your name?</p>
        </div>
      
    },
    {
      label: "tab3",
      content: 
        <div>
          <h1>This is contnet for tab3</h1>
          <p>Where are you from?</p>
        </div>
      
    },
    {
      label: "tab4",
      content: <CreatedTab />,
    },
  ];

  function handleTabChangeLog(indexTab) {
    console.log(indexTab);
  }

  return (
    <>
      <DisplayTabs tabsContent={tabs} onChange={handleTabChangeLog} />
    </>
  );
}

export default TabsDefinition;
