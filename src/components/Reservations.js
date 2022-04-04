import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



    const reservation = `<script>
    setup_parameters =
      {
          "hotel_id":"2489",				// required - your WebRezPro hotel id must be entered
          "date_format":"MM/dd/yyyy", 	// optional - default is 'DD M dd, yy'
          "default_days_in_advance":"0",	// optional - default is 0 days in advance,
          "flag_turnoff_autoload_date":"1" // 0 = arrival and departure dates automatically loaded, 1 = not loaded, default is 0
      };

      </script>`;



function Reservations() {
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

    
    return (
      <div className="reservations">
        <div className="reservations-inner"
          dangerouslySetInnerHTML={{__html: reservation}}
        />
          <form id="widget_link" action="https://secure.webrez.com/hotel/2489/?">
            <input type="hidden" name="table" value=""/>
            <input type="hidden" name="hotel_id" value=""/>
            <input type="hidden" name="listing_id" value=""/>
            <input type="hidden" name="mode" value=""/>
            <input type="hidden" name="command" value=""/>
            <input type="hidden" name="nextcommand" value="" />

            
            <ul className="flex-md">
              <li className="forty flex-md justify">
                <div className="fifty">
                  <label for="formatted_date_from">arrival date
                  <DatePicker dateFormat="MM/dd/yyyy" className="datepicker" name="formatted_date_from" id="formatted_date_from"  selected={startDate} onChange={(date) => setStartDate(date)} />
                  <input type="hidden" name="date_from" id="date_from" value="" />
                  </label>
                </div>
                <div className="fifty">
                  <label for="formatted_date_to">departure date
                  <DatePicker dateFormat="MM/dd/yyyy" className="datepicker" name="formatted_date_to" id="formatted_date_to"  selected={endDate} onChange={(date) => setEndDate(date)} />
                  <input type="hidden" name="date_to" id="date_to" value=""/>
                  </label>
                </div>
              </li>
                        
              <li className="twenty-five flex-md">
                  <div className="fifty">
                      <label for="num_adults"># of adults
                      <div>
                          <select name="num_adults" id="num_adults">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          </select>
                      </div>
                      </label>
                  </div>
                  <div className="fifty">
                      <label for="num_children"># of children
                      <div>
                          <select name="num_children" id="num_children">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          </select>
                      </div>
                      </label>
                  </div>
              </li>
              <li className="thirty-five flex-md">
                <div className="fifty">
                  <label for="access_code">Promo Code
                  <input type="text" name="access_code" id="access_code" size="8"/>
                  </label>
                </div>
                <div className="fifty">
                  <label className="byebye"><span>Submit</span>
                  <div className="submit"><input type="submit" value="check availability"/></div>
                  </label>
                </div>
              </li>
            </ul>
            
          </form>
      </div>
    );
  }


export default Reservations;
