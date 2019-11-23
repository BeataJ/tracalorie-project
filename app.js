// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {
        id: 0,
        name: 'Steak Dinner',
        calories: 1200
      },
      {
        id: 1,
        name: 'Cooke',
        calories: 400
      },
      {
        id: 2,
        name: 'Eggs',
        calories: 500
      }
    ],
    currentItems: null,
    totalCalories: 0
  };

  return { 
    logData: () => {
      return data;
    }
  }

})();

// UI Controller
const UICtrl = (function() {
  
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {
  
  return {
    init: () => {
      console.log('Initializing App...');
    }
  }
  
})(ItemCtrl, UICtrl);

// Initalize App
App.init();