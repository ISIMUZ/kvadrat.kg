import React, { useState } from 'react';
import './Admin.scss';

const Admin = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('add');
  const [selectedType, setSelectedType] = useState('');

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section !== 'add') {
      setSelectedType('');
    }
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const renderFieldsByType = () => {
    switch (selectedType) {
      case 'apartment':
        return (
          <>
            <label>
              Заголовок:
              <input type="text" placeholder="Введите заголовок" />
            </label>
            <label>
              ID:
              <input type="text" placeholder="Введите ID" />
            </label>
            <label>
              Серия:
              <select>
                <option value="" disabled>Выберите серию</option>
                <option value="" >Элитка</option>
              </select>
            </label>
            <label>
              Этаж:
              <input type="number" placeholder="Введите этаж" />
            </label>
            <label>
              Этажность:
              <input type="number" placeholder="Введите этажность" />
            </label>
            <label>
              Цена:
              <input type="number" placeholder="Введите цену" />
            </label>
            <label>
              Общая площадь (м²):
              <input type="number" placeholder="Введите общую площадь" />
            </label>
            <label>
              Кол-во комнат:
              <input type="number" placeholder="Введите количество комнат" />
            </label>
            <label>
              Коммуникации:
              <textarea placeholder="Введите описание коммуникаций" />
            </label>
            <label>
              Район:
              <select>
                <option value="" disabled>Выберите район</option>
                <option value="" >Асанбай</option>
              </select>
            </label>
            <label>
              Описание:
              <textarea placeholder="Введите описание" />
            </label>
            <label>
              Загрузить фотографии:
              <input
                type="file"
                multiple
                accept="image/*"
              />
            </label>
          </>
        );
      case 'house':
        return (
          <>
            <label>
              Заголовок:
              <input type="text" placeholder="Введите заголовок" />
            </label>
            <label>
              ID:
              <input type="text" placeholder="Введите ID объекта" />
            </label>
            <label>
              Общая площадь дома (м²):
              <input type="number" placeholder="Введите общую площадь дома" />
            </label>
            <label>
              Общая площадь участка (сотки):
              <input type="number" placeholder="Введите площадь участка" />
            </label>
            <label>
              Этаж:
              <input type="number" name="floor" placeholder="Введите этаж" />
            </label>
            <label>
              Этажность:
              <input type="number" placeholder="Введите этажность" />
            </label>
            <label>
              Цена:
              <input type="number" placeholder="Введите цену" />
            </label>
            <label>
              Кол-во комнат:
              <input type="number" placeholder="Введите количество комнат" />
            </label>
            <label>
              Коммуникации:
              <textarea placeholder="Введите описание коммуникаций" />
            </label>
            <label>
              Район:
              <select>
                <option value="" disabled>Выберите район</option>
                <option value="" >Ак ордо(1,2,3)</option>
              </select>
            </label>
            <label>
              Описание:
              <textarea placeholder="Введите описание" />
            </label>
            <label>
              Загрузить фотографии:
              <input
                type="file"
                multiple
                accept="image/*"
              />
            </label>
          </>
        );
      case 'land':
        return (
          <>
            <label>
              Заголовок:
              <input type="text" placeholder="Введите заголовок" />
            </label>
            <label>
              ID:
              <input type="text" placeholder="Введите ID объекта" />
            </label>
            <label>
              Назначение:
              <select>
                <option value="" disabled>Выберите назначение</option>
                <option value="">Под бизнес</option>
              </select>
            </label>
            <label>
              Общая площадь участка (сотки):
              <input type="number" placeholder="Введите площадь участка" />
            </label>
            <label>
              Цена:
              <input type="number" placeholder="Введите цену" />
            </label>
            <label>
              Район:
              <select>
                <option value="" disabled>Выберите район</option>
                <option value="">Ак орго</option>
              </select>
            </label>
            <label>
              Описание:
              <textarea placeholder="Введите описание" />
            </label>
            <label>
              Загрузить фотографии:
              <input
                type="file"
                multiple
                accept="image/*"
              />
            </label>
          </>
        );
      case 'commercial':
        return (
          <>
            <label>
              Заголовок:
              <input type="text" placeholder="Введите заголовок" />
            </label>
            <label>
              ID:
              <input type="text" placeholder="Введите ID" />
            </label>
            <label>
              Тип коммерции:
              <select>
                <option value="" disabled>Выберите тип</option>
                <option value="">Под бизнес</option>
              </select>
            </label>
            <label>
              Этаж:
              <input type="number" name="floor" placeholder="Введите этаж" />
            </label>
            <label>
              Этажность:
              <input type="number" placeholder="Введите этажность" />
            </label>
            <label>
              Общая площадь (м²):
              <input type="number" placeholder="Введите общую площадь" />
            </label>
            <label>
              Цена:
              <input type="number" placeholder="Введите цену" />
            </label>
            <label>
              Район:
              <select>
                <option value="" disabled>Выберите район</option>
                <option value="">Золотой квадрат</option>
              </select>
            </label>
            <label>
              Описание:
              <textarea placeholder="Введите описание" />
            </label>
            <label>
              Загрузить фотографии:
              <input
                type="file"
                multiple
                accept="image/*"
              />
            </label>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin">
      <aside className="admin-sidebar">
        <ul className="admin-sidebar-menu">
          <li
            className={activeSection === 'add' ? 'active' : ''}
            onClick={() => handleSectionChange('add')}
          >
            Добавить объект
          </li>
          <li
            className={activeSection === 'manage' ? 'active' : ''}
            onClick={() => handleSectionChange('manage')}
          >
            Управление объектами
          </li>
          <li
            className={activeSection === 'settings' ? 'active' : ''}
            onClick={() => handleSectionChange('settings')}
          >
            Настройки
          </li>
        </ul>
        <button className="admin-logout-btn" onClick={onLogout}>
          Выйти
        </button>
      </aside>

      <main className="admin-content">
        {activeSection === 'add' && (
          <div className="admin-section">
            <h1>Добавить новый объект</h1>
            <form className="add-object-form">
              <label>
                Выберите тип объекта:
                <select value={selectedType} onChange={handleTypeChange}>
                  <option value="" disabled>
                    -- Выберите тип --
                  </option>
                  <option value="apartment">Квартира</option>
                  <option value="house">Дом</option>
                  <option value="land">Участок</option>
                  <option value="commercial">Коммерция</option>
                </select>
              </label>
              {selectedType && renderFieldsByType()}
              {selectedType && <button type="submit">Добавить объект</button>}
            </form>
          </div>
        )}

        {activeSection === 'manage' && (
          <div className="admin-section">
            <h1>Управление объектами</h1>
            <p>Здесь вы можете редактировать или удалять существующие объекты.</p>
          </div>
        )}

        {activeSection === 'settings' && (
          <div className="admin-section">
            <h1>Настройки</h1>
            <p>Настройте параметры админ-панели или приложения.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
