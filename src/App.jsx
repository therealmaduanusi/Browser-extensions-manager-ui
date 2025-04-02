import { useEffect, useState } from "react";
import Head from "./components/Head";
import Filter from "./components/Filter";
import List from "./components/List";
import extensionLists from "../data.json";
import "./App.css";

function App() {
  const [mode, setMode] = useState(false);
  const [extensionListItem, setExtensionListItem] = useState(extensionLists);
  const [masterList, setMasterList] = useState(extensionLists);
  const [filterMode, setFilterMode] = useState("all"); // Track current filter

  useEffect(() => {
    console.log("Updated extensionListItem:", extensionListItem);
  }, [extensionListItem, masterList]);

  function allList() {
    setExtensionListItem(masterList); // get all list from masterList
    setFilterMode("all")
  }
  function activeList() {
    setExtensionListItem(masterList.filter((list) => list.isActive)); // get active list from masterList
    setFilterMode("active")
  }

  function inActiveList() {
    setExtensionListItem(masterList.filter((list) => !list.isActive)); // get inActive list from masterList
    setFilterMode("inActive")
  }

  // toggle active/inActive
  function handleToggle(id) {
    setMasterList((prevList) => {
      let updatedList = prevList.map((list) => {
        return list.id === id ? { ...list, isActive: !list.isActive } : list;
      });

      // Preserve current filter view
      if (filterMode === "active") {
        setExtensionListItem(updatedList.filter((list) => list.isActive))
      } else if (filterMode === "inActive") {
        setExtensionListItem(updatedList.filter((list) => !list.isActive))
      } else {
        setExtensionListItem(updatedList)
      }
      return updatedList;
    });
  }

  // delete list
  function handleDelete(id) {
    setMasterList((prevList) => {
      let updatedListDeleted = prevList.filter((list) => list.id !== id);
      // Preserve current filter view
      if (filterMode === "active") {
        setExtensionListItem(updatedListDeleted.filter((list) => list.isActive))
      } else if (filterMode === "inActive") {
        setExtensionListItem(updatedListDeleted.filter((list) => !list.isActive))
      } else {
        setExtensionListItem(updatedListDeleted)
      }
      return updatedListDeleted;
    });
  }

  return (
    <main className={`${mode ? "light" : "dark"}`}>
      <Head mode={mode} onSetMode={setMode} />
      <Filter
        mode={mode}
        onAllList={allList}
        onActiveList={activeList}
        onInActiveList={inActiveList}
        filterMode={filterMode}
      />
      {extensionListItem.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: `${mode ? "hsl(227, 75%, 14%)" : "hsl(200, 60%, 99%)"}`,
          }}
        >
          No List Found!
        </p>
      ) : (
        <div className="listWrapper">
          {extensionListItem.map((extensionList) => (
            <List
              key={extensionList.id}
              propsExtensionList={extensionList}
              onHandleToggle={handleToggle}
              mode={mode}
              onHandleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
