import React, { useContext, useState } from "react";
import { Location, SearchForm, Empty } from "../../components";
import { LocationContext } from "../../context/LocationContext";
import { useHistory } from "react-router-dom";
import {
  FeatureAdd,
  Container,
  Modal,
  Inner,
  FeatureClose,
} from "./styles/listContainer";

export function ListContainer() {
  const { listLocation, setListLocation } = useContext(LocationContext);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState("");
  const [errorMessages, setErrorMessages] = useState("");

  const listLocationContent = listLocation.map((loc, index) => (
    <Location.Item
      key={index}
      location={loc}
      onClick={() => handleClick(loc)}
    />
  ));

  const handleClick = (loc) => {
    let newLoc = loc.split(" ").join("-");
    history.push(`/${newLoc}`);
  };

  const handleAdd = () => {
    if(listLocation.includes(location) === false) {
      setListLocation(location ? [...listLocation, location] : listLocation);
      setShowModal(location ? false : true);
      setLocation("")
      setErrorMessages("")
    } else {
      setErrorMessages("Your list has this location!!!");
    }
  };

  return (
    <Container>
      <FeatureAdd onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal>
          <Inner>
            <FeatureClose onClick={() => setShowModal(false)} />
            <SearchForm>
              <SearchForm.Title>Add location:</SearchForm.Title>
              {errorMessages && (
                <SearchForm.Error>{errorMessages}</SearchForm.Error>
              )}
              <SearchForm.Input
                placeholder="Search..."
                type="text"
                value={location}
                onChange={({ target }) => setLocation(target.value)}
              />
              <SearchForm.Feature>
                <SearchForm.Button type="submit" onClick={handleAdd}>
                  Add
                </SearchForm.Button>
                <SearchForm.Button onClick={() => setShowModal(false)}>
                  Cancel
                </SearchForm.Button>
              </SearchForm.Feature>
            </SearchForm>
          </Inner>
        </Modal>
      )}
      {listLocation.length !== 0 ? (
        listLocationContent
      ) : (
        <Empty>
          <Empty.Text>Nothing to show. Please add your location.</Empty.Text>
        </Empty>
      )}
    </Container>
  );
}
