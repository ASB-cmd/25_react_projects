import './App.css';
import QRcodeGeneterator from './components/qr-code-generator';
// import ImageSlider from './components/imageslider/image';
// import LoadMoreData from './components/load-more-data';
// import TreeView from './components/tree-view';
// import menus from './components/tree-view/data';
// import Accordian from './components/accordian';
// import StarRating from './components/starRating';

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <StarRating/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page = {'1'}limit={'10'}/> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
      <QRcodeGeneterator />
    </div>
  );
}

export default App;
