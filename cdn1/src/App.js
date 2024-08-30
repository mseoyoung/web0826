function App(){

    return (
        <div className="container">
            {Cards.map((item,idx)=>{
                <Card 
                key={idx}
                ming={item.cimg} 
                mtit={item.ctit}
                mage={item.cage}
                mrate={item.crate}
                mdate={item.cdate}
                mheart={item.cheart}

                 />
            })}
        
        </div>
    );
}