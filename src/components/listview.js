import React from "react";
import { Link } from "react-router-dom";
import { Card ,Row,Col} from 'antd';
import './listview.css';
import images from './images.jpg';

const DataList = ({shows}) => {
    return(
      <>
      <div className="card-wrapper">
      <Row gutter={16}>    
      {shows.map((item,index) =>(  
      <Col  key={index} span={8}>       
          <Card 
          hoverable
          style={{ width: 350 }}
          cover={<img className="cover-image" alt="example" src={images} />}
           >
                <p>{item.show.name}</p>
                <p>{item.show.language}</p>
                <p><Link to={`/detail/${item.show.id}`}>Read more</Link></p>
                
      </Card>
      </Col>
      ))}  
      </Row>
      </div>

          {/* <div className="table-wrapper">
              <table>
                  <thead>
                    <tr>
                      <th>show id</th>
                      <th>Name</th>
                      <th>language</th>
                      <th>schedule</th>
                      <th>genres</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>  
                  </thead>

                  <tbody>
                  {shows.map((item,index) =>(
                   <tr key={index}>
                    <td>{item.show.id}</td>
                    <td>{item.show.name}</td>
                    <td>{item.show.language}</td>
                    <td>{item.show.schedule.time} {item.show.schedule.days}</td>
                    <td>{item.show.genres}</td>
                    <td>{item.show.status}</td>
                    <td> <Link to={`/detail/${item.show.id}`}>Read more</Link></td>
                  </tr>
              ))} 
                  </tbody>
              </table>
             
          </div> */}
      </>
    );
};

export default DataList;