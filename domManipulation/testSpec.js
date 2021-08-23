describe('Testing DOM manipulation', function(){
  let Dom
  beforeEach(function(){
    Dom = new DomManipulation(); 
 })
  it('should initialise HTML', function(){
    const main = document.createElement('main')
    const div = document.createElement('div')
    main.appendChild(div);
    expect(Dom.init().main).toEqual(main)
    expect(Dom.init().div).toEqual(div)
  })
})