import { useEffect, useState } from "react";
import { getAllEvents, getNotices } from "../../services/NotificationService";

const SchoolNotification = () => {
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await getAllEvents();
        const noticesData = await getNotices();
        setEvents(eventsData);
        setNotices(noticesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">School Notifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Events Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
          {events.length > 0 ? (
            <ul>
              {events.map((event) => (
                <li key={event._id} className="border-b py-2">
                  <strong>{event.title}</strong> - {new Date(event.date).toDateString()}
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming events.</p>
          )}
        </div>

        {/* Notices Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Notices</h3>
          {notices.length > 0 ? (
            <ul>
              {notices.map((notice) => (
                <li key={notice._id} className="border-b py-2">
                  <strong>{notice.title}</strong> - {new Date(notice.date).toDateString()}
                  <p>{notice.description}</p>
                  {notice.fileUrl && (
                    <a href={notice.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      View Attachment
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No notices available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolNotification;
