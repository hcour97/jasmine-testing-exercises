describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('if the input is empty, it should NOT add new server on submitServer()', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should update the server and table on updateServerTable() table', function(){
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll ('#server-table tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0]).toEqual('Alice');
    expect(curTdList[1]).toEqual('$0.00');
    expect(curTdList[2]).toEqual('X');
  })

  afterEach(function() {
    // teardown logic
    serverId = 0 ;
    serverTBody.innerHTML = '';
    allServers = {};
  });
});
