
const SideBarProperties = (selectedNode) => {
    return (
    <div className="NodeProperties">
      <div className="NodeTitle">
          <h3>Node Properties</h3>
        <> 
        {selectedNode.selectedNode.data.label}
        </>
      </div>
      <div className="NodeBody">
        <strong>ID:</strong> {selectedNode.selectedNode.id}
      </div>
    </div>
    )
}
export default SideBarProperties


