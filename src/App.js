import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Segment, Icon, Header, Label} from 'semantic-ui-react';

import style from './App.module.css';

const Meta = props => <div {...props} />;

class App extends Component {
  render() {
    const documentFile = {
      id: 'id',
      fileType: 'word',
      fileColor: 'red',
      humanizedType: 'work',
      name: 'Big Boy Dosier',
      user: {
        fullName: 'Pascale Savage',
      },
    };

    return (
      <Segment
        id={`document-files-list-item-${documentFile.id}`}
        className="document-files-list-item">
        <div className={style.container}>
          <Icon
            id={`document-files-list-item-${documentFile.id}-icon`}
            name={`file outline ${documentFile.fileType || ''}`.trim()}
            color={documentFile.fileColor}
            className={style.icon}
          />

          <Header
            size="tiny"
            id={`document-files-list-item-${documentFile.id}-name`}
            className={`${style.noMargin} ${style.fileName}`}>
            {documentFile.name}
          </Header>

          <div className={style.statusLabel}>
            <Label
              basic
              id={`document-files-list-item-${documentFile.id}-type`}>
              {documentFile.humanizedType}
            </Label>
          </div>

          <Meta>
            <span id={`document-files-list-item-${documentFile.id}-author`}>
              {documentFile.user.fullName}
            </span>
          </Meta>

          <Meta>Time for you to make a docment</Meta>
        </div>
      </Segment>
    );
  }
}

export default App;
