import React from  'react'

export const PetForm = (props) => {
    return (
        <div className="pet-form">
            <form class="form-container">
                <h3>Add Pet</h3>
                <input type="text" placeholder="name"/><br/>
                <input type="text" placeholder="breed"/><br/>
                <input type="text" placeholder="birthdate"/><br/>
                <input type="text" placeholder="weight"/><br/>
                <textarea placeholder="concerns"></textarea><br/><br/>

                {/* name
      t.string :breed
      t.text :concerns
      t.string :birthdate
      t.string :weight */}
                <input type="submit"/><br/>
            </form>
        </div>
    )
             
}