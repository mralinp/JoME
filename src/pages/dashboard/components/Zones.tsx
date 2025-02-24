import { useState } from "react";
import { Card } from "primereact/card";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faPencil,
  faPlus,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import ToggleSwitch from '../../../components/ToggleSwitch';
import "./Zones.css";

interface Zone {
  id: number;
  name: string;
  description: string;
  active: boolean;
  duration: string;
}

interface EditingZone {
  id: number | null;
  name: string;
  duration: string;
}

const Zones = () => {
  const [zones, setZones] = useState<Zone[]>([
    {
      id: 1,
      name: "Zone 1",
      description: "Front Lawn",
      active: true,
      duration: "1:10",
    },
    {
      id: 2,
      name: "Zone 2",
      description: "Backyard",
      active: true,
      duration: "1:20",
    },
  ]);

  const [isAddingZone, setIsAddingZone] = useState(false);
  const [newZone, setNewZone] = useState({
    name: "",
    duration: "",
  });

  const [editingZone, setEditingZone] = useState<EditingZone>({
    id: null,
    name: "",
    duration: "",
  });

  const zonesInfo = {
    active: 4,
    total: 16,
  };

  const progressValue = (zonesInfo.active / zonesInfo.total) * 100;

  const handleToggle = (id: number, checked: boolean) => {
    setZones(
      zones.map((zone) =>
        zone.id === id ? { ...zone, active: checked } : zone
      )
    );
  };

  const handleAddZone = () => {
    setIsAddingZone(true);
  };

  const handleSaveZone = () => {
    if (newZone.name && newZone.duration) {
      const nextId = Math.max(...zones.map((z) => z.id)) + 1;
      setZones([
        ...zones,
        {
          id: nextId,
          name: newZone.name,
          description: newZone.name.toLowerCase(),
          active: true,
          duration: newZone.duration,
        },
      ]);
      setIsAddingZone(false);
      setNewZone({ name: "", duration: "" });
    }
  };

  const handleCancelAdd = () => {
    setIsAddingZone(false);
    setNewZone({ name: "", duration: "" });
  };

  const handleEdit = (zone: Zone) => {
    setEditingZone({
      id: zone.id,
      name: zone.name,
      duration: zone.duration,
    });
  };

  const handleSaveEdit = () => {
    if (editingZone.id) {
      setZones(
        zones.map((zone) =>
          zone.id === editingZone.id
            ? {
                ...zone,
                name: editingZone.name,
                description: editingZone.name.toLowerCase(),
                duration: editingZone.duration,
              }
            : zone
        )
      );
      setEditingZone({ id: null, name: "", duration: "" });
    }
  };

  const handleCancelEdit = () => {
    setEditingZone({ id: null, name: "", duration: "" });
  };

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Zone Configuration</h1>
        <p className="page-description">
          Configure up to 16 zones for your irrigation system
        </p>
      </div>

      <div className="zones-container">
        <div className="zones-list">
          <Card className="zones-status-card">
            <div className="zones-header">
              <h2>Active Zones</h2>
              <span className="zones-count">
                {zonesInfo.active}/{zonesInfo.total}
              </span>
            </div>
            <ProgressBar
              value={progressValue}
              showValue={false}
              className="zones-progress"
            />
          </Card>

          {zones.map((zone) => (
            <Card key={zone.id} className="zone-card">
              <div className="zone-header">
                <div className="zone-icon-title">
                  <FontAwesomeIcon icon={faLeaf} className="leaf-icon" />
                  <div className="zone-title">
                    {editingZone.id === zone.id ? (
                      <InputText
                        value={editingZone.name}
                        onChange={(e) =>
                          setEditingZone({
                            ...editingZone,
                            name: e.target.value,
                          })
                        }
                        className="zone-name-input"
                      />
                    ) : (
                      <>
                        <h3>{zone.name}</h3>
                        <p>{zone.description}</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="switch-wrapper">
                  <ToggleSwitch
                    checked={zone.active}
                    onChange={(e) => handleToggle(zone.id, e.value)}
                  />
                </div>
              </div>
              <div className="zone-duration">
                <label>Duration</label>
                <div className="duration-input">
                  {editingZone.id === zone.id ? (
                    <InputText
                      value={editingZone.duration}
                      onChange={(e) =>
                        setEditingZone({
                          ...editingZone,
                          duration: e.target.value,
                        })
                      }
                      placeholder="HH:MM"
                    />
                  ) : (
                    <>
                      <input type="text" value={zone.duration} readOnly />
                      <Button
                        icon={<FontAwesomeIcon icon={faPencil} />}
                        onClick={() => handleEdit(zone)}
                        text
                        className="edit-button"
                      />
                    </>
                  )}
                </div>
              </div>
              {editingZone.id === zone.id && (
                <div className="new-zone-actions">
                  <Button
                    icon={<FontAwesomeIcon icon={faTimes} />}
                    onClick={handleCancelEdit}
                    className="cancel-button"
                    text
                  />
                  <Button
                    icon={<FontAwesomeIcon icon={faCheck} />}
                    onClick={handleSaveEdit}
                    className="save-button"
                    text
                  />
                </div>
              )}
            </Card>
          ))}

          {isAddingZone && (
            <Card className="zone-card new-zone-card">
              <div className="zone-header">
                <div className="zone-icon-title">
                  <FontAwesomeIcon icon={faLeaf} className="leaf-icon" />
                  <div className="zone-title">
                    <InputText
                      value={newZone.name}
                      onChange={(e) =>
                        setNewZone({ ...newZone, name: e.target.value })
                      }
                      placeholder="Zone Name"
                      className="zone-name-input"
                    />
                  </div>
                </div>
              </div>
              <div className="zone-duration">
                <label>Duration</label>
                <div className="duration-input">
                  <InputText
                    value={newZone.duration}
                    onChange={(e) =>
                      setNewZone({ ...newZone, duration: e.target.value })
                    }
                    placeholder="HH:MM"
                  />
                </div>
              </div>
              <div className="new-zone-actions">
                <Button
                  icon={<FontAwesomeIcon icon={faTimes} />}
                  onClick={handleCancelAdd}
                  className="cancel-button"
                  text
                />
                <Button
                  icon={<FontAwesomeIcon icon={faCheck} />}
                  onClick={handleSaveZone}
                  className="save-button"
                  text
                />
              </div>
            </Card>
          )}
          {!isAddingZone && (
            <Button className="add-zone-button" onClick={handleAddZone}>
              <FontAwesomeIcon icon={faPlus} />
              <span>Add New Zone</span>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Zones;
