import React from "react";


export default function DateTableBody(){
    return(
        <tbody>
                <tr>
                    <td>
                        {/* p 요소로 반드시 작성해야함 */}
                            <p className="date-text">샘플</p>
                            <p className="date-text-day">DAY 1</p>
                        </td>
                        <td>
                            <ul className="circle-ul">
                                <li>서우르</li>
                            </ul>
                        </td>
                        <td>
                            <ul className="number-ul">
                                <li>asdf</li>
                        </ul>
                    </td>
                    <td>
                        <ul className="number-ul">
                            <li>살</li>
                               <li>려</li>
                            <li>줘</li>
                            <li>ㅅ</li>
                            <li>ㅂ</li>
                        </ul>
                      </td>
                    </tr>
            </tbody>
    )
}