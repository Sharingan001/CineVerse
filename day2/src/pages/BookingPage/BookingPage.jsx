import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, FEATURED } from '../../data/movies';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import './BookingPage.css';

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  // Find the movie by id
  let movie = FEATURED.id === parseInt(id) ? FEATURED : null;
  if (!movie) {
    for (const cat of categories) {
      const found = cat.movies.find(m => m.id === parseInt(id));
      if (found) {
        movie = found;
        break;
      }
    }
  }

  // Generate dummy seating
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const cols = 8;
  const occupiedSeats = ['B4', 'B5', 'C2', 'D4', 'D5', 'D6']; // mocked

  const toggleSeat = (seatId) => {
    if (occupiedSeats.includes(seatId)) return;
    
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) return;
    alert(`Successfully booked ${selectedSeats.length} tickets for ${movie?.title || 'Unknown Title'}! Seats: ${selectedSeats.join(', ')}`);
    navigate('/');
  };

  if (!movie) {
    return (
      <div className="booking-page">
        <div className="booking-page__header">
          <button onClick={() => navigate(-1)} className="booking-page__back"><FiArrowLeft /> Back</button>
          <h2>Movie Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-page__background" style={{ backgroundImage: `url(${movie.backdrop})` }}>
        <div className="booking-page__overlay"></div>
      </div>

      <div className="booking-page__content">
        <button onClick={() => navigate(-1)} className="booking-page__back"><FiArrowLeft /> Back</button>
        
        <div className="booking-page__info">
          <h1>{movie.title}</h1>
          <p>Select your seats to book tickets.</p>
        </div>

        <div className="booking-page__theater">
          <div className="booking-page__screen">SCREEN</div>
          
          <div className="booking-page__seats">
            {rows.map(row => (
              <div key={row} className="booking-page__seat-row">
                <span className="booking-page__row-label">{row}</span>
                <div className="booking-page__seat-group">
                  {Array.from({ length: cols }).map((_, i) => {
                    const seatId = `${row}${i + 1}`;
                    const isOccupied = occupiedSeats.includes(seatId);
                    const isSelected = selectedSeats.includes(seatId);
                    
                    return (
                      <button
                        key={seatId}
                        className={`booking-page__seat ${isOccupied ? 'booking-page__seat--occupied' : ''} ${isSelected ? 'booking-page__seat--selected' : ''}`}
                        onClick={() => toggleSeat(seatId)}
                        disabled={isOccupied}
                        title={seatId}
                      >
                        {isSelected && <FiCheck className="booking-page__seat-icon" />}
                      </button>
                    );
                  })}
                </div>
                <span className="booking-page__row-label">{row}</span>
              </div>
            ))}
          </div>

          <div className="booking-page__legend">
            <div className="booking-page__legend-item">
              <div className="booking-page__seat"></div>
              <span>Available</span>
            </div>
            <div className="booking-page__legend-item">
              <div className="booking-page__seat booking-page__seat--selected"></div>
              <span>Selected</span>
            </div>
            <div className="booking-page__legend-item">
              <div className="booking-page__seat booking-page__seat--occupied"></div>
              <span>Occupied</span>
            </div>
          </div>
        </div>

        {selectedSeats.length > 0 && (
          <div className="booking-page__summary">
            <div className="booking-page__summary-details">
              <h3>Booking Summary</h3>
              <p>Tickets: {selectedSeats.length}</p>
              <p>Seats: {selectedSeats.join(', ')}</p>
              <p>Total: ${(selectedSeats.length * 15).toFixed(2)}</p>
            </div>
            <button className="booking-page__checkout-btn" onClick={handleBooking}>
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
