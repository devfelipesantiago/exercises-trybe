import React from 'react';

export default class ResumeSumary extends React.Component {
  render() {
    return (
      <fieldset class="jobs">
        <legend>Resume Summary</legend>
        <div class="box-content">
          <textarea class="input" name="job" id="" maxlength="100" required></textarea>
        </div>

        <div class="box-content">
          <label for="office">Office</label>
          <input class="input" type="text" name="of'fice" id="office" required maxlength="40" />
        </div>

        <div class="box-content">
          <label for="offce-description">Job description</label>
          <input class="input" required maxlength="500" type="text" name="offce-description" id="offce_description" />
        </div>

        <div class="box-content">
          <label for="date">Start date</label>
          <input class="input" type="date" name="date" id="date" required />
        </div>

        <div class="bnt">
          <button class="input" type="reset"  >Delete Form</button>
          <button class="input" type="submit" id="register">Register</button>
        </div>

      </fieldset>
    );
  }
}