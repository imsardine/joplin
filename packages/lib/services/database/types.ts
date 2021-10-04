import { ModelType } from "../../BaseModel";

export interface BaseItemEntity {
  id?: string;
  encryption_applied?: number;
  is_shared?: number;
  share_id?: string;
  type_?: ModelType;
  updated_time?: number;
  created_time?: number;
}













// AUTO-GENERATED BY packages/tools/generate-database-types.js

/*
* This file was generated by a tool.
* Rerun sql-ts to regenerate this file.
*/
export interface AlarmEntity {
  "id"?: number | null 
  "note_id"?: string 
  "trigger_time"?: number 
  "type_"?: number 
}
export interface DeletedItemEntity {
  "id"?: number | null 
  "item_type"?: number 
  "item_id"?: string 
  "deleted_time"?: number 
  "sync_target"?: number 
  "type_"?: number 
}
export interface FolderEntity {
  "id"?: string | null 
  "title"?: string 
  "created_time"?: number 
  "updated_time"?: number 
  "user_created_time"?: number 
  "user_updated_time"?: number 
  "encryption_cipher_text"?: string 
  "encryption_applied"?: number 
  "parent_id"?: string 
  "is_shared"?: number 
  "share_id"?: string 
  "master_key_id"?: string 
  "type_"?: number 
}
export interface ItemChangeEntity {
  "id"?: number | null 
  "item_type"?: number 
  "item_id"?: string 
  "type"?: number 
  "created_time"?: number 
  "source"?: number 
  "before_change_item"?: string 
  "type_"?: number 
}
export interface KeyValueEntity {
  "id"?: number | null 
  "key"?: string 
  "value"?: string 
  "type"?: number 
  "updated_time"?: number 
  "type_"?: number 
}
export interface MigrationEntity {
  "id"?: number | null 
  "number"?: number 
  "updated_time"?: number 
  "created_time"?: number 
  "type_"?: number 
}
export interface NoteResourceEntity {
  "id"?: number | null 
  "note_id"?: string 
  "resource_id"?: string 
  "is_associated"?: number 
  "last_seen_time"?: number 
  "type_"?: number 
}
export interface NoteTagEntity {
  "id"?: string | null 
  "note_id"?: string 
  "tag_id"?: string 
  "created_time"?: number 
  "updated_time"?: number 
  "user_created_time"?: number 
  "user_updated_time"?: number 
  "encryption_cipher_text"?: string 
  "encryption_applied"?: number 
  "is_shared"?: number 
  "type_"?: number 
}
export interface NoteEntity {
  "id"?: string | null 
  "parent_id"?: string 
  "title"?: string 
  "body"?: string 
  "created_time"?: number 
  "updated_time"?: number 
  "is_conflict"?: number 
  "latitude"?: number 
  "longitude"?: number 
  "altitude"?: number 
  "author"?: string 
  "source_url"?: string 
  "is_todo"?: number 
  "todo_due"?: number 
  "todo_completed"?: number 
  "source"?: string 
  "source_application"?: string 
  "application_data"?: string 
  "order"?: number 
  "user_created_time"?: number 
  "user_updated_time"?: number 
  "encryption_cipher_text"?: string 
  "encryption_applied"?: number 
  "markup_language"?: number 
  "is_shared"?: number 
  "share_id"?: string 
  "conflict_original_id"?: string 
  "master_key_id"?: string 
  "type_"?: number 
}
export interface NotesNormalizedEntity {
  "id"?: string 
  "title"?: string 
  "body"?: string 
  "user_created_time"?: number 
  "user_updated_time"?: number 
  "is_todo"?: number 
  "todo_completed"?: number 
  "parent_id"?: string 
  "latitude"?: number 
  "longitude"?: number 
  "altitude"?: number 
  "source_url"?: string 
  "todo_due"?: number 
  "type_"?: number 
}
export interface ResourceLocalStateEntity {
  "id"?: number | null 
  "resource_id"?: string 
  "fetch_status"?: number 
  "fetch_error"?: string 
  "type_"?: number 
}
export interface ResourceEntity {
  "id"?: string | null 
  "title"?: string 
  "mime"?: string 
  "filename"?: string 
  "created_time"?: number 
  "updated_time"?: number 
  "user_created_time"?: number 
  "user_updated_time"?: number 
  "file_extension"?: string 
  "encryption_cipher_text"?: string 
  "encryption_applied"?: number 
  "encryption_blob_encrypted"?: number 
  "size"?: number 
  "is_shared"?: number 
  "share_id"?: string 
  "master_key_id"?: string 
  "type_"?: number 
}
export interface ResourcesToDownloadEntity {
  "id"?: number | null 
  "resource_id"?: string 
  "updated_time"?: number 
  "created_time"?: number 
  "type_"?: number 
}
export interface RevisionEntity {
  "id"?: string | null 
  "parent_id"?: string 
  "item_type"?: number 
  "item_id"?: string 
  "item_updated_time"?: number 
  "title_diff"?: string 
  "body_diff"?: string 
  "metadata_diff"?: string 
  "encryption_cipher_text"?: string 
  "encryption_applied"?: number 
  "updated_time"?: number 
  "created_time"?: number 
  "type_"?: number 
}
export interface SettingEntity {
  "key"?: string | null 
  "value"?: string | null 
  "type_"?: number 
}
export interface SyncItemEntity {
  "id"?: number | null 
  "sync_target"?: number 
  "sync_time"?: number 
  "item_type"?: number 
  "item_id"?: string 
  "sync_disabled"?: number 
  "sync_disabled_reason"?: string 
  "force_sync"?: number 
  "item_location"?: number 
  "type_"?: number 
}
export interface TableFieldEntity {
  "id"?: number | null 
  "table_name"?: string 
  "field_name"?: string 
  "field_type"?: number 
  "field_default"?: string | null 
  "type_"?: number 
}
export interface TagEntity {
  "id"?: string | null 
  "title"?: string 
  "created_time"?: number 
  "updated_time"?: number 
  "user_created_time"?: number 
  "user_updated_time"?: number 
  "encryption_cipher_text"?: string 
  "encryption_applied"?: number 
  "is_shared"?: number 
  "parent_id"?: string 
  "type_"?: number 
}
export interface TagsWithNoteCountEntity {
  "id"?: string | null 
  "title"?: string | null 
  "created_time"?: number | null 
  "updated_time"?: number | null 
  "note_count"?: any | null 
  "todo_completed_count"?: any | null 
  "type_"?: number 
}
export interface VersionEntity {
  "version"?: number 
  "table_fields_version"?: number 
  "type_"?: number 
}
