import React from 'react'


type customerArrayDets = {
  icon: string;
  text: string;
};
function CustomerSection({ data }: { data: customerArrayDets[] }) {
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