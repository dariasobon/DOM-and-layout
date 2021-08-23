let toggleLeftNavStatus = false
let toggleRightNavStatus = false
let clientWidth = document.documentElement.clientWidth;

const toggleLeftNav = () => {
  let getLeftSidebar = document.querySelector(`.left-nav`)

  if (toggleLeftNavStatus === false && clientWidth > '479') {
    getLeftSidebar.style.width = "272px"
    getLeftSidebar.style.opacity = "1"
    toggleLeftNavStatus = true

  } else if (toggleLeftNavStatus === false && clientWidth < '479') {
    getLeftSidebar.style.width = "100%"
    getLeftSidebar.style.opacity = "1"
    toggleLeftNavStatus = true

  } else if (toggleLeftNavStatus === true) {
    getLeftSidebar.style.width = "50px"
    getLeftSidebar.style.opacity = "0"
    toggleLeftNavStatus = false
  }
}

const toggleRightNav = () => {
  let getRightSidebar = document.querySelector(".right-nav")
  
  if (toggleRightNavStatus === false) {
    getRightSidebar.style.width = "272px"
    getRightSidebar.style.opacity = "1";
    toggleRightNavStatus = true
  } else if (toggleRightNavStatus === true) {
    getRightSidebar.style.width = "50px"
    getRightSidebar.style.opacity = "0"
    toggleRightNavStatus = false
  }
}