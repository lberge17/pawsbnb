# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_26_151549) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.string "title"
    t.string "start"
    t.string "end"
    t.string "pets"
    t.text "services"
    t.text "medications"
    t.text "details"
    t.bigint "business_id"
    t.bigint "client_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_appointments_on_business_id"
    t.index ["client_id"], name: "index_appointments_on_client_id"
  end

  create_table "businesses", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "location"
    t.string "zip"
    t.text "services"
    t.string "phone"
    t.string "email"
    t.string "website"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_businesses_on_user_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "email"
    t.string "emergency_contact"
    t.string "address"
    t.bigint "business_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_clients_on_business_id"
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.text "concerns"
    t.string "birthdate"
    t.string "weight"
    t.bigint "client_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_pets_on_client_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
