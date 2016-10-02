/**
 * Created by kellycarmichael on 10/1/16.
 */
import React from 'react';
import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const listgroupInstance = (
    <ListGroup>
        <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
        <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
        <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
    </ListGroup>
);

ReactDOM.render(listgroupInstance, mountNode);