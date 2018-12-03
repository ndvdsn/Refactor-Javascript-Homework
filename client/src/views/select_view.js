
import PubSub from '../helpers/pub_sub.js';

class SelectView{
  constructor(element){
  this.element = element;
  }

   bindEvents(){
    PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {
      const allInstrumentFamilies = evt.detail;
      this.populate(allInstrumentFamilies);
    });

    this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;

      PubSub.publish('SelectView:Change', selectedIndex);
      // console.log(selectedIndex);
    });
  };

  populate(instrumentFamilyData){
    instrumentFamilyData.forEach((family, index) => {
      const option = document.createElement('option');
      option.textContent = family.name;
      option.value = index;
      this.element.appendChild(option);
    });
  }

};
export default SelectView;
