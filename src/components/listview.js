import React from "react";
import { Link } from "react-router-dom";
import { Card ,Row,Col} from 'antd';
import './listview.css';
import defaultImg from "./defaultImage.jpg";

const DataList = ({shows}) => {
    return(
      <>
      <div className="card-wrapper">
        <h1>Show Listing</h1>
        <Row gutter={16}>    
        {shows.map((item,index) =>(  
            <Col  key={index} span={8}>       
                <Card 
                   hoverable
                   style={{ width: 350 }}
                   cover={<img className="cover-image" alt="example" src={item?.show?.image?.medium || defaultImg} />}
                 >
                <h2>{item.show.name}</h2>
                <h4>Language : {item.show.language} | Status : {item.show.status}</h4>
                <div><Link className="btn-link" to={`/detail/${item.show.id}`}>Read more</Link></div>
                      
                </Card>
             </Col>
    ))}  
      </Row>
      </div>  
      </>
    );
};

export default DataList;