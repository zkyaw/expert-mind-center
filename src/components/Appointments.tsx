import Image from "next/image";

const appointments = [
  {
    id: 1,
    title: "Lorem ipsuum dolor",
    time: "7:00 AM - 8:00 AM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    title: "Lorem ipsuum dolor",
    time: "10:00 AM - 11:00 AM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "Lorem ipsuum dolor",
    time: "1:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const Appointments = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Appointments</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {appointments.map((appointment) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-[#A1E3F9] even:border-t-[#FAE27C]"
            key={appointment.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">
                {appointment.title}
              </h1>
              <span className="text-gray-300 text-xs">{appointment.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              {appointment.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
