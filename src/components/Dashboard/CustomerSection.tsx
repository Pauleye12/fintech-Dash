import React from 'react'

function CustomerSection({data}) {
  return (
    <div>
      <section className="customerSection">
        {data.map((options, index) => (
          <div className="sidebarOptions" key={index}>
            <img src={options.icon} alt="" />
            <h2>{options.text}</h2>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CustomerSection