import React, { useState } from 'react';


// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../src/utils/helpers';


   
function EventForm() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [tournamentName, setTournamentName] = useState('');
    const [participantCount, setParticipantCount] = useState('');
    const [prizePool, setPrizePool] = useState('');
    const [tournamentDate, setTournamentDate] = useState('');
    const [selectModerator, setselectModerator] = useState('');

    const [errorMessage, setErrorMessage] = useState('');



    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
            setName(inputValue);

        } else if (inputType === 'email') {
            setEmail(inputValue);
        }
        else if (inputType === 'phone') {
            setPhone(inputValue);
        }
        else if (inputType === 'country') {
            setCountry(inputValue);
        }
        else if (inputType === 'tournament Name') {
            setTournamentName(inputValue);
        }
        else if (inputType === 'Participant Count') {
            setParticipantCount(inputValue);
        }
        else if (inputType === 'Prize Pool') {
            setPrizePool(inputValue);
        }
        else if (inputType === 'Tournament Date') {
            setTournamentDate(inputValue);
        }
        else {
            setselectModerator(inputValue);
        };

        const handleFormSubmit = (e) => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            e.preventDefault();

            // check to see if email is not valid or if the userName is empty. Error message displayed if input invalid.
            if (!validateEmail(email) || !userName) {
                setErrorMessage('Email or username is invalid');
                // exit out of this code block if something is wrong so that the user can correct it
                return;
            }

        }
        alert(`Hello ${name}`);

        // clear out the input after a successful registration.
        setName('');
        setEmail('');
        setPhone('');
        setCountry('');
        setTournamentName('');
        setParticipantCount('');
        setPrizePool('');
        setTournamentDate('');
        setselectModerator('');
    };

    return (
        <div>
            <p>Hello {name}</p>
            <form className="form">
                <input

                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={phone}
                    name="phone"
                    onChange={handleInputChange}
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone"
                />
                <input
                    value={country}
                    name="country"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Country"
                />
                <input
                    name="Tournament Name"

                    value={tournamentName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Tournament Name"

                />
                <input
                    value={participantCount}
                    name="Participant Count"
                    onChange={handleInputChange}
                    type="int"
                    placeholder="Participant Count"
                />
                <input
                    value={participantCount}
                    name="Participant Count"
                    onChange={handleInputChange}
                    type="int"
                    placeholder="Participant Count"
                />
                <input
                    value={prizePool}
                    name="Prize Pool;"
                    onChange={handleInputChange}
                    type="int"
                    placeholder="Prize Pool"
                />
                <input
                    value={tournamentDate}
                    name="tournament date;"
                    onChange={handleInputChange}
                    type="date"
                    ref={dateInputRef}
                    placeholder="Tournament Date"
                />

                <label>
                    Do you need a Moderator:
                    <input
                        name="Moderator"
                        type="checkbox"
                        value= {selectModerator} 
                        checked={isChecked}
                        onChange={handleInputChange} 
                        />
                        
                </label>

                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default EventForm;